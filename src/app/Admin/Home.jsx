// Part of National_Diabetes_Program
// Copyright (c) 2025 Mustafa-Ki-O - All rights reserved.

import { Grid,Title,Text ,Container, Flex, Button, Box,Card, Stack} from "@mantine/core"
import { useState,useEffect } from "react";
import useFetchPatients from "../../useMutation/Admin/useFetchPatients";
import Progress from "../../components/general/Progress";
import { useNavigate } from "react-router";
import { CalendarDays, ChartLine, UserRound } from "lucide-react";
import useFetchSomeInfoHome from "../../useMutation/Admin/useFetchSomeInfoHome";


const Home = () => {
  const [patients, setPatients] = useState([]);
  const [homeInfo,setHomeInfo] = useState([]);

  const [active,setActive] = useState(false);

  const {fetchPatients,isPending} = useFetchPatients(setPatients);
   const {fetchHomeInfo,isPending:isPendingInfo} = useFetchSomeInfoHome(setHomeInfo)

      const [progress, setProgress] = useState(false);

    useEffect(()=>{
      fetchHomeInfo()
      fetchPatients()
    },[]);
  
    useEffect(() => {
      setProgress(isPending||isPendingInfo);
  }, [isPending||isPendingInfo]);
  
  useEffect(()=>{
     setTimeout(()=>{
       setActive(!isPending);
    },600);
  },[isPending])


     const getMostCommonSugarType = () => {
  if (patients.length === 0) return null;

  const completedPatients = patients?.filter(patient => patient.sugarType !== null || patient.sugarType !== '');

  if (completedPatients.length === 0) return 'لم يتم التحقق من المرضى !';

  const sugarCounts = completedPatients.reduce((acc, patient) => {
    const type = patient.sugarType; 
    if (type) { 
      acc[type] = (acc[type] || 0) + 1;
    }
    return acc;
  }, {});

  // console.log('SC : ',sugarCounts)
  const mostCommon = Object.entries(sugarCounts).reduce(
    (max, [type, count]) => count > max.count ? { type, count } : max,
    { type: '', count: 0 }
  );

  return mostCommon.type || 'لم يتم تحديد نوع';
};

const mostCommonSugarType = getMostCommonSugarType();

// console.log(mostCommonSugarType)
const num = patients.length ;

const navigate= useNavigate()

const CardCa = ({info}) =>(
  <>
  <Card 
  shadow="sm"
        miw={'14rem'}
        padding="lg"
        radius="lg"
        mx={5}
        bg="#fff"
        withBorder
         style={{cursor:'pointer', transition: "background 0.3s ease"}}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#37a9ef05")} // الأزرق مع شفافية
       onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
      >  
    <Stack gap={6} >
      <Flex mb={5} justify={'end'} align={'center'} gap={7}>
        <Title size={'lg'} ta={'right'}>
           {info.FullName}
           </Title>
        <UserRound size={30} />
      </Flex>

       <Flex justify={'end'} align={'center'} gap={10}>
        <Text size={'md'} ta={'right'}>
            {info.SugarType}
           </Text>
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
                    <>
                  <Grid justify="end"  gutter={50}  px={'lg'}  >  
                  <Grid.Col  span={{base:10,sm:3}}  align='end' bg={'#fff'} m={'1.5rem'}  style={{borderRadius:20,border:'1px solid #66666666'}}>
                      <Title size='xl' mb={20}>
                        عدد المرضى الكلي
                      </Title>
                      <Flex justify={'end'} gap={'md'}>
                      <Text size="md" >
                       {num }
                      </Text>
                       <Text size="lg" >
                       {num > 10 ? 'مريض' : 'مرضى'}
                      </Text>
                      </Flex>
 
                  </Grid.Col>
                  
                  
                  <Grid.Col  span={{base:10,sm:3}} align='end' bg={'#fff'} m={'1.5rem'}  style={{borderRadius:20,border:'1px solid #66666666'}} >
                     <Title size='xl' mb={20} >
                      الحسابات المفعلة
                  </Title>
                  <Text size="lg" >
                      {homeInfo?.count_active_account || 'لا توجد بيانات'}
                      </Text>
                  </Grid.Col>
                  <Grid.Col span={{base:10,sm:3}} align='end' bg={'#fff'} m={'1.5rem'}  style={{borderRadius:20,border:'1px solid #66666666'}}>
                      <Flex justify={'end'} gap={8}>
                        <CalendarDays />
                        <Title size='xl' mb={20} > عدد المسجلين لهذا الشهر</Title>
                        
                      </Flex>
                      <Text size="lg" >
                      {homeInfo?.account_this_month || 'لا توجد بيانات'}
                      </Text>
    
                  </Grid.Col>
                  <Grid.Col m={'1.5rem'}  span={{base:10,sm:4}} bg={'#fff'} align='end' style={{borderRadius:20,border:'1px solid #66666666'}} >
                   <Flex justify={'end'} gap={8}>
                    <ChartLine/>
                    <Title size='xl' mb={20}>
                      السكري الأكثر شيوعا
                  </Title>
                   </Flex>
                  
                      <Text size="lg" >
                      {mostCommonSugarType || 'لا توجد بيانات'}
                      </Text>
                  </Grid.Col>
                  </Grid> 
              
                  <Title size='xl' mb={20} ta={'end'} m={'1.5rem'} mt={'3rem'}>
                    المرضى المسجلين حديثا
           </Title>
             <Flex visibleFrom="sm" p={{base:0,md:'lg'}} justify={'end'} wrap={'wrap'} gap={10}>
               {
                 
                 homeInfo?.last_five_patient?.map((e,i) => (
                 <CardCa info={e} key={i} />
                 ))
               }</Flex>
               <Flex hiddenFrom="sm" gap={5} p={{base:0,md:'lg'}} style={{flexDirection:'column'}} justify={'end'}>
               {
           
               homeInfo?.last_five_patient?.map((e,i) => (
                 <CardCa info={e} key={i}  />
               ))
             }</Flex>
                  </>

                 
       ):(
        <div>لا يوجد بيانات</div>
       )}
       
      


        </Container>
        </>
    )
}
export default Home;