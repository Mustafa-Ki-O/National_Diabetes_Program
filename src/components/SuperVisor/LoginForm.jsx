import { Link, useNavigate } from "react-router-dom";
import {TextInput,Button,PasswordInput,rem,Container,Flex,Grid,GridCol,Anchor,Loader, Text} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { Accordion, AccordionItem, AccordionControl, AccordionPanel } from '@mantine/core';
// import { IconAt } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import * as yup from "yup";
import useLogin from "../../useMutation/useLogin";
import { Info } from "lucide-react";
import useLoginSv from "../../useMutation/SuperVisor/useLoginSv";
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

  const { loginSv, isPending } = useLoginSv();
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
      loginSv(loginFormData);

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
                // label={'supervisor@example.com'}
                {...form.getInputProps("email")}
                styles={{
                    input:{
                        borderColor:'#e67e22',
                    }
                }}
                
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <PasswordInput
                size="md"
                radius={10}
                mt="sm"
                // label={'Pa$$W0rdSuper1$er'}
                placeholder="أدخل كلمة المرور"
                key={form.key("password")}
                {...form.getInputProps("password")}
                  styles={{
                    input:{
                        borderColor:'#e67e22',
                    }
                }}
              />
            </Grid.Col>
            <Grid.Col span={12} mt={25}>
              <Button
              fullWidth
              size="md"
              radius={10}
              variant="filled"
              color="#e67e22"
              type="submit"
            >
               تسجيل الدخول
            </Button>
            </Grid.Col>

          </Grid>
 
        </form>
      </Container>
    </>
  );
};

export default LoginForm;
