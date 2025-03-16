import { Link, useNavigate } from "react-router-dom";
import {TextInput,Button,PasswordInput,rem,Container,Flex,Grid,GridCol} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { IconAt } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import * as yup from "yup";
// import { useTranslation } from "react-i18next";
// import useLogin from "../../components/useMutation/researcher/useLogin";

const schema = yup.object().shape({
  password: yup
    .string()
    .min(8, "يجب ادخال ما لايقل عن 8 محارف"),
  email: yup.string().required("ايميل غير صالح").email("ايميل غير صالح"),
});

const LoginForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
//   const { login, isLoading } = useLogin();
//   const { t } = useTranslation();
  const navigate = useNavigate();
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;

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
      navigate('/National_Diabetes_Program/home/');
    //   login(loginFormData);

      const validated = form.validate();

      if (validated) {
        validated.errors;
      }
    }
  };
//   useEffect(() => {
//     if (isSubmitted) {
//       setProgress(isLoading);
//     }
//   }, [isLoading]);

  return (
    <>
      <Container w='100%' fluid >
        <form style={{ width: "100%" }} onSubmit={form.onSubmit(handleSubmite)} >
          <Grid gutter="sm" justify="center" mt={20} mb={20} align="center"  dir="rtl"  >
            <GridCol span={12}>
              <TextInput
                size="md"
                radius={10}
                mt="sm"
                placeholder="أدخل البريد الالكتروني"
                key={form.key("email")}
                {...form.getInputProps("email")}
                rightSection={icon}
              />
            </GridCol>
            <GridCol span={12}>
              <PasswordInput
                size="md"
                radius={10}
                mt="sm"
                placeholder="أدخل كلمة المرور"
                key={form.key("password")}
                {...form.getInputProps("password")}
              />
            </GridCol>
          </Grid>
          {/* <Flex justify="flex-end" my={10}>
            <Link
              to="/Bug_Bounty_Syria/resetpassword"
              style={{
                textDecoration: "underline",
                color: "black",
                fontSize: "13px",
              }}
            >
              "اعادة تعيين كلمة المرور"
            </Link>
          </Flex> */}
          <Flex  gap="1.25rem" w="100%" justify="space-around">
            <Button
              size="md"
              radius={10}
              variant="outline"
              color="#8E8E8E"
              mt="sm"
              onClick={() => navigate(`/National_Diabetes_Program/register/`)}
            >
              انشاء حساب
            </Button>
            <Button
              size="md"
              radius={10}
              variant="filled"
              color="#37A9EF"
              type="submit"
              mt="sm"
            >
              تسجيل الدخول
            </Button>
          </Flex>
          {/* <Grid hiddenFrom="md" gutter={0}>
            <GridCol span={12}>
              <Button
                fullWidth
                radius={10}
                variant="filled"
                color="#b21222"
                type="submit"
                mt="sm"
              >
                {t("تسجيل الدخول")}
              </Button>
            </GridCol>
            <GridCol span={12}>
              <Button
                fullWidth
                radius={10}
                variant="outline"
                color="#b21222"
                mt="sm"
                onClick={() => navigate(`/Bug_Bounty_Syria/`)}
              >
                {t("انشاء حساب")}
              </Button>
            </GridCol>
          </Grid> */}
        </form>
      </Container>
    </>
  );
};

export default LoginForm;
