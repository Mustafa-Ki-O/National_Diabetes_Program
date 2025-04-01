import { Container ,Text,Grid, Stack, Title,Image, Flex} from "@mantine/core";
import PatientsCards from "../components/Home/Admin/PatientsCards";
import { useState,useEffect } from "react";
import { useMemo } from "react";
import Progress from "../components/general/Progress";
import useFetchPatients from "../useMutation/Admin/useFetchPatients";
import Search from "../components/Home/Admin/search";
import search from'../assets/vectors/search.png'
import home from '../assets/css/home.module.css'
const Home = () => {
  
  const userData = localStorage.getItem('user');
  const user = useMemo(() => userData ? JSON.parse(userData) : null, [userData]);
  const [progress, setProgress] = useState(false);
  
  const [patients, setPatients] = useState([]);
  const {fetchPatients,isPending} = useFetchPatients(setPatients);
  const [searchedPatients,setSearchedPatients] = useState([])

  // const [isSubmitted, setIsSubmitted] = useState(false);
 
  useEffect(()=>{
    fetchPatients()
  },[]);

  useEffect(() => {
    setProgress(isPending);
}, [isPending]);

const getMostCommonSugarType = () => {
  if (patients.length === 0) return null;

  // 1. تصفية المرضى المكتملين فقط
  const completedPatients = patients.filter(patient => patient.isCompleted);

  if (completedPatients.length === 0) return 'لم يتم التحقق من المرضى !';

  // 2. حساب التكرارات للمرضى المكتملين
  const sugarCounts = completedPatients.reduce((acc, patient) => {
    const type = patient.sugarType; 
    if (type) { // التأكد من وجود قيمة
      acc[type] = (acc[type] || 0) + 1;
    }
    return acc;
  }, {});

  // 3. العثور على النوع الأكثر تكراراً
  const mostCommon = Object.entries(sugarCounts).reduce(
    (max, [type, count]) => count > max.count ? { type, count } : max,
    { type: '', count: 0 }
  );

  return mostCommon.type || 'لم يتم تحديد نوع';
};

const mostCommonSugarType = getMostCommonSugarType();

console.log(mostCommonSugarType)
const num = patients.length -1;
    return (

        <>
        {progress && <Progress/>}
        <Container  fluid  pb={30} mih='100vh'>
         {user?.role === 'center' ?(
            <>
            {patients.length !==0 ? (
            <Grid justify="end"  gutter={40}  px={20} mx={3}>  
            <Grid.Col  bg={{base:'#fff',md:'transparent'}} span={{ lg: 2, md: 2, sm: 6, xs: 6 }} style={{borderRadius:10}}  align='end'>
                <Title size='xl' mb={20}>
                  عدد المرضى
                </Title>
                <Text size="md">
                {num > 10 ? 'مريض' : 'مرضى'} {  num} 
                </Text>
            </Grid.Col>
            <Grid.Col bg={{base:'#fff',md:'transparent'}} style={{borderRadius:10}} span={{ lg: 4, md: 4, sm: 12, xs: 6 }} align='end' mr={{base:0,md:70}}>
            <Title size='xl' mb={20}>
                السكري الأكثر شيوعا
            </Title>
                <Text size="md" >
                {mostCommonSugarType || 'لا توجد بيانات'}
                </Text>
            </Grid.Col>
            <Grid.Col className={home.grid} align='end' span={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
              <Flex justify='end' gap={10}>
              <Image src={search} mb={10} w={30} className={home.search}/>
                 <Text size="lg" fw={700} mb={10}  >
                    ابحث عن مريض 
                </Text>  
              </Flex>
            
              <Search patients={patients} setSearchedPatients={setSearchedPatients}/>
            </Grid.Col>
            
            </Grid>
            ):(<></>)}
             {/* <Text size="lg" fw={700} mb={10}>
               هناك ما يزيد عن {num} {num > 10 ? 'مريض' : 'مرضى'} ,يمكنك البحث هنا
             </Text> */}
            
            <PatientsCards setPatients={setPatients}  patients={searchedPatients} setProgress={setProgress}/>
            </>
         ):(
            <>
              hello
            </>
         )}
        </Container>
        
        </>
    )
}
export default Home;