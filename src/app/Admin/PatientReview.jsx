// Part of National_Diabetes_Program
// Copyright (c) 2025 Mustafa-Ki-O - All rights reserved.

import { useParams } from "react-router"
import { Container,Tabs,Grid,Title ,Card,Divider,Text, Flex, Button} from "@mantine/core"
import GeneralPatientReview from "../../components/PatientReview/GeneralPatientReview"
import { useState ,useEffect} from "react"
import MedicalPatientReview from "../../components/PatientReview/MedicalPatientReview"
import TreatmentsPatientReview from "../../components/PatientReview/TreatmentsPatientReview"
import ClinicsPatientReview from "../../components/PatientReview/ClinicsPatientReview"
import useFetchPatientReview from "../../useMutation/Admin/useFetchPatientReview"
import Progress from "../../components/general/Progress"
import downloadDataAsPDF from "../../components/AddReview/PdfDownloadReview"
import { useSelector } from "react-redux"
const PatientReview = () =>{
 const sections = {
    generalInfo: {
      title: 'معلومات عامة',
      fields: [
      { label: 'المدينة', key: 'address' },
      { label: 'الوزن', key: 'weight' },
      { label: 'الطول', key: 'length_patient' },
      { label: 'الجنس', key: 'gender' },
      { label: 'نوع السكري', key: 'sugarType' },
      { label: 'التاريخ العائلي للمرض', key: 'historyOfFamilyDisease' },
      { label: 'تاريخ اكتشاف المرض', key: 'historyOfdiseaseDetection' },
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
    treatments: {
      title: 'العلاج',
      fields: [
      { label: "نوع العلاج", key: "treatments.type" },
      { label: "نوع الإنسولين", key: "treatments.speed" },
      { label: "الأدوية", key: "treatments.druges" }
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

    const patients = useSelector(store => store.patients.patients)
    const [storedPatient,setStoredPatient] = useState(null)
    const {id,rid} = useParams()
    const [review,setReview] = useState({})
    const {fetchReview,isPending} = useFetchPatientReview(setReview);
    const [progress, setProgress] = useState(false);
    
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
 
const [download,setDownload] = useState(false)
 useEffect(()=>{
  fetchReview(rid)
 },[rid])

 useEffect(()=>{
  setProgress(isPending)
 },[isPending])

 useEffect(()=>{
  if(download){
    downloadDataAsPDF(review,sections,storedPatient)
    setDownload(false)
  }
  
 },[download])
 

return(
    <>
    {progress && <Progress/>}
       <Container fluid p={20}>
        <Flex w={'100%'} justify={'space-between'} >
          <Button  ml={20} radius={'md'} variant="filled" color="blue" size="md" onClick={() => setDownload(true)}>
            تحميل نسخة
          </Button>
            <Title bg={'#f9f9f9'} size={'2rem'} ta={'end'} px={'lg'} mb={'3rem'} >
              بيانات المراجعة
            </Title>
        </Flex>
             

      <Tabs  radius="md" p={{base:0,sm:20}} dir="rtl" defaultValue="general">
        <Tabs.List pos={'sticky'} top={60} style={{zIndex:10,borderBottom:'2px solid #00000004'}} bg={'#f9f9f9'}>
          <Tabs.Tab fz={{base:'0.7rem',sm:'1.5rem'}}  value="general">البيانات العامة</Tabs.Tab>
          <Tabs.Tab fz={{base:'0.7rem',sm:'1.5rem'}}  value="medical">البيانات الطبية</Tabs.Tab>
          <Tabs.Tab fz={{base:'0.7rem',sm:'1.5rem'}}  value="treatment">بيانات العلاج</Tabs.Tab>
          <Tabs.Tab fz={{base:'0.7rem',sm:'1.5rem'}}  value="clinics">العيادات </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="general" pt="md">
          <GeneralPatientReview review={review} />
        </Tabs.Panel>

        <Tabs.Panel value="medical" pt="md">
          <MedicalPatientReview review={review} />
        </Tabs.Panel>

        <Tabs.Panel value="treatment" pt="md">
          <TreatmentsPatientReview review={review} />
        </Tabs.Panel>

        <Tabs.Panel value="clinics" pt="md">
          <ClinicsPatientReview review={review} />
        </Tabs.Panel>
      </Tabs>
      
      </Container>
    </>
)


}
export default PatientReview