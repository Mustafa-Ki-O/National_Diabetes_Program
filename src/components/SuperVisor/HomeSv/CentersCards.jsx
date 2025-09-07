import { Card ,Stack ,Flex ,Title ,Text, Grid, Group, Button, ActionIcon, List } from "@mantine/core"
import { ArrowUpLeft, Circle, Hospital, LocateFixed, User, UserCheck, UserCog, UserRound, UserSquare } from "lucide-react"
import { DonutChart } from "@mantine/charts";
import { useNavigate, useParams } from "react-router";
import dayjs from "dayjs";

const CentersCards = ({data}) => {

    const randomColor = () =>
      `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`;
    
    const data1 = data?.filter((c) => c.nop > 0).map(center => ({
      name: center.centerName,
      value: center.nop,
      color: randomColor()
    }));
     
    const newestCenter = data
      ?.filter(c => c.createAt)
      .sort((a, b) => 
        dayjs(b.createAt, "DD-MM-YYYY").valueOf() -
        dayjs(a.createAt, "DD-MM-YYYY").valueOf()
      )[0];

      const centerOrder = data
      ?.filter(c => c.nop)
      .sort((a, b) => b.nop - a.nop);
      console.log(centerOrder)
    const navigate = useNavigate()

    return(
        <>
        <Stack align="end" gap={20} p={{base:5,sm:20}}>
            <Flex justify={'end'} align={'center'} gap={20}>
            
                 <Card radius={10} miw={'18rem'}  mih={'7rem'} bd={'1px solid #12121212'} style={{cursor:'pointer'}}>
                    <Stack align='end' jus gap={15} justify='end'>
                     
                      <Title size="lg">
                             آخر المراكز المضافة
                     </Title>
                     <Group justify="end" align="center" gap={5}>
                        <Title size="lg"  >
                            {newestCenter?.centerName}
                         </Title>
                         <Hospital size={20} />
                     </Group>
                       
                        
                    </Stack> 
                </Card>
                <Card  w={'fit-content'} radius={10}  mih={'7rem'} bd={'1px solid #12121212'} style={{cursor:'pointer'}}>
            <Flex  justify={'end'} align={'center'} gap={10} pl={20}>
               <UserRound size={30} />
                  <Title size="xl"  c='#000' >
                     {data?.length} :
                    </Title>     
                     <Title size="lg"  c='#000' >
                     عدد المراكز الكلي
                    </Title>        
                      </Flex>
                </Card>
                </Flex>
                
                    <Card radius={10}  mih={'7rem'} bd={'1px solid #12121212'} style={{cursor:'pointer'}}>
                        <Flex align='start' gap={25} justify='end'>
                             <DonutChart  data={data1} strokeWidth={2.6}/>
                             <Stack gap={10}>
                                 <Title size="lg" my={10}>
                                  توزع المرضى بين المراكز
                                 </Title>
                                 <List withPadding type="ordered" spacing="xs" dir="rtl">
                                   {centerOrder?.slice(0, 3).map((center) => (
                                     <List.Item key={center.id} ta="right">
                                       <Text size="md" >
                                         {center.centerName}
                                       </Text>
                                     </List.Item>
                                   ))}
                                 </List>
                                 
                                  
                                  
                                
                             </Stack>
                            
                        </Flex>
                       
                    </Card>
                    
                   
             
        </Stack>
      
        </>
    )
}
export default CentersCards