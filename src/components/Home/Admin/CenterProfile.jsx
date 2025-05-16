import { useState ,useEffect} from "react";
import { useDisclosure } from "@mantine/hooks";
import { useForm ,yupResolver } from "@mantine/form";
import * as yup from "yup";
import { notifications } from "@mantine/notifications";
import DeleteProfileModal from "./DeleteProfileModal";
import profileLogo from '../../../assets/vectors/admin.svg'
import logout from '../../../assets/vectors/Logout.svg'
import nav from '../../../assets/css/nav.module.css';
import { Grid, Skeleton, TextInput,Image, Select,Button, Tooltip,Text, Flex } from "@mantine/core";
import useUpdateProfile from "../../../useMutation/Admin/useUpdateProfile";
import { useNavigate } from "react-router";
import LogOutModal from "./LogOutModal";

const CenterProfile = ({profile,setProfile,setProgress}) => {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  const {updateProfile,isPending} = useUpdateProfile(setProfile)
  const [isFormChanged, setIsFormChanged] = useState(false);
  const [openedModal, { open:openLogout, close:closeLogout }] = useDisclosure(false);
  
  const names =[
          { value: "دمشق", label: "دمشق" },
          { value: "حلب", label: "حلب" },
          { value:  "حمص", label: "حمص" },
          { value:  "حماة", label: "حماة" },
          { value: "اللاذقية", label: "اللاذقية" },
          { value:"دير الزور" , label: "دير الزور" },
          { value: "الحسكة" , label: "الحسكة" },
          { value: "الرقة" , label: "الرقة" },
          { value: "إدلب" , label: "إدلب" },
          { value: "درعا", label: "درعا" },
          { value: "السويداء", label: "السويداء" },
          { value: "طرطوس", label: "طرطوس" },
          { value: "القنيطرة", label: "القنيطرة" },
          { value: "ريف دمشق", label: "ريف دمشق" }
        ]
        const [cities,setCities] = useState([]);
        // console.log(profile)
        useEffect(()=>{
        setCities(names)
        },[])

        const schema = yup.object().shape({
          centerName: yup
          .string()
          .required('الاسم مطلوب')
          .test(
            'name',
            'يجب أن يكون الاسم خالٍ من الأرقام ويحتوي على 4 محارف على الأقل',
            (val) => /^[\u0600-\u06FFA-Za-z\s]{4,}$/.test(val)
          ),
          centerCity:yup.string().required("يجب تحديد محافظة"),
          centerEmail: yup.string().required("ايميل غير صالح").email("ايميل غير صالح"),
          });
      
        const form = useForm({
          mode: "uncontrolled",
          validateInputOnChange: true,
          initialValues: {
            centerId:'',
            centerName:'',
            centerCity:'',
            centerEmail:'',
            patientNumber:'',
            // %Y4&F4@VAW&T2QLYD44M8Z1Y%
          },
          validate: yupResolver(schema),
        });
        useEffect(() => {
          if (profile) {
            form.setValues({
              centerId:profile.centerId,
              centerName: profile.centerName,
              centerEmail: profile.centerEmail,
              centerCity:profile.centerCity,
              patientNumber:profile.patientNumber  
            });
          }
        }, [profile]); 

        const handleSubmit = (values) => {
          console.log(values)
          if (form.isValid) {  
            const profileData = {
              centerId: parseInt(values.centerId),
                centerName: values.centerName,
                centerEmail: values.centerEmail,
                centerCity: values.centerCity,  
                patientNumber:values.patientNumber,
            };
            // console.log('isSbmited ?',isSubmitted);
            // setIsSubmitted(true);

            updateProfile(profileData)
            console.log('loading :',isPending) 
          };
          const validated = form.validate();
      
          if (validated) {
            validated.errors;
          }
          form.reset();
        };
      
        useEffect(() => {
        
            console.log('loading :',isPending)
            setProgress(isPending ); 
            
        }, [isPending]);

        const handleLogOut = ()=>{
          navigate('/National_Diabetes_Program/')
          localStorage.clear();
          notifications.show({
                    title: 'تم تسجيل الخروج بنجاح',
                    autoClose: 3000,
                    color:'#00ff0050'
                  });
        }

return(
<>
<LogOutModal opened={openedModal} close={closeLogout}/>
<DeleteProfileModal 
    opened={opened} 
    close={close}
    centerName={profile.centerName}
    id={profile.centerId}
    setProgress={setProgress}
/>
<form style={{ width: "100%" }} onChange={()=>setIsFormChanged(true)} onSubmit={form.onSubmit(handleSubmit)}>
    <Grid gutter={40} justify="center" align="center" w={{base:'100%',sm:'90%'}} m={'auto'} pos={'relative'} > 
      {/* <Tooltip label='تسجيل الخروج'>
        <Image src={logout} w={30} pos={'absolute'} left={1} top={2} onClick={handleLogOut} style={{cursor:'pointer'}}/> 
      </Tooltip> */}
  <Grid.Col span={12}>
    <Text  ta={'right'} p={5} bg={'#8e8e8e50'} style={{borderRadius:10}}>
      معلومات عن الحساب
    </Text>
  </Grid.Col>
      <Grid.Col span={{base:12,sm:6}}   >
      <TextInput 
      h={'auto'}
      dir="rtl"
      label="ايميل المركز"
      variant="unstyled"
      placeholder="ايميل المركز"
      size="28px"
        fw={600}
      radius={10}
      key={form.key("centerEmail")}
      {...form.getInputProps("centerEmail")}
      styles={{
        label: {
          textAlign: 'right',
          marginBottom:5,
           width: '100%',
           fontSize:'18px'
        }
      }}
      />
    </Grid.Col>
    <Grid.Col span={{base:12,sm:6}} pr={{base:0,sm:30}} >
      <TextInput 
      h={'auto'}
      dir="rtl"
      label="اسم المركز"
      variant="unstyled"
      placeholder="اسم المركز"
      size="28px"
      radius={10}
      fw={600}
      key={form.key("centerName")}
      {...form.getInputProps("centerName")}
      styles={{
        label: {
          textAlign: 'right',
          marginBottom:5,
          width: '100%',
          fontSize:'18px'
        }
      }}
      />
      </Grid.Col>

    <Grid.Col span={{base:12,sm:12}}   pr={{base:0,sm:30}} >
      <Select
      h={'auto'}
      label="موقع المركز"
      variant="unstyled"
      placeholder="موقع المركز"
      size="28px"
        fw={600}
      data={cities}
      onSelect={()=>setIsFormChanged(true)}
      radius={10}
      key={form.key("centerCity")}
      {...form.getInputProps("centerCity")}
      styles={{
        label: {
          textAlign: 'right',
          marginBottom:5,
           width: '100%',
           fontSize:'18px'
        },
      }}
      />
             
              
    </Grid.Col>
<Flex w={'95%'} justify={'start'}>
  <Button 
  miw={200}
                radius={10} 
                size="md" 
                type="submit" 
                variant="filled" 
                color="#37A9EF"
                loading={isPending}
                disabled={!isFormChanged||isPending}
              >
                {isPending ? 'جاري الحفظ...' : 'حفظ التعديلات'}
          </Button>
</Flex>

    <Grid.Col span={12}>
      <Text  ta={'right'} p={5} bg={'#8e8e8e50'} style={{borderRadius:10}}>
        معلومات احصائية
      </Text>
    </Grid.Col>
    <Grid.Col span={6} mb={15}  >
      <TextInput
      h={'auto'}
      dir="rtl"
      readOnly
      label=" عدد المرضى المسجلين"
      variant="unstyled"
      size="28px"
        fw={600}
      radius={10}
      key={form.key("patientNumber")}
      {...form.getInputProps("patientNumber")}
      styles={{
        label: {
          textAlign: 'right',
          marginBottom:5,
          width: '100%',
          fontSize:'18px'
        },
      }}
      />
    </Grid.Col>
      <Grid.Col span={6} mb={15 } pr={{base:0,sm:30}}>
      <TextInput
      h={'auto'}
      dir="rtl"
      readOnly
      label="عدد المرضى المسجلين لهذا الشهر"
      variant="unstyled"
      size="28px"
        fw={600}
      radius={10}
      key={form.key("patientNumber")}
      {...form.getInputProps("patientNumber")}
      styles={{
        label: {
          textAlign: 'right',
          marginBottom:5,
          width: '100%',
          fontSize:'18px'
        },
      }}
      />
    </Grid.Col>
       <Grid.Col span={12} mb={15} pr={{base:0,sm:30}}>
      <TextInput
      h={'auto'}
      dir="rtl"
      readOnly
      label="عدد الجرعات المتوفرة"
      variant="unstyled"
      size="28px"
        fw={600}
      radius={10}
      key={form.key("patientNumber")}
      {...form.getInputProps("patientNumber")}
      styles={{
        label: {
          textAlign: 'right',
          marginBottom:5,
          width: '100%',
          fontSize:'18px'
        },
      }}
      />
    </Grid.Col>
      <Grid.Col span={12}>
      <Text  ta={'right'} p={5} bg={'#8e8e8e50'} style={{borderRadius:10}}>
        ادارة الحساب
      </Text>
    </Grid.Col>
    <Grid.Col  span={12} mb={15} pr={{base:0,sm:20}}>
      <Text className={nav.hovered} mb={20} p={10} ta={'end'} onClick={open} fz={18} style={{cursor:'pointer'}}>
              حذف الحساب
      </Text>
        <Text className={nav.hovered} ta={'end'} p={10} onClick={openLogout} fz={18} style={{cursor:'pointer'}}>
              تسجيل الخروج
         </Text>
    </Grid.Col>



    </Grid>
    </form>
    </>
)
}
export default CenterProfile;