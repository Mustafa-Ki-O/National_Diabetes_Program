import { useEffect, useState } from "react";
import { useParams } from "react-router"
// import useFetchPatientInfo from "../../useMutation/Admin/useFetchPatientInfo";
import Patient from "../../components/PatientInfo/Patient";
import { Container } from "@mantine/core";
import Progress from "../../components/general/Progress";
const PatientInfo = () => {

    const {id} = useParams();
    
    const [progress,setProgress] = useState(false);

    useEffect(()=>{
      console.log(progress)
    },[progress])


    return(
        <>
        {progress &&  <Progress />}
        {id ? (
        <Container fluid w='100%' px={{ base: 0, md: 30 }}>
           <Patient id={id} setProgress={setProgress}/>
        </Container>
        ):(
          <div>لم تحدد المريض !</div>
        )}
        </>
    )
}
export default PatientInfo