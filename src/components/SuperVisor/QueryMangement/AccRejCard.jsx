import { Calendar, CalendarCheck, Check, X } from "lucide-react"
import { CirclePlus, Hospital, PillBottle, PlusIcon, Ribbon } from "lucide-react"
import { Card, Text, Title, Button, Group, Progress, Stack,Tooltip, Flex, Indicator } from "@mantine/core"
const AccRejCard= ({request}) => {

    const {id ,name_arabic, name_english, quantity, center_name, center_city, status,request_date,due_date} = request
    const isAccepted = status === 'accepted'


      const formatDate = (dateString) => {
         if (!dateString) return "--";
         const date = new Date(dateString);
         return date.toLocaleDateString("EG", {
           day: "2-digit",
           month: "2-digit",
           year: "numeric",
         });
  };
    return(
        <>
        <Indicator color={isAccepted ? 'green' : 'red'} size={20} zIndex={2}>
                <Card bg={'#fff'} radius={10} style={{ border: isAccepted ? '1px solid green' : '1px solid red', background: '#f9f9f9', direction: 'rtl' }}>
                      <Stack gap={20}>
                        <Group position="apart" align="center">
                            <Hospital size={25}/>
                            <Flex justify={'end'} align={'center'} gap={8}>
                           <Title size="md">
                              {center_name}
                            </Title>
                            <Title size="md">
                              ({center_city})
                            </Title>
                            </Flex>  
                        </Group>
                        <Flex justify={'start'} align={'center'} gap={8}>
                          <PillBottle size={25} />
                          <Flex justify={'end'} gap={8}>
                            <Title ta={'right'} size="md">
                              {name_arabic }
                              </Title>
                              <Title ta={'right'} size="md">
                              {name_english}
                              </Title>
                          </Flex>
                            
                        </Flex>
        
                       <Flex justify={'start'} align={'center'} gap={5}>
                         {/* <Ribbon size={25} color="#121212ee" /> */}
                         {isAccepted ? (
                            <Check size={25}  />
                         ):(
                            <X size={25} color="red" />
                         )} 
                         <Text ta={'right'} fw={700}>
                              الكمية المطلوبة :   {quantity}
                          </Text>
                               
                       </Flex>
                       <div style={{width:'70%',margin:'auto',borderBottom:'1px solid #12121252'}} />
                       <Flex justify={'start'} align={'center'} gap={8}>
                        <Calendar size={25} />
                        <Text ta={'right'} fw={400}>
                          تاريخ الطلب : {formatDate(request_date)}
                       </Text>
                       
                       </Flex>
                    <Flex justify={'start'} align={'center'} gap={8}>
                        <CalendarCheck size={25}  />
                      <Text ta={'right'} fw={400}>
                         تاريخ ال{isAccepted?'موافقة':'رفض'} : {formatDate(due_date)}
                       </Text>
                       
                       </Flex>
  
     
              </Stack>
            </Card>
            </Indicator>
        </>
    )
}
export default AccRejCard