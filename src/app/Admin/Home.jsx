// Part of National_Diabetes_Program
// Copyright (c) 2025 Mustafa-Ki-O - All rights reserved.

import { Grid,Title,Text ,Container, Flex, Button, Box,Card, Stack} from "@mantine/core"
import { Carousel } from '@mantine/carousel';
import { useState,useEffect } from "react";
import useFetchPatients from "../../useMutation/Admin/useFetchPatients";
import Progress from "../../components/general/Progress";
import { useNavigate } from "react-router";
import { CalendarDays, ChartLine } from "lucide-react";
import PatientCard from "../../components/Home/Admin/PatientCard";
const Home = () => {
  const [patients, setPatients] = useState([]);
  const [active,setActive] = useState(false);
  const {fetchPatients,isPending} = useFetchPatients(setPatients);
   const [progress, setProgress] = useState(false);
    useEffect(()=>{
      fetchPatients()
    },[]);
  
    useEffect(() => {
      setProgress(isPending);
  }, [isPending]);
  
  useEffect(()=>{
  setTimeout(()=>{
    setActive(!isPending);
  },600);
},[isPending])


     const getMostCommonSugarType = () => {
  if (patients.length === 0) return null;

  const completedPatients = patients?.filter(patient => patient.isCompleted);

  if (completedPatients.length === 0) return 'لم يتم التحقق من المرضى !';

  const sugarCounts = completedPatients.reduce((acc, patient) => {
    const type = patient.sugarType; 
    if (type) { 
      acc[type] = (acc[type] || 0) + 1;
    }
    return acc;
  }, {});

  const mostCommon = Object.entries(sugarCounts).reduce(
    (max, [type, count]) => count > max.count ? { type, count } : max,
    { type: '', count: 0 }
  );

  return mostCommon.type || 'لم يتم تحديد نوع';
};

const mostCommonSugarType = getMostCommonSugarType();

console.log(mostCommonSugarType)
const num = patients.length ;

const navigate= useNavigate()

const CardCa = () =>(
  <>
  <Card 
  w={'auto'}
        padding="lg"
        radius="lg"
        mx={5}
        bg="#fff"
        withBorder
         style={{cursor:'pointer'}}
      >  
    <Stack gap={6} >
      <Flex justify={'end'} align={'center'} gap={7}>
        <Text size={'md'}  ta={'right'}> سامر سامر</Text>
        <Title size={'md'} ta={'right'}> : الاسم </Title>
      </Flex>
      <Flex justify={'end'} align={'center'} gap={7}>
        <Text size={'md'} ta={'right'}> 126368929392</Text>
        <Title size={'md'} ta={'right'}>: الرقم الوطني </Title>
      </Flex>
       <Flex justify={'end'} align={'center'} gap={7}>
        <Text size={'md'} ta={'right'}> نوع أول </Text>
        <Title size={'md'} ta={'right'}> : نوع السكري </Title>
      </Flex>
    </Stack>
  </Card>
  </>
)
    return(
        <>
        {progress && <Progress/>}
                <Container p={{base:0,md:'lg'}}  fluid  pb={60} mih='100vh' style={{opacity:active?'1':'0' ,transition:'all 0.7s'}}>
                 <Title size={'2rem'} ta={'end'} px={'lg'} mb={'3rem'} >
                     الرئيسية
                   </Title>
               {patients.length !==0 ? (
                
                  <Grid justify="end"  gutter={50}  px={'lg'}  >  
                  <Grid.Col  span={{base:10,sm:3}}  align='end' bg={'#fff'} m={'1.5rem'}  style={{borderRadius:20,border:'1px solid #66666666'}}>
                      <Title size='xl' mb={20}>
                        عدد المرضى الكلي
                      </Title>
                      <Flex justify={'end'} gap={'md'}>
                      <Text size="md" >
                       {num }
                      </Text>
                       <Text size="md" >
                       {num > 10 ? 'مريض' : 'مرضى'}
                      </Text>
                      </Flex>
 
                  </Grid.Col>
                  
                  
                  <Grid.Col  span={{base:10,sm:3}} align='end' bg={'#fff'} m={'1.5rem'}  style={{borderRadius:20,border:'1px solid #66666666'}} >
                     <Title size='xl' mb={20} >
                      الحسابات المفعلة
                  </Title>
                  <Text size="lg" >
                      {10 || 'لا توجد بيانات'}
                      </Text>
                  </Grid.Col>
                  <Grid.Col span={{base:10,sm:3}} align='end' bg={'#fff'} m={'1.5rem'}  style={{borderRadius:20,border:'1px solid #66666666'}}>
                      <Flex justify={'end'} gap={8}>
                        <CalendarDays />
                        <Title size='xl' mb={20} > عدد المسجلين لهذا الشهر</Title>
                        
                      </Flex>
                      <Text size="lg" >
                      {20 || 'لا توجد بيانات'}
                      </Text>
    
                  </Grid.Col>
                  <Grid.Col m={'1.5rem'}  span={{base:10,sm:4}} bg={'#fff'} align='end' style={{borderRadius:20,border:'1px solid #66666666'}} >
                   <Flex justify={'end'} gap={8}>
                    <ChartLine/>
                    <Title size='xl' mb={20}>
                      السكري الأكثر شيوعا
                  </Title>
                   </Flex>
                  
                      <Text size="md" >
                      {mostCommonSugarType || 'لا توجد بيانات'}
                      </Text>
                  </Grid.Col>
                  </Grid> 
                  

                 
       ):(
        <div>لا يوجد بيانات</div>
       )}
       <Title size='xl' mb={20} ta={'end'} m={'1.5rem'} mt={'3rem'}>
                    المرضى المسجلين حديثا
                  </Title>
<Flex p={{base:0,md:'lg'}}>
  {
    
    [1, 2, 3].map((e) => (
      <CardCa key={e} />
    ))
  }</Flex>


        </Container>
        </>
    )
}
export default Home;