import { Container ,Title} from "@mantine/core"
import { useEffect, useState ,useMemo} from "react"
import Progress from "../../components/general/Progress"
import InfoMCard from "../../components/SuperVisor/DataMangement/InfoMCard";
import CarouselCard from "../../components/SuperVisor/DataMangement/CarouselCard";


const DataMangement = () => {

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
                                    إدارة البيانات
                              </Title>
                             <InfoMCard/>
                             <Title size={'1.4rem'} ta={'end'} px={'lg'} mt={'3rem'} >
                                   المدن الفعالة
                              </Title>
                              <CarouselCard />
                        </Container>
        </>
    )
}
export default DataMangement