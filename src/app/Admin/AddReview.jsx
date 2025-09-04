// Part of National_Diabetes_Program
// Copyright (c) 2025 Mustafa-Ki-O - All rights reserved.

import { Flex, Button,Stepper, Title ,Image, Group} from "@mantine/core";
import downloadDataAsPDF from "../../components/AddReview/PdfDownloadReview";
import { useMemo } from "react";
import { useEffect, useState } from "react";
import * as yup from 'yup';
import '../../assets/css/addReview.css'
import { useSelector } from "react-redux";
import {  useNavigate, useParams } from "react-router";
import dayjs from "dayjs";
import UpScroll from "../../components/general/UpScroll";
import GeneralInfoStep from "../../components/AddReview/GeneralInfoStep";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider } from "react-hook-form";
import MedicalInfoStep from "../../components/AddReview/MedicalInfoStep";
import TreatmentStep from "../../components/AddReview/TreatmentStep";
import { useDisclosure } from "@mantine/hooks";
import PrevModel from "../../components/AddReview/PrevModel";
import ClinicsStep from "../../components/AddReview/ClinicsStep";
import VerifySubmitModal from "../../components/AddReview/VerifySubmitModal";
import Progress from "../../components/general/Progress";
import infoCard from '../../assets/vectors/infoCard.svg'
import Clinics from '../../assets/vectors/Clinic.svg'
import medicalCard from '../../assets/vectors/medicalCard.svg'
import treatments from '../../assets/vectors/treatments.svg'

// import loadFont from "../../components/general/LoadFont";


const schema1 = yup.object().shape({
  address: yup.string().required('الرجاء اختيار المدينة'),
  weight: yup.number().typeError('الوزن يجب أن يكون رقمًا').required('مطلوب'),
  length_patient: yup.number().typeError('الطول يجب أن يكون رقمًا').required('مطلوب'),
  otherDisease: yup.string().required('يرجى إدخال الأمراض الأخرى'),
});

const schema2 = yup.object().shape({
    hemoglobin: yup.string().required('الهيموجلوبين مطلوب'),
    bloodPressure: yup.string().required('ضغط الدم مطلوب'),
    cholesterol: yup.string().required('الكوليسترول مطلوب'),
    grease: yup.string().required('الدهون مطلوب'),
    urineAcid: yup.string().required('حمض البوليك مطلوب'),
    normal_glocose: yup.string().required('حقل مطلوب'),
    Glocose_after_Meal: yup.string().required('حقل مطلوب'),
    triple_grease: yup.string().required('حقل مطلوب'),
    hba1c: yup.string().required('حقل مطلوب'),
    ldl: yup.string().required('حقل مطلوب'),
    hdl: yup.string().required('حقل مطلوب'),
    creatine: yup.string().required('حقل مطلوب'),
})

const drugSchema = yup.object().shape({
  treatments: yup.object().shape({
    type: yup
      .array()
      .of(yup.string().oneOf(["insulin", "pills"]))
      .min(1, "اختر نوع علاج واحد على الأقل")
      .required("نوع العلاج مطلوب"),


    druges: yup.lazy((_, context) => {
      // const type = context?.parent?.type || [];
      return yup
        .array()
        .of(
          yup.object().shape({
            id: yup.string().required("اسم الدواء مطلوب"),
            dosage_per_day: yup
              .number()
              .typeError("مطلوب * أدخل رقماً")
              .min(1, "على الأقل 1")
              .required("مطلوب * أدخل رقماً"),
            quantity: yup.string().required('يجب تحديد')
          })
        )
        .min(1, "أدخل دواء واحد على الأقل");
    })
  })
});

const diseaseWithValidation = (
  hasKey,
  nameKey,
  relationKey,
  commentsKey
) => ({
  [hasKey]: yup.boolean().required(),

  [nameKey]: yup.string().when(hasKey, {
    is: true,
    then: (schema) => schema.required('يرجى تحديد المرض'),
    otherwise: (schema) => schema.notRequired(),
  }),

  [relationKey]: yup.boolean().when(hasKey, {
    is: true,
    then: (schema) => schema.required('يرجى تحديد العلاقة بالسكري'),
    otherwise: (schema) => schema.notRequired(),
  }),

  [commentsKey]: yup.string().notRequired(),
  coments:yup.string().notRequired()
});

const clinicSchema = yup.object().shape({
  ...diseaseWithValidation(
    'has_a_eye_disease',
    'in_kind_disease',
    'relationship_eyes_with_diabetes',
    'Comments_eyes_clinic'
  ),
  ...diseaseWithValidation(
    'has_a_heart_disease',
    'heart_disease',
    'relationship_heart_with_diabetes',
    'Comments_heart_clinic'
  ),
  ...diseaseWithValidation(
    'has_a_nerve_disease',
    'nerve_disease',
    'relationship_nerve_with_diabetes',
    'Comments_nerve_clinic'
  ),
  ...diseaseWithValidation(
    'has_a_bone_disease',
    'bone_disease',
    'relationship_bone_with_diabetes',
    'Comments_bone_clinic'
  ),
  ...diseaseWithValidation(
    'has_a_urinary_disease',
    'urinary_disease',
    'relationship_urinary_with_diabetes',
    'Comments_urinary_clinic'
  ),
});


const schemas = [schema1, schema2,drugSchema,clinicSchema];
const AddReview = () => {
  UpScroll()

  const [activeStep, setActiveStep] = useState(0);

  const [opened, { open, close }] = useDisclosure(false);
  const [openedVerify, { open:openVerify, close : closeVerify}] = useDisclosure(false);

  const [progress, setProgress] = useState(false);

  
  const patients = useSelector(store => store.patients.patients)
  // const medicinesStore = useSelector(store => store.medicins.medicins)


  const {id} = useParams()
 
  const [storedPatient,setStoredPatient] = useState(null)


  const[reviewData,setReviewData] = useState({})

 
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

const handleNext = async () => {
  const isValid = await methods.trigger(); 
  if (isValid) {
    const data = methods.getValues();
    const updated = {
      ...reviewData,
      ...data,
      historyOfdiseaseDetection: data.historyOfdiseaseDetection
        ? dayjs(data.historyOfdiseaseDetection).format('DD-MM-YYYY')
        : '',
    };
    console.log(updated)

    setReviewData(updated);
    setActiveStep((s) => s + 1);
  }
};

useEffect(() => {
  if (openedVerify) {
    console.log("كل البيانات جاهزة للإرسال:", reviewData);

  }
}, [reviewData, openedVerify]);


  const currentSchema = useMemo(() => {
  return schemas[activeStep];
}, [activeStep]);

const methods = useForm({
  mode: "onTouched",
  shouldUnregister: false, // هام جداً
  resolver: yupResolver(currentSchema),
  defaultValues: {
    patient_id: parseInt(id) ,
    // isCompleted : true,
    address: "",
    weight: "",
    length_patient: "",
    otherDisease: "",
    // 
      hemoglobin: '',
      bloodPressure: '',
      cholesterol: '',
      grease: '',
      urineAcid: '',
      normal_glocose: '',
      Glocose_after_Meal: '',
      triple_grease: '',
      hba1c: '',
      ldl: '',
      hdl: '',
      creatine: '',
      // 
      treatments: {
      type: [],
      druges: [
        {
          id:'',
          dosage_per_day:'',
          quantity:'',
        }
      ]
    },
    // 
      has_a_eye_disease: false,
      in_kind_disease: '',
      relationship_eyes_with_diabetes: false,
      Comments_eyes_clinic: '',
      
      has_a_heart_disease: false,
      heart_disease: '',
      relationship_heart_with_diabetes: false,
      Comments_heart_clinic: '',
      
      has_a_nerve_disease: false,
      nerve_disease: '',
      relationship_nerve_with_diabetes: false,
      Comments_nerve_clinic: '',
      
      has_a_bone_disease: false,
      bone_disease: '',
      relationship_bone_with_diabetes: false,
      Comments_bone_clinic: '',
      
      has_a_urinary_disease: false,
      urinary_disease: '',
      relationship_urinary_with_diabetes: false,
      Comments_urinary_clinic: '',

      coments:'',
  },
});

 
const [finalData,setFinalData] = useState({})
const onSubmit = () => {
  const data = methods.getValues();

  const updated = {
    ...reviewData,
    ...data,
    historyOfdiseaseDetection: data.historyOfdiseaseDetection
      ? dayjs(data.historyOfdiseaseDetection).format('DD-MM-YYYY')
      : '',
  };

  setFinalData(updated);
  setReviewData(updated)
  console.log(finalData)
  openVerify();
};


const [download,setDownload] = useState(false)



  const prevStep = () => setActiveStep((current) => (current > 0 ? current - 1 : open()));
  // const nextStep = () => setActiveStep((current) => (current < 2 ? current + 1 : current));

  const sections = {
    generalInfo: {
      title: 'معلومات عامة',
      fields: [
      { label: 'المدينة', key: 'address' },
      { label: 'الوزن', key: 'weight' },
      { label: 'الطول', key: 'length_patient' },
      { label: 'أمراض أخرى', key: 'otherDisease' },
      ],
    },
    medicalInfo: {
      title: 'المعلومات الطبية',
      fields: [
       { label: 'الهيموجلوبين (%)', key: 'hemoglobin' },
      { label: 'الدهون (mg/dL)', key: 'grease' },
      { label: 'حمض البوليك (mg/dL)', key: 'urineAcid' },
      { label: 'ضغط الدم (mmHg)', key: 'bloodPressure' },
      { label: 'الكوليسترول (mg/dL)', key: 'cholesterol' },
      { label: 'الكوليسترول منخفض الكثافة (LDL)', key: 'ldl' },
      { label: 'الكوليسترول مرتفع الكثافة (HDL)', key: 'hdl' },
      { label: 'الكرياتينين (mg/dL)', key: 'creatine' },
      { label: 'الغلوكوز في الحالة الطبيعية (mg/dL)', key: 'normal_glocose' },
      { label: 'الغلوكوز بعد الوجبة (mg/dL)', key: 'Glocose_after_Meal' },
      { label: 'الشحوم الثلاثية (mg/dL)', key: 'triple_grease' },
      { label: 'الخضاب الغلوكوزي (HbA1c)', key: 'hba1c' },
      ],
    },
    treatment: {
      title: 'العلاج',
      fields: [
       { label: 'نوع العلاج', key: 'treatments.type' },
      { label: 'مدة العلاج', key: 'treatment_duration' },


      { label: 'اسم الدواء', key: 'treatments.druges[0].id' },
      { label: 'الجرعات اليومية', key: 'treatments.druges[0].dosage_per_day' },
      ],
    },
    clinics: {
      title: 'العيادات',
      fields: [
         // عيادة العيون
      { label: 'هل يوجد مرض عيني', key: 'has_a_eye_disease' },
      { label: 'المرض العيني', key: 'in_kind_disease' },
      { label: 'علاقة المرض العيني بالسكري', key: 'relationship_eyes_with_diabetes' },
      { label: 'ملاحظات العيادة العينية', key: 'Comments_eyes_clinic' },
    
      // العيادة القلبية
      { label: 'هل يوجد مرض قلبي', key: 'has_a_heart_disease' },
      { label: 'المرض القلبي', key: 'heart_disease' },
      { label: 'علاقة المرض القلبي بالسكري', key: 'relationship_heart_with_diabetes' },
      { label: 'ملاحظات العيادة القلبية', key: 'Comments_heart_clinic' },
    
      // العيادة البولية
      { label: 'هل يوجد مرض بولي', key: 'has_a_urinary_disease' },
      { label: 'المرض البولي', key: 'urinary_disease' },
      { label: 'علاقة المرض البولي بالسكري', key: 'relationship_urinary_with_diabetes' },
      { label: 'ملاحظات العيادة البولية', key: 'Comments_urinary_clinic' },
    
      // العيادة العظمية
      { label: 'هل يوجد مرض عظمي', key: 'has_a_bone_disease' },
      { label: 'المرض العظمي', key: 'bone_disease' },
      { label: 'علاقة المرض العظمي بالسكري', key: 'relationship_bone_with_diabetes' },
      { label: 'ملاحظات العيادة العظمية', key: 'Comments_bone_clinic' },
    
      // العيادة العصبية
      { label: 'هل يوجد مرض عصبي', key: 'has_a_nerve_disease' },
      { label: 'المرض العصبي', key: 'nerve_disease' },
      { label: 'علاقة المرض العصبي بالسكري', key: 'relationship_nerve_with_diabetes' },
      { label: 'ملاحظات العيادة العصبية', key: 'Comments_nerve_clinic' },
    
      // عيادات أخرى
      { label: 'ملاحظات أخرى', key: 'coments' },
      ],
    },
  };

  useEffect(()=>{
  if(download){
    downloadDataAsPDF(finalData,sections,storedPatient)
  }
},[download])

// const handleStepClick = async (stepIndex) => {
//   if (stepIndex < activeStep) {

//     setActiveStep(stepIndex);
//   } else {

//     const isValid = await methods.trigger(); 
//     if (isValid) {
//       setActiveStep(stepIndex);
//     }
//   }
// };

  return (
    <>
    {progress &&<Progress /> }
    
    <VerifySubmitModal setDownload={setDownload} id={id} opened={openedVerify} close={closeVerify} setProgress={setProgress} reviewData={finalData}/>
    <PrevModel id={id} opened={opened} close={close} />
    <FormProvider {...methods}>
    <form onSubmit={methods.handleSubmit(onSubmit)}  style={{ width: "100%" }} >
      <Stepper iconSize={37} allowNextStepsSelect={false} pos={'sticky'} top={60} mb={'3rem'} mih={'100vh'} bg={'#f9f9f9'} color="#37A9EF" size="md"  active={activeStep} onStepClick={setActiveStep} breakpoint="sm" dir="rtl"  p={{base:'sm',sm:'sm'}} mx={{base:5,sm:40}}>       
        <Stepper.Step icon={<Image src={infoCard} w={20} />} >

         <Group  display={'flex'} justify="center" p={0} m={0} pos={'sticky'} top={60}  style={{zIndex:20,borderBottom:'1px solid #8e8e8e40'}} bg={'#f9f9f9'} >
            <Title  mt={10} ta={'center'} fz={'1.5rem'} mb={'1rem'}>
               المعلومات العامة
             </Title>
             <Button radius={10} style={{zIndex:30}} pos={'absolute'} right={0} top={10} variant="outline" color="#8e8e8e" onClick={open}>
              عودة
             </Button></Group>
          {/* </Flex> */}
            
         <GeneralInfoStep />
        </Stepper.Step>
        <Stepper.Step icon={<Image src={medicalCard} w={20} />}>
                 <Group  display={'flex'} justify="center" p={0} m={0} pos={'sticky'} top={60}  style={{zIndex:20,borderBottom:'1px solid #8e8e8e40'}} bg={'#f9f9f9'} >
            <Title  mt={10} ta={'center'} fz={'1.5rem'} mb={'1rem'}>
               التحاليل الطبية
             </Title>
             <Button radius={10} style={{zIndex:30}} pos={'absolute'} right={0} top={10} variant="outline" color="#8e8e8e" onClick={open}>
              عودة
             </Button></Group>
          <MedicalInfoStep />
        </Stepper.Step>
        <Stepper.Step icon={<Image src={treatments} w={20} />}>
               <Group  display={'flex'} justify="center" p={0} m={0} pos={'sticky'} top={60}  style={{zIndex:20,borderBottom:'1px solid #8e8e8e40'}} bg={'#f9f9f9'} >
            <Title  mt={10} ta={'center'} fz={'1.5rem'} mb={'1rem'}>
             العلاج
             </Title>
             <Button radius={10} style={{zIndex:30}} pos={'absolute'} right={0} top={10} variant="outline" color="#8e8e8e" onClick={open}>
              عودة
             </Button></Group>
          <TreatmentStep />
        </Stepper.Step>
        <Stepper.Step icon={<Image src={Clinics} w={20} />} >
             <Group  display={'flex'} justify="center" p={0} m={0} pos={'sticky'} top={60}  style={{zIndex:20,borderBottom:'1px solid #8e8e8e40'}} bg={'#f9f9f9'} >
            <Title  mt={10} ta={'center'} fz={'1.5rem'} mb={'1rem'}>
              العيادات
             </Title>
             <Button radius={10} style={{zIndex:30}} pos={'absolute'} right={0} top={10} variant="outline" color="#8e8e8e" onClick={open}>
              عودة
             </Button></Group>
           <ClinicsStep />
        </Stepper.Step>
      </Stepper>
        <Flex dir="rtl"  w={'90%'} justify={'space-between'} align={'center'} m={'auto'}  mb={'4rem'}  p={{base:'0',sm:'md'}}  mx={{base:5,sm:40}}>
        <Button disabled={activeStep === 0 ? true :false} radius={10} miw={'8rem'}  size="md" variant="default" onClick={prevStep} >
        السابق
        </Button>
        {activeStep < schemas.length - 1 ? (
          <Button radius={10} miw={'8rem'} size="md" variant='light' color={'blue'}  onClick={handleNext}>التالي</Button>
        ) : (
          <Button radius={10} miw={'8rem'}  size="md" variant='filled' color={'blue'}  onClick={methods.handleSubmit(onSubmit)}>إرسال</Button>
        )}
        </Flex>
        {/* </Box> */}
      </form>
      </FormProvider>
    </>
  );
};

export default AddReview;
