import { Container } from "@mantine/core"
import HomeInfo from "../../components/HomePatient/HomeInfo"
import { useState,useEffect } from "react";
import Progress from "../../components/general/Progress";
const HomePatient = () => {

            const [active,setActive] = useState(false);
            const [progress,setProgress] = useState(false)

            useEffect(()=>{
              setTimeout(()=>{
                setActive(true);
              },200);
            },[])
    
    return(
        <>
        {progress && <Progress/>}
        <Container 
         style={{opacity:active?'1':'0',transform:active?'translateY(0px)':'translateY(100px)' ,transition:'all 0.8s'}}
        p={10} fluid mb={'4.5rem'} mih={'83vh'}>
        <HomeInfo setProgress={setProgress}/>
        </Container>
        </>
    )
}
export default HomePatient