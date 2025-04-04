import { useState ,useEffect} from "react";
import { useDisclosure } from "@mantine/hooks";
import { useForm ,yupResolver } from "@mantine/form";
import * as yup from "yup";
import DeleteProfileModal from "./DeleteProfileModal";
import profileLogo from '../../../assets/vectors/admin.svg'
import { Grid, Skeleton, TextInput,Image, Select,Button } from "@mantine/core";
import useUpdateProfile from "../../../useMutation/Admin/useUpdateProfile";

const CenterProfile = ({profile,setProfile,setProgress}) => {
  
  const [opened, { open, close }] = useDisclosure(false);
  const {updateProfile,isPending} = useUpdateProfile(setProfile)
  const [isFormChanged, setIsFormChanged] = useState(false);
        
  
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
return(
<>
<DeleteProfileModal 
    opened={opened} 
    close={close}
    centerName={profile.centerName}
    id={profile.centerId}
    setProgress={setProgress}
/>
<form style={{ width: "100%" }} onChange={()=>setIsFormChanged(true)} onSubmit={form.onSubmit(handleSubmit)}>
    <Grid gutter={10} justify="center" align="center" w={{base:'100%',sm:'60%'}} m={'auto'} >    
    <Grid.Col span={12}>
    <Image m={'auto'} mb={20} src={profileLogo} w={100} style={{cursor:'pointer',border:'1px solid #00000080',borderRadius:'50%'}} p={5}/>
    </Grid.Col>
    <Grid.Col span={12} >
      <TextInput 
      dir="rtl"
      label="اسم المركز"
      variant="filled"
      placeholder="اسم المركز"
      size="md"
      radius={10}
      key={form.key("centerName")}
      {...form.getInputProps("centerName")}
      styles={{
        label: {
          textAlign: 'right',
          marginBottom:5,
          width: '98%',
        }
      }}
      />
      </Grid.Col>
      <Grid.Col span={12} >
      <TextInput 
      dir="rtl"
      label="ايميل المركز"
      variant="filled"
      placeholder="ايميل المركز"
      size="md"
      radius={10}
      key={form.key("centerEmail")}
      {...form.getInputProps("centerEmail")}
      styles={{
        label: {
          textAlign: 'right',
          marginBottom:5,
          width: '98%',
        }
      }}
      />
    </Grid.Col>
    <Grid.Col span={12} >
      <Select
      // dir="rtl"
      label="موقع المركز"
      variant="filled"
      placeholder="موقع المركز"
      size="md"
      data={cities}
      onSelect={()=>setIsFormChanged(true)}
      radius={10}
      key={form.key("centerCity")}
      {...form.getInputProps("centerCity")}
      styles={{
        label: {
          textAlign: 'right',
          marginBottom:5,
          width: '98%',
        },
      }}
      />
    </Grid.Col>
    <Grid.Col span={12} mb={15}>
      <TextInput
      dir="rtl"
      disabled
      label="عدد المرضى"
      variant="filled"
      size="md"
      radius={10}
      key={form.key("patientNumber")}
      {...form.getInputProps("patientNumber")}
      styles={{
        label: {
          textAlign: 'right',
          marginBottom:5,
          width: '98%',
        },
      }}
      />
    </Grid.Col>
    <Grid.Col span={6}>
              <Button 
                fullWidth 
                radius={10} 
                size="md" 
                onClick={open}
                variant="light" 
                color="rgb(223, 47, 25)"
              >
                حذف الحساب
              </Button>
              </Grid.Col>
    <Grid.Col span={6}>
              <Button 
                fullWidth 
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
              </Grid.Col>

    </Grid>
    </form>
    </>
)
}
export default CenterProfile;