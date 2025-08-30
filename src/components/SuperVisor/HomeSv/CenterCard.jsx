import { Card, Text, Button, Group, Stack, Flex, Title , Accordion, AccordionItem, AccordionControl, AccordionPanel} from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
import card from '../../../assets/css/Card.module.css'
// import MessageSendModal from "./MessageSendModal";
import { Hospital, MessageCircleIcon, Send } from "lucide-react";
// import { useLocation } from "react-router-dom";


const CenterCard = ({centerInfo}) => {

    const {centerName,centerEmail,createAt,nop} = centerInfo

    return(
         <>

            <Accordion radius={20} variant="contained" chevronPosition="left">
                      <AccordionItem value="1">
                        <AccordionControl>
                        <Stack  justify="space-between" >  
                <Flex justify={'end'} align={'center'}>
                 <Flex pos={'relative'}  align='center' gap={10} justify='end'>
                  <Title size="lg"  c='#000' >{centerName}</Title>
                  {/* <Title size='md'>الاسم</Title> */}
                  <Hospital size={25}/>
                  
                </Flex>
                </Flex>

                <Flex align='center' gap={10} justify='end'>
                  <Text size="lg" c='#000' >
                    {nop}
                    </Text>
                  <Title size="lg"  >
                    عدد المرضى
                  </Title>
            
                </Flex> 
               </Stack>
                    </AccordionControl>
                        <AccordionPanel>
                          <Flex mt={5} align='center' gap={10} justify='end'>
                          <Text size="lg" c='#000'>
                           {centerEmail}
                          </Text>
                         <Title size='lg'>
                           ايميل المركز
                         </Title>
                       </Flex>
        
                       <Flex align='center' gap={10} justify='end'>
                         <Text size="lg"  c='#000' >
                           {createAt}
                         </Text>
                         <Title size="lg"  >
                            تاريخ بدء الخدمة
                         </Title>
                       </Flex>  
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
            </>
    )
}
export default CenterCard