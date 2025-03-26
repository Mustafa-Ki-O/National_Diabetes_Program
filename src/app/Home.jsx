import { Container } from "@mantine/core";
import PatientsCards from "../components/Home/Admin/PatientsCards";
import { useState,useEffect } from "react";
import { useMemo } from "react";
const Home = () => {

  const userData = localStorage.getItem('user');
  const user = useMemo(() => userData ? JSON.parse(userData) : null, [userData]);
  
  const [patients, setPatients] = useState([]);
  
  useEffect(() => {
    if (user?.role === 'center') {
      setPatients(user.patient || []); 
    }
  }, [user]);
  
    return (

        <>
        <Container fluid p={20}>
         {user.role === 'center' ?(
            <>
            <PatientsCards patients={patients}/>
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