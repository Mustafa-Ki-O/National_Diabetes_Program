import { Container } from "@mantine/core"
import { useState,useEffect } from "react";
import useFetchPatients from "../../useMutation/Admin/useFetchPatients";
import Diagrams from "../../components/Home/Admin/Diagrams";
import Progress from "../../components/general/Progress";

const Statistics = () => {
    const [patients, setPatients] = useState([]);
    const {fetchPatients,isPending} = useFetchPatients(setPatients);
    const [progress,setProgress] = useState(false)
    
    useEffect(()=>{
        fetchPatients(setPatients)
    },[])

    useEffect(()=>{
        setProgress(isPending)
    },[isPending])
    return(
        <>
         {progress && <Progress/>}
        <Container fluid p={20}>
           <Diagrams patients={patients}/>
        </Container>
        </>
    )
}
export default Statistics