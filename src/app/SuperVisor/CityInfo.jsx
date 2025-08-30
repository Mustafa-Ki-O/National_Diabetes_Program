import { Container ,Flex,Stack,Title} from "@mantine/core"
import { LocateFixed } from "lucide-react";
import { useEffect, useState ,useMemo} from "react"
import InfoCityCard from "../../components/SuperVisor/CityInfo/InfoCityCard";
import CenterCard from "../../components/SuperVisor/HomeSv/CenterCard";
import CarouselCenter from "../../components/SuperVisor/CityInfo/CarouselCenter";



const CityInfo = () => {

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
                                  حول المدينة
                              </Title>
                              <Flex justify={'end'} align={'center'} px={'lg'} gap={10}>
                                  <Title size={'1.4rem'} ta={'end'}  my={'3rem'} >
                                      مدينة حمص
                                  </Title>    
                                  <LocateFixed size={25} />
                              </Flex>
                             <Stack justify="end" gap={10}>
                                <InfoCityCard />
                                <Title size={'1.4rem'} ta={'end'} px={'lg'} mt={'3rem'} >
                                          المراكز النشطة
                               </Title>
                               <CarouselCenter/>
                             </Stack>
             </Container>
        </>
    )
}
export default CityInfo