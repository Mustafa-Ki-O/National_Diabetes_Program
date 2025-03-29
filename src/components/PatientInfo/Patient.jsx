import { Container, Grid, Text, Flex, Anchor, Button,  TextInput, Select, Image, Checkbox, NumberInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { DatePickerInput } from "@mantine/dates";
import { useEffect, useState } from "react";
import * as yup from 'yup';
import { Switch } from '@mantine/core';
import useFetchPatientInfo from "../../useMutation/Admin/useFetchPatientInfo";
import useUpdatePatientInfo from "../../useMutation/Admin/useUpdatePatientInfo";
import backWards from '../../assets/vectors/backwards.png'
import { useNavigate } from "react-router"

const Patient = ({ id , setProgress}) => {


  const navigate=useNavigate();
  const [patient, setPatient] = useState({});
  const {fetchInfo, isLoading: isLoadingFetch} = useFetchPatientInfo(setPatient);
  const { updatePatient, isLoading } =useUpdatePatientInfo(setPatient);
  useEffect(() => {
    console.log('Current loading state:', isLoading);
    console.log('Current loadingF state:', isLoadingFetch);
  }, [isLoading,isLoadingFetch]);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const schema = yup.object().shape({
    fullName: yup.string().required('الاسم مطلوب').test('name','يجب أن يكون الاسم خالٍ من الأرقام ويحتوي على 2 محارف على الأقل',(val) => /^[\u0600-\u06FFA-Za-z\s]{2,}$/.test(val)),
    id_number: yup.string().matches(/^\d{11}$/, 'الرقم الوطني يجب أن يحوي 11 رقم'),
    email: yup.string().required("ايميل غير صالح").email("ايميل غير صالح"),
    phone: yup.string().matches(/^09[0-9]{8}$/, "الرقم يبدأ ب 09 ويجب ان يكون صالحا"),
    date: yup.string().nullable(),
    bloodSugar: yup.string().nullable(),
    gender: yup.string().nullable(),
    address_patient: yup.string().nullable(),
    weight: yup.string().nullable(),
    length_patient: yup.string().nullable(),
    sugarType: yup.string().nullable(),
    hemoglobin: yup.string().nullable(),
    bloodPressure: yup.string().nullable(),
    typeOfMedicine: yup.string().nullable(),
    cholesterol: yup.string().nullable(),
    grease: yup.string().nullable(),
    urineAcid: yup.string().nullable(),
    otherDisease: yup.string().nullable(),
    diseaseDetection:yup.string().nullable(),
    historyOfFamilyDisease:yup.string().nullable(),
    isCompleted: yup.boolean().required('حالة الإكمال مطلوبة'),
  });

  useEffect(()=>{
    setProgress(isLoadingFetch)
    console.log('progress fetch',isLoadingFetch)
  },[])

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

  // useEffect(()=>{
  //   setPatient(info)
  //   console.log(patient)
  // },[patient])

  useEffect(()=>{
    fetchInfo(id);
  },[id])

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
      setIsSubmitted(true);
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
      updatePatient(patientData);
      console.log('loading :',isLoading) 
    };
    const validated = form.validate();

    if (validated) {
      validated.errors;
    }
    form.reset();
  };

  useEffect(() => {
    if (isSubmitted) {
      console.log('loading :',isLoading)
      setProgress(isLoading ); // Include both loading states
    }
  }, [isLoading]);




  return (
    <Container w='100%' fluid>
      <div style={{position:'absolute',top:2,right:30,padding:5,borderRadius:'50%',border:'1px solid #37a8ef',direction:'ltr'}}>
        <Image  src={backWards} w={20} onClick={()=>navigate('/National_Diabetes_Program/home')}/>
      </div>
      <form style={{ width: "100%" }}  onSubmit={form.onSubmit(handleSubmit)}>
        <Grid gutter="lg" justify="center" mt={80} mb={20} align="center" dir="rtl">
          {/* المعلومات الأساسية */}
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <TextInput
              size="md"
              radius={10}
              // readOnly
              placeholder="رقم الهوية الوطني"
              key={form.key("id_number")}
              {...form.getInputProps("id_number")}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <TextInput
              size="md"
              radius={10}
              readOnly
              placeholder="الاسم الكامل"
              key={form.key("fullName")}
              {...form.getInputProps("fullName")}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <TextInput
              size="md"
              radius={10}
            //   value={email}
              // readOnly
              placeholder="البريد الإلكتروني"
              key={form.key("email")}
              {...form.getInputProps("email")}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <TextInput
              size="md"
              radius={10}
              // readOnly
            //   value={phone}
              placeholder="رقم الهاتف"
              key={form.key("phone")}
              {...form.getInputProps("phone")}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <DatePickerInput
              size="md"
              radius={10}
              // readOnly
              placeholder="تاريخ الميلاد"
              valueFormat="DD/MM/YYYY"
              key={form.key("date")}
              {...form.getInputProps("date")}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <Select
              size="md"
              radius={10}
            //   value={gender}
              placeholder="الجنس"
              data={[
                { value: 'male', label: 'ذكر' },
                { value: 'female', label: 'أنثى' }
              ]}
              key={form.key("gender")}
              {...form.getInputProps("gender")}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <TextInput
              size="md"
              radius={10}
            //   value={address_patient}
              placeholder="العنوان"
              key={form.key("address_patient")}
              {...form.getInputProps("address_patient")}
            />
          </Grid.Col>

          {/* المعلومات الطبية */}
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <TextInput
              size="md"
              radius={10}
            //   value={bloodSugar}
              placeholder="سكر الدم (mg/dL)"
              key={form.key("bloodSugar")}
              {...form.getInputProps("bloodSugar")}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
          <TextInput
              size="md"
              radius={10}
            //   value={weight}
              placeholder="الوزن (kg)"
              key={form.key("weight")}
              {...form.getInputProps("weight")}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
          <TextInput
              size="md"
              radius={10}
            //   value={length_patient}
              placeholder="الطول (cm)"
              key={form.key("length_patient")}
              {...form.getInputProps("length_patient")}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <Select
              size="md"
              radius={10}
            //   value={sugarType}
              placeholder="نوع السكري"
              data={[
                { value: 'type1', label: 'النوع الأول' },
                { value: 'type2', label: 'النوع الثاني' },
                { value: 'gestational', label: 'سكري الحمل' },
                { value: 'other', label: 'أخرى' }
              ]}
              key={form.key("sugarType")}
              {...form.getInputProps("sugarType")}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
          <TextInput
              size="md"
              radius={10}
            //   value={hemoglobin}
              placeholder="الهيموجلوبين (%)"
              key={form.key("hemoglobin")}
              {...form.getInputProps("hemoglobin")}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <TextInput
              size="md"
              radius={10}
            //   value={bloodPressure}
              placeholder="ضغط الدم (mmHg)"
              key={form.key("bloodPressure")}
              {...form.getInputProps("bloodPressure")}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <TextInput
              size="md"
              radius={10}
            //   value={typeOfMedicine}
              placeholder="نوع الدواء"
              key={form.key("typeOfMedicine")}
              {...form.getInputProps("typeOfMedicine")}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
          <TextInput
              size="md"
              radius={10}
            //   value={cholesterol}
              placeholder="الكوليسترول (mg/dL)"
              key={form.key("cholesterol")}
              {...form.getInputProps("cholesterol")}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
          <TextInput
              size="md"
              radius={10}
            //   value={grease}
              placeholder="الدهون (mg/dL)"
              key={form.key("grease")}
              {...form.getInputProps("grease")}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
          <TextInput
              size="md"
              radius={10}
              
            //   value={urineAcid}
              placeholder="حمض البوليك (mg/dL)"
              key={form.key("urineAcid")}
              {...form.getInputProps("urineAcid")}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <TextInput
              size="md"
              radius={10}
            //   value={otherDisease}
              placeholder="أمراض أخرى"
              key={form.key("otherDisease")}
              {...form.getInputProps("otherDisease")}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <TextInput
              size="md"
              radius={10}
            //   value={otherDisease}
              placeholder='التاريخ العائلي للمرض'
              key={form.key("historyOfFamilyDisease")}
              {...form.getInputProps("historyOfFamilyDisease")}
            />
          </Grid.Col>
          
          <Grid.Col span={{ lg: 4, xs: 12, sm: 12, md: 4 }}>
            <TextInput
              size="md"
              radius={10}
            //   value={otherDisease}
              placeholder='تاريخ اكتشاف المرض'
              key={form.key("diseaseDetection")}
              {...form.getInputProps("diseaseDetection")}
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
        
        <Grid  my={15}>
          <Grid.Col span={4}>
          <Button 
            fullWidth 
            radius={10} 
            size="md" 
            type="submit" 
            variant="filled" 
            color="#37A9EF"
            loading={isLoading}
            disabled={isLoading}
          >
            {isLoading ? 'جاري الحفظ...' : 'حفظ التعديلات'}
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