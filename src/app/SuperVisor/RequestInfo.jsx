import { Button, Container ,Flex,Stack,Title} from "@mantine/core"
import { useEffect, useState ,useMemo} from "react"
import Progress from "../../components/general/Progress"
import { useNavigate, useParams } from "react-router";
import { Hospital, LocateFixed, LogOut } from "lucide-react";


const RequestInfo = () =>{

        const [active,setActive] = useState(false);
        const [progress,setProgress] = useState(false)
        
        const {reqId} = useParams()
    
        const navigate = useNavigate()
            
        useEffect(()=>{
          setTimeout(()=>{
            setActive(true);
          },600);
        },[])
        // #e74c3c second
// #e67e22 primary

    return(
        <>
         {progress && <Progress/>}
                <Container mih={'85vh'} mb={'2rem'} fluid pos={'relative'} p={{base:0,md:'lg'}} style={{opacity:active ? 1:0 ,transition:'all 0.5s'}}>
                   <Stack gap={'2rem'}  px={{base:0,md:'sm'}} >
                    <Flex justify={'space-between'} align={'center'}>
                          <LogOut size={25} color="#88888888" style={{cursor:'pointer'}} onClick={()=>navigate(-1)} />
                           <Flex justify={'end'} gap={'3rem'}>
                               <Title size={'2rem'} ta={'end'} px={'lg'} >
                                 (Mitformine)
                             </Title>
                               <Title size={'2rem'} ta={'end'} px={'lg'}  >
                                طلب دواء (ميتفوريمن)
                             </Title>
                         </Flex>
                    </Flex>
                    

                    <Flex justify={'end'} align={'center'} gap={10} px={'lg'}> 
                        <Title size={'1.5rem'} ta={'end'}  >
                         مركز النادي
                      </Title>
                       <Hospital  />
                      </Flex>
                     
                      <Flex justify={'end'} align={'center'} gap={10} px={'lg'}>
                         <Title size={'1.5rem'} ta={'end'} >
                          حمص
                      </Title>
                       <LocateFixed  />
                      </Flex>
                     <div style={{width:'100%',borderBottom:'1px solid #e74c3c30'}} />

                      <Title size={'1.5rem'} ta={'end'} px={'lg'}>
                       الكمية المطلوبة : 400
                      </Title>
                        <Title size={'1.5rem'} ta={'end'} px={'lg'}  >
                      مخزون المركز : 20
                      </Title>
                       <div style={{width:'100%',borderBottom:'1px solid #e74c3c30'}} />

                    {/* <Title size={'1.5rem'} ta={'end'} px={'lg'}  >
                      عدد المرضى (الدواء) :100
                      </Title> */}
                     <Title size={'1.5rem'} ta={'end'} px={'lg'}  >
                   عدد المرضى الكلي في المركز : 1200
                      </Title>
                   <Title size={'1.5rem'} ta={'end'} px={'lg'}  >
                 تاريخ الطلب  12/12/2012
                      </Title>
                    
                     <Flex p={20} dir="rtl"  justify={'space-between'} align={'center'}>
                 <Button miw={'9rem'} variant="filled" color="#e74c3c" size="lg" radius={10} >
                              قبول الطلب
                  </Button>
                <Button miw={'9rem'} variant="outline" color="#e74c3c" size="lg" radius={10} >
                        رفض
                  </Button>
                     </Flex> 
                     </Stack>   
                </Container>
        
        </>
    )
}
export default RequestInfo