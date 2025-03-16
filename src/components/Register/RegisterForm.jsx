import { Link, useNavigate } from "react-router-dom";
import {TextInput,Button,PasswordInput,rem,Container,Flex,Grid,GridCol,Checkbox,Anchor} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { IconAt } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import * as yup from "yup";
// import { useTranslation } from "react-i18next";
// import useLogin from "../../components/useMutation/researcher/useLogin";


const RegisterForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
//   const { login, isLoading } = useLogin();
//   const { t } = useTranslation();
  const navigate = useNavigate();
//   const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;

  const schema = yup.object().shape({
    name: yup.string().test(
      'name',
      ("يجب ان يكون الاسم خال من الارقام ويحتوي عللا محرفين على الاقل"),
      val => /^[a-zA-Z]{2,}$/.test(val)
    ),
    email: yup.string().required("ايميل غير صالح").email("ايميل غير صالح"),
    phone: yup
    .string()
    .matches(/^09[0-9]{8}$/, "الرقم يبدأ ب 09 ويجب ان يكون صالحا"),
    password: yup
      .string()
      .min(8, "يجب ان تحوي كلمة المرور على 8 محارف كحد أدنى"),
      termsOfService:yup.bool()
      .oneOf([true], "يجب الموافقة على الشروط"),
    });

  const form = useForm({
    mode: "uncontrolled",
    validateInputOnChange: true,
    initialValues: {
      name:'',
      email:'',
      phone:'',
      password:'',
      region:'',
      age:'',
      termsOfService:''
    },
    validate: yupResolver(schema),
  });

  const handleSubmit = () => {
    if (form.isValid) {
      const values = form.getValues();
      const newFormData = new FormData();
      Object.keys(values).forEach((key) => {
        if(key !== 'termsOfService'){
          newFormData.append(key, values[key]);
          }
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
      <Container w='100%' fluid >
      <form
      onSubmit={form.onSubmit(handleSubmit)}
      style={{ width: "100%", marginTop: 20 }}
    >
      <Grid gutter="lg" justify="center" mt={20} mb={20} align="center"  dir="rtl" >
        <GridCol span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
          <TextInput
            radius={10}
            placeholder="أدخل الاسم الكامل *"
            // rightSection={<img src={person} width="20px" />}
            key={form.key("name")}
            {...form.getInputProps("name")}
          />
        </GridCol>
        <GridCol span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
          <TextInput
            radius={10}
            placeholder="أدخل البريد الإلكتروني *"
            // rightSection={<img src={message} width="20px" />}
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
        </GridCol>
        <GridCol span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
          <TextInput
            radius={10}
            placeholder="أدخل رقم الهاتف *"
            // rightSection={<img src={phone} width="20px" />}
            key={form.key("phone")}
            {...form.getInputProps("phone")}
          />
        </GridCol>
        <GridCol span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
          <PasswordInput
            radius={10}
            placeholder="أدخل كلمة المرور *"
            key={form.key("password")}
            {...form.getInputProps("password")}
          />
        </GridCol>
        <GridCol span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
          <TextInput
            radius={10}
            placeholder="أدخل المحافظة*"
            // rightSection={<img src={message} width="20px" />}
            key={form.key("region")}
            {...form.getInputProps("region")}
          />
        </GridCol>
        <GridCol span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
          <TextInput
            radius={10}
            placeholder="أدخل العمر *"
            // rightSection={<img src={message} width="20px" />}
            key={form.key("age")}
            {...form.getInputProps("age")}
          />
        </GridCol>
        <GridCol offset={{lg:6,md:0,sm:0,xs:0}} span={{  lg: 6 ,xs: 12 ,sm: 12 ,md:12 }} style={{direction:'ltr'}}  >
      <Checkbox
        key={form.key("termsOfService")}
        {...form.getInputProps("termsOfService", { type: "checkbox" })}
        size="xs"
        label={
          <>
            {"أنا اوافق على"}{" "}
            <Anchor href="https://google.com" target="_blank" inherit>
              الشروط والاحكام
            </Anchor>
          </>
        }
        style={{ marginBottom: 15,direction:'rtl' }}
      />
    </GridCol>
      </Grid>
       <Flex visibleFrom="md" w='60%' gap='1.25rem' justify='center' m="auto" mt={10}>
       <Button fullWidth radius={10}  size="md"  variant="outline" color="#8E8E8E" onClick={handleLog}>
          تسجيل الدخول
        </Button>
        <Button fullWidth radius={10}  size="md" type="submit" variant="filled" color="#37A9EF">
          انشاء حساب
        </Button>
    </Flex>
    <Grid hiddenFrom="md" gutter={10}>
    <GridCol span={12}>
    <Button fullWidth radius={10}  size="md"  variant="outline" color="#8E8E8E" onClick={handleLog}>
          تسجيل الدخول
        </Button>
    </GridCol>
    <GridCol span={12}>
    <Button fullWidth radius={10}  size="md" type="submit" variant="filled" color="#37A9EF">
          انشاء حساب
        </Button>
    </GridCol>
 </Grid>
</form>
</Container>
    </>
  );
};

export default RegisterForm;
