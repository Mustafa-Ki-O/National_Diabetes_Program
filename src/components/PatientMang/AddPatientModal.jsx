import useRegPatient from "../../useMutation/Patient/useRegPatient";
import React, { useState, useEffect } from "react";
import { DatePickerInput } from '@mantine/dates';
import { TextInput, Button, Modal, Container, Flex, Grid, GridCol, Checkbox, Anchor, Select ,Loader, Title} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import person from "../../assets/vectors/person.svg";
import message from "../../assets/vectors/Vector2.png";
import phone from "../../assets/vectors/Vector3.png";
import calendar from "../../assets/vectors/calendar.png";
import dayjs from "dayjs";
import { UserRound } from "lucide-react";
import Logo from "../general/Logo";

const  AddPatientModal = ({centerId,opened,close,setProgress}) => {
      const [isSubmitted, setIsSubmitted] = useState(false);
      const { register, isPending } = useRegPatient();

      console.log(centerId)

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
    //    password: yup
    //      .string()
    //      .min(8, "يجب ان تحوي كلمة المرور على 8 محارف كحد أدنى"),
         age: yup.date().required('تاريخ الميلاد مطلوب'),
    //      city:yup.string().required('اختر المحافظة'),
    //    center_name: yup.string().required('اختر المركز'),
    //    termsOfService: yup.bool()
    //      .oneOf([true], "يجب الموافقة على الشروط"),
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
        //  password:'',
        //  center_name: '',
        //  city:'',
        //  termsOfService: true
       },
       validate: yupResolver(schema),
     });
   
     
    //  useEffect(()=>{
    //    fetchCities(setCitiesNames)
    //  },[])
   
    //  const handleChangeCity = (value) => {
    //    form.getInputProps("city").onChange(value);
   
    //    setCenterNames([]);
    //    form.setValues('center_name', null);
   
    //    setCity(value);
       
    //    fetchCenters(value);
    //  }


     const handleSubmit = () => {
       if (form.isValid) {
           const values = form.getValues();
           if (values.age) {
           values.age = dayjs(values.age).format('DD-MM-YYYY')
           console.log(values.age)
         }
         console.log(values)
         const newFormData = new FormData();
         newFormData.append('password','')
              newFormData.append('center_name','')
               newFormData.append('city','')
                newFormData.append('termsOfService',true)
         Object.keys(values).forEach((key) => {
        //    if (values.termsOfService === true) {
             newFormData.append(key,values[key]);
             
             // console.log(newFormData)
        //    }
         });
         setIsSubmitted(true);
         // console.log(newFormData)
        //  localStorage.setItem('patientEmail',JSON.stringify(values.email));
         register(newFormData);
       }
   
       const validated = form.validate();
       if (validated) {
         validated.errors;
       }
       form.reset();
     };
   
     useEffect(() => {
         setProgress(isPending); 
     }, [isPending]);
   
     const handleLog = () => {
       close();
     };
   
      const today = dayjs(new Date()).format('DD-MM-YYYY');

    return(
        <>
         <Modal
        w="100%"
        size={'100%'}
        radius={20}
        opened={opened}
        onClose={close}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 2,
        }}
        style={{ position: "absolute", right: 0 }}
      >
        <Logo/>
        
       
        <Container w={{sm:'80%',xs:'100%'}} fluid my={20} bd='2px solid #37A9EF' style={{borderRadius:20,backgroundColor:'#ffffff30',backdropFilter:'blur(5px)'}}>
            <Flex justify={'center'} align={'center'} gap={10}>
             <UserRound />
              <Title ta={'center'} my={20} size={'xl'}  >
                 إنشاء حساب مريض
              </Title>
            </Flex>
               <form style={{ width: "100%" }} onSubmit={form.onSubmit(handleSubmit)}>
                 <Grid gutter="sm" justify="start" mt={20} mb={20} align="center" dir="rtl">
                 <GridCol span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
                     <TextInput
                       size="md"
                       radius={10}
                       placeholder="أدخل رقم الهوية الوطني *"  
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
                   {/* <GridCol span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
                     <PasswordInput
                       size="md"
                       radius={10}
                       placeholder="أدخل كلمة المرور *"
                       key={form.key("password")}
                       {...form.getInputProps("password")}
                     />
                   </GridCol> */}
                   {/* <GridCol span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
                   <Select
                        size="md"
                        radius={10}
                        placeholder='اختر المحافظة *'
                        data={citiesNames}   
                        value={city} 
                        onChange={handleChangeCity}
                        key={form.key("city")}    
                        disabled={isPendingCities}
                       //  {...form.getInputProps("city")}
                      />
                   </GridCol> */}
                   {/* <GridCol span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
                     <Select 
                       size="md"
                       radius={10}
                       placeholder="اختر المركز *"
                       data={centerNames?.map(center => ({ value: center, label: center })) || []}
                       key={form.key("center_name")}
                       {...form.getInputProps("center_name")}
                       disabled={isPendingCenters}
                     />
                   </GridCol> */}
                   <GridCol justify='flex-end' span={{ lg: 6, xs: 12, sm: 12, md: 12 }} >
                     <DatePickerInput
                        size="md"
                        radius={10}
                        placeholder=" تاريخ الميلاد *"
                        valueFormat="DD/MM/YYYY"
                        rightSection={<img src={calendar} width="20px" />}
                        key={form.key("age")} 
                        {...form.getInputProps("age")} 
                     />
               </GridCol>
                   {/* <GridCol offset={{ lg: 6, md: 0, sm: 0, xs: 0 }} span={{ lg: 6, xs: 12, sm: 12, md: 12 }} style={{ direction: 'ltr' }}>
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
                   </GridCol> */}
                 </Grid>
                 <Flex visibleFrom="md" w='50%' gap='1.25rem' justify='center' m="auto" my={35}>
                   <Button fullWidth radius={10} size="md" variant="outline" color="#8E8E8E" onClick={handleLog}>
                     تراجع
                   </Button>
                   <Button fullWidth radius={10} disabled size="md" type="submit" variant="filled" color="#37A9EF">
                     تأكيد
                   </Button>
                 </Flex>
                 <Grid hiddenFrom="md" gutter={15} my={25}>
                   <GridCol span={12}>
                     <Button fullWidth radius={10} size="md" disabled type="submit" variant="filled" color="#37A9EF">
                     {isPending ? (
           <Loader color="white" size="sm" type="dots" />
         ) : (
           "  تأكيد"
         )}
                     </Button>
                   </GridCol>
                   <GridCol span={12}>
                     <Button  fullWidth radius={10} size="md" variant="outline" color="#8E8E8E" onClick={handleLog}>
                       تراجع
                     </Button>
                   </GridCol>
                 </Grid>
                 
               </form>
             </Container>
      </Modal>
        </>
    )


}
export default AddPatientModal