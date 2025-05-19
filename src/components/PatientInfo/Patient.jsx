import { Container, Grid, Text, Flex, Title, Button,  TextInput, Select, Image, Checkbox, NumberInput, Group } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { DatePickerInput } from "@mantine/dates";
import { useEffect, useState } from "react";
import * as yup from 'yup';
import info from '../../assets/css/info.module.css'
import { Switch } from '@mantine/core';
import useFetchPatientInfo from "../../useMutation/Admin/useFetchPatientInfo";
import useUpdatePatientInfo from "../../useMutation/Admin/useUpdatePatientInfo";
import backWards from '../../assets/vectors/forward.png'
import accountIcon from '../../assets/vectors/account.svg'
import removeIcon from '../../assets/vectors/Remove.svg'
import addIcon from '../../assets/vectors/Add.svg'
import { useNavigate } from "react-router"
import { useSelector } from "react-redux";
import dayjs from "dayjs";
const Patient = ({ id , setProgress}) => {

  const patients = useSelector(state => state.patients.patients);
  console.log(patients)
  const [storedPatient,setStoredPatient] = useState(null)
  const navigate=useNavigate();
  const [patient, setPatient] = useState({});
  const {fetchInfo, isPending: isPendingFetch} = useFetchPatientInfo(setPatient);
  const { updatePatient, isPending } =useUpdatePatientInfo(setPatient);
 

  const [isSubmitted, setIsSubmitted] = useState(false);
  const schema = yup.object().shape({
    fullName: yup.string().required('الاسم مطلوب').test('name','يجب أن يكون الاسم خالٍ من الأرقام ويحتوي على 2 محارف على الأقل',(val) => /^[\u0600-\u06FFA-Za-z\s]{2,}$/.test(val)),
    id_number: yup.string().matches(/^\d{11}$/, 'الرقم الوطني يجب أن يحوي 11 رقم'),
    email: yup.string().required("ايميل غير صالح").email("ايميل غير صالح"),
    phone: yup.string().matches(/^09[0-9]{8}$/, "الرقم يبدأ ب 09 ويجب ان يكون صالحا"),
    date: yup.string().required('يجب ادخال تاريخ'),
    bloodSugar: yup.string().required('يجب ادخال رقم'),
    gender: yup.string().required(),
    address_patient: yup.string().required(),
    weight: yup.string().required('يجب ادخال رقم'),
    length_patient: yup.string().required('يجب ادخال رقم'),
    sugarType: yup.string().required('يجب ادخال رقم'),
    hemoglobin: yup.string().required('يجب ادخال رقم'),
    bloodPressure: yup.string().required('يجب ادخال رقم'),
    typeOfMedicine: yup.string().required('يجب ادخال رقم'),
    cholesterol: yup.string().required('يجب ادخال رقم'),
    grease: yup.string().required('يجب ادخال رقم'),
    urineAcid: yup.string().required('يجب ادخال رقم'),
    otherDisease: yup.string().required(),
    diseaseDetection:yup.string().required('يجب ادخال تاريخ'),
    historyOfFamilyDisease:yup.string().required(),
    isCompleted: yup.boolean().required('حالة الإكمال مطلوبة'),
  });

  useEffect(()=>{
    setProgress(isPendingFetch)
  },[isPendingFetch])

  const form = useForm({
    mode: "uncontrolled",
    validateInputOnChange: true,
    initialValues: {
    // id:parseInt(id),
    id_number:  '',
    fullName:  '', 
    email: '',
    phone:  '',
    date: '',
    bloodSugar:  '',
    gender:  '',
    address_patient:  '',
    weight:  '',
    length_patient:  '',
    sugarType:  '',
    hemoglobin:  '',
    bloodPressure:  '',
    typeOfMedicine:  '',
    cholesterol:  '',
    grease: '',
    urineAcid:  '',
    otherDisease: '',
    diseaseDetection:'',
    historyOfFamilyDisease:'',
    isCompleted: ''
    },
    validate: yupResolver(schema),
  });

useEffect(() => {
    fetchInfo(id); 
    const foundPatient = patients.find(patient => patient.id.toString() === id.toString());
    console.log(foundPatient)
    if (foundPatient) {
      setStoredPatient(foundPatient);
      console.log(storedPatient)
    } else {
      console.warn(`Patient with id ${id} not found`);
      setStoredPatient(null);
    }
  }, [id, patients]); 

  console.log(patient)
  console.log(storedPatient)
  useEffect(() => {
    if (patient) {
      form.setValues({
        id:patient.id,
        id_number: patient.id_number,
        fullName: patient.fullName,
        email: patient.email,
        phone: patient.phone,
        date: patient.date ? new Date(patient.date) : null,
        bloodSugar: patient.bloodSugar,
        gender: patient.gender,
        address_patient: patient.address_patient,
        weight: patient.weight,
        length_patient: patient.length_patient,
        sugarType: patient.sugarType,
        hemoglobin: patient.hemoglobin,
        bloodPressure: patient.bloodPressure,
        typeOfMedicine: patient.typeOfMedicine,
        cholesterol: patient.cholesterol,
        grease: patient.grease,
        urineAcid: patient.urineAcid,
        otherDisease: patient.otherDisease,
        diseaseDetection: patient.diseaseDetection,
        historyOfFamilyDisease: patient.historyOfFamilyDisease,
        isCompleted: patient.isCompleted
      });
    }
  }, [patient]); 

  const handleSubmit = (values) => {
    if (form.isValid) {
        
        const patientData = {
        id: parseInt(values.id),
        id_number: values.id_number,
        fullName: values.fullName,
        email: values.email,
        phone: values.phone,
        bloodSugar: values.bloodSugar,
        gender: values.gender,
        address_patient: values.address_patient,
        weight: values.weight,
        length_patient: values.length_patient,
        sugarType: values.sugarType,
        hemoglobin: values.hemoglobin,
        bloodPressure: values.bloodPressure,
        typeOfMedicine: values.typeOfMedicine,
        cholesterol: values.cholesterol,
        grease: values.grease,
        urineAcid: values.urineAcid,
        otherDisease: values.otherDisease,
        diseaseDetection:values.diseaseDetection,
        historyOfFamilyDisease:values.historyOfFamilyDisease,
        isCompleted: Boolean(values.isCompleted)
      };
      console.log('isSbmited ?',isSubmitted);
      setIsSubmitted(true);
      updatePatient(patientData);
      console.log('loading :',isPending) 
    };
    const validated = form.validate();

    if (validated) {
      validated.errors;
    }
    form.reset();
  };

  useEffect(() => {
    if (isSubmitted) {
      console.log('loading :',isPending)
      setProgress(isPending || isPendingFetch ); 
    }
  }, [isPending,isPendingFetch]);


  return (
    <Container w='100%' fluid >
      <Grid gutter={40}  px={'lg'} mb={'3rem'} >
        <Grid.Col span={12}>

          <Flex align='center' gap={10} justify='end'>
             <Title size="2rem" >{storedPatient?.fullname}</Title>
            <Image src={accountIcon} w={'5rem'} /> 
         </Flex>  
        </Grid.Col>
         <Grid.Col  span={12} mt={'md'}>
          <Text size={'1.1rem'}  ta={'end'} mb={'md'}>
             الرقم الوطني
          </Text>
         <Title size={'1.8rem'} ta={'end'} px={'lg'}>
            {storedPatient?.id_number}
         </Title>
        </Grid.Col>
         <Grid.Col  span={12} >
          <Text size={'1.1rem'}  ta={'end'} mb={'md'}>
             تاريخ الميلاد
          </Text>
          <Flex justify={'end'} gap={'2.5rem'} px={'lg'} align={'center'}>
            <Group  p={0} m={0}>
             <Text  size={'1.5rem'} c={'#00000060'}>
            { `${new Date().getFullYear() - new Date(storedPatient?.age).getFullYear()}` >= 10 ? 'سنة' : 'سنوات' }
            </Text>
             <Text size={'1.5rem'} c={'#00000060'}>
              {new Date().getFullYear() - new Date(storedPatient?.age).getFullYear()}  
             </Text>
            </Group> 
            <Title size={'1.8rem'} ta={'end'} >
            {storedPatient?.age}
         </Title>
          </Flex>
        </Grid.Col>
          <Grid.Col  span={12} mt={'md'}>
          <Text size={'1.1rem'}  ta={'end'} mb={'md'}>
             تاريخ التسجيل
          </Text>
         <Title size={'1.8rem'} ta={'end'} px={'lg'}>
            {storedPatient?.regDate ? storedPatient?.regDate : 'DD-MM-YYYY' }
         </Title>
        </Grid.Col>
          <Grid.Col  span={{base:12,sm:6}} >
          <Text size={'1.1rem'}  ta={'end'} mb={'md'}>
             الفحص السريري
          </Text>
         <Title size={'1.8rem'} ta={'end'} px={'lg'}>
            { `مكتمل في ${storedPatient?.firstVisitDate ? storedPatient?.firstVisitDate : 'DD-MM-YYYY  تاريخ اول مراجعة'}` }
         </Title>
        </Grid.Col>
        <Grid.Col  span={{base:12,sm:6}} >
          <Text size={'1.1rem'}  ta={'end'} mb={'md'}>
             نوع السكري
          </Text>
         <Title size={'1.8rem'} ta={'end'} px={'lg'}>
            {storedPatient?.sugarType ? storedPatient?.sugarType : 'غير محدد' }
         </Title>
        </Grid.Col>
          <Grid.Col span={12} p={10} my={'lg'}>
            <Text  ta={'right'} size="1.8rem" p={10} bg={'#8e8e8e50'} style={{borderRadius:10}}>
              المراجعات
            </Text>
          </Grid.Col>
 
           <Grid.Col  span={12} >
             {storedPatient?.review.map((r,index)=>(
            <Flex justify={'space-between'} my={'md'} py={30}  bg={'#fff'} bd={'1px solid #00000040'} style={{borderRadius:20,cursor:'pointer'}}>
          <Group ml={20}>
            <Button radius={20} size="سة" variant="light" color="red">
              <Image src={removeIcon} w={25} />
            </Button>
         <Title size={'1.8rem'} ta={'end'} px={'lg'}>
            {r.create_At}
          </Title>
          </Group>
          <Title size={'1.8rem'} ta={'end'} px={'lg'}>
            {r.id == 1 ? '(المراجعة 1  (الفحص السريري' :`  ${r.id} المراجعة ` }
          </Title>
            </Flex>
          ))}
            
        </Grid.Col> 
         <Grid.Col  span={12} >
          <Button radius={10} size="md" variant="filled" color={'#37A9EF'} style={{alignSelf:'end'}}>
            اضافة مراجعة
             <Image src={addIcon} w={25}  mx={10}/>
          </Button>
         </Grid.Col>
         <Grid.Col span={12} p={10} my={'sm'}>
            <Text  ta={'right'} size="1.8rem" p={10} bg={'#8e8e8e50'} style={{borderRadius:10}}>
              معلومات التواصل
            </Text>
          </Grid.Col>
           <Grid.Col  span={12} >
          <Text size={'1.1rem'}  ta={'end'} mb={'md'}>
             الايميل
          </Text>
         <Title size={'1.8rem'} ta={'end'} px={'lg'}>
            {storedPatient?.email}
         </Title>
        </Grid.Col>
        <Grid.Col  span={12} mb={50}>
         <Text size={'1.1rem'}  ta={'end'} mb={'md'}>
             رقم الهاتف
          </Text>
         <Title size={'1.8rem'} ta={'end'} px={'lg'}>
            {storedPatient?.phone}
         </Title>
        </Grid.Col>
      </Grid>
      <form  style={{ width: "100%" }}  onSubmit={form.onSubmit(handleSubmit)}>
        <Grid display={'none'} gutter="sm" justify="center" mb={20} align="center" dir="rtl" p={0}>
        <Grid.Col justify='end' span={12 } mb={40}  h={20}>
          <Flex align='center' gap={10}  onClick={()=>navigate('/National_Diabetes_Program/home')} style={{cursor:'pointer'}}>  
            <Image className={info.back} style={{borderRadius:'50%',border:'1px solid #37a8ef'}} src={backWards} w={20} />
            <Text mb={6}> رجوع</Text>
          </Flex>
        
          </Grid.Col>
          {/* المعلومات الأساسية */}
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <TextInput
              label="رقم الهوية الوطني"
              size="md"
              disabled
              radius={10}
              placeholder="رقم الهوية الوطني"
              key={form.key("id_number")}
              {...form.getInputProps("id_number")}
              styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                  width: '98%',
                }
              }}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <TextInput
              size="md"
              label="الاسم الكامل"
              disabled
              radius={10}
              placeholder="الاسم الكامل"
              key={form.key("fullName")}
              {...form.getInputProps("fullName")}
              styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                  width: '98%',
                }
              }}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <TextInput
              disabled
              size="md"
              radius={10}
              label="البريد الإلكتروني"
              key={form.key("email")}
              {...form.getInputProps("email")}
              styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                  width: '98%',
                }
              }}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <TextInput
            disabled
              size="md"
              radius={10}
              label="رقم الهاتف"
              key={form.key("phone")}
              {...form.getInputProps("phone")}
              styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                  width: '98%',
                }
              }}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <DatePickerInput
              size="md"
              radius={10}
              disabled
              label="تاريخ الميلاد"
              valueFormat="DD/MM/YYYY"
              key={form.key("date")}
              {...form.getInputProps("date")}
              styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                  width: '98%',
                }
              }}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <Select
              withAsterisk
              size="md"
              radius={10}
              label="الجنس"
              placeholder="الجنس"
              data={[
                { value: 'male', label: 'ذكر' },
                { value: 'female', label: 'أنثى' }
              ]}
              key={form.key("gender")}
              {...form.getInputProps("gender")}
              styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                  width: '98%',
                }
              }}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <TextInput
            withAsterisk
              size="md"
              radius={10}
              label='العنوان'
              placeholder="العنوان"
              key={form.key("address_patient")}
              {...form.getInputProps("address_patient")}
              styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                  width: '98%',
                }
              }}
            />
          </Grid.Col>

          {/* المعلومات الطبية */}
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <TextInput
              withAsterisk
              size="md"
              radius={10}
            //   value={bloodSugar}
              label='سكر الدم'
              placeholder="سكر الدم (mg/dL)"
              key={form.key("bloodSugar")}
              {...form.getInputProps("bloodSugar")}
              styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                  width: '98%',
                }
              }}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
          <TextInput
              size="md"
              radius={10}
              withAsterisk
              label='الوزن'
              placeholder="الوزن (kg)"
              key={form.key("weight")}
              {...form.getInputProps("weight")}
              styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                  width: '98%',
                }
              }}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
          <TextInput
              size="md"
              radius={10}
              withAsterisk
              label="الطول"
              placeholder="الطول (cm)"
              key={form.key("length_patient")}
              {...form.getInputProps("length_patient")}
              styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                  width: '98%',
                }
              }}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <Select
              size="md"
              radius={10}
              withAsterisk
              label="نوع السكري"
              placeholder="نوع السكري"
              data={[
                { value: 'النوع الأول', label: 'النوع الأول' },
                { value: 'النوع الثاني', label: 'النوع الثاني' },
                { value: 'سكري الحمل', label: 'سكري الحمل' },
                { value: 'نوع أخر', label: 'أخرى' }
              ]}
              key={form.key("sugarType")}
              {...form.getInputProps("sugarType")}
              styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                  width: '98%',
                }
              }}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
          <TextInput
              size="md"
              radius={10}
              withAsterisk
              label="الهيموجلوبين (%)"
              placeholder="الهيموجلوبين (%)"
              key={form.key("hemoglobin")}
              {...form.getInputProps("hemoglobin")}
              styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                  width: '98%',
                }
              }}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <TextInput
              size="md"
              radius={10}
              withAsterisk
              label="ضغط الدم (mmHg)"
              placeholder="ضغط الدم (mmHg)"
              key={form.key("bloodPressure")}
              {...form.getInputProps("bloodPressure")}
              styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                  width: '98%',
                }
              }}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <TextInput
              size="md"
              radius={10}
              withAsterisk
              label="نوع الدواء"
              placeholder="نوع الدواء"
              key={form.key("typeOfMedicine")}
              {...form.getInputProps("typeOfMedicine")}
              styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                  width: '98%',
                }
              }}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
          <TextInput
              size="md"
              radius={10}
            withAsterisk
              label="الكوليسترول"
              placeholder="الكوليسترول (mg/dL)"
              key={form.key("cholesterol")}
              {...form.getInputProps("cholesterol")}
              styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                  width: '98%',
                }
              }}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
          <TextInput
              size="md"
              radius={10}
              withAsterisk
              label="الدهون"
              placeholder="الدهون (mg/dL)"
              key={form.key("grease")}
              {...form.getInputProps("grease")}
              styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                  width: '98%',
                }
              }}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
          <TextInput
              size="md"
              radius={10}
              
             withAsterisk
              label="حمض البوليك"
              placeholder="حمض البوليك (mg/dL)"
              key={form.key("urineAcid")}
              {...form.getInputProps("urineAcid")}
              styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                  width: '98%',
                }
              }}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <TextInput
              size="md"
              radius={10}
            withAsterisk
              label="امراض اخرى"
              placeholder="أمراض أخرى"
              key={form.key("otherDisease")}
              {...form.getInputProps("otherDisease")}
              styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                  width: '98%',
                }
              }}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <TextInput
              size="md"
              radius={10}
              withAsterisk
              label="التاريخ العائلي للمرض"
              placeholder='التاريخ العائلي للمرض'
              key={form.key("historyOfFamilyDisease")}
              {...form.getInputProps("historyOfFamilyDisease")}
              styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                  width: '98%',
                }
              }}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <TextInput
              size="md"
              radius={10}
              withAsterisk
              label="تاريخ اكتشاف المرض"
              placeholder='تاريخ اكتشاف المرض'
              key={form.key("diseaseDetection")}
              {...form.getInputProps("diseaseDetection")}
              styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                  width: '98%',
                }
              }}
            />
          </Grid.Col>
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <Switch
              size="md"
            //   value={isCompleted}
              label="اكتمال الملف الطبي"
              key={form.key("isCompleted")}
              {...form.getInputProps('isCompleted', { type: 'checkbox' })}
              labelPosition="right"
            />
          </Grid.Col>
        </Grid>
        
        <Grid display={'none'} my={15}>
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
          <Button 
            fullWidth 
            radius={10} 
            size="md" 
            type="submit" 
            variant="filled" 
            color="#37A9EF"
            loading={isPending}
            disabled={isPending}
          >
            {isPending ? 'جاري الحفظ...' : 'حفظ التعديلات'}
          </Button>
          </Grid.Col>
        </Grid>
      </form>
    </Container>
  );
}
// ارجاع مصفوفة المعلومات المعدلة في الريسبونس
// تاريخ اكتشاف المرض
// 
export default Patient;