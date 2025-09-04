import useRegPatient from "../../useMutation/Patient/useRegPatient";
import React, { useState, useEffect } from "react";
import { DatePickerInput } from '@mantine/dates';
import { TextInput, Button, Modal, Container, Flex, Grid, GridCol, PasswordInput, Anchor, Select ,Loader, Title, Text, MultiSelect} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import * as yup from "yup";
import person from "../../assets/vectors/person.svg";
import message from "../../assets/vectors/Vector2.png";
import phone from "../../assets/vectors/Vector3.png";
import calendar from "../../assets/vectors/calendar.png";
import dayjs from "dayjs";
import { UserRound } from "lucide-react";
import Logo from "../general/Logo";
import GeneratePassword from "./GeneratePassword";



const  AddPatientModal = ({centerId,opened,close,setProgress,setPatients}) => {
      
      const [isSubmitted, setIsSubmitted] = useState(false);
      const [pw,setPw] = useState()
      const { register, isPending } = useRegPatient(setPatients);

      console.log(centerId)

      
      useEffect(() => {
        const generated = GeneratePassword();
        setPw(generated);
        form.setFieldValue("password", generated);  
      }, [opened]);

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
         sugarType: yup.string().required("اختر نوع السكري"),
         gender : yup.string().required("حدد الجنس"),
         historyOfFamilyDisease :  yup.array().of(yup.string()).required("حقل مطلوب"),
         historyOfdiseaseDetection : yup.string().required("حدد تاريخ اكتشاف المرض"),
         
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
         password:'',
         sugarType: "",
         gender: "",
         historyOfFamilyDisease: [],
         historyOfdiseaseDetection: null,
        //  center_name: '',
        //  city:'',
        //  termsOfService: true
       },
       validate: yupResolver(schema),
     });
   


     const handleSubmit = () => {
       if (form.isValid) {
           const values = form.getValues();
           if (values.age || values.historyOfdiseaseDetection) {
           values.age = dayjs(values.age).format('DD-MM-YYYY')
           values.historyOfdiseaseDetection = dayjs(values.historyOfdiseaseDetection).format('DD-MM-YYYY')
         }
         console.log(values)
         const newFormData = new FormData();
         Object.keys(values).forEach((key) => {
             if (key === "historyOfFamilyDisease" && Array.isArray(values[key])) {
                values[key].forEach((item) => {
                  newFormData.append(key, item);
                });
              } else {

            newFormData.append(key, values[key]);
            }
             console.log(newFormData)
      
         });
         setIsSubmitted(true);
         // console.log(newFormData)
        //  localStorage.setItem('patientEmail',JSON.stringify(values.email));
         register(newFormData);
         form.reset()
         close()
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
        fullScreen
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
        {/* <Logo/> */}
        
       
        <Container w={{sm:'80%',xs:'100%'}} fluid my={20} bd='2px solid #37A9EF' style={{borderRadius:20,backgroundColor:'#ffffff30',backdropFilter:'blur(5px)'}}>
            <Flex justify={'center'} align={'center'} gap={10}>
             <UserRound />
              <Title ta={'center'} my={20} size={'xl'}  >
                إضافة مريض
              </Title>
            </Flex>
               <form style={{ width: "100%" }} onSubmit={form.onSubmit(handleSubmit)} >
                 <Grid gutter={15}  justify="start" my={25} align="center" dir="rtl">
                 <GridCol span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
                     <TextInput
                       size="lg"
                       radius={10}
                       placeholder="أدخل رقم الهوية الوطني *"  
                       key={form.key("id_number")}
                       {...form.getInputProps("id_number")}
                     />
                   </GridCol>
                   <GridCol span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
                     <TextInput
                       size="lg"
                       radius={10}
                       placeholder="أدخل الاسم الكامل *"
                       rightSection={<img src={person} width="20px" />}
                       key={form.key("fullname")}
                       {...form.getInputProps("fullname")}
                     />
                   </GridCol>
                   <GridCol  justify='flex-end' span={{ lg: 6, xs: 12, sm: 12, md: 12 }} >
                     <DatePickerInput
                        size="lg"
                        radius={10}
                        placeholder=" تاريخ الميلاد *"
                        valueFormat="DD/MM/YYYY"
                        rightSection={<img src={calendar} width="20px" />}
                        key={form.key("age")} 
                        {...form.getInputProps("age")} 
                     />
                  </GridCol>
                  <Grid.Col span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
              <Select
                size="lg"
                radius={10}
                fw={600}
                withAsterisk
                placeholder="الجنس"
                data={[
                  { value: 'male', label: 'ذكر' },
                  { value: 'female', label: 'أنثى' }
                ]}
                key={form.key("gender")}
                {...form.getInputProps("gender")}
              />
          </Grid.Col> 
                   <GridCol span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
                     <TextInput
                       size="lg"
                       radius={10}
                       placeholder="أدخل البريد الإلكتروني *"
                       rightSection={<img src={message} width="20px" />}
                       key={form.key("email")}
                       {...form.getInputProps("email")}
                     />
                   </GridCol>
                  
                   <GridCol span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
                      <TextInput
                        size="lg"
                        radius={10}
                        placeholder="أدخل رقم الهاتف *"
                        rightSection={<img src={phone} width="20px" />}
                        key={form.key("phone")}
                        {...form.getInputProps("phone")}
                      />
                    </GridCol>
                   
            <Grid.Col span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
              <Select
                size="lg"
                radius={10}
                fw={600}
                withAsterisk
                placeholder="نوع السكري"
                data={[
                  { value: 'النوع الأول', label: 'النوع الأول' },
                  { value: 'النوع الثاني', label: 'النوع الثاني' },
                  { value: 'سكري الحمل', label: 'سكري الحمل' },
                  { value: 'نوع أخر', label: 'أخرى' }
                ]}
                key={form.key("sugarType")}
                {...form.getInputProps("sugarType")}
              />
          </Grid.Col> 

            
           <Grid.Col span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
               <MultiSelect
                size="lg"
                radius={10}
                fw={600}
                withAsterisk
                placeholder="التاريخ العائلي للمرض"
                data={[
                  { value: 'father', label: 'الأب' },
                  { value: 'mother', label: 'الأم' },
                  { value: 'grandParents', label: 'الأجداد' }
                ]}
                key={form.key("historyOfFamilyDisease")}
                {...form.getInputProps("historyOfFamilyDisease")}
                searchable
                clearable
              />
          </Grid.Col> 


          <Grid.Col span={{ lg: 6, xs: 12, sm: 12, md: 12 }} >
            <DatePickerInput
                 valueFormat="DD/MM/YYYY"
                size="lg"
                radius={10}
                fw={600}
                withAsterisk
                rightSection={<img src={calendar} width="20px" />}
                placeholder="تاريخ اكتشاف المرض"
                key={form.key("historyOfdiseaseDetection")}
                {...form.getInputProps("historyOfdiseaseDetection")}
              />
          </Grid.Col>

                <GridCol span={{ lg: 6, xs: 12, sm: 12, md: 12 }}>
                  <Flex w={'100%'} align={'center'} justify={'space-between'}>
                    <Text>
                       كلمة المرور الخاصة بالحساب   
                    </Text>
                    <PasswordInput
                       w={'50%'}
                       color={'#16aabb'}
                      size="md"
                      radius={10}
                      readOnly
                      value={pw}
                      key={form.key("password")}
                      // {...form.getInputProps("password")}
                      styles={{
                          input: {
                            borderColor: '#16aabb',
                            borderWidth:2,  
                            fontSize:18
                          },
                        }}
                    />
               
                  </Flex>
                    
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
                   <Button fullWidth radius={10}  size="md" type="submit" variant="filled" color="#37A9EF">
                     تأكيد
                   </Button>
                 </Flex>
                 <Grid hiddenFrom="md" gutter={15} my={25}>
                   <GridCol span={12}>
                     <Button fullWidth radius={10} size="lg"  type="submit" variant="filled" color="#37A9EF">
                     {isPending ? (
           <Loader color="white" size="sm" type="dots" />
         ) : (
           "  تأكيد"
         )}
                     </Button>
                   </GridCol>
                   <GridCol span={12}>
                     <Button  fullWidth radius={10} size="lg" variant="outline" color="#8E8E8E" onClick={handleLog}>
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