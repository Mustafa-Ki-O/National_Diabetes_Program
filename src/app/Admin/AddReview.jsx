// import { Container, Grid, Text, Flex, Title, Button,  TextInput, MultiSelect, Select, Textarea,  Radio, Checkbox, NumberInput, Group, useStyles } from "@mantine/core";
// import { useForm, yupResolver } from "@mantine/form";
// import React from "react";
// import { DatePickerInput } from "@mantine/dates";
// import { useEffect, useState } from "react";
// import * as yup from 'yup';
// import '../../assets/css/addReview.css'
// import { Switch } from '@mantine/core';
// import { useSelector } from "react-redux";
// import backWards from '../../assets/vectors/forward.png'
// import { useParams } from "react-router";
// import dayjs from "dayjs";
// import useAddReview from "../../useMutation/Admin/useAddReview";
// import UpScroll from "../../components/general/UpScroll";
// // import useFetchPatientInfo from "../../useMutation/Admin/useFetchPatientInfo";
// // import useUpdatePatientInfo from "../../useMutation/Admin/useUpdatePatientInfo";

// const AddReview = () =>{
//   UpScroll()
//   const patients = useSelector(store => store.patients.patients)
//   const {id} = useParams()
//   const {addReview,isPending} = useAddReview(id);
//   const [storedPatient,setStoredPatient] = useState(null)

//   const[history,setHistory] = useState([])

  
//   const [diabetesDetection, setDiabetesDetection] = useState();

//   const [treatments, setTreatments] = useState([]);
//   const [insulinType, setInsulinType] = useState('');
//   const [insulinDrugs, setInsulinDrugs] = useState([]);
//   const [oralDrugs, setOralDrugs] = useState([]);
//   const [insulinInfo, setInsulinInfo] = useState({});
//   const [oralInfo, setOralInfo] = useState({});


//   const [hasEyeDisease, setHasEyeDisease] = useState(false);
//   const [selectedEyeDisease, setSelectedEyeDisease] = useState('');
//   const [isRelatedToDiabetes, setIsRelatedToDiabetes] = useState('');
  
  
//   const [hasHeartDisease, setHasHeartDisease] = useState(false);
//   const [heartDisease, setHeartDisease] = useState('');
//   const [heartRelatedToDiabetes, setHeartRelatedToDiabetes] = useState('');
  
//   const [hasNeuroDisease, setHasNeuroDisease] = useState(false);
//   const [neuroDisease, setNeuroDisease] = useState('');
//   const [neuroRelatedToDiabetes, setNeuroRelatedToDiabetes] = useState('');
  


// const [hasUrinaryDisease, setHasUrinaryDisease] = useState(false);
// const [selectedUrinaryDisease, setSelectedUrinaryDisease] = useState('');
// const [isUrinaryRelatedToDiabetes, setIsUrinaryRelatedToDiabetes] = useState('');


// const [hasBoneDisease, setHasBoneDisease] = useState(false);
// const [selectedBoneDisease, setSelectedBoneDisease] = useState('');
// const [isBoneRelatedToDiabetes, setIsBoneRelatedToDiabetes] = useState('');


//   const insulinDrugOptions = [
//   { value: "mixtard", label: "ميكستارد" },
//   { value: "lantus", label: "لانتوس" },
//   { value: "novorapid", label: "نوفورابيد" },
// ];

// const oralDrugOptions = [
//   { value: "metformin", label: "ميتفورمين" },
//   { value: "glibenclamide", label: "غليبينكلاميد" },
//   { value: "gliclazide", label: "غليكلازيد" },
// ];

// const calculateDuration = (unitsPerBox, dailyDose) => {
//   if (!unitsPerBox || !dailyDose) return null;
//   return Math.floor(unitsPerBox / dailyDose);
// };

// useEffect(() => {
//     // fetchInfo(id); 
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


//  const schema = yup.object().shape({
//     bloodSugar: yup.string().required('مستوى السكر في الدم مطلوب'),
//     gender: yup.string().required('الجنس مطلوب'),
//     address_patient: yup.string().required('العنوان مطلوب'),
//     weight: yup.string().required('الوزن مطلوب'),
//     length_patient: yup.string().required('الطول مطلوب'),
//     sugarType: yup.string().required('نوع السكري مطلوب'),
//     hemoglobin: yup.string().required('الهيموجلوبين مطلوب'),
//     bloodPressure: yup.string().required('ضغط الدم مطلوب'),
//     typeOfMedicine: yup.string().required('نوع الدواء مطلوب'),
//     cholesterol: yup.string().required('الكوليسترول مطلوب'),
//     grease: yup.string().required('الدهون مطلوب'),
//     urineAcid: yup.string().required('حمض البوليك مطلوب'),
//     otherDisease: yup.string().required('الأمراض الأخرى مطلوبة'),
//     diseaseDetection: yup.string().required('تاريخ اكتشاف المرض مطلوب'),
//     historyOfFamilyDisease: yup.string().required('تاريخ أمراض العائلة مطلوب'),
//     isCompleted: yup.boolean().required('حالة الإكمال مطلوبة'),
    
//     // Additional fields from the images
//     normal_glucose: yup.string(),
//     Glucose_after_meal: yup.string(),
//     triple_grease: yup.string(),
//     hbaic: yup.string(),
//     idl: yup.string(),
//     hdl: yup.string(),
//     creatine: yup.string(),
    
//     // Diseases fields
//     has_a_eye_disease: yup.boolean(),
//     in_kind_disease: yup.string(),
//     relationship_eyes_with_diabetes: yup.boolean(),
//     comments_eyes_clinic: yup.string(),
    
//     has_a_heart_disease: yup.boolean(),
//     heart_disease: yup.string(),
//     relationship_heart_with_diabetes: yup.boolean(),
//     comments_heart_clinic: yup.string(),
    
//     has_a_nerve_disease: yup.boolean(),
//     nerve_disease: yup.string(),
//     relationship_nerve_with_diabetes: yup.boolean(),
//     comments_nerve_clinic: yup.string(),
    
//     has_a_bone_disease: yup.boolean(),
//     bone_disease: yup.string(),
//     relationship_bone_with_diabetes: yup.boolean(),
//     comments_bone_clinic: yup.string(),
    
//     has_a_urinary_disease: yup.boolean(),
//     urinary_disease: yup.string(),
//     relationship_urinary_with_diabetes: yup.boolean(),
//     comments_urinary_clinic: yup.string(),
//   });
  
//   // Form initialization
//   const form = useForm({
//     mode: "uncontrolled",
//     validateInputOnChange: true,
//     initialValues: {
//       id: parseInt(id) || '',
//       bloodSugar: '',
//       gender: '',
//       address_patient: '',
//       weight: '',
//       length_patient: '',
//       sugarType: '',
//       hemoglobin: '',
//       bloodPressure: '',
//       typeOfMedicine: '',
//       cholesterol: '',
//       grease: '',
//       urineAcid: '',
//       otherDisease: '',
//       diseaseDetection: '',
//       historyOfFamilyDisease: '',
//       isCompleted: false,
      
//       // Additional fields
//       normal_glucose: '',
//       Glucose_after_meal: '',
//       triple_grease: '',
//       hbaic: '',
//       idl: '',
//       hdl: '',
//       creatine: '',
      
//       // Diseases fields
//       has_a_eye_disease: false,
//       in_kind_disease: '',
//       relationship_eyes_with_diabetes: false,
//       comments_eyes_clinic: '',
      
//       has_a_heart_disease: false,
//       heart_disease: '',
//       relationship_heart_with_diabetes: false,
//       comments_heart_clinic: '',
      
//       has_a_nerve_disease: false,
//       nerve_disease: '',
//       relationship_nerve_with_diabetes: false,
//       comments_nerve_clinic: '',
      
//       has_a_bone_disease: false,
//       bone_disease: '',
//       relationship_bone_with_diabetes: false,
//       comments_bone_clinic: '',
      
//       has_a_urinary_disease: false,
//       urinary_disease: '',
//       relationship_urinary_with_diabetes: false,
//       comments_urinary_clinic: '',
//     },
//     validate: yupResolver(schema),
//   });

//   const handleSubmit = (values) => {
//     if (form.isValid) {
//       const patientData = {
//         ...values,
//         // Include all the fields from the form
//         treatments: treatments,
//         insulinType: insulinType,
//         insulinDrugs: insulinDrugs,
//         oralDrugs: oralDrugs,
//         insulinInfo: insulinInfo,
//         oralInfo: oralInfo,
        
//         // Diseases information
//         eyeDisease: {
//           hasEyeDisease,
//           selectedEyeDisease,
//           isRelatedToDiabetes,
//         },
//         heartDisease: {
//           hasHeartDisease,
//           heartDisease,
//           heartRelatedToDiabetes,
//         },
//         neuroDisease: {
//           hasNeuroDisease,
//           neuroDisease,
//           neuroRelatedToDiabetes,
//         },
//         urinaryDisease: {
//           hasUrinaryDisease,
//           selectedUrinaryDisease,
//           isUrinaryRelatedToDiabetes,
//         },
//         boneDisease: {
//           hasBoneDisease,
//           selectedBoneDisease,
//           isBoneRelatedToDiabetes,
//         },
//       };
//       addReview(patientData)
//     };
//     const validated = form.validate();

//     if (validated) {
//       validated.errors;
//     }
//     form.reset();
//   };

//   // useEffect(() => {
//   //   if (isSubmitted) {
//   //     console.log('loading :',isPending)
//   //     setProgress(isPending || isPendingFetch ); 
//   //   }
//   // }, [isPending,isPendingFetch]);

//     return(
//         <>
//  <form  style={{ width: "100%" }}  onSubmit={form.onSubmit(handleSubmit)}>
//         <Grid display={'none'} px={{base:'0',sm:'md'}} mx={{base:5,sm:40}}  gutter="md" justify="start" mb={20} align="end" dir="rtl" p={0}>
//           <Grid.Col span={{ base:12,sm:12 }} p={10} my={'lg'}>     
//               <Title ta={'right'} size="1.8rem"  >
//               إضافة مراجعة
//             </Title>
//           </Grid.Col>       
//            <Grid.Col span={{ base:12,sm:12 }} mx={10}>
//              <TextInput 
//                readOnly
//                dir="rtl"
//                variant="unstyled"
//                size="32px"
//                fw={600}
//                radius={10}
//                value={storedPatient?.fullname}
//                />
//           </Grid.Col>
//           <Grid.Col span={12} ta={'start'} mt={20} mx={10}>
//            <Text size="1.8rem" fw={600}>
//              {dayjs(new Date).format('DD-MM-YYYY')}
//             </Text>
//           </Grid.Col>
//         <Grid.Col span={12} p={10} my={'lg'}>
//             <Text  ta={'right'} size="1.8rem" p={10} bg={'#8e8e8e30'} style={{borderRadius:10}}>
//               معلومات عامة
//             </Text>
//           </Grid.Col>            
//            <Grid.Col span={{ base:12,sm:6 }}>
//           <TextInput
//               size='xl'
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//               label='الوزن'
//               placeholder="الوزن (kg)"
//               key={form.key("weight")}
//               {...form.getInputProps("weight")}
//               styles={{
//                 label: {
//                   textAlign: 'right',
//                   marginBottom:5,
//                   width: '98%',
//                    fontSize:'18px'
//                 }
//               }}
//             />
//           </Grid.Col>
//          <Grid.Col span={{ base:12,sm:6 }}>
//           <TextInput
//               size='xl'
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//               label="الطول"
//               placeholder="الطول (cm)"
//               key={form.key("length_patient")}
//               {...form.getInputProps("length_patient")}
//               styles={{
//                 label: {
//                   textAlign: 'right',
//                   marginBottom:5,
//                   width: '98%',
//                   fontSize:'18px'
//                 }
//               }}
//             />
//           </Grid.Col>
          
//           <Grid.Col span={{ base:12,sm:6 }}>
//             <Select
//               size='xl'
//               w={'60%'}
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//               label="نوع السكري"
//               placeholder="نوع السكري"
//               data={[
//                 { value: 'النوع الأول', label: 'النوع الأول' },
//                 { value: 'النوع الثاني', label: 'النوع الثاني' },
//                 { value: 'سكري الحمل', label: 'سكري الحمل' },
//                 { value: 'نوع أخر', label: 'أخرى' }
//               ]}
//               key={form.key("sugarType")}
//               {...form.getInputProps("sugarType")}
             
//               styles={{
//                 label: {
//                   textAlign: 'right',
//                   marginBottom:5,
//                   width: '98%',
//                   fontSize:'18px'
//                 },
//               }}
//             />
//           </Grid.Col>
//            <Grid.Col span={{ base:12,sm:6 }}>
//             <Select
//              size='xl'
//               w={'60%'}
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//               label="الجنس"
//               placeholder="الجنس"
//               data={[
//                 { value: 'male', label: 'ذكر' },
//                 { value: 'female', label: 'أنثى' }
//               ]}
//               key={form.key("gender")}
//               {...form.getInputProps("gender")}
//               styles={{
//                 label: {
//                   textAlign: 'right',
//                   marginBottom:5,
//                   width: '98%',
//                   fontSize:'18px'
//                 }
//               }}
//             />
//           </Grid.Col> 
          
//            <Grid.Col span={{ base: 12, sm: 6 }}>
//              <MultiSelect
//                size="xl"
//                w={'70%'}
//                radius={10}
//                variant="unstyled"
//                fw={600}
//                withAsterisk
//                label="التاريخ العائلي للمرض"
//                placeholder="اختر واحدًا أو أكثر"
//                data={[
//                  { value: 'father', label: 'الأب' },
//                  { value: 'mother', label: 'الأم' },
//                  { value: 'grandParents', label: 'الأجداد' },
//                ]} 
//                key={form.key("historyOfFamilyDisease")}
//                {...form.getInputProps("historyOfFamilyDisease")}
//                styles={{
//                  label: {
//                    textAlign: 'right',
//                    marginBottom: 5,
//                    width: '98%',
//                    fontSize: '18px'
//                  }
//                }}
//                searchable
//                clearable
//              />
//            </Grid.Col>

          
//           <Grid.Col span={{ base: 12, sm: 6 }}>
//   <DatePickerInput
//     size="xl"
//     radius={10}
//     variant="unstyled"
//     fw={600}
//     withAsterisk
//     label="تاريخ اكتشاف المرض"
//     placeholder="اختر التاريخ"
//               key={form.key("historyOfdiseaseDetection")}
//                {...form.getInputProps("historyOfdiseaseDetection")}
//     styles={{
//       label: {
//         textAlign: 'right',
//         marginBottom: 5,
//         width: '98%',
//         fontSize: '18px'
//       }
//     }}
//   />
// </Grid.Col>
// <Grid.Col span={{ base:12,sm:6 }}>
//             <TextInput
//               size='xl'
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//               label="امراض اخرى"
//               placeholder="أمراض أخرى"
//               key={form.key("otherDisease")}
//               {...form.getInputProps("otherDisease")}
//               styles={{
//                 label: {
//                   textAlign: 'right',
//                   marginBottom:5,
//                   width: '98%',
//                   fontSize:'18px'
//                 }
//               }}
//             />
//           </Grid.Col>
          
//          {/* معلومات طبية */}
//          <Grid.Col span={12} p={10} my={'lg'}>
//             <Text  ta={'right'} size="1.8rem" p={10} bg={'#8e8e8e30'} style={{borderRadius:10}}>
//               معلومات طبية
//             </Text>
//           </Grid.Col>   
              
//           <Grid.Col span={{ base:12,sm:6 }}>
//           <TextInput
//                size='xl'
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//               label="الهيموجلوبين (%)"
//               placeholder="الهيموجلوبين (%)"
//               key={form.key("hemoglobin")}
//               {...form.getInputProps("hemoglobin")}
//               styles={{
//                 label: {
//                   textAlign: 'right',
//                   marginBottom:5,
//                   width: '98%',
//                    fontSize:'18px'
//                 }
//               }}
//             />
//           </Grid.Col>
//          <Grid.Col span={{ base:12,sm:6 }}>
//           <TextInput
//               size='xl'
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//               label="الدهون"
//               placeholder="الدهون (mg/dL)"
//               key={form.key("grease")}
//               {...form.getInputProps("grease")}
//               styles={{
//                 label: {
//                   textAlign: 'right',
//                   marginBottom:5,
//                   width: '98%',
//                    fontSize:'18px'
//                 }
//               }}
//             />
//           </Grid.Col>
          
//           <Grid.Col span={{ base:12,sm:6 }}>
//           <TextInput
//              size='xl'
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//               label="حمض البوليك"
//               placeholder="حمض البوليك (mg/dL)"
//               key={form.key("urineAcid")}
//               {...form.getInputProps("urineAcid")}
//               styles={{
//                 label: {
//                   textAlign: 'right',
//                   marginBottom:5,
//                   width: '98%',
//                    fontSize:'18px'
//                 }
//               }}
//             />
//           </Grid.Col>
//           <Grid.Col span={{ base:12,sm:6 }}>
//             <TextInput
//               size='xl'
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//               label="ضغط الدم (mmHg)"
//               placeholder="ضغط الدم (mmHg)"
//               key={form.key("bloodPressure")}
//               {...form.getInputProps("bloodPressure")}
//               styles={{
//                 label: {
//                   textAlign: 'right',
//                   marginBottom:5,
//                   width: '98%',
//                   fontSize:'18px'
//                 }
//               }}
//             />
//           </Grid.Col>
//           <Grid.Col span={{ base:12,sm:6 }}>
//           <TextInput
//               size='xl'
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//               label="الكوليسترول"
//               placeholder="الكوليسترول (mg/dL)"
//               key={form.key("cholesterol")}
//               {...form.getInputProps("cholesterol")}
//               styles={{
//                 label: {
//                   textAlign: 'right',
//                   marginBottom:5,
//                   width: '98%',
//                    fontSize:'18px'
//                 }
//               }}
//             />
//           </Grid.Col>
//           <Grid.Col span={{ base: 12, sm: 6 }}>    
//   <TextInput
//     size='xl'
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//     label="الكوليسترول منخفض الكثافة (LDL)"
//     placeholder="LDL (mg/dL)"
//     key={form.key("ldl")}
//     {...form.getInputProps("ldl")}
//     styles={{
//       label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'}
//     }}
//   />
// </Grid.Col>

// <Grid.Col span={{ base: 12, sm: 6 }}>
//   <TextInput
//      size='xl'
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//     label="الكوليسترول مرتفع الكثافة (HDL)"
//     placeholder="HDL (mg/dL)"
//     key={form.key("hdl")}
//     {...form.getInputProps("hdl")}
//     styles={{
//       label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'}
//     }}
//   />
// </Grid.Col>
// <Grid.Col span={{ base: 12, sm: 6 }}>
//   <TextInput
//     size='xl'
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//     label="الكرياتينين"
//     placeholder="الكرياتينين (mg/dL)"
//     key={form.key("creatine")}
//     {...form.getInputProps("creatine")}
//     styles={{
//       label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'}
//     }}
//   />
// </Grid.Col>
// <Grid.Col span={{ base: 12, sm: 6 }}>
//   <TextInput
//     size='xl'
//               // w={'60%'}
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//     label="الغلوكوز في الحالة الطبيعية"
//     placeholder="الغلوكوز صيامي (mg/dL)"
//     key={form.key("normal_glocose")}
//     {...form.getInputProps("normal_glocose")}
//     styles={{
//       label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'}
//     }}
//   />
// </Grid.Col>

// <Grid.Col span={{ base: 12, sm: 6 }}>
//   <TextInput
//     size='xl'
//               // w={'60%'}
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//     label="الغلوكوز بعد الوجبة"
//     placeholder="الغلوكوز بعد الأكل (mg/dL)"
//     key={form.key("Glocose_after_Meal")}
//     {...form.getInputProps("Glocose_after_Meal")}
//     styles={{
//       label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'}
//     }}
//   />
// </Grid.Col>

// <Grid.Col span={{ base: 12, sm: 6 }}>
//   <TextInput
//         size='xl'
//               // w={'60%'}
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//     label="الشحوم الثلاثية"
//     placeholder="الشحوم الثلاثية (mg/dL)"
//     key={form.key("triple_grease")}
//     {...form.getInputProps("triple_grease")}
//     styles={{
//       label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'}
//     }}
//   />
// </Grid.Col>

// <Grid.Col span={{ base: 12, sm: 6 }}>
//   <TextInput
//         size='xl'
//               // w={'60%'}
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//     label="الخضاب الغلوكوزي (HbA1c)"
//     placeholder="HbA1c (%)"
//     key={form.key("hba1c")}
//     {...form.getInputProps("hba1c")}
//     styles={{
//       label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'}
//     }}
//   />
// </Grid.Col>

//           <Grid.Col span={12} p={10} my={'lg'}>
//             <Text  ta={'right'} size="1.8rem" p={10} bg={'#8e8e8e30'} style={{borderRadius:10}}>
//               الدواء
//             </Text>
//           </Grid.Col> 

//           <Grid.Col span={{base:12,sm:6}}>
//   <MultiSelect
//       size='xl'
//               w={'60%'}
//               radius={10}
//               variant="filled"
//               fw={600}
//               withAsterisk
//     label="نوع العلاج"
//     placeholder="اختر نوع العلاج"
//     data={[
//       { value: 'insulin', label: 'أنسولين' },
//       { value: 'oral', label: 'خافضات فموية' }
//     ]}
//     value={treatments}
//     onChange={setTreatments}
//     styles={{
//       label: { textAlign: 'right', marginBottom: 5, width: '98%', fontSize:'18px' }
//     }}
//   />
// </Grid.Col>
// {/* أنسولين */}
// {treatments.includes('insulin') && (
//   <>
//     <Grid.Col span={{base:12,sm:6}}>
//       <Select
//           size='xl'
//               w={'70%'}
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//         label="نوع الإنسولين"
//         placeholder="اختر النوع"
//         data={[
//           { value: 'mixed', label: 'مختلط' },
//           { value: 'slow', label: 'بطيء' },
//           { value: 'fast', label: 'سريع' },
//         ]}
//         value={insulinType}
//         onChange={setInsulinType}
//         styles={{ label: { textAlign: 'right', marginBottom: 5,width:'100%', fontSize:'18px' } }}
//       />
//     </Grid.Col>

//     <Grid.Col span={{base:12,sm:6}}>
//       <MultiSelect
//           size='xl'
//               w={'70%'}
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//         label="اسماء الأدوية"
//         placeholder="اختر الأدوية"
//         data={insulinDrugOptions}
//         value={insulinDrugs}
//         onChange={setInsulinDrugs}
//         searchable
//         styles={{ label: { textAlign: 'right', marginBottom: 5 ,width:'100%'  , fontSize:'18px'} }}
//       />
//     </Grid.Col>

//     {insulinDrugs.map((drug) => (
//       <React.Fragment key={drug}>
//         <Grid.Col span={{base:12,sm:6}}>
//           <TextInput
//               size='xl'
//               // w={'70%'}
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//             label={`عدد الوحدات في ${drug}`}
//             type="number"
//             onChange={(e) =>
//               setInsulinInfo({
//                 ...insulinInfo,
//                 [drug]: {
//                   ...insulinInfo[drug],
//                   unitsPerBox: Number(e.target.value),
//                 }
//               })
//             }
//             styles={{ label: { textAlign: 'right', marginBottom: 5 ,width:'100%'  , fontSize:'18px'} }}
//           />
//         </Grid.Col>
//         <Grid.Col span={{base:12,sm:6}}>
//           <TextInput
//               size='xl'
//               // w={'70%'}
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//             label={`الكمية اليومية لـ ${drug}`}
//             type="number"
//             onChange={(e) =>
//               setInsulinInfo({
//                 ...insulinInfo,
//                 [drug]: {
//                   ...insulinInfo[drug],
//                   dailyDose: Number(e.target.value),
//                 }
//               })
//             }
//             styles={{ label: { textAlign: 'right', marginBottom: 5 ,width:'100%', fontSize:'18px'  } }}
//           />
//           </Grid.Col>
//           <Grid.Col span={{base:12,sm:12}}>
//              <Text size="sm" mt={5} style={{ textAlign: 'center' ,opacity:1,transition:'opacity 1s'}}>
//             {insulinInfo[drug]?.unitsPerBox && insulinInfo[drug]?.dailyDose
//               ? `يكفي الدواء لمدة ${calculateDuration(insulinInfo[drug].unitsPerBox, insulinInfo[drug].dailyDose)} يوم`
//               : ''}
//           </Text>
//           </Grid.Col>

//       </React.Fragment>
//     ))}
//   </>
// )}
// {treatments.includes('oral') && (
//   <>
//     <Grid.Col span={{base:12,sm:6}}>
//       <MultiSelect
//               size='xl'
//               w={'70%'}
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//         label="اسماء الأدوية"
//         placeholder="اختر الأدوية"
//         data={oralDrugOptions}
//         value={oralDrugs}
//         onChange={setOralDrugs}
//         searchable
//         styles={{ label: { textAlign: 'right', marginBottom: 5 ,width:'100%' , fontSize:'18px'} }}
//       />
//     </Grid.Col>

//     {oralDrugs.map((drug) => (
//       <React.Fragment key={drug}>
//         <Grid.Col span={{base:12,sm:6}}>
//           <TextInput
//          size='xl'
//               // w={'70%'}
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//             label={`عدد الحبات في ${drug}`}
//             type="number"
//             onChange={(e) =>
//               setOralInfo({
//                 ...oralInfo,
//                 [drug]: {
//                   ...oralInfo[drug],
//                   unitsPerBox: Number(e.target.value),
//                 }
//               })
//             }
//             styles={{ label: { textAlign: 'right', marginBottom: 5 ,width:'100%' , fontSize:'18px'} }}
//           />
//         </Grid.Col>
//         <Grid.Col span={{base:12,sm:6}}>
//           <TextInput
//           size='xl'
//               // w={'70%'}
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//             label={`الكمية اليومية لـ ${drug}`}
//             type="number"
//             onChange={(e) =>
//               setOralInfo({
//                 ...oralInfo,
//                 [drug]: {
//                   ...oralInfo[drug],
//                   dailyDose: Number(e.target.value),
//                 }
//               })
//             }
//             styles={{ label: { textAlign: 'right', marginBottom: 5 ,width:'100%' , fontSize:'18px'} }}
//           />
//           </Grid.Col>
//           <Grid.Col span={{base:12,sm:12}}>
//           <Text size="sm" mt={5} style={{ textAlign: 'center' ,opacity:1,transition:'opacity 1s'}}>
//             {oralInfo[drug]?.unitsPerBox && oralInfo[drug]?.dailyDose
//               ? `يكفي لمدة ${calculateDuration(oralInfo[drug].unitsPerBox, oralInfo[drug].dailyDose)} يوم`
//               : ''}
//           </Text>
//         </Grid.Col>
//       </React.Fragment>
//     ))}
//   </>
// )}

//              <Grid.Col span={12} p={10} my={'lg'}>
//             <Text  ta={'right'} size="1.8rem" p={10} bg={'#8e8e8e30'} style={{borderRadius:10}}>
//               العيادة العينية
//             </Text>
//           </Grid.Col> 
//          <Grid.Col span={{ base: 12, sm: 12 }}>
//    <Switch
//     size="md"
//     color="rgba(53, 180, 189, 1)"
//     labelPosition="left"
//     mr={5}
//     mb={15}
//     label="هل يوجد مرض في العين؟"
//     checked={hasEyeDisease}
//     key={form.key("has_a_eye_disease")}
//     {...form.getInputProps("has_a_eye_disease")}
//     styles={{
//       label: { textAlign: 'right', width: '100%' , fontSize:'18px'},
//     }}
//   />
// </Grid.Col>

// {hasEyeDisease && (
//   <>
//     <Grid.Col span={{ base: 12, sm: 6 }}>
//       <Select
//        size='xl'
//               w={'70%'}
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//         label="اختر المرض العيني"
//         placeholder="اختر مرضاً"
//         data={['اعتلال الشبكية السكري', 'الزرق (الغلوكوما)', 'إعتام عدسة العين', 'جفاف العين', 'أخرى']}
//         value={selectedEyeDisease}
//         onChange={setSelectedEyeDisease}
//         key={form.key("in_kind_disease")}
//          {...form.getInputProps("in_kind_disease")}
//         searchable
//         clearable
//         styles={{
//           label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'},
//         }}
//       />
//     </Grid.Col>

//     {selectedEyeDisease === 'أخرى' && (
//       <Grid.Col span={{ base: 12, sm: 6 }}>
//         <TextInput
//          size='xl'
//               // w={'70%'}
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//           label="أدخل اسم المرض العيني"
//           placeholder="المرض العيني"
//           styles={{
//             label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'},
//           }}
//         />
//       </Grid.Col>
//     )}

//     <Grid.Col span={{ base: 12, sm: 6 }}>
//       <Radio.Group
//         value={isRelatedToDiabetes}
//         onChange={setIsRelatedToDiabetes}
//         label="هل يوجد علاقة بين المرض العيني والسكري؟"
//         styles={{
//           label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'},
//         }}
//       >
//         <Radio mb={5} value="نعم" label="نعم" />
//         <Radio value="لا" label="لا" />
//       </Radio.Group>
//     </Grid.Col>

//     <Grid.Col span={{ base: 12 }}>
//       <Textarea
//          size='xl'
//               // w={'70%'}
              
//               radius={10}
//               variant="filled"
//               fw={600}
//         label="ملاحظات"
//         placeholder="أدخل أي ملاحظات متعلقة بالحالة العينية"
//         autosize
//         minRows={3}
//         styles={{
//           label: { textAlign: 'right', marginBottom: 5, width: '98%', fontSize:'18px' },
//         }}
//       />
//     </Grid.Col>
//     </>
// )}
//         <Grid.Col span={12} p={10} my={'lg'}>
//   <Text ta="right" size="1.8rem" p={10} bg="#8e8e8e30" style={{ borderRadius: 10 }}>
//     العيادة القلبية
//   </Text>
// </Grid.Col>

// <Grid.Col span={{ base: 12, sm: 12}}>
//    <Switch
//     size="md"
//     mr={5}
//     mb={15}
//     color="rgba(53, 180, 189, 1)"
//     labelPosition="left"
//     label="هل يوجد مرض قلبي؟"
//     checked={hasHeartDisease}
//     onChange={(e) => setHasHeartDisease(e.currentTarget.checked)}
//     styles={{ label: { textAlign: 'right', width: '100%' , fontSize:'18px'} }}
//   />
// </Grid.Col>

// {hasHeartDisease && (
//   <>
//     <Grid.Col span={{ base: 12, sm: 6 }}>
//       <Select
//        size="xl"
//        w={'70%'}
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//         label="اختر المرض القلبي"
//         placeholder="اختر مرضاً"
//         data={['قصور القلب', 'ارتفاع الضغط الرئوي', 'أمراض الشرايين التاجية', 'عدم انتظام ضربات القلب', 'أخرى']}
//         value={heartDisease}
//         onChange={setHeartDisease}
//         searchable
//         clearable
//         styles={{ label: { textAlign: 'right', marginBottom: 5, width: '98%', fontSize:'18px' } }}
//       />
//     </Grid.Col>

//     {heartDisease === 'أخرى' && (
//       <Grid.Col span={{ base: 12, sm: 6 }}>
//         <TextInput
//          size="xl"
//       //  w={'70%'}
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//           label="أدخل اسم المرض القلبي"
//           placeholder="المرض القلبي"
//           styles={{ label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'} }}
//         />
//       </Grid.Col>
//     )}

//     <Grid.Col span={{ base: 12, sm: 6 }}>
//       <Radio.Group
      
//         value={heartRelatedToDiabetes}
//         onChange={setHeartRelatedToDiabetes}
//         label="هل يوجد علاقة بين المرض القلبي والسكري؟"
//         styles={{ label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'} }}
//       >
//         <Radio mb={5} value="نعم" label="نعم" />
//         <Radio value="لا" label="لا" />
//       </Radio.Group>
//     </Grid.Col>

//     <Grid.Col span={{ base: 12 }}>
//       <Textarea
//         size="xl"
//       //  w={'70%'}
//               radius={10}
//               variant="filled"
//               fw={600}
//               withAsterisk
//         label="ملاحظات"
//         placeholder="أدخل أي ملاحظات متعلقة بالحالة القلبية"
//         autosize
//         minRows={3}
//         styles={{ label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'} }}
//       />
//     </Grid.Col>
//   </>
// )}

// <Grid.Col span={12} p={10} my={'lg'}>
//   <Text ta="right" size="1.8rem" p={10} bg="#8e8e8e30" style={{ borderRadius: 10 }}>
//     العيادة العصبية
//   </Text>
// </Grid.Col>

// <Grid.Col span={{ base: 12, sm: 12 }}>
//   <Switch
//     size="md"
//     mr={5}
//     mb={15}
//     color="rgba(53, 180, 189, 1)"
//     labelPosition="left"
//     label="هل يوجد مرض عصبي؟"
//     checked={hasNeuroDisease}
//     onChange={(e) => setHasNeuroDisease(e.currentTarget.checked)}
//     styles={{ label: { textAlign: 'right', width: '100%' , fontSize:'18px'} }}
//   />
// </Grid.Col>

// {hasNeuroDisease && (
//   <>
//     <Grid.Col span={{ base: 12, sm: 6 }}>
//       <Select
//        size="xl"
//        w={'70%'}
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//         label="اختر المرض العصبي"
//         placeholder="اختر مرضاً"
//         data={['الاعتلال العصبي السكري', 'الصرع', 'السكتة الدماغية', 'التصلب اللويحي', 'أخرى']}
//         value={neuroDisease}
//         onChange={setNeuroDisease}
//         searchable
//         clearable
//         styles={{ label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'} }}
//       />
//     </Grid.Col>

//     {neuroDisease === 'أخرى' && (
//       <Grid.Col span={{ base: 12, sm: 6 }}>
//         <TextInput
//          size="xl"
//       //  w={'70%'}
//               radius={10}
//               variant="unstyled"
//               fw={600}
//               withAsterisk
//           label="أدخل اسم المرض العصبي"
//           placeholder="المرض العصبي"
//           styles={{ label: { textAlign: 'right', marginBottom: 5, width: '98%', fontSize:'18px' } }}
//         />
//       </Grid.Col>
//     )}

//     <Grid.Col span={{ base: 12, sm: 6 }}>
//       <Radio.Group
//         value={neuroRelatedToDiabetes}
//         onChange={setNeuroRelatedToDiabetes}
//         label="هل يوجد علاقة بين المرض العصبي والسكري؟"
//         styles={{ label: { textAlign: 'right', marginBottom: 5, width: '98%', fontSize:'18px' } }}
//       >
//         <Radio mb={5} value="نعم" label="نعم" />
//         <Radio value="لا" label="لا" />
//       </Radio.Group>
//     </Grid.Col>

//     <Grid.Col span={{ base: 12 }}>
//       <Textarea
//         size="xl"
//       //  w={'70%'}
//               radius={10}
//               variant="filled"
//               fw={600}
//               withAsterisk
//         label="ملاحظات"
//         placeholder="أدخل أي ملاحظات متعلقة بالحالة العصبية"
//         autosize
//         minRows={3}
//         styles={{ label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'} }}
//       />
//     </Grid.Col>
//   </>
// )}
// <Grid.Col span={12} p={10} my={'lg'}>
//   <Text ta={'right'} size="1.8rem" p={10} bg={'#8e8e8e30'} style={{ borderRadius: 10 }}>
//     العيادة البولية
//   </Text>
// </Grid.Col>

// <Grid.Col span={{ base: 12, sm: 12 }}>
//   <Switch
//     size="md"
//     mr={5}
//     mb={10}
//     color="rgba(53, 180, 189, 1)"
//     labelPosition="left"
//     label="هل يوجد مرض بولي؟"
//     checked={hasUrinaryDisease}
//     onChange={(event) => setHasUrinaryDisease(event.currentTarget.checked)}
//     styles={{ label: { textAlign: 'right', width: '100%' , fontSize:'18px'} }}
//   />
// </Grid.Col>

// {hasUrinaryDisease && (
//   <>
//     <Grid.Col span={{ base: 12, sm: 6 }}>
//       <Select
//         size="xl"
//         w={'70%'}
//         radius={10}
//         variant="unstyled"
//         fw={600}
//         withAsterisk
//         label="اختر المرض البولي"
//         placeholder="اختر مرضاً"
//         data={['التهاب المسالك البولية', 'حصى الكلى', 'سلس البول', 'تضخم البروستات', 'أخرى']}
//         value={selectedUrinaryDisease}
//         onChange={setSelectedUrinaryDisease}
//         searchable
//         clearable
//         styles={{ label: { textAlign: 'right', marginBottom: 5, width: '98%', fontSize:'18px' } }}
//       />
//     </Grid.Col>

//     {selectedUrinaryDisease === 'أخرى' && (
//       <Grid.Col span={{ base: 12, sm: 6 }}>
//         <TextInput
//           size="xl"
//         // w={'70%'}
//           radius={10}
//           variant="unstyled"
//           fw={600}
//           withAsterisk
//           label="أدخل اسم المرض البولي"
//           placeholder="المرض البولي"
//           styles={{ label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'} }}
//         />
//       </Grid.Col>
//     )}

//     <Grid.Col span={{ base: 12, sm: 6 }}>
//       <Radio.Group
//         value={isUrinaryRelatedToDiabetes}
//         onChange={setIsUrinaryRelatedToDiabetes}
//         label="هل يوجد علاقة بين المرض البولي والسكري؟"
//         styles={{ label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'} }}
//       >
//         <Radio mb={5} value="نعم" label="نعم" />
//         <Radio value="لا" label="لا" />
//       </Radio.Group>
//     </Grid.Col>

//     <Grid.Col span={{ base: 12 }}>
//       <Textarea
//         size="xl"
//         // w={'70%'}
//         radius={10}
//         variant="filed"
//         fw={600}
//         label="ملاحظات"
//         placeholder="أدخل أي ملاحظات متعلقة بالحالة البولية"
//         autosize
//         minRows={3}
//         styles={{ label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'} }}
//       />
//     </Grid.Col>
//   </>
// )}
// <Grid.Col span={12} p={10} my={'lg'}>
//   <Text ta={'right'} size="1.8rem" p={10} bg={'#8e8e8e30'} style={{ borderRadius: 10 }}>
//     العيادة العظمية
//   </Text>
// </Grid.Col>

// <Grid.Col span={{ base: 12, sm: 12 }}>
//   <Switch
//     size="md"
//     mb={10}
//     mr={5}
//     color="rgba(53, 180, 189, 1)"
//     labelPosition="left"
//     label="هل يوجد مرض عظمي؟"
//     checked={hasBoneDisease}
//     onChange={(event) => setHasBoneDisease(event.currentTarget.checked)}
//     styles={{ label: { textAlign: 'right', width: '100%' , fontSize:'18px'} }}
//   />
// </Grid.Col>

// {hasBoneDisease && (
//   <>
//     <Grid.Col span={{ base: 12, sm: 6 }}>
//       <Select
//         size="xl"
//         w={'70%'}
//         radius={10}
//         variant="unstyled"
//         fw={600}
//         withAsterisk
//         label="اختر المرض العظمي"
//         placeholder="اختر مرضاً"
//         data={['هشاشة العظام', 'التهاب المفاصل', 'الانزلاق الغضروفي', 'كسر أو إصابة سابقة', 'أخرى']}
//         value={selectedBoneDisease}
//         onChange={setSelectedBoneDisease}
//         searchable
//         clearable
//         styles={{ label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'} }}
//       />
//     </Grid.Col>

//     {selectedBoneDisease === 'أخرى' && (
//       <Grid.Col span={{ base: 12, sm: 6 }}>
//         <TextInput
//           size="xl"
//         // w={'70%'}
//           radius={10}
//           variant="unstyled"
//           fw={600}
//           withAsterisk
//           label="أدخل اسم المرض العظمي"
//           placeholder="المرض العظمي"
//           styles={{ label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'} }}
//         />
//       </Grid.Col>
//     )}

//     <Grid.Col span={{ base: 12, sm: 6 }}>
//       <Radio.Group
//         value={isBoneRelatedToDiabetes}
//         onChange={setIsBoneRelatedToDiabetes}
//         label="هل يوجد علاقة بين المرض العظمي والسكري؟"
//         styles={{ label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'} }}
//       >
//         <Radio mb={5} value="نعم" label="نعم" />
//         <Radio value="لا" label="لا" />
//       </Radio.Group>
//     </Grid.Col>

//     <Grid.Col span={{ base: 12 }}>
//       <Textarea
//         size="xl"
//         // w={'70%'}
//         radius={10}
//         variant="filled"
//         fw={600}
//         label="ملاحظات"
//         placeholder="أدخل أي ملاحظات متعلقة بالحالة العظمية"
//         autosize
//         minRows={3}
//         styles={{ label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'} }}
//       />
//     </Grid.Col>
//   </>
// )}

//           <Grid.Col span={12} p={10} my={'lg'}>
//             <Text  ta={'right'} size="1.8rem" p={10} bg={'#8e8e8e30'} style={{borderRadius:10}}>
//               عيادات أخرى
//             </Text>
//           </Grid.Col> 
//           <Grid.Col span={{ base:12,sm:12 }}>
//             <Textarea
//               size="xl"
//         // w={'70%'}
//               radius={10}
//               variant="filled"
//               fw={600}
//               withAsterisk
//         label="ملاحظات"
//         placeholder="أدخل أي ملاحظات متعلقة "
//         autosize
//         minRows={3}
//         styles={{ label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'} }}
//       />
//           </Grid.Col>
//           <Grid.Col my={20} mb={'5rem'} ta={'right'} span={{ base:12,sm:12 }}>
//           <Button 
//             radius={10} 
//             miw={'12rem'}
//             size="md" 
//             type="submit" 
//             variant="filled" 
//             color="#37A9EF"
//           >
//           حفظ المراجعة
//           </Button>
//           </Grid.Col>
//         </Grid>    
//       </form>
//         </>
//     )
// }
// export default AddReview
import { Container, Grid, Text, Flex, Title, Button,Stepper,  TextInput, MultiSelect, Select, Textarea,  Radio, Checkbox, NumberInput, Group, useStyles } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import React from "react";
import { DatePickerInput } from "@mantine/dates";
import { useEffect, useState } from "react";
import * as yup from 'yup';
import '../../assets/css/addReview.css'
import { Switch } from '@mantine/core';
import { useSelector } from "react-redux";
import backWards from '../../assets/vectors/forward.png'
import { useParams } from "react-router";
import dayjs from "dayjs";
import useAddReview from "../../useMutation/Admin/useAddReview";
import UpScroll from "../../components/general/UpScroll";
// import useFetchPatientInfo from "../../useMutation/Admin/useFetchPatientInfo";
// import useUpdatePatientInfo from "../../useMutation/Admin/useUpdatePatientInfo";

const AddReview = () => {
  const [activeStep, setActiveStep] = useState(0);

   UpScroll()
  const patients = useSelector(store => store.patients.patients)
  const {id} = useParams()
  const {addReview,isPending} = useAddReview(id);
  const [storedPatient,setStoredPatient] = useState(null)

  const[history,setHistory] = useState([])

  
  const [diabetesDetection, setDiabetesDetection] = useState();

  const [types, setTypes] = useState([]);
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
  


const [hasUrinaryDisease, setHasUrinaryDisease] = useState(false);
const [selectedUrinaryDisease, setSelectedUrinaryDisease] = useState('');
const [isUrinaryRelatedToDiabetes, setIsUrinaryRelatedToDiabetes] = useState('');


const [hasBoneDisease, setHasBoneDisease] = useState(false);
const [selectedBoneDisease, setSelectedBoneDisease] = useState('');
const [isBoneRelatedToDiabetes, setIsBoneRelatedToDiabetes] = useState('');


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

useEffect(() => {
    // fetchInfo(id); 
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


 const schema = yup.object().shape({
    gender: yup.string().required('الجنس مطلوب'),
    // address_patient: yup.string().required('العنوان مطلوب'),
    weight: yup.string().required('الوزن مطلوب'),
    length_patient: yup.string().required('الطول مطلوب'),
    sugarType: yup.string().required('نوع السكري مطلوب'),
    hemoglobin: yup.string().required('الهيموجلوبين مطلوب'),
    bloodPressure: yup.string().required('ضغط الدم مطلوب'),
    cholesterol: yup.string().required('الكوليسترول مطلوب'),
    grease: yup.string().required('الدهون مطلوب'),
    urineAcid: yup.string().required('حمض البوليك مطلوب'),
    otherDisease: yup.string().required('الأمراض الأخرى مطلوبة'),
    historyOfdiseaseDetection: yup.string().required('تاريخ اكتشاف المرض مطلوب'),
    historyOfFamilyDisease: yup.array().of(yup.string()).min(1, 'يرجى اختيار واحد على الأقل').required('تاريخ أمراض العائلة مطلوب'),
    isCompleted: yup.boolean().required('حالة الإكمال مطلوبة'),
    normal_glocose: yup.string(),
    Glocose_after_Meal: yup.string(),
    triple_grease: yup.string(),
    hbaic: yup.string(),
    idl: yup.string(),
    hdl: yup.string(),
    creatine: yup.string(),
    
    // Diseases fields
    // has_a_eye_disease: yup.boolean(),
    // in_kind_disease: yup.string(),
    // relationship_eyes_with_diabetes: yup.boolean(),
    // comments_eyes_clinic: yup.string(),
    
    // has_a_heart_disease: yup.boolean(),
    // heart_disease: yup.string(),
    // relationship_heart_with_diabetes: yup.boolean(),
    // comments_heart_clinic: yup.string(),
    
    // has_a_nerve_disease: yup.boolean(),
    // nerve_disease: yup.string(),
    // relationship_nerve_with_diabetes: yup.boolean(),
    // comments_nerve_clinic: yup.string(),
    
    // has_a_bone_disease: yup.boolean(),
    // bone_disease: yup.string(),
    // relationship_bone_with_diabetes: yup.boolean(),
    // comments_bone_clinic: yup.string(),
    
    // has_a_urinary_disease: yup.boolean(),
    // urinary_disease: yup.string(),
    // relationship_urinary_with_diabetes: yup.boolean(),
    // comments_urinary_clinic: yup.string(),
  });
  
  // Form initialization
  const form = useForm({
    mode: "uncontrolled",
    validateInputOnChange: true,
    initialValues: {
      id: parseInt(id) || '',
      gender: '',
      // address_patient: '',
      weight: '',
      length_patient: '',
      sugarType: '',
      hemoglobin: '',
      bloodPressure: '',
      cholesterol: '',
      grease: '',
      urineAcid: '',
      otherDisease: '',
      historyOfdiseaseDetection: '',
      historyOfFamilyDisease: [],
      isCompleted: false,
      
      // Additional fields
      normal_glocose: '',
      Glocose_after_Meal: '',
      triple_grease: '',
      hbaic: '',
      idl: '',
      hdl: '',
      creatine: '',
      // coments:'',
      // Diseases fields
      // has_a_eye_disease: false,
      // in_kind_disease: '',
      // relationship_eyes_with_diabetes: false,
      // comments_eyes_clinic: '',
      
      // has_a_heart_disease: false,
      // heart_disease: '',
      // relationship_heart_with_diabetes: false,
      // comments_heart_clinic: '',
      
      // has_a_nerve_disease: false,
      // nerve_disease: '',
      // relationship_nerve_with_diabetes: false,
      // comments_nerve_clinic: '',
      
      // has_a_bone_disease: false,
      // bone_disease: '',
      // relationship_bone_with_diabetes: false,
      // comments_bone_clinic: '',
      
      // has_a_urinary_disease: false,
      // urinary_disease: '',
      // relationship_urinary_with_diabetes: false,
      // comments_urinary_clinic: '',
    },
    validate: yupResolver(schema),
  });

  const handleSubmit = (values) => {
  const validated = form.validate();
  if (validated.hasErrors) {
    console.log('أخطاء في النموذج الأساسي:', validated.errors);
    return;
  }

  const allDrugsArray = [];
  console.log("✅ نوع العلاجات:", types);
  console.log("✅ معلومات الإنسولين:", insulinInfo);
  console.log("✅ معلومات الأدوية الفموية:", oralInfo);
  // فحص أنسولين
  if (types.includes("insulin")) {
    for (const drug of insulinDrugs) {
      const info = insulinInfo[drug];
      if (!info || !info.unitsPerBox || !info.dailyDose) {
        alert(`يرجى إدخال جميع المعلومات الخاصة بـ ${drug} (أنسولين)`);
        return;
      }
      allDrugsArray.push({
        name: drug,
        units: info.unitsPerBox,
        dosage_per_day: info.dailyDose,
      });
    }
  }

  // فحص الأدوية الفموية
  if (types.includes("oral")) {
    for (const drug of oralDrugs) {
      const info = oralInfo[drug];
      if (!info || !info.unitsPerBox || !info.dailyDose) {
        alert(`يرجى إدخال جميع المعلومات الخاصة بـ ${drug} (دواء فموي)`);
        return;
      }
      allDrugsArray.push({
        name: drug,
        units: info.unitsPerBox,
        dosage_per_day: info.dailyDose,
      });
    }
  }

  const patientData = {
    ...values,
    treatments: {
      type: types,
      speed: insulinType,
      drugs: allDrugsArray,
    },
  };
console.log(values)
  console.log(patientData);
  addReview(patientData);

  setActiveStep(0)
  form.reset();
};




  // useEffect(() => {
  //   if (isSubmitted) {
  //     console.log('loading :',isPending)
  //     setProgress(isPending || isPendingFetch ); 
  //   }
  // }, [isPending,isPendingFetch]);


  const nextStep = () => setActiveStep((current) => (current < 2 ? current + 1 : current));
  const prevStep = () => setActiveStep((current) => (current > 0 ? current - 1 : current));

  // const handleChange = (field, value) => {
  //   setFormData({ ...formData, [field]: value });
  // };

  const generalInfoStep = (

    <Grid mt={40} gutter="sm" justify="start" mb={20} align="end" dir="rtl" p={{base:25,sm:10}}>
     {/* <Grid.Col span={12} p={10} my={'lg'}>
            <Text  ta={'right'} size="1.8rem" p={10} bg={'#8e8e8e30'} style={{borderRadius:10}}>
              معلومات عامة
            </Text>
          </Grid.Col>             */}
           <Grid.Col span={{ base:12,sm:6 }}>
          <TextInput
              size='xl'
              radius={10}
              variant="unstyled"
              fw={600}
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
                   fontSize:'18px'
                }
              }}
            />
          </Grid.Col>
         <Grid.Col span={{ base:12,sm:6 }}>
          <TextInput
              size='xl'
              radius={10}
              variant="unstyled"
              fw={600}
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
                  fontSize:'18px'
                }
              }}
            />
          </Grid.Col>
          
          <Grid.Col span={{ base:12,sm:6 }}>
            <Select
              size='xl'
              w={'60%'}
              radius={10}
              variant="unstyled"
              fw={600}
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
                  fontSize:'18px'
                },
              }}
            />
          </Grid.Col>
           <Grid.Col span={{ base:12,sm:6 }}>
            <Select
             size='xl'
              w={'60%'}
              radius={10}
              variant="unstyled"
              fw={600}
              withAsterisk
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
                  fontSize:'18px'
                }
              }}
            />
          </Grid.Col> 
          
           <Grid.Col span={{ base: 12, sm: 6 }}>
             <MultiSelect
               size="xl"
               w={'70%'}
               radius={10}
               variant="unstyled"
               fw={600}
               withAsterisk
               label="التاريخ العائلي للمرض"
               placeholder="اختر واحدًا أو أكثر"
               data={[
                 { value: 'father', label: 'الأب' },
                 { value: 'mother', label: 'الأم' },
                 { value: 'grandParents', label: 'الأجداد' },
               ]} 
               key={form.key("historyOfFamilyDisease")}
               {...form.getInputProps("historyOfFamilyDisease")}
               styles={{
                 label: {
                   textAlign: 'right',
                   marginBottom: 5,
                   width: '98%',
                   fontSize: '18px'
                 }
               }}
               searchable
               clearable
             />
           </Grid.Col>

          
          <Grid.Col span={{ base: 12, sm: 6 }}>
  <DatePickerInput
    size="xl"
    radius={10}
    variant="unstyled"
    fw={600}
    withAsterisk
    label="تاريخ اكتشاف المرض"
    placeholder="اختر التاريخ"
              key={form.key("historyOfdiseaseDetection")}
               {...form.getInputProps("historyOfdiseaseDetection")}
    styles={{
      label: {
        textAlign: 'right',
        marginBottom: 5,
        width: '98%',
        fontSize: '18px'
      }
    }}
  />
</Grid.Col>
<Grid.Col span={{ base:12,sm:6 }}>
            <TextInput
              size='xl'
              radius={10}
              variant="unstyled"
              fw={600}
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
                  fontSize:'18px'
                }
              }}
            />
          </Grid.Col>
          </Grid>
  );

  const medicalInfoStep = (
    
       <Grid mt={40}  gutter="sm" justify="start" mb={20} align="end" dir="rtl" p={{base:25,sm:10}}>
      {/* <Grid.Col span={12} p={10} my={'lg'}>
             <Text  ta={'right'} size="1.8rem" p={10} bg={'#8e8e8e30'} style={{borderRadius:10}}>
               معلومات طبية
             </Text>
           </Grid.Col>    */}
              
            <Grid.Col span={{ base:12,sm:6 }}>
             <TextInput
               size='xl'
              radius={10}
              variant="unstyled"
              fw={600}
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
                   fontSize:'18px'
                }
              }}
            />
          </Grid.Col>
         <Grid.Col span={{ base:12,sm:6 }}>
          <TextInput
              size='xl'
              radius={10}
              variant="unstyled"
              fw={600}
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
                   fontSize:'18px'
                }
              }}
            />
          </Grid.Col>
          
          <Grid.Col span={{ base:12,sm:6 }}>
          <TextInput
             size='xl'
              radius={10}
              variant="unstyled"
              fw={600}
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
                   fontSize:'18px'
                }
              }}
            />
          </Grid.Col>
          <Grid.Col span={{ base:12,sm:6 }}>
            <TextInput
              size='xl'
              radius={10}
              variant="unstyled"
              fw={600}
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
                  fontSize:'18px'
                }
              }}
            />
          </Grid.Col>
          <Grid.Col span={{ base:12,sm:6 }}>
          <TextInput
              size='xl'
              radius={10}
              variant="unstyled"
              fw={600}
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
                   fontSize:'18px'
                }
              }}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>    
  <TextInput
    size='xl'
              radius={10}
              variant="unstyled"
              fw={600}
              withAsterisk
    label="الكوليسترول منخفض الكثافة (LDL)"
    placeholder="LDL (mg/dL)"
    key={form.key("ldl")}
    {...form.getInputProps("ldl")}
    styles={{
      label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'}
    }}
  />
</Grid.Col>

<Grid.Col span={{ base: 12, sm: 6 }}>
  <TextInput
     size='xl'
              radius={10}
              variant="unstyled"
              fw={600}
              withAsterisk
    label="الكوليسترول مرتفع الكثافة (HDL)"
    placeholder="HDL (mg/dL)"
    key={form.key("hdl")}
    {...form.getInputProps("hdl")}
    styles={{
      label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'}
    }}
  />
</Grid.Col>
<Grid.Col span={{ base: 12, sm: 6 }}>
  <TextInput
    size='xl'
              radius={10}
              variant="unstyled"
              fw={600}
              withAsterisk
    label="الكرياتينين"
    placeholder="الكرياتينين (mg/dL)"
    key={form.key("creatine")}
    {...form.getInputProps("creatine")}
    styles={{
      label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'}
    }}
  />
</Grid.Col>
<Grid.Col span={{ base: 12, sm: 6 }}>
  <TextInput
    size='xl'
              // w={'60%'}
              radius={10}
              variant="unstyled"
              fw={600}
              withAsterisk
    label="الغلوكوز في الحالة الطبيعية"
    placeholder="الغلوكوز صيامي (mg/dL)"
    key={form.key("normal_glocose")}
    {...form.getInputProps("normal_glocose")}
    styles={{
      label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'}
    }}
  />
</Grid.Col>

<Grid.Col span={{ base: 12, sm: 6 }}>
  <TextInput
    size='xl'
              // w={'60%'}
              radius={10}
              variant="unstyled"
              fw={600}
              withAsterisk
    label="الغلوكوز بعد الوجبة"
    placeholder="الغلوكوز بعد الأكل (mg/dL)"
    key={form.key("Glocose_after_Meal")}
    {...form.getInputProps("Glocose_after_Meal")}
    styles={{
      label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'}
    }}
  />
</Grid.Col>

<Grid.Col span={{ base: 12, sm: 6 }}>
  <TextInput
        size='xl'
              // w={'60%'}
              radius={10}
              variant="unstyled"
              fw={600}
              withAsterisk
    label="الشحوم الثلاثية"
    placeholder="الشحوم الثلاثية (mg/dL)"
    key={form.key("triple_grease")}
    {...form.getInputProps("triple_grease")}
    styles={{
      label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'}
    }}
  />
</Grid.Col>

<Grid.Col span={{ base: 12, sm: 6 }}>
  <TextInput
        size='xl'
              // w={'60%'}
              radius={10}
              variant="unstyled"
              fw={600}
              withAsterisk
    label="الخضاب الغلوكوزي (HbA1c)"
    placeholder="HbA1c (%)"
    key={form.key("hba1c")}
    {...form.getInputProps("hba1c")}
    styles={{
      label: { textAlign: 'right', marginBottom: 5, width: '98%' , fontSize:'18px'}
    }}
  />
</Grid.Col>
    </Grid>
  );

  const drugInfoStep = (
    <Grid mt={40}  gutter="sm" justify="start" mb={20} align="end" dir="rtl" p={{base:25,sm:10}}>
       <Grid.Col span={{base:12,sm:6}}>
   <MultiSelect
      size='xl'
              w={{base:'90%',sm:'70%'}}
              radius={10}
              variant="filled"
              fw={600}
              withAsterisk
    label="نوع العلاج"
    placeholder="اختر نوع العلاج"
    data={[
      { value: 'insulin', label: 'أنسولين' },
      { value: 'oral', label: 'خافضات فموية' }
    ]}
    value={types}
    onChange={setTypes}
    styles={{
      label: { textAlign: 'right', marginBottom: 5, width: '98%', fontSize:'18px' }
    }}
  />
</Grid.Col>
{/* أنسولين */}
{types.includes('insulin') && (
  <>
    <Grid.Col span={{base:12,sm:6}}>
      <Select
          size='xl'
              w={{base:'90%',sm:'70%'}}
              radius={10}
              variant="unstyled"
              fw={600}
              withAsterisk
        label="نوع الإنسولين"
        placeholder="اختر النوع"
        data={[
          { value: 'mixed', label: 'مختلط' },
          { value: 'slow', label: 'بطيء' },
          { value: 'fast', label: 'سريع' },
        ]}
        value={insulinType}
        onChange={setInsulinType}
        styles={{ label: { textAlign: 'right', marginBottom: 5,width:'100%', fontSize:'18px' } }}
      />
    </Grid.Col>

    <Grid.Col span={{base:12,sm:6}}>
      <MultiSelect
          size='xl'
              w={{base:'90%',sm:'70%'}}
              radius={10}
              variant="unstyled"
              fw={600}
              withAsterisk
        label="اسماء الأدوية"
        placeholder="اختر الأدوية"
        data={insulinDrugOptions}
        value={insulinDrugs}
        onChange={setInsulinDrugs}
        searchable
        styles={{ label: { textAlign: 'right', marginBottom: 5 ,width:'100%'  , fontSize:'18px'} }}
      />
    </Grid.Col>

    {insulinDrugs.map((drug) => (
      <React.Fragment key={drug}>
        <Grid.Col span={{base:12,sm:6}}>
          <TextInput
              size='xl'
              // w={'70%'}
              radius={10}
              variant="unstyled"
              fw={600}
              withAsterisk
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
            styles={{ label: { textAlign: 'right', marginBottom: 5 ,width:'100%'  , fontSize:'18px'} }}
          />
        </Grid.Col>
        <Grid.Col span={{base:12,sm:6}}>
          <TextInput
              size='xl'
              // w={'70%'}
              radius={10}
              variant="unstyled"
              fw={600}
              withAsterisk
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
            styles={{ label: { textAlign: 'right', marginBottom: 5 ,width:'100%', fontSize:'18px'  } }}
          />
          </Grid.Col>
          <Grid.Col span={{base:12,sm:12}}>
             <Text size="sm" mt={5} style={{ textAlign: 'center' ,opacity:1,transition:'opacity 1s'}}>
            {insulinInfo[drug]?.unitsPerBox && insulinInfo[drug]?.dailyDose
              ? `يكفي الدواء لمدة ${calculateDuration(insulinInfo[drug].unitsPerBox, insulinInfo[drug].dailyDose)} يوم`
              : ''}
          </Text>
          </Grid.Col>

      </React.Fragment>
    ))}
  </>
)}
{types.includes('oral') && (
  <>
    <Grid.Col span={{base:12,sm:6}}>
      <MultiSelect
              size='xl'
              w={{base:'90%',sm:'70%'}}
              radius={10}
              variant="unstyled"
              fw={600}
              withAsterisk
        label="اسماء الأدوية"
        placeholder="اختر الأدوية"
        data={oralDrugOptions}
        value={oralDrugs}
        onChange={setOralDrugs}
        searchable
        styles={{ label: { textAlign: 'right', marginBottom: 5 ,width:'100%' , fontSize:'18px'} }}
      />
    </Grid.Col>

    {oralDrugs.map((drug) => (
      <React.Fragment key={drug}>
        <Grid.Col span={{base:12,sm:6}}>
          <TextInput
         size='xl'
              // w={'70%'}
              radius={10}
              variant="unstyled"
              fw={600}
              withAsterisk
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
            styles={{ label: { textAlign: 'right', marginBottom: 5 ,width:'100%' , fontSize:'18px'} }}
          />
        </Grid.Col>
        <Grid.Col span={{base:12,sm:6}}>
          <TextInput
          size='xl'
              // w={'70%'}
              radius={10}
              variant="unstyled"
              fw={600}
              withAsterisk
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
            styles={{ label: { textAlign: 'right', marginBottom: 5 ,width:'100%' , fontSize:'18px'} }}
          />
          </Grid.Col>
          <Grid.Col span={{base:12,sm:12}}>
          <Text size="sm" mt={5} style={{ textAlign: 'center' ,opacity:1,transition:'opacity 1s'}}>
            {oralInfo[drug]?.unitsPerBox && oralInfo[drug]?.dailyDose
              ? `يكفي لمدة ${calculateDuration(oralInfo[drug].unitsPerBox, oralInfo[drug].dailyDose)} يوم`
              : ''}
          </Text>
        </Grid.Col>
      </React.Fragment>
    ))}
  </>
)}
    </Grid>
  );

  return (
    <>
    <form  style={{ width: "100%" }}  onSubmit={form.onSubmit(handleSubmit)}>
      <Stepper   color="#37A9EF" size="lg"  active={activeStep} onStepClick={setActiveStep} breakpoint="sm" dir="rtl"  p={{base:'0',sm:'md'}} mx={{base:5,sm:40}}>
        <Stepper.Step>
          {generalInfoStep}
        </Stepper.Step>
        <Stepper.Step >
          {medicalInfoStep}
        </Stepper.Step>
        <Stepper.Step >
          {drugInfoStep}
        </Stepper.Step>
      </Stepper>

      <Flex dir="rtl" justify={'space-between'} align={'center'} mb="xl" p={{base:'0',sm:'md'}}  mx={{base:5,sm:40}}>
        <Button radius={10} miw={'8rem'}  size="md" variant="default" onClick={prevStep} disabled={activeStep === 0}>
          السابق
        </Button>
        {activeStep < 2 ? (
          <Button radius={10} miw={'8rem'} size="md" variant='light' color={'blue'} onClick={nextStep}>التالي</Button>
        ) : (
          <Button radius={10} miw={'8rem'}  size="md" variant='filled' color={'blue'} onClick={() => handleSubmit()} type="submit">إرسال</Button>
        )}
      </Flex>
      </form>
    </>
  );
};

export default AddReview;
