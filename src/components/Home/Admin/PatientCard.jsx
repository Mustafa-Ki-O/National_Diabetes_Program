import { Card, Text, Button, Group, Stack, Flex, Title } from "@mantine/core";
import { Tooltip } from "@mantine/core";
// import star from "../../assets/vectors/star.png";
// import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import DeletePatientModal from "./DeletePatientModal";
// import useDeletePatient from "../../../useMutation/Admin/useDeletePatient";
// import useFetchPatients from "../../../useMutation/Admin/useFetchPatients";
// import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
const PatientCard = ({verefication,id, id_number, name, email, birthDate, sugarType,setPatients,setProgress }) => {
//   const { t } = useTranslation();
// const {deletePatient,isPending} = useDeletePatient();
// const {fetchPatients,isPending: isPendingFetch} = useFetchPatients(setPatients);
// const [submited,setSubmited] = useState(false);

const [opened, { open, close }] = useDisclosure(false);
const inputDate = new Date(birthDate);  
const inputYear = inputDate.getFullYear(); 
const currentYear = new Date().getFullYear();  
const age = currentYear - inputYear; 


const navigate = useNavigate();
// const handleDel = (id) =>{
//   setSubmited(true);
//   deletePatient(id);
//   fetchPatients();
// }

// useEffect(()=>{
//    setProgress(isPending||isPendingFetch);
// },[isPending||isPendingFetch])
  
  return (
    <>
    <DeletePatientModal 
    opened={opened} 
    close={close}
    id={id}
    setProgress={setProgress}
    setPatients={setPatients}/>

    <Card
      padding="lg"
      radius="lg"
      bg="#f9f9fa"
      withBorder
      style={{ boxShadow: "1px 1px 3px 0px #000" }}
    >
      <Tooltip  label={verefication ? 'تم التحقق' : 'غير محقق'} >
          <div style={{width:25,height:25,borderRadius:'50%',backgroundColor:verefication?'#37a8ef':'rgb(223, 47, 25)',position:'absolute',top:3,left:3}}></div>
      </Tooltip>
      <Stack mih={250} justify="space-evenly" mt={20}>    
        <Flex align='center' gap={10} justify='end'>
          <Text size="md" c='#000'>{id_number}</Text>
          <Title size='md'>الرقم الوطني</Title>
        </Flex>
        <Flex align='center' gap={10} justify='end'>
          <Text size="md" c='#000'>{name}</Text>
          <Title size='md'>الاسم</Title>
        </Flex>
        <Flex align='center' gap={10} justify='end'>
          <Text size="md" c='#000' >{email}</Text>
          <Title size='md' >الايميل</Title>
        </Flex> 
        <Flex align='center' gap={10} justify='end'>
          <Text size="md" c='#000' >{age}</Text>
          <Title size='md' >العمر</Title>
        </Flex> 
        {sugarType !== null ?(
        <Flex align='center' gap={10} justify='end'>
          <Text size="md" c='#000' >{sugarType}</Text>
          <Title size='md' >نوع السكري</Title>
        </Flex> 
        ):(<></>) }
        <Stack align="flex-end" gap={8}>
        <Button
          color="#37a8ef"
          variant="outline"
          fullWidth
          radius="md"
          fw={800}
          onClick={() => navigate(`/National_Diabetes_Program/patientInfo/${id}`)}
        >
          تعديل
        </Button>
        <Button
          color="rgb(223, 47, 25)"
          variant="outline"
          fullWidth
          radius="md"
          fw={800}
          onClick={open}
        >
          حذف
        </Button>
      </Stack>
      </Stack>
    </Card>
    </>
  );
};
export default PatientCard;
