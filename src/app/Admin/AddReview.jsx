import { Container, Grid, Text, Flex, Title, Button,  TextInput, MultiSelect, Select, Textarea,  Radio, Checkbox, NumberInput, Group } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import React from "react";
import { DatePickerInput } from "@mantine/dates";
import { useEffect, useState } from "react";
import * as yup from 'yup';
// import info from '../../assets/css/info.module.css'
import { Switch } from '@mantine/core';
import { useSelector } from "react-redux";
import backWards from '../../assets/vectors/forward.png'
// import useFetchPatientInfo from "../../useMutation/Admin/useFetchPatientInfo";
// import useUpdatePatientInfo from "../../useMutation/Admin/useUpdatePatientInfo";

const AddReview = () =>{

  const [treatments, setTreatments] = useState([]);
  const [insulinType, setInsulinType] = useState('');
  const [insulinDrugs, setInsulinDrugs] = useState([]);
  const [oralDrugs, setOralDrugs] = useState([]);
  const [insulinInfo, setInsulinInfo] = useState({});
  const [oralInfo, setOralInfo] = useState({});


  const [hasEyeDisease, setHasEyeDisease] = useState(false);
const [selectedEyeDisease, setSelectedEyeDisease] = useState('');
const [isRelatedToDiabetes, setIsRelatedToDiabetes] = useState('');


const [hasHeartDisease, setHasHeartDisease] = useState(false);
const [heartDisease, setHeartDisease] = useState('');
const [heartRelatedToDiabetes, setHeartRelatedToDiabetes] = useState('');

const [hasNeuroDisease, setHasNeuroDisease] = useState(false);
const [neuroDisease, setNeuroDisease] = useState('');
const [neuroRelatedToDiabetes, setNeuroRelatedToDiabetes] = useState('');

  const insulinDrugOptions = [
  { value: "mixtard", label: "ميكستارد" },
  { value: "lantus", label: "لانتوس" },
  { value: "novorapid", label: "نوفورابيد" },
];

const oralDrugOptions = [
  { value: "metformin", label: "ميتفورمين" },
  { value: "glibenclamide", label: "غليبينكلاميد" },
  { value: "gliclazide", label: "غليكلازيد" },
];

const calculateDuration = (unitsPerBox, dailyDose) => {
  if (!unitsPerBox || !dailyDose) return null;
  return Math.floor(unitsPerBox / dailyDose);
};

// const [opened, { open, close }] = useDisclosure(false);
  // const patients = useSelector(state => state.patients.patients);
  // console.log(patients)
  // const [storedPatient,setStoredPatient] = useState(null)
  const [patient, setPatient] = useState({});
  // const {fetchInfo, isPending: isPendingFetch} = useFetchPatientInfo(setPatient);
  // const { updatePatient, isPending } =useUpdatePatientInfo(setPatient);
  // const [isSubmitted, setIsSubmitted] = useState(false);
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

  // useEffect(()=>{
  //   setProgress(isPendingFetch)
  // },[isPendingFetch])

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

// useEffect(() => {
//     fetchInfo(id); 
//     const foundPatient = patients.find(patient => patient.id.toString() === id.toString());
//     console.log(foundPatient)
//     if (foundPatient) {
//       setStoredPatient(foundPatient);
//       console.log(storedPatient)
//     } else {
//       console.warn(`Patient with id ${id} not found`);
//       setStoredPatient(null);
//     }
//   }, [id, patients]); 

//   console.log(patient)
//   console.log(storedPatient)
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
      // console.log('isSbmited ?',isSubmitted);
      // setIsSubmitted(true);
      // updatePatient(patientData);
      // console.log('loading :',isPending) 
    };
    const validated = form.validate();

    if (validated) {
      validated.errors;
    }
    form.reset();
  };

  // useEffect(() => {
  //   if (isSubmitted) {
  //     console.log('loading :',isPending)
  //     setProgress(isPending || isPendingFetch ); 
  //   }
  // }, [isPending,isPendingFetch]);

    return(
        <>
 <form  style={{ width: "100%" }}  onSubmit={form.onSubmit(handleSubmit)}>
        <Grid  px={{base:'0',sm:'md'}} mx={{base:5,sm:40}}  gutter="md" justify="start" mb={20} align="end" dir="rtl" p={0}>
        <Grid.Col justify='end' span={12 } mb={40}  h={20}>    
          </Grid.Col>
          {/* المعلومات الأساسية */}
           <Grid.Col span={{ base:12,sm:6 }}>
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
        <Grid.Col span={12} p={10} my={'lg'}>
            <Text  ta={'right'} size="1.8rem" p={10} bg={'#8e8e8e50'} style={{borderRadius:10}}>
              معلومات عامة
            </Text>
          </Grid.Col>            
           <Grid.Col span={{ base:12,sm:6 }}>
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
<Grid.Col span={{ base:12,sm:6 }}>
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
          
          <Grid.Col span={{ base:12,sm:6 }}>
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
          <Grid.Col span={{ base:12,sm:6 }}>
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
          
          <Grid.Col span={{ base:12,sm:6 }}>
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
          
          <Grid.Col span={{ base:12,sm:6 }}>
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
         {/* معلومات طبية */}
         <Grid.Col span={12} p={10} my={'lg'}>
            <Text  ta={'right'} size="1.8rem" p={10} bg={'#8e8e8e50'} style={{borderRadius:10}}>
              معلومات طبية
            </Text>
          </Grid.Col>   
        <Grid.Col span={{ base:12,sm:6 }}>
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
          <Grid.Col span={{ base:12,sm:6 }}>
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
           
                    <Grid.Col span={{ base:12,sm:6 }}>
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
          
          <Grid.Col span={{ base:12,sm:6 }}>
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
          

          <Grid.Col span={{ base:12,sm:6 }}>
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
          <Grid.Col span={{ base:12,sm:6 }}>
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
          <Grid.Col span={{ base: 12, sm: 6 }}>
            
  <TextInput
    size="md"
    radius={10}
    withAsterisk
    label="الكوليسترول منخفض الكثافة (LDL)"
    placeholder="LDL (mg/dL)"
    key={form.key("ldl")}
    {...form.getInputProps("ldl")}
    styles={{
      label: { textAlign: 'right', marginBottom: 5, width: '98%' }
    }}
  />
</Grid.Col>

<Grid.Col span={{ base: 12, sm: 6 }}>
  <TextInput
    size="md"
    radius={10}
    withAsterisk
    label="الكوليسترول مرتفع الكثافة (HDL)"
    placeholder="HDL (mg/dL)"
    key={form.key("hdl")}
    {...form.getInputProps("hdl")}
    styles={{
      label: { textAlign: 'right', marginBottom: 5, width: '98%' }
    }}
  />
</Grid.Col>

<Grid.Col span={{ base: 12, sm: 6 }}>
  <TextInput
    size="md"
    radius={10}
    withAsterisk
    label="الكرياتينين"
    placeholder="الكرياتينين (mg/dL)"
    key={form.key("creatinine")}
    {...form.getInputProps("creatinine")}
    styles={{
      label: { textAlign: 'right', marginBottom: 5, width: '98%' }
    }}
  />
</Grid.Col>

<Grid.Col span={{ base: 12, sm: 6 }}>
  <TextInput
    size="md"
    radius={10}
    withAsterisk
    label="الغلوكوز في الحالة الطبيعية"
    placeholder="الغلوكوز صيامي (mg/dL)"
    key={form.key("fastingGlucose")}
    {...form.getInputProps("fastingGlucose")}
    styles={{
      label: { textAlign: 'right', marginBottom: 5, width: '98%' }
    }}
  />
</Grid.Col>

<Grid.Col span={{ base: 12, sm: 6 }}>
  <TextInput
    size="md"
    radius={10}
    withAsterisk
    label="الغلوكوز بعد الوجبة"
    placeholder="الغلوكوز بعد الأكل (mg/dL)"
    key={form.key("postMealGlucose")}
    {...form.getInputProps("postMealGlucose")}
    styles={{
      label: { textAlign: 'right', marginBottom: 5, width: '98%' }
    }}
  />
</Grid.Col>

<Grid.Col span={{ base: 12, sm: 6 }}>
  <TextInput
    size="md"
    radius={10}
    withAsterisk
    label="الشحوم الثلاثية"
    placeholder="الشحوم الثلاثية (mg/dL)"
    key={form.key("triglycerides")}
    {...form.getInputProps("triglycerides")}
    styles={{
      label: { textAlign: 'right', marginBottom: 5, width: '98%' }
    }}
  />
</Grid.Col>

<Grid.Col span={{ base: 12, sm: 6 }}>
  <TextInput
    size="md"
    radius={10}
    withAsterisk
    label="الخضاب الغلوكوزي (HbA1c)"
    placeholder="HbA1c (%)"
    key={form.key("hba1c")}
    {...form.getInputProps("hba1c")}
    styles={{
      label: { textAlign: 'right', marginBottom: 5, width: '98%' }
    }}
  />
</Grid.Col>



          <Grid.Col span={12} p={10} my={'lg'}>
            <Text  ta={'right'} size="1.8rem" p={10} bg={'#8e8e8e50'} style={{borderRadius:10}}>
              الدواء
            </Text>
          </Grid.Col> 

          <Grid.Col span={12}>
  <MultiSelect
    label="نوع العلاج"
    placeholder="اختر نوع العلاج"
    data={[
      { value: 'insulin', label: 'أنسولين' },
      { value: 'oral', label: 'خافضات فموية' }
    ]}
    value={treatments}
    onChange={setTreatments}
    styles={{
      label: { textAlign: 'right', marginBottom: 5, width: '98%' }
    }}
  />
</Grid.Col>

{/* أنسولين */}
{treatments.includes('insulin') && (
  <>
    <Grid.Col span={6}>
      <Select
        label="نوع الإنسولين"
        placeholder="اختر النوع"
        data={[
          { value: 'mixed', label: 'مختلط' },
          { value: 'slow', label: 'بطيء' },
          { value: 'fast', label: 'سريع' },
        ]}
        value={insulinType}
        onChange={setInsulinType}
        styles={{ label: { textAlign: 'right', marginBottom: 5 } }}
      />
    </Grid.Col>

    <Grid.Col span={6}>
      <MultiSelect
        label="اسماء الأدوية"
        placeholder="اختر الأدوية"
        data={insulinDrugOptions}
        value={insulinDrugs}
        onChange={setInsulinDrugs}
        searchable
        styles={{ label: { textAlign: 'right', marginBottom: 5 } }}
      />
    </Grid.Col>

    {insulinDrugs.map((drug) => (
      <React.Fragment key={drug}>
        <Grid.Col span={6}>
          <TextInput
            label={`عدد الوحدات في ${drug}`}
            type="number"
            onChange={(e) =>
              setInsulinInfo({
                ...insulinInfo,
                [drug]: {
                  ...insulinInfo[drug],
                  unitsPerBox: Number(e.target.value),
                }
              })
            }
            styles={{ label: { textAlign: 'right', marginBottom: 5 } }}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            label={`الكمية اليومية لـ ${drug}`}
            type="number"
            onChange={(e) =>
              setInsulinInfo({
                ...insulinInfo,
                [drug]: {
                  ...insulinInfo[drug],
                  dailyDose: Number(e.target.value),
                }
              })
            }
            styles={{ label: { textAlign: 'right', marginBottom: 5 } }}
          />
          <Text size="sm" mt={5} style={{ textAlign: 'right' }}>
            {insulinInfo[drug]?.unitsPerBox && insulinInfo[drug]?.dailyDose
              ? `يكفي لمدة ${calculateDuration(insulinInfo[drug].unitsPerBox, insulinInfo[drug].dailyDose)} يوم`
              : ''}
          </Text>
        </Grid.Col>
      </React.Fragment>
    ))}
  </>
)}
{treatments.includes('oral') && (
  <>
    <Grid.Col span={12}>
      <MultiSelect
        label="اسماء الأدوية"
        placeholder="اختر الأدوية"
        data={oralDrugOptions}
        value={oralDrugs}
        onChange={setOralDrugs}
        searchable
        styles={{ label: { textAlign: 'right', marginBottom: 5 } }}
      />
    </Grid.Col>

    {oralDrugs.map((drug) => (
      <React.Fragment key={drug}>
        <Grid.Col span={6}>
          <TextInput
            label={`عدد الحبات في ${drug}`}
            type="number"
            onChange={(e) =>
              setOralInfo({
                ...oralInfo,
                [drug]: {
                  ...oralInfo[drug],
                  unitsPerBox: Number(e.target.value),
                }
              })
            }
            styles={{ label: { textAlign: 'right', marginBottom: 5 } }}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            label={`الكمية اليومية لـ ${drug}`}
            type="number"
            onChange={(e) =>
              setOralInfo({
                ...oralInfo,
                [drug]: {
                  ...oralInfo[drug],
                  dailyDose: Number(e.target.value),
                }
              })
            }
            styles={{ label: { textAlign: 'right', marginBottom: 5 } }}
          />
          <Text size="sm" mt={5} style={{ textAlign: 'right' }}>
            {oralInfo[drug]?.unitsPerBox && oralInfo[drug]?.dailyDose
              ? `يكفي لمدة ${calculateDuration(oralInfo[drug].unitsPerBox, oralInfo[drug].dailyDose)} يوم`
              : ''}
          </Text>
        </Grid.Col>
      </React.Fragment>
    ))}
  </>
)}

             <Grid.Col span={12} p={10} my={'lg'}>
            <Text  ta={'right'} size="1.8rem" p={10} bg={'#8e8e8e50'} style={{borderRadius:10}}>
              العيادة العينية
            </Text>
          </Grid.Col> 
         <Grid.Col span={{ base: 12, sm: 6 }}>
  <Checkbox
    label="هل يوجد مرض في العين؟"
    checked={hasEyeDisease}
    onChange={(event) => setHasEyeDisease(event.currentTarget.checked)}
    styles={{
      label: { textAlign: 'right', width: '98%' },
    }}
  />
</Grid.Col>

{hasEyeDisease && (
  <>
    <Grid.Col span={{ base: 12, sm: 6 }}>
      <Select
        label="اختر المرض العيني"
        placeholder="اختر مرضاً"
        data={['اعتلال الشبكية السكري', 'الزرق (الغلوكوما)', 'إعتام عدسة العين', 'جفاف العين', 'أخرى']}
        value={selectedEyeDisease}
        onChange={setSelectedEyeDisease}
        searchable
        clearable
        styles={{
          label: { textAlign: 'right', marginBottom: 5, width: '98%' },
        }}
      />
    </Grid.Col>

    {selectedEyeDisease === 'أخرى' && (
      <Grid.Col span={{ base: 12, sm: 6 }}>
        <TextInput
          label="أدخل اسم المرض العيني"
          placeholder="المرض العيني"
          styles={{
            label: { textAlign: 'right', marginBottom: 5, width: '98%' },
          }}
        />
      </Grid.Col>
    )}

    <Grid.Col span={{ base: 12, sm: 6 }}>
      <Radio.Group
        value={isRelatedToDiabetes}
        onChange={setIsRelatedToDiabetes}
        label="هل يوجد علاقة بين المرض العيني والسكري؟"
        styles={{
          label: { textAlign: 'right', marginBottom: 5, width: '98%' },
        }}
      >
        <Radio value="نعم" label="نعم" />
        <Radio value="لا" label="لا" />
      </Radio.Group>
    </Grid.Col>

    <Grid.Col span={{ base: 12 }}>
      <Textarea
        size="md"
        radius={10}
        label="ملاحظات"
        placeholder="أدخل أي ملاحظات متعلقة بالحالة العينية"
        autosize
        minRows={3}
        styles={{
          label: { textAlign: 'right', marginBottom: 5, width: '98%' },
        }}
      />
    </Grid.Col>
    </>
)}
        <Grid.Col span={12} p={10} my={'lg'}>
  <Text ta="right" size="1.8rem" p={10} bg="#8e8e8e50" style={{ borderRadius: 10 }}>
    العيادة القلبية
  </Text>
</Grid.Col>

<Grid.Col span={{ base: 12, sm: 6 }}>
  <Checkbox
    label="هل يوجد مرض قلبي؟"
    checked={hasHeartDisease}
    onChange={(e) => setHasHeartDisease(e.currentTarget.checked)}
    styles={{ label: { textAlign: 'right', width: '98%' } }}
  />
</Grid.Col>

{hasHeartDisease && (
  <>
    <Grid.Col span={{ base: 12, sm: 6 }}>
      <Select
        label="اختر المرض القلبي"
        placeholder="اختر مرضاً"
        data={['قصور القلب', 'ارتفاع الضغط الرئوي', 'أمراض الشرايين التاجية', 'عدم انتظام ضربات القلب', 'أخرى']}
        value={heartDisease}
        onChange={setHeartDisease}
        searchable
        clearable
        styles={{ label: { textAlign: 'right', marginBottom: 5, width: '98%' } }}
      />
    </Grid.Col>

    {heartDisease === 'أخرى' && (
      <Grid.Col span={{ base: 12, sm: 6 }}>
        <TextInput
          label="أدخل اسم المرض القلبي"
          placeholder="المرض القلبي"
          styles={{ label: { textAlign: 'right', marginBottom: 5, width: '98%' } }}
        />
      </Grid.Col>
    )}

    <Grid.Col span={{ base: 12, sm: 6 }}>
      <Radio.Group
        value={heartRelatedToDiabetes}
        onChange={setHeartRelatedToDiabetes}
        label="هل يوجد علاقة بين المرض القلبي والسكري؟"
        styles={{ label: { textAlign: 'right', marginBottom: 5, width: '98%' } }}
      >
        <Radio value="نعم" label="نعم" />
        <Radio value="لا" label="لا" />
      </Radio.Group>
    </Grid.Col>

    <Grid.Col span={{ base: 12 }}>
      <Textarea
        size="md"
        radius={10}
        label="ملاحظات"
        placeholder="أدخل أي ملاحظات متعلقة بالحالة القلبية"
        autosize
        minRows={3}
        styles={{ label: { textAlign: 'right', marginBottom: 5, width: '98%' } }}
      />
    </Grid.Col>
  </>
)}

<Grid.Col span={12} p={10} my={'lg'}>
  <Text ta="right" size="1.8rem" p={10} bg="#8e8e8e50" style={{ borderRadius: 10 }}>
    العيادة العصبية
  </Text>
</Grid.Col>

<Grid.Col span={{ base: 12, sm: 6 }}>
  <Checkbox
    label="هل يوجد مرض عصبي؟"
    checked={hasNeuroDisease}
    onChange={(e) => setHasNeuroDisease(e.currentTarget.checked)}
    styles={{ label: { textAlign: 'right', width: '98%' } }}
  />
</Grid.Col>

{hasNeuroDisease && (
  <>
    <Grid.Col span={{ base: 12, sm: 6 }}>
      <Select
        label="اختر المرض العصبي"
        placeholder="اختر مرضاً"
        data={['الاعتلال العصبي السكري', 'الصرع', 'السكتة الدماغية', 'التصلب اللويحي', 'أخرى']}
        value={neuroDisease}
        onChange={setNeuroDisease}
        searchable
        clearable
        styles={{ label: { textAlign: 'right', marginBottom: 5, width: '98%' } }}
      />
    </Grid.Col>

    {neuroDisease === 'أخرى' && (
      <Grid.Col span={{ base: 12, sm: 6 }}>
        <TextInput
          label="أدخل اسم المرض العصبي"
          placeholder="المرض العصبي"
          styles={{ label: { textAlign: 'right', marginBottom: 5, width: '98%' } }}
        />
      </Grid.Col>
    )}

    <Grid.Col span={{ base: 12, sm: 6 }}>
      <Radio.Group
        value={neuroRelatedToDiabetes}
        onChange={setNeuroRelatedToDiabetes}
        label="هل يوجد علاقة بين المرض العصبي والسكري؟"
        styles={{ label: { textAlign: 'right', marginBottom: 5, width: '98%' } }}
      >
        <Radio value="نعم" label="نعم" />
        <Radio value="لا" label="لا" />
      </Radio.Group>
    </Grid.Col>

    <Grid.Col span={{ base: 12 }}>
      <Textarea
        size="md"
        radius={10}
        label="ملاحظات"
        placeholder="أدخل أي ملاحظات متعلقة بالحالة العصبية"
        autosize
        minRows={3}
        styles={{ label: { textAlign: 'right', marginBottom: 5, width: '98%' } }}
      />
    </Grid.Col>
  </>
)}
          <Grid.Col span={12} p={10} my={'lg'}>
            <Text  ta={'right'} size="1.8rem" p={10} bg={'#8e8e8e50'} style={{borderRadius:10}}>
              عيادات أخرى
            </Text>
          </Grid.Col> 
          <Grid.Col span={{ base:12,sm:6 }}>
            <TextInput
              size="lg"
              radius={10}
              withAsterisk
              label="ملاحظات"
              styles={{
                label: {
                  textAlign: 'right',
                  marginBottom:5,
                  width: '98%',
                }
              }}
            />
          </Grid.Col>
          <Grid.Col span={{ base:12,sm:12 }}>
            <Switch
              size="md"
              label="اكتمال الملف الطبي"
              key={form.key("isCompleted")}
              {...form.getInputProps('isCompleted', { type: 'checkbox' })}
              labelPosition="right"
            />
          </Grid.Col>
          <Grid.Col ta={'start'} span={{ base:12,sm:6 }}>
          <Button 
            fullWidth 
            radius={10} 
            size="md" 
            type="submit" 
            variant="filled" 
            color="#37A9EF"
            // loading={isPending}
            // disabled={isPending}
          >
          حسنا
          </Button>
          </Grid.Col>
        </Grid>
        
          
      </form>
        </>
    )
}
export default AddReview