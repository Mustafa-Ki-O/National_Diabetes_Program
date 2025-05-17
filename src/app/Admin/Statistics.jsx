import { Container,Title } from "@mantine/core"
import { useState,useEffect } from "react";
import useFetchPatients from "../../useMutation/Admin/useFetchPatients";
import Diagrams from "../../components/Home/Admin/Diagrams";
import Progress from "../../components/general/Progress";
import home from '../../assets/css/home.module.css'
const Statistics = () => {
    const [patients, setPatients] = useState([]);
    const {fetchPatients,isPending} = useFetchPatients(setPatients);
    const [progress,setProgress] = useState(false)
    const [active,setActive] = useState(false);
    
    useEffect(()=>{
        fetchPatients(setPatients)
    },[])

    useEffect(()=>{
        setProgress(isPending)
    },[isPending])

    
useEffect(()=>{
  setTimeout(()=>{
    setActive(!isPending);
  },600);
},[isPending])

    return(
        <>
         {progress && <Progress/>}
        <Container style={{opacity:active?'1':'0' ,transition:'all 0.7s'}}  fluid p={20}>
            <Title size={'2rem'} ta={'end'} px={'lg'} mb={'3rem'} >
                          الاحصائيات
                        </Title>
           <Diagrams patients={patients}/>
        </Container>
        </>
    )
}
export default Statistics