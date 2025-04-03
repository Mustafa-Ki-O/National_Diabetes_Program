import { Link, useNavigate } from "react-router-dom";
import {TextInput,Button,PasswordInput,rem,Container,Flex,Grid,GridCol,Checkbox,Anchor,Select} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
// import { IconAt } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import * as yup from "yup";
import person from "../../assets/vectors/person.svg";
import message from "../../assets/vectors/Vector2.png";
import code from '../../assets/vectors/Vector5.png'
import useRegAdmin from "../../useMutation/Admin/useRegAdmin";


const RegAdminForm = ({setProgress}) =>{
    const [isSubmitted, setIsSubmitted] = useState(false);
      const { register, isPending } = useRegAdmin();
      const navigate = useNavigate();
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
        centerPassword: yup
          .string()
          .min(8, "يجب ان تحوي كلمة المرور على 8 محارف كحد أدنى"),
          centerKey: yup
          .string()
          .required('الرمز السري مطلوب')
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d%&@!$*]{25}$/,
            'يجب أن يحتوي الرمز السري على خليط من الأرقام والمحارف والرموز الخاصة ويجب أن يكون طوله 25'
          )
        });
    
      const form = useForm({
        mode: "uncontrolled",
        validateInputOnChange: true,
        initialValues: {
          centerName:'',
          centerCity:'',
          centerPassword:'',
          centerEmail:'',
          centerKey:'',
          // %Y4&F4@VAW&T2QLYD44M8Z1Y%
        },
        validate: yupResolver(schema),
      });

    
      const handleSubmit = () => {
        if (form.isValid) {
          const values = form.getValues();
          console.log('القيم المدخلة:', values);
          const newFormData = new FormData();
          Object.keys(values).forEach((key) => {
            // if(key !== 'termsOfService'){
              newFormData.append(key, values[key]);
            //   }
          });
          setIsSubmitted(true)
          register(newFormData);
          
        }
    
        const validated = form.validate();
    
        if (validated) {
          validated.errors;
        }
        form.reset();
      };
    
      const handleLog = () => {
        navigate('/National_Diabetes_Program/')
      }
      useEffect(()=>{
        if(isSubmitted){
        setProgress(isPending)
        }
      },[isPending])
    
      return (
        <>
          <Container w='100%' fluid  >
          <form style={{ width: "100%" }}
          onSubmit={form.onSubmit(handleSubmit)} 
        >
          <Grid gutter="lg" justify="center" mt={20} mb={20} align="center"  dir="rtl"  >
            <GridCol span={12}>
              <TextInput
                size="md"
                radius={10}
                placeholder="ادخل اسم المركز الصحي *"
                rightSection={<img src={person} width="20px" />}
                key={form.key("centerName")}
                {...form.getInputProps("centerName")}
              />
            </GridCol>
             <GridCol span={12}>
                <Select
                  size="md"
                  radius={10}
                  placeholder='اختر المحافظة *'
                  data={cities}
                  key={form.key("centerCity")}
                  {...form.getInputProps("centerCity")}
                  // disabled={isCentersLoading}
                />
            </GridCol>
            <GridCol span={12}>
              <TextInput
                size="md"
                radius={10}
                placeholder="أدخل البريد الإلكتروني *"
                rightSection={<img src={message} width="20px" />}
                key={form.key("centerEmail")}
                {...form.getInputProps("centerEmail")}
              />
            </GridCol>
            <GridCol span={12}>
              <PasswordInput
                size="md"
                radius={10}
                placeholder="أدخل كلمة المرور *"
                key={form.key("centerPassword")}
                {...form.getInputProps("centerPassword")}
              />
            </GridCol>
            <GridCol span={12}>
              <TextInput
                size="md"
                radius={10}
                placeholder="أدخل الرمز السري*"
                rightSection={<img src={code} width="20px" />}
                key={form.key("centerKey")}
                {...form.getInputProps("centerKey")}
              />
            </GridCol>
          </Grid>
           <Flex visibleFrom="md"  gap='1.25rem' justify='center' m="auto" my={15}>
           <Button fullWidth radius={10}  size="md"  variant="outline" color="#8E8E8E" onClick={handleLog}>
              تسجيل الدخول
            </Button>
            <Button fullWidth radius={10}  size="md" type="submit" variant="filled" color="#37A9EF">
              انشاء حساب
            </Button>
        </Flex>
        <Grid hiddenFrom="md" gutter={15} my={15}>
        <GridCol span={12}>
        <Button fullWidth radius={10}  size="md" type="submit" variant="filled" color="#37A9EF">
              انشاء حساب
            </Button>
        </GridCol>
        <GridCol span={12}>
        <Button fullWidth radius={10}  size="md"  variant="outline" color="#8E8E8E" onClick={handleLog}>
              تسجيل الدخول
            </Button>
        </GridCol>
     </Grid>
     {/* <Flex justify='end' mt={15}>
              <Anchor onClick={() => navigate(`/National_Diabetes_Program/registerAdmin/`)} inherit fw={700} td='underline' >
                            انشاء حساب كمركز ؟
              </Anchor>
      </Flex> */}
    </form>
    </Container>
        </>
      );

}
export default RegAdminForm