import { Container,Grid,Text} from "@mantine/core"
import PatientCard from "./PatientCard"
import useFetchPatients from "../../../useMutation/Admin/useFetchPatients";
import { useEffect,useState } from "react";
const PatientsCards = ({setProgress}) => {

  const [patients, setPatients] = useState([]);
  const {fetchPatients,isPending} = useFetchPatients(setPatients);

  // const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(()=>{
    fetchPatients()
  },[]);

  useEffect(() => {
      setProgress(isPending);
  }, [isPending]);
  
    return(
        <>
        <Container fluid w="100%"  pt={5}>
        <Text size="lg" fw={800} c="#000" mb={20}>
           المرضى
        </Text>
        <Grid justify="center" gutter={25}>
          {patients.length !== 0 ? (
            patients.map((patient, index) => (
              <Grid.Col span={{ lg: 3, md: 4, sm: 6, xs: 12 }} key={index}>
                <PatientCard
                  setProgress = {setProgress}
                  setPatients={setPatients}
                  verefication = {patient.isCompleted}
                  id={patient.id}
                  id_number={patient.id_number}
                  name={patient.fullname}
                  email={patient.email}
                  sugarType={patient.sugarType}
                  birthDate={patient.age}
                />
              </Grid.Col>
            ))
          ) : (
            <Text size="md">لا يوجد مرضى مسجلين</Text>
          )}
        </Grid>
      </Container>
        </>
    )
}
export default PatientsCards