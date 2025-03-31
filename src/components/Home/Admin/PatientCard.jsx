import { Card, Text, Button, Group, Stack, Flex, Title ,Image} from "@mantine/core";
import { Tooltip } from "@mantine/core";
import deleteIcon from '../../../assets/vectors/delete.png'
import updateIcon from '../../../assets/vectors/update.png'
import { useNavigate } from "react-router-dom";
import DeletePatientModal from "./DeletePatientModal";
import { useDisclosure } from "@mantine/hooks";
const PatientCard = ({verefication,id, id_number, name, email, birthDate, sugarType,setPatients,setProgress }) => {


const [opened, { open, close }] = useDisclosure(false);
const inputDate = new Date(birthDate);  
const inputYear = inputDate.getFullYear(); 
const currentYear = new Date().getFullYear();  
const age = currentYear - inputYear; 


const navigate = useNavigate();

  
  return (
    <>
    <DeletePatientModal 
    opened={opened} 
    close={close}
    id={id}
    setProgress={setProgress}
    setPatients={setPatients}/>
   <Tooltip  label={verefication ? 'تم التحقق' : 'غير محقق'} >
    <Card 
      padding="lg"
      radius="md"
      bg="#fff"
      withBorder
      style={{ 
        borderTop: `4px solid ${verefication ? '#37a8ef' : '#8e8e8e'}`,cursor:'pointer'
      }}
    >  
      <Stack mih={270} justify="space-between">    
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
        <Flex dir="rtl" gap={8} justify="end" align="end">
        <Button
          color="#37a8ef"
          variant="filled"
          fullWidth
          radius="md"
          fw={800}
          onClick={() => navigate(`/National_Diabetes_Program/patientInfo/${id}`)}
        >
          
          تعديل
          <Image  src={updateIcon} mr={15} w={20}/>
        </Button>
        <Button
          color="rgb(223, 47, 25)"
          variant="light"
          fullWidth
          radius="md"
          fw={800}
          onClick={open}
        >
          حذف
          <Image  src={deleteIcon} mr={15} w={20}/>
        </Button>
      </Flex>
      </Stack>
    </Card>
    </Tooltip>
    </>
  );
};
export default PatientCard;
