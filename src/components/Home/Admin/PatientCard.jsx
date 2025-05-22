import { Card, Text, Button, Group, Stack, Flex, Title ,Image} from "@mantine/core";
import { Tooltip } from "@mantine/core";
import deleteIcon from '../../../assets/vectors/delete.svg'
import accountIcon from '../../../assets/vectors/account.svg'
import updateIcon from '../../../assets/vectors/update.png'
import { useNavigate } from "react-router-dom";
import DeletePatientModal from "./DeletePatientModal";
import { useDisclosure } from "@mantine/hooks";
import card from '../../../assets/css/Card.module.css'
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
   {/* <Tooltip zIndex={3}  label={verefication ? 'تم التحقق' : 'غير محقق'} > */}
    <Card 
      padding="lg"
      radius="md"
      bg="#fff"
      withBorder
       style={{cursor:'pointer'}}
    >  
      <Stack  mih={200} justify="space-between" >  
          <Flex pos={'relative'}  align='center' gap={10} justify='end'>
          <Title size="md" c='#000' className={card.line}>{name}</Title>
          {/* <Title size='md'>الاسم</Title> */}
          <Image src={accountIcon} w={'3rem'} />
          
        </Flex>  
        <Flex mt={5} align='center' gap={10} justify='end'>
          <Text size="md" c='#000'>{id_number}</Text>
          <Title size='md'>الرقم الوطني</Title>
        </Flex>

        <Flex align='center' gap={10} justify='end'>
          <Text size="md" c='#000' >{age}</Text>
          <Title size='md' >العمر</Title>
        </Flex> 
        {/* {sugarType !== null ?( */}
        <Flex align='center' gap={10} justify='end'>
          <Text size="md" c='#000' >{sugarType==null ? '-' : sugarType}</Text>
          <Title size='md' >نوع السكري</Title>
        </Flex> 
        {/* ):(<></>) } */}
        <Flex dir="rtl" gap={8} justify="end" align="end">
        <Button
          color="#37a8ef"
          variant="filled"
          fullWidth
          radius="md"
          fw={800}
          onClick={() => navigate(`/National_Diabetes_Program/patientInfo/${id}`)}
        >
          
         سجل المراجعات
          <Image  src={updateIcon} mr={15} w={20}/>
        </Button>
        <Button
          w={80}
          color="#1e1e1e"
          variant="light"
          radius="md"
          fw={800}
          onClick={open}
        >
          <Image  src={deleteIcon}  w={20} />
        </Button>
      </Flex>
      </Stack>
    </Card>
    {/* </Tooltip> */}
    </>
  );
};
export default PatientCard;
