import { Grid,Title,Text ,Container, Flex} from "@mantine/core"
import { useState,useEffect } from "react";
import useFetchPatients from "../../useMutation/Admin/useFetchPatients";
import Progress from "../../components/general/Progress";

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

  const completedPatients = patients.filter(patient => patient.isCompleted);

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

    return(
        <>
        {progress && <Progress/>}
                <Container p={{base:0,md:'lg'}}  fluid  pb={60} mih='100vh' style={{opacity:active?'1':'0' ,transition:'all 0.7s'}}>
                 <Title size={'2rem'} ta={'end'} px={'lg'} mb={'3rem'} >
                     الرئيسية
                   </Title>
               {patients.length !==0 ? (
                
                  <Grid justify="end"  gutter={50}  px={'lg'}  >  
                  <Grid.Col mx={10} span={12}   align='end'>
                      <Title size='xl' mb={20}>
                        عدد المرضى
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
                  
                  <Grid.Col mx={10}   span={12} align='end' >
                  <Title size='xl' mb={20}>
                      السكري الأكثر شيوعا
                  </Title>
                      <Text size="md" >
                      {mostCommonSugarType || 'لا توجد بيانات'}
                      </Text>
                  </Grid.Col>
                  <Grid.Col  span={12} align='end' >
                     <Title size='xl' mb={20} >
                      عدد المسجلين لهذا الشهر
                  </Title>
                  </Grid.Col>
                  <Grid.Col span={12} align='end' >

                  
                    <Title size='xl' mb={20} >
                      عدد المسجلين لهذه السنة
                  </Title>
                  </Grid.Col>
                  </Grid> 
                 
       ):(
        <div>لا يوجد بيانات</div>
       )}
        </Container>
        </>
    )
}
export default Home;