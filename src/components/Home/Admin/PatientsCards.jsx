import { Container,Grid,Text} from "@mantine/core"
import PatientCard from "./PatientCard"
import { addPatient } from "../../../redux/action"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
const PatientsCards = ({setProgress,patients,setPatients}) => {
const dispatch = useDispatch();

// useEffect(()=>{
//   patients.forEach((patient) => {
//     dispatch(addPatient(patient))
//   })
// },[patients])

    return(
        <>
        <Container fluid w="100%" mt={30} pt={5} >

        <Grid justify="center" gutter={15} >
          {patients.length !== 0 ? (
            patients.map((patient, index) => (
              <Grid.Col span={{ lg: 4, md: 4, sm: 6, xs: 12 }} key={index}>
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