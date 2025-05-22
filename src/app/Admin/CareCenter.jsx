import { Container, Title } from "@mantine/core"
import UpScroll from "../../components/general/UpScroll"
import { useState,useEffect } from "react"
import MultiTabs from "../../components/CareCenter/Tabs"
const CareCenter = () =>{
       const [progress,setProgress] = useState(false)
        const [active,setActive] = useState(false);
        
        // useEffect(()=>{
        //     fetchPatients(setPatients)
        // },[])
    
        // useEffect(()=>{
        //     setProgress(isPending)
        // },[isPending])
    
        
    useEffect(()=>{
      setTimeout(()=>{
        setActive(true);
      },600);
    },[])

UpScroll()
    return(
        <>
        <Container  fluid style={{opacity:active?'1':'0' ,transition:'all 0.7s'}} p={20}>
            <Title size={'2rem'} ta={'end'} px={'lg'} mb={'3rem'} >
                          برامج الرعاية الصحية
            </Title>
            <MultiTabs/>
        </Container>
        </>
    )
}
export default CareCenter