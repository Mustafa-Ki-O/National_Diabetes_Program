import { Card ,Stack ,Flex ,Title ,Text, Grid, Group, Button, ActionIcon } from "@mantine/core"
import { ArrowUpLeft, Circle, Hospital, LocateFixed, User, UserCheck, UserCog, UserRound, UserSquare } from "lucide-react"
import { DonutChart } from "@mantine/charts";
import { useNavigate, useParams } from "react-router";

const InfoCenterCard = ({data,setProgress}) => {

    const data1 = [
     { name: 'ذكور', value: data.number_of_male, color: '#16aabb' },
     { name: 'إناث', value: data.number_of_Female || 20, color: 'pink' },

    ];

    const navigate = useNavigate()
    return(
        <>
        <Stack align="end" gap={20} p={{base:5,sm:20}}>
            <Flex justify={'end'} align={'center'} gap={20}>
            
                 <Card pl={'3rem'} radius={10}  mih={'7rem'} bd={'1px solid #12121212'} style={{cursor:'pointer'}}>
                    <Flex align='center' gap={10} justify='end'>
                       <Title size="xl"  >
                               {data?.nop_in_center_lm}
                         </Title>
                      <Title size="lg">
                             عدد المسجلين خلال الشهر الأخير
                     </Title>
                        
                    </Flex> 
                </Card>
                <Card pl={'3rem'}  w={'fit-content'} radius={10}  mih={'7rem'} bd={'1px solid #12121212'} style={{cursor:'pointer'}}>
            <Flex  justify={'end'} align={'center'} gap={10} pl={20}>
               <UserRound size={30} />
                  <Title size="xl"  c='#000' >
                     {data?.nop_in_center} :
                    </Title>     
                     <Title size="lg"  c='#000' >
                       عدد المرضى الكلي
                    </Title>        
                      </Flex>
                </Card>
                </Flex>
                
                    <Card radius={10} miw={'45rem'}  mih={'7rem'} bd={'1px solid #12121212'} style={{cursor:'pointer'}}>
                        <Flex align='start' justify={'space-between'}>
                             <DonutChart data={data1} />
                             <Stack gap={10}>
                                 <Title size="lg" my={15}>
                                  توزع المرض بين الجنسين
                                 </Title>
                                 <Group justify="end" align="center" gap={8}>
                                    <Text size="md" >
                                        ذكور
                                    </Text>
                                    <Circle size={15} fill="#16aabb" color="#16aabb" />
                                 </Group>
                                  <Group justify="end" align="center" gap={8}>
                                    <Text size="md" >
                                        إناث
                                    </Text>
                                    <Circle size={15} fill="#e64980" color="#e64980" />
                                 </Group>
                                
                             </Stack>
                            
                        </Flex>
                       
                    </Card>
                    
                   
             
        </Stack>
      
        </>
    )
}
export default InfoCenterCard