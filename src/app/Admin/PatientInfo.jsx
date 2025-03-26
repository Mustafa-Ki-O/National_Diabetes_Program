import { useEffect, useState } from "react";
import { useParams } from "react-router"
import useFetchPatientInfo from "../../useMutation/Admin/useFetchPatientInfo";
import Patient from "../../components/PatientInfo/Patient";
import { Container } from "@mantine/core";

const PatientInfo = () => {

    const {id} = useParams();
    const [info,setInfo] = useState({});
    const {fetchInfo, isLoading} = useFetchPatientInfo(setInfo);
    console.log(id);

    useEffect(()=>{
      fetchInfo(id);
    },[id])
    return(
        <>
        <Container fluid w='100%'>
           <Patient info={info} />
        </Container>
        </>
    )
}
export default PatientInfo