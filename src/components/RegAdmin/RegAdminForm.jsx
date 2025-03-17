import { Link, useNavigate } from "react-router-dom";
import {TextInput,Button,PasswordInput,rem,Container,Flex,Grid,GridCol,Checkbox,Anchor} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { IconAt } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import * as yup from "yup";
const RegAdminForm = () =>{
    const [isSubmitted, setIsSubmitted] = useState(false);
    //   const { login, isLoading } = useLogin();
    //   const { t } = useTranslation();
      const navigate = useNavigate();
    //   const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
    
      const schema = yup.object().shape({
        name: yup
        .string()
        .required('الاسم مطلوب')
        .test(
          'name',
          'يجب أن يكون الاسم خالٍ من الأرقام ويحتوي على 4 محارف على الأقل',
          (val) => /^[\u0600-\u06FFA-Za-z\s]{4,}$/.test(val)
        ),
        email: yup.string().required("ايميل غير صالح").email("ايميل غير صالح"),
        password: yup
          .string()
          .min(8, "يجب ان تحوي كلمة المرور على 8 محارف كحد أدنى"),
          secretCode: yup
          .string()
          .required('الرمز السري مطلوب')
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8}$/,
            'يجب أن يحتوي الرمز السري على خليط من الأرقام والمحارف ويجب أن يكون طوله 8'
          )
        });
    
      const form = useForm({
        mode: "uncontrolled",
        validateInputOnChange: true,
        initialValues: {
          name:'',
          email:'',
          password:'',
          secretCode:'',
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
          navigate('/National_Diabetes_Program/')
        //   register(newFormData);
          
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
    //   useEffect(()=>{
    //     if(isSubmitted){
    //     setProgress(isLoading)
    //     }
    //   },[isLoading])
    
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
                // rightSection={<img src={person} width="20px" />}
                key={form.key("name")}
                {...form.getInputProps("name")}
              />
            </GridCol>
            <GridCol span={12}>
              <TextInput
                size="md"
                radius={10}
                placeholder="أدخل البريد الإلكتروني *"
                // rightSection={<img src={message} width="20px" />}
                key={form.key("email")}
                {...form.getInputProps("email")}
              />
            </GridCol>
            <GridCol span={12}>
              <PasswordInput
                size="md"
                radius={10}
                placeholder="أدخل كلمة المرور *"
                key={form.key("password")}
                {...form.getInputProps("password")}
              />
            </GridCol>
            <GridCol span={12}>
              <TextInput
                size="md"
                radius={10}
                placeholder="أدخل الرمز السري*"
                // rightSection={<img src={message} width="20px" />}
                key={form.key("secretCode")}
                {...form.getInputProps("secretCode")}
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