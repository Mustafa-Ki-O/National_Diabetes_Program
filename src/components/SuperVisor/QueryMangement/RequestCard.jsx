import { Card, Text, Title, Button, Group, Progress, Stack,Tooltip, Flex, Indicator } from "@mantine/core"
import { CirclePlus, Hospital, PillBottle, PlusIcon, Ribbon } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"


const RequsetCard = ({request}) => {

// #e74c3c second
// #e67e22 primary

    const {id ,name_arabic, name_english, quantity, center_name, center_city, status} = request
    
    const [reqId,setReqId] = useState(null)
    const navigate = useNavigate()

    console.log(request)

    useEffect(()=>{
      setReqId(id)
    },[id])

    return(
        <>
        <Indicator color="#e67e22" size={15} processing zIndex={2}>
        <Card bg={'#fff'} radius={10} style={{ border: '1px solid #ccc', background: '#f9f9f9', direction: 'rtl' }}>
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
                <Flex justify={'start'} align={'center'}>
                  <PillBottle size={25} color="#121212ee" />
                    <Flex justify={'end'} gap={8}>
                    <Title ta={'right'} size="md">
                      {name_arabic }
                      </Title>
                      <Title ta={'right'} size="md">
                      {name_english}
                      </Title>
                  </Flex>

                </Flex>

               <Flex justify={'start'} align={'center'}>
                 <Ribbon size={25} color="#121212ee" /> 
                 <Text ta={'right'} fw={400}>
                      الكمية المطلوبة : {quantity}
                  </Text>
                       
               </Flex>

                   <Button 
                   onClick={() => navigate(`/National_Diabetes_Program/superVisor/queryMangement/requestInfo/${reqId}`)} 
                   variant="filled" color="#e67e22" size="md" radius={10} fullWidth>
                    عرض التفاصيل
                   </Button>
              </Stack>
            </Card>
            </Indicator>
        </>
    )
}
export default RequsetCard