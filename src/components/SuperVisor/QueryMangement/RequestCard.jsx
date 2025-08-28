import { Card, Text, Title, Button, Group, Progress, Stack,Tooltip, Flex } from "@mantine/core"
import { CirclePlus, Hospital, PillBottle, PlusIcon, Ribbon } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router"


const RequsetCard = ({reqId}) => {

// #e74c3c second
// #e67e22 primary

const navigate = useNavigate()

    return(
        <>
        <Card bg={'#fff'} radius={20} style={{ border: '1px solid #ccc', background: '#f9f9f9', direction: 'rtl' }}>
              <Stack gap={20}>
                <Group position="apart" align="center">
                    <Hospital size={25}/>
                  <Title size="md">
                   مركز الرازي (حمص)
                    </Title>
                  
                </Group>
                <Flex justify={'start'} align={'center'}>
                  <PillBottle size={25} color="#121212ee" />
                    <Text ta={'right'} fw={400}>
                       ميتفورمين + (Mitformine)
                      </Text>
                  

                </Flex>

               <Flex justify={'start'} align={'center'}>
                 <Ribbon size={25} color="#121212ee" /> 
                 <Text ta={'right'} fw={400}>
                      الكمية المطلوبة : 500
                  </Text>
                       
               </Flex>

                   <Button onClick={() => navigate(`/National_Diabetes_Program/requestInfo/${reqId}`)} variant="filled" color="#e67e22" size="md" radius={10} fullWidth>
                    عرض التفاصيل
                   </Button>
              </Stack>
            </Card>
        </>
    )
}
export default RequsetCard