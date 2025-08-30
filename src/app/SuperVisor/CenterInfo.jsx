import { Container ,Flex,Stack,Title} from "@mantine/core"
import { Hospital, LocateFixed } from "lucide-react";
import { useEffect, useState ,useMemo} from "react"
import InfoCenterCard from "../../components/SuperVisor/CenterInfo/InfoCenterCard";
import StatisticsCenter from "../../components/SuperVisor/CenterInfo/StatisticsCenter";




const CenterInfo = () => {

            const [active,setActive] = useState(false);
            const [progress,setProgress] = useState(false)
                
            useEffect(()=>{
              setTimeout(()=>{
                setActive(true);
              },600);
            },[])
    
    return(
        <>
        <Container mih={'85vh'} mb={'2rem'} fluid pos={'relative'} p={{base:0,md:'lg'}} style={{opacity:active ? 1:0 ,transition:'all 0.5s'}}>
                            <Title size={'2rem'} ta={'end'} px={'lg'} mb={'3rem'} >
                                  حول المركز
                              </Title>
                              <Flex justify={'end'} align={'center'} px={'lg'} gap={10}>
                                  <Title size={'1.4rem'} ta={'end'}  my={'3rem'} >
                                     مركز النادي
                                  </Title>    
                                  <Hospital size={25} />
                              </Flex>
                              <InfoCenterCard />
                              <StatisticsCenter />

             </Container>
        </>
    )
}
export default CenterInfo