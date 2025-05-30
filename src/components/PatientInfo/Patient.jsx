import { Container, Grid, Text, Flex, Title, Button,  TextInput, Select, Image, Checkbox, NumberInput, Group } from "@mantine/core";
import info from '../../assets/css/nav.module.css';
import { useEffect, useState } from "react";
import * as yup from 'yup';
import { Switch } from '@mantine/core';
import useFetchPatients from "../../useMutation/Admin/useFetchPatients";
import useUpdatePatientInfo from "../../useMutation/Admin/useUpdatePatientInfo";
import backWards from '../../assets/vectors/forward.png'
import accountIcon from '../../assets/vectors/account.svg'
import removeIcon from '../../assets/vectors/Remove.svg'
import addIcon from '../../assets/vectors/Add.svg'
import { useNavigate, Outlet} from "react-router"
import { useSelector } from "react-redux";
import { useDisclosure } from "@mantine/hooks";
import dayjs from "dayjs";

import DeleteReviewModal from "./DeleteReviewModal";
import AddReviewModal from "./AddReviewModal";


const Patient = ({ id , setProgress}) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [openedAdd, { open:openAdd, close:closeAdd }] = useDisclosure(false);
  const patients1 = useSelector(state => state.patients.patients);
  const [patients,setPatients] = useState([])
  const [reviews,setReviews] = useState([])
  console.log(patients1)
  const [storedPatient,setStoredPatient] = useState(null)
  const navigate=useNavigate();
  // const [patient, setPatient] = useState({});
  const {fetchPatients, isPending} = useFetchPatients(setPatients);
  // console.log(patientInfo)
  // const { updatePatient, isPending } =useUpdatePatientInfo(setPatient);
 useEffect(() => {
  const patient = patients1?.find((p) => p.id === parseInt(id));
  setStoredPatient(patient);
  console.log(storedPatient)
}, [patients1, id]);

useEffect(()=>{
  fetchPatients()
  
},[])
useEffect(() => {
  if (patients) {
    const findPatient = patients.find((p) => p.id === parseInt(id));
    console.log(findPatient);
    setReviews(findPatient?.reviews || []);
  }
}, [patients, id]);
  const [deleteId,setDeleteId] = useState()
  // console.log(deleteId)
  // useEffect(()=>{
  //   setDeleteId(id)
  // },[id])

  useEffect(()=>{
    setProgress(isPending)
  },[isPending])
  
  const currentYear = new Date().getFullYear();
const birthYear = storedPatient?.age ? new Date(storedPatient.age).getFullYear() : null;
const age = birthYear ? currentYear - birthYear : "غير معروف";

  return (
    <Container w='100%' fluid >
      <DeleteReviewModal id={deleteId} opened={opened} close={close}/>
      <AddReviewModal name={storedPatient?.fullname} patientId={id} opened={openedAdd} close={closeAdd} />
      <Grid gutter={40}  px={{base:0,sm:'lg'}} mb={'3rem'} >
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
         <Grid.Col  span={{base:12,sm:6}}  >
          <Text size={'1.1rem'}  ta={'end'} mb={'md'}>
             تاريخ الميلاد
          </Text>
          <Flex justify={'end'} gap={'2.5rem'} px={'lg'} align={'center'}>
            <Group  p={0} m={0}>
             <Text  size={'1.5rem'} c={'#00000060'}>
            { `${age}` >= 10 ? 'سنة' : 'سنوات' }
            </Text>
             <Text size={'1.5rem'} c={'#00000060'}>
              {age}  
             </Text>
            </Group> 
            <Title size={'1.8rem'} ta={'end'} >
            {storedPatient?.age}
         </Title>
          </Flex>
        </Grid.Col>
          <Grid.Col  span={{base:12,sm:6}}  mt={'md'}>
          <Text size={'1.1rem'}  ta={'end'} mb={'md'}>
             تاريخ التسجيل
          </Text>
         <Title size={'1.8rem'} ta={'end'} px={'lg'}>
            {storedPatient?.create_At ? storedPatient?.create_At : 'DD-MM-YYYY' }
         </Title>
        </Grid.Col>
          <Grid.Col  span={{base:12,sm:6}} >
          <Text size={'1.1rem'}  ta={'end'} mb={'md'}>
             الفحص السريري
          </Text>
         <Title size={'1.8rem'} ta={'end'} px={'lg'}>
            { `مكتمل في ${storedPatient?.reviews ? storedPatient?.reviews[0].date : 'DD-MM-YYYY  تاريخ اول مراجعة'}` }
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
          <Grid.Col span={12} p={10} mt={'lg'}>
            <Text  ta={'right'} size="1.8rem" p={10} bg={'#8e8e8e50'} style={{borderRadius:10}}>
              المراجعات
            </Text>
          </Grid.Col>
 
           <Grid.Col  span={12} >
           {reviews ? [...reviews].reverse().map((r, index) => (
             <Flex
               
               key={index}
               justify={'space-between'}
               my={'md'}
               py={30}
              //  bg={'#fff'}
               bd={'1px solid #00000040'}
               style={{ borderRadius: 20, cursor: 'pointer' }}
               className={info.hovered} 
               
             >
               <Group ml={20}>
                 <Button
                   radius={15}
                   size="sm"
                   variant="light"
                   color="red"
                   onClick={(e) => {
                     e.stopPropagation(); 
                     setDeleteId(r.id);
                     open();
                   }}
                 >
                   <Image src={removeIcon} w={25} />
                 </Button>
                 <Title size={'1.8rem'} ta={'end'} px={'lg'}>
                   {r.date}
                 </Title>
               </Group>
               <Title size={'1.8rem'} ta={'end'} px={'lg'} onClick={() => navigate(`/National_Diabetes_Program/patientInfo/${id}/patient-review/${r.id}`)} style={{cursor:'pointer'}}>
                 {index == 0 ? '(المراجعة 1  (الفحص السريري' : `  ${index+1} المراجعة `}
               </Title>
             </Flex>
           )) : (
             <Text>لا يوجد مراجعات</Text>
           )}
           
        </Grid.Col> 
         <Grid.Col  span={12} ta={'end'}>
          <Button fw={'bold'} fz={'1.2rem'} radius={10} size="lg" variant="filled" color={'#37A9EF'} style={{alignSelf:'end'}} onClick={openAdd}>
             <Image src={addIcon} w={25}  mr={10}/>
                        اضافة مراجعة
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
     
    </Container>
  );
}

export default Patient;