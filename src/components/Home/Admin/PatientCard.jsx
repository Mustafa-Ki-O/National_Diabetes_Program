import { Card, Text, Button, Group, Stack, Flex, Title } from "@mantine/core";
import { Tooltip } from "@mantine/core";
// import star from "../../assets/vectors/star.png";
// import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const PatientCard = ({verefication,id, id_number, name, email, birthDate, sugarType }) => {
//   const { t } = useTranslation();

const inputDate = new Date(birthDate);  
const inputYear = inputDate.getFullYear(); 
const currentYear = new Date().getFullYear();  
const age = currentYear - inputYear; 
  const navigate = useNavigate();
  return (
    <Card
      padding="lg"
      radius="lg"
      bg="#eff1f9"
      withBorder
      style={{ boxShadow: "1px 1px 3px 0px #000" }}
    >
      <Stack mih={250} justify="space-evenly">
        <Flex align='center' gap={10} justify='end'>
          <Tooltip label={verefication ? 'تم التحقق' : 'غير محقق'}  >
            <div style={{width:25,height:25,borderRadius:'50%',backgroundColor:verefication?'#37a8ef':'rgb(223, 47, 25)'}}></div>
          </Tooltip>
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
        <Button
          color="#37a8ef"
          variant="outline"
          fullWidth
          radius="md"
          align="flex-end"
          fw={800}
          onClick={() => navigate(`/National_Diabetes_Program/patientInfo/${id}`)}
        >
          قراءة المزيد
        </Button>
      </Stack>
    </Card>
  );
};
export default PatientCard;
