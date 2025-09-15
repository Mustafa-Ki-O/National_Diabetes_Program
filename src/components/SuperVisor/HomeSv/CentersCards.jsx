import { Card ,Stack ,Flex ,Title ,Text, Grid, Group, Button,Tooltip, List, TextInput } from "@mantine/core"
import { ArrowUpLeft, Circle, CopyIcon, Hospital, KeyRound, LocateFixed, User, UserCheck, UserCog, UserRound, UserSquare } from "lucide-react"
import { DonutChart } from "@mantine/charts";
import { useNavigate, useParams } from "react-router";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";
import { useClipboard } from "@mantine/hooks";
import useGetToken from "../../../useMutation/SuperVisor/useGetToken";

dayjs.extend(customParseFormat)
const CentersCards = ({data,setProgress}) => {

  const { copy } = useClipboard();

   
  
     const [code,setCode] = useState(null)

      const textToCopy  = code?.token;

    const handleCopy = () => {
      copy(textToCopy);
      notifications.show({
        title: "تم النسخ!",
        position:"bottom-center",
        message: "تم نسخ الرمز إلى الحافظة.",
        color: "blue",
        icon: <CopyIcon size={18} />,
        autoClose: 2500, 
        radius:20,
        dir:'rtl'
      });
    };
 
    const {getToken,isPending} = useGetToken(setCode)
  const handleClick = () => {
    getToken()

  }

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

                useEffect(() => {
                  setProgress(isPending);
              }, [isPending]);
    // #e74c3c second
// #e67e22 primary
    return(
        <>
        <Stack align="end" gap={30} p={{base:5,sm:20}}>
            <Flex justify={'end'} align={'center'} gap={20} w={'100%'} direction={{base:'column',sm:'row'}}>
            
                 <Card  shadow="sm" w={'95%'} radius={10} mih={'8rem'} bd={'1px solid #12121212'} 
                  style={{cursor:'pointer', transition: "background 0.3s ease"}}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#e67e2210")} 
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}>
                    <Stack align='end' gap={20} justify='end'>
                     
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
                <Card  shadow="sm" w={'95%'}  radius={10}  mih={'8rem'} bd={'1px solid #12121212'} 
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
                
                    <Card shadow="sm" radius={10} miw={'100%'}
                    pl={'3rem'}  mih={'15rem'} bd={'1px solid #12121212'} 
                    style={{cursor:'pointer', transition: "background 0.3s ease"}}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#e67e2210")} 
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}>
                        <Flex align='end' gap={45} justify='space-between' direction={{base:'column',sm:'row'}}>
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

               <Card  shadow="sm" radius={10} miw={'100%'}  mih={'8rem'} bd={'1px solid #12121212'} 
                  style={{cursor:'pointer', transition: "background 0.3s ease"}}
                  // onMouseEnter={(e) => (e.currentTarget.style.background = "#e67e2210")} 
                  // onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
                  >
                    <Stack align='end' gap={20} justify='end' >
                     
                      <Title size="xl">
                             توليد رمز سري جديد
                     </Title>
                     <Group justify="end" align="center" gap={15} w={'100%'}>
                      <Tooltip label={'نسخ الرمز'}> 
                                <CopyIcon size={15} color="#000" onClick={handleCopy} />
                                </Tooltip>
                               <TextInput
                               readOnly
                                  w={'75%'}
                                  size="lg"
                                 radius={10}
                                 value={code?.token}
                                  fw={600}
                                  
                              />
                              <Button radius={15} leftSection={<KeyRound size={20} />}
                              variant="filled" color="#e74c3c " size="lg" onClick={handleClick} >
                                إنشاء
                              </Button>
                     
                     </Group>
                       
                        
                    </Stack> 
                </Card>
                    
                    
                   
             
        </Stack>
      
        </>
    )
}
export default CentersCards