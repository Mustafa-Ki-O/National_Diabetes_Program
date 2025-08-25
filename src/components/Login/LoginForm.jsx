import { Link, useNavigate } from "react-router-dom";
import {TextInput,Button,PasswordInput,rem,Container,Flex,Grid,GridCol,Anchor,Loader, Text} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { Accordion, AccordionItem, AccordionControl, AccordionPanel } from '@mantine/core';
// import { IconAt } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import * as yup from "yup";
import useLogin from "../../useMutation/useLogin";
import { Info } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import useLogin from "../../components/useMutation/researcher/useLogin";

const schema = yup.object().shape({
  password: yup
    .string()
    .min(8, "يجب ادخال ما لايقل عن 8 محارف"),
  email: yup.string().required("ايميل غير صالح").email("ايميل غير صالح"),
});

const LoginForm = ({setProgress}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { login, isPending } = useLogin();
//   const { t } = useTranslation();
  const navigate = useNavigate();
  // const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;

  const form = useForm({
    mode: "uncontrolled",
    validateInputOnChange: true,
    initialValues: { password: "", email: "" },
    validate: yupResolver(schema),
  });

  const handleSubmite = (values) => {
    if (form.isValid) {
      const loginFormData = new FormData();
      Object.keys(values).forEach((key) => {
        loginFormData.append(key, values[key]);
      });
      setIsSubmitted(true);
      // navigate('/National_Diabetes_Program/home/');
      login(loginFormData);

      const validated = form.validate();

      if (validated) {
        validated.errors;
      }
    }
  };
  useEffect(() => {
    if (isSubmitted) {
      setProgress(isPending);
    }
  }, [isPending]);

  return (
    <>
      <Container w='100%' fluid >
        <form style={{ width: "100%" }} onSubmit={form.onSubmit(handleSubmite)} >
          <Grid gutter="sm" justify="center" mt={10} mb={20} align="center"  dir="rtl"  >
            <Grid.Col span={12}>
              <TextInput
                size="md"
                radius={10}
                mt="sm"
                placeholder="أدخل البريد الالكتروني"
                key={form.key("email")}
                {...form.getInputProps("email")}
                // rightSection={icon}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <PasswordInput
                size="md"
                radius={10}
                mt="sm"
                placeholder="أدخل كلمة المرور"
                key={form.key("password")}
                {...form.getInputProps("password")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
             <Text fw={600} td={'underline'} size="sm" ta={'right'} style={{cursor:'pointer'}} onClick={()=>navigate('/National_Diabetes_Program/resetPassword/')}>
              نسيت كلمة المرور ؟
             </Text>
            </Grid.Col>
            <Grid.Col span={12} mt={10}>
              <Button
              fullWidth
              size="md"
              radius={10}
              variant="filled"
              color="#37A9EF"
              type="submit"
            >
               تسجيل الدخول
            </Button>
            </Grid.Col>
            <Grid.Col mt={20} span={12} >

     
        
        <Accordion chevronPosition="left" chevronIconSize={18}  variant="unstyled" pb={0}>
          <AccordionItem value="1">
            <AccordionControl>
             <Text size="md">
            لاتملك حساب ؟
            <Anchor 
              inherit 
              fw={700} 
              td='underline' 
              mx={10} 
              onClick={() => navigate(`/National_Diabetes_Program/check-sr-code/`)}
            >
            إنشاء حساب جديد (أدمن)
            </Anchor>
             </Text>
            </AccordionControl>
            <AccordionPanel>
              <Flex  >
                 <Info color="#37a9ef" />
                   <Text size="sm" style={{paddingInline:0}} >
              
                لانشاء حساب مريض , يرجى مراجعة أقرب مركز صحي للسكري في منطقتك
              </Text>
              </Flex>
            
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
   
            </Grid.Col>
          </Grid>
 
        </form>
      </Container>
    </>
  );
};

export default LoginForm;
