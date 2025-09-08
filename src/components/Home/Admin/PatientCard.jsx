import { Card, Text, Button, Group, Stack, Flex, Title ,Image ,Indicator} from "@mantine/core";
import { Tooltip } from "@mantine/core";
import deleteIcon from '../../../assets/vectors/delete.svg'
import accountIcon from '../../../assets/vectors/account.svg'
import updateIcon from '../../../assets/vectors/update.png'
import { useNavigate } from "react-router-dom";
import DeletePatientModal from "./DeletePatientModal";
import { useDisclosure } from "@mantine/hooks";
import card from '../../../assets/css/Card.module.css'
import MessageSendModal from "./MessageSendModal";
import { MessageCircleIcon, Send } from "lucide-react";
import { useLocation } from "react-router-dom";

const PatientCard = ({verefication,id, id_number, name, email, birthDate, sugarType,setPatients,setProgress }) => {


const [opened, { open, close }] = useDisclosure(false);
const [openedMessage, { open:openMessage, close:closeMessage }] = useDisclosure(false);
const inputDate = new Date(birthDate);  
const inputYear = inputDate.getFullYear(); 
const currentYear = new Date().getFullYear();  
const age = currentYear - inputYear; 

const location = useLocation();
const inMang = location.pathname === '/National_Diabetes_Program/patientMangement'


const navigate = useNavigate();

  
  return (
    <>
    <MessageSendModal
    opened={openedMessage}
    close={closeMessage}
    patientId={id}
    setProgress={setProgress}
    />
    <DeletePatientModal 
    opened={opened} 
    close={close}
    id={id}
    setProgress={setProgress}
    setPatients={setPatients}/>
   {/* <Tooltip zIndex={3}  label={verefication ? 'تم التحقق' : 'غير محقق'} > */}
   {/* <Indicator zIndex={8} size={18} withBorder processing={!verefication?true:false}> */}
    <Card 
      shadow="sm"
      padding="lg"
      radius="md"
      bg="#fff"
      withBorder
       style={{cursor:'pointer', transition: "background 0.3s ease"}}
                // onMouseEnter={(e) => (e.currentTarget.style.background = "#eeefef21")} 
                // onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}

    >  
      <Stack  mih={200} justify="space-between" >  
        <Flex justify={'space-between'} align={'center'}>
         <Send  className={card.message} size={22} onClick={openMessage}/>
         <Flex pos={'relative'}  align='center' gap={10} justify='end'>
          <Title size="lg"  c='#000' className={card.line}>{name}</Title>
          {/* <Title size='md'>الاسم</Title> */}
          <Image src={accountIcon} w={'3rem'} />
          
        </Flex>  
        </Flex>
         
        <Flex mt={5} align='center' gap={10} justify='end'>
          <Text size="lg" c='#000'>{id_number}</Text>
          <Title size='lg'>الرقم الوطني</Title>
        </Flex>

        <Flex align='center' gap={10} justify='end'>
          <Text size="lg"  c='#000' >{age}</Text>
          <Title size="lg"  >العمر</Title>
        </Flex> 
        {/* {sugarType !== null ?( */}
        <Flex align='center' gap={10} justify='end'>
          <Text size="lg" c='#000' >{sugarType==null ? '-' : sugarType}</Text>
          <Title size="lg"  >نوع السكري</Title>
        </Flex> 
        {/* ):(<></>) } */}
        <Flex dir="rtl" gap={8} justify="end" align="end">
        <Button
          color="#37a8ef"
          variant="filled"
          fullWidth
          size="md"
          radius="md"
          fw={800}
          onClick={() => navigate(`/National_Diabetes_Program/patientInfo/${id}`)}
        >   
         سجل المراجعات
          <Image  src={updateIcon} mr={15} w={20}/>
        </Button>

       {inMang && (
        <Button

          w={80}
          color="#Ee3935"
          variant="light"
          size="md"
          radius="md"
          fw={800}
          onClick={open}
        >
          <Image  src={deleteIcon}  w={20} />
        </Button>
        )}
      </Flex>
      </Stack>
    </Card>
    {/* </Indicator> */}
    {/* </Tooltip> */}
    </>
  );
};
export default PatientCard;
