import React, { useState, useEffect } from "react";
import { DatePickerInput } from '@mantine/dates';
import { useNavigate } from "react-router-dom";
import { TextInput, Button, PasswordInput, Container, Flex, Grid, GridCol, Checkbox, Anchor, Select } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import person from "../../assets/vectors/Vector1.png";
import message from "../../assets/vectors/Vector2.png";
import useRegPatient from '../../useMutation/Patient/useRegPatient';
import useFetchCenters from '../../useMutation/Patient/useFetchCenters';
import phone from "../../assets/vectors/Vector3.png";
import calendar from "../../assets/vectors/calendar.png";
const RegisterForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, isLoading } = useRegPatient();
  const [centerNames, setCenterNames] = useState([]);
  const { fetchCenters, isLoading: isCentersLoading } = useFetchCenters(); // Pass setCenterNames here
  const navigate = useNavigate();

  // Fetch centers when the component mounts
  useEffect(() => {
    fetchCenters(setCenterNames)
  }, []);


  const schema = yup.object().shape({
    fullname: yup
      .string()
      .required('الاسم مطلوب')
      .test(
        'name',
        'يجب أن يكون الاسم خالٍ من الأرقام ويحتوي على 2 محارف على الأقل',
        (val) => /^[\u0600-\u06FFA-Za-z\s]{2,}$/.test(val)
      ),
      id_number: yup
  .string()
  .matches(/^\d{11}$/, 'الرقم الوطني يجب أن يحوي 11 رقم'),
    email: yup.string().required("ايميل غير صالح").email("ايميل غير صالح"),
    phone: yup
    .string()
    .matches(/^09[0-9]{8}$/, "الرقم يبدأ ب 09 ويجب ان يكون صالحا"),
    password: yup
      .string()
      .min(8, "يجب ان تحوي كلمة المرور على 8 محارف كحد أدنى"),
      age: yup.date().required('تاريخ الميلاد مطلوب'),
    center_name: yup.string().required('المنطقة مطلوبة'),
    termsOfService: yup.bool()
      .oneOf([true], "يجب الموافقة على الشروط"),
  });

  const form = useForm({
    mode: "uncontrolled",
    validateInputOnChange: true,
    initialValues: {
      id_number:'',
      fullname: '',
      email: '',
      age:null,
      phone:'',
      password:'',
      center_name: '',
      termsOfService: ''
    },
    validate: yupResolver(schema),
  });

  const handleSubmit = () => {
    if (form.isValid) {
      const values = form.getValues();
      console.log(values);
      const newFormData = new FormData();
      Object.keys(values).forEach((key) => {
        if (key !== 'termsOfService') {
          newFormData.append(key, values[key]);
        }
      });
      setIsSubmitted(true);
      register(newFormData);
    }

    const validated = form.validate();
    if (validated) {
      validated.errors;
    }
    form.reset();
  };

  const handleLog = () => {
    navigate('/National_Diabetes_Program/');
  };

  return (
    <>
      <Container w='100%' fluid>
        <form style={{ width: "100%" }} onSubmit={form.onSubmit(handleSubmit)}>
          <Grid gutter="lg" justify="center" mt={20} mb={20} align="center" dir="rtl">
          <GridCol span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
              <TextInput
                size="md"
                radius={10}
                placeholder="أدخل رقم الهوية الوطني *"
                // rightSection={<img src={person} width="20px" />}
                key={form.key("id_number")}
                {...form.getInputProps("id_number")}
              />
            </GridCol>
            <GridCol span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
              <TextInput
                size="md"
                radius={10}
                placeholder="أدخل الاسم الكامل *"
                rightSection={<img src={person} width="20px" />}
                key={form.key("fullname")}
                {...form.getInputProps("fullname")}
              />
            </GridCol>
            <GridCol span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
              <TextInput
                size="md"
                radius={10}
                placeholder="أدخل البريد الإلكتروني *"
                rightSection={<img src={message} width="20px" />}
                key={form.key("email")}
                {...form.getInputProps("email")}
              />
            </GridCol>
            <GridCol span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
               <TextInput
                 size="md"
                 radius={10}
                 placeholder="أدخل رقم الهاتف *"
                 rightSection={<img src={phone} width="20px" />}
                 key={form.key("phone")}
                 {...form.getInputProps("phone")}
               />
             </GridCol>
            <GridCol span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
              <PasswordInput
                size="md"
                radius={10}
                placeholder="أدخل كلمة المرور *"
                key={form.key("password")}
                {...form.getInputProps("password")}
              />
            </GridCol>
            <GridCol span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
              <Select
                
                size="md"
                radius={10}
                placeholder="اختر المركز *"
                data={centerNames?.map(center => ({ value: center, label: center })) || []}
                key={form.key("center_name")}
                {...form.getInputProps("center_name")}
                disabled={isCentersLoading}
              />
            </GridCol>
            <GridCol span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
              <DatePickerInput
                 size="md"
                 radius={10}
                 placeholder="اختر تاريخ الميلاد *"
                 valueFormat="DD/MM/YYYY"
                 rightSection={<img src={calendar} width="20px" />}
                 key={form.key("age")} 
                 {...form.getInputProps("age")} 
              />
        </GridCol>
            <GridCol offset={{ lg: 6, md: 0, sm: 0, xs: 0 }} span={{ lg: 6, xs: 12, sm: 12, md: 12 }} style={{ direction: 'ltr' }}>
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
                style={{ marginBottom: 15, direction: 'rtl' }}
              />
            </GridCol>
          </Grid>
          <Flex visibleFrom="md" w='60%' gap='1.25rem' justify='center' m="auto" my={15}>
            <Button fullWidth radius={10} size="md" variant="outline" color="#8E8E8E" onClick={handleLog}>
              تسجيل الدخول
            </Button>
            <Button fullWidth radius={10} size="md" type="submit" variant="filled" color="#37A9EF">
              انشاء حساب
            </Button>
          </Flex>
          <Grid hiddenFrom="md" gutter={15} my={15}>
            <GridCol span={12}>
              <Button fullWidth radius={10} size="md" type="submit" variant="filled" color="#37A9EF">
                انشاء حساب
              </Button>
            </GridCol>
            <GridCol span={12}>
              <Button fullWidth radius={10} size="md" variant="outline" color="#8E8E8E" onClick={handleLog}>
                تسجيل الدخول
              </Button>
            </GridCol>
          </Grid>
          <Flex justify='end' mt={15}>
            <Anchor onClick={() => navigate(`/National_Diabetes_Program/registerAdmin/`)} inherit fw={700} td='underline'>
              انشاء حساب كمركز ؟
            </Anchor>
          </Flex>
        </form>
      </Container>
    </>
  );
};

export default RegisterForm;