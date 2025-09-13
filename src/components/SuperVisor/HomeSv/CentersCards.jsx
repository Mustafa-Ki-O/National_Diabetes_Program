import { Card ,Stack ,Flex ,Title ,Text, Grid, Group, Button, ActionIcon, List } from "@mantine/core"
import { ArrowUpLeft, Circle, Hospital, LocateFixed, User, UserCheck, UserCog, UserRound, UserSquare } from "lucide-react"
import { DonutChart } from "@mantine/charts";
import { useNavigate, useParams } from "react-router";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat)
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
      // console.log(centerOrder)
    const navigate = useNavigate()

    // #e74c3c second
// #e67e22 primary
    return(
        <>
        <Stack align="end" gap={20} p={{base:5,sm:20}}>
            <Flex justify={'end'} align={'center'} gap={20}>
            
                 <Card  shadow="sm" radius={10} miw={'20rem'}  mih={'8rem'} bd={'1px solid #12121212'} 
                  style={{cursor:'pointer', transition: "background 0.3s ease"}}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#e67e2210")} 
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}>
                    <Stack align='end' jus gap={20} justify='end'>
                     
                      <Title size="xl">
                             آخر المراكز المضافة
                     </Title>
                     <Group justify="end" align="center" gap={5}>
                        <Title size="1.4rem"  >
                            {newestCenter?.centerName}
                         </Title>
                         <Hospital size={30} />
                     </Group>
                       
                        
                    </Stack> 
                </Card>
                <Card  shadow="sm" miw={'20rem'} radius={10}  mih={'8rem'} bd={'1px solid #12121212'} 
                style={{cursor:'pointer', transition: "background 0.3s ease"}}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#e67e2210")} 
                onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}>
            <Flex  justify={'end'} align={'end'} gap={20} pl={20} direction={'column-reverse'}>
               
               
               <Group justify="end" align="center">
                <Title size="1.4rem"  c='#000' >
                     {data?.length} 
                    </Title>     
                    <Hospital size={30} />
               </Group>
                  
                     <Title size="xl"  c='#000' >
                     عدد المراكز الكلي
                    </Title>        
                      </Flex>
                </Card>
                </Flex>
                
                    <Card shadow="sm" radius={10} miw={'75%'}
                    pl={'3rem'}  mih={'15rem'} bd={'1px solid #12121212'} 
                    style={{cursor:'pointer', transition: "background 0.3s ease"}}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#e67e2210")} 
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}>
                        <Flex align='start' gap={45} justify='space-between'>
                             <DonutChart size={190} data={data1} strokeWidth={2.6} />
                             <Stack gap={10}>
                                 <Title size="xl" my={10}>
                                  توزع المرضى بين المراكز
                                 </Title>
                                 <List px={30} withPadding type="ordered" spacing="xs" dir="rtl" >
                                   {centerOrder?.slice(0, 3).map((center) => (
                                     <List.Item key={center.id} ta="right">
                                       <Text size="lg" >
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