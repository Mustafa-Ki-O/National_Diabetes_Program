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

const num = patients.length -1;
    return (

        <>
        {progress && <Progress/>}
        <Container  fluid  pb={30} mih='100vh'>
         {user?.role === 'center' ?(
            <>
            {patients.length !==0 ? (
            <Grid justify="end"  gutter={40} px={20} mx={3}>  
            <Grid.Col  span={{ lg: 2, md: 2, sm: 6, xs: 12 }} align='end'>
                <Title size='xl' mb={20}>
                  عدد المرضى
                </Title>
                <Text size="md">
                {num > 10 ? 'مريض' : 'مرضى'} {  num} 
                </Text>
            </Grid.Col>
            <Grid.Col span={{ lg: 4, md: 4, sm: 12, xs: 12 }} align='end' mr={70}>
            <Title size='xl' mb={20}>
                السكري الأكثر شيوعا
            </Title>
                <Text size="md" >
                { num > 10 ? 'مريض' : 'مرضى'} {  num} 
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