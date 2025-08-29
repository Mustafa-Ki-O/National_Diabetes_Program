import { Card, Text, Title, Button, Group, Progress, Stack,Tooltip, Flex, Indicator } from "@mantine/core"
import { CirclePlus, Hospital, PillBottle, PlusIcon, Ribbon } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router"


const RequsetCard = ({request}) => {

// #e74c3c second
// #e67e22 primary

    const {id ,name_arabic, name_english, quantity, center_name, center_city, status} = request
    
    const navigate = useNavigate()

    return(
        <>
        <Indicator color="#e67e22" size={15} processing>
        <Card bg={'#fff'} radius={20} style={{ border: '1px solid #ccc', background: '#f9f9f9', direction: 'rtl' }}>
              <Stack gap={20}>
                <Group position="apart" align="center">
                    <Hospital size={25}/>
                  <Title size="md">
                      {center_name (center_city)}
                    </Title>
                  
                </Group>
                <Flex justify={'start'} align={'center'}>
                  <PillBottle size={25} color="#121212ee" />
                    <Text ta={'right'} fw={400}>
                      {name_arabic (name_english)}
                      </Text>
                  

                </Flex>

               <Flex justify={'start'} align={'center'}>
                 <Ribbon size={25} color="#121212ee" /> 
                 <Text ta={'right'} fw={400}>
                      الكمية المطلوبة :{quantity}
                  </Text>
                       
               </Flex>

                   <Button onClick={() => navigate(`/National_Diabetes_Program/requestInfo/${reqId}`)} variant="filled" color="#e67e22" size="md" radius={10} fullWidth>
                    عرض التفاصيل
                   </Button>
              </Stack>
            </Card>
            </Indicator>
        </>
    )
}
export default RequsetCard