import { Container ,Title} from "@mantine/core"
import { useEffect, useState ,useMemo} from "react"
import Progress from "../../components/general/Progress"
import InfoMCard from "../../components/SuperVisor/DataMangement/InfoMCard";
import CarouselCard from "../../components/SuperVisor/DataMangement/CarouselCard";
import useFetchMangData from "../../useMutation/SuperVisor/useFetchMangData";


const DataMangement = () => {

            const [active,setActive] = useState(false);
            const [progress,setProgress] = useState(false)
            const [data,setData] = useState({})
            const {fetchMangData,isPending} = useFetchMangData()

            useEffect(()=>{
              fetchMangData(setData)
            },[])

            useEffect(()=>{
              setTimeout(()=>{
                setActive(true);
              },600);
            },[])
                           useEffect(()=>{
                            setProgress(isPending)
                           },[isPending])
    
    return(
        <>
        {progress && <Progress/>}
        <Container mih={'85vh'} mb={'2rem'} fluid pos={'relative'} p={{base:0,md:'lg'}} style={{opacity:active ? 1:0 ,transition:'all 0.5s'}}>
                            <Title size={'2rem'} ta={'end'} px={'lg'} mb={'3rem'} >
                                    إدارة البيانات
                              </Title>
                             <InfoMCard data={data}/>
                             <Title size={'1.4rem'} ta={'end'} px={'lg'} mt={'3rem'} >
                                   المدن الفعالة
                              </Title>
                              <CarouselCard data={data}/>
                        </Container>
        </>
    )
}
export default DataMangement