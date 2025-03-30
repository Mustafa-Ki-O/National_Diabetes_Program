import { Container ,Text} from "@mantine/core";
import PatientsCards from "../components/Home/Admin/PatientsCards";
import { useState,useEffect } from "react";
import { useMemo } from "react";
import Progress from "../components/general/Progress";
import useFetchPatients from "../useMutation/Admin/useFetchPatients";
import Search from "../components/Home/Admin/search";
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
        <Container fluid  pb={30}>
         {user?.role === 'center' ?(
            <>
             <Text size="lg" fw={700} mb={10}>
               هناك ما يزيد عن {num} {num > 10 ? 'مريض' : 'مرضى'} ,يمكنك البحث هنا
             </Text>
            <Search patients={patients} setSearchedPatients={setSearchedPatients}/>
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