import { Container } from "@mantine/core"
import HomeInfo from "../../components/HomePatient/HomeInfo"
import { useState,useEffect } from "react";
const HomePatient = () => {

            const [active,setActive] = useState(false);
    
            useEffect(()=>{
              setTimeout(()=>{
                setActive(true);
              },200);
            },[])
    
    return(
        <>
        <Container 
         style={{opacity:active?'1':'0',transform:active?'translateY(0px)':'translateY(100px)' ,transition:'all 0.8s'}}
        p={10} fluid mb={'4.5rem'}>
        <HomeInfo/>
        </Container>
        </>
    )
}
export default HomePatient