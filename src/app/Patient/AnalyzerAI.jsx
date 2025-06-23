import { Button, Card, Container, Flex, Pill, Stack, Text, Title } from "@mantine/core";
import { useState,useEffect } from "react";
import FirstUse from "../../components/AnalyzerAI/FirstUse";
import { ChevronRight, UploadIcon } from "lucide-react";
import MedicalAnalyses from "../../components/AnalyzerAI/MedicalAnalyses";
const AnalyzerAI= () => {

    const [active,setActive] = useState(false);
    const [click,setClick] = useState(false)


        useEffect(()=>{
          setTimeout(()=>{
            setActive(true);
          },200);
        },[])
    


    return(
        <>
         <Container  p={10} fluid mb={'4.5rem'}
                style={{opacity:active?'1':'0',transform:active?'translateY(0px)':'translateY(100px)' ,transition:'all 0.8s'}}>
              
              {!click && (
               <Container p={10} fluid style={{opacity:click?0:1,transition:'all 0.5s'}}>
                <FirstUse click={click} setClick={setClick}  />
               </Container>
              )}
               
               {click &&(
                <Container p={10} fluid >
                
                   <MedicalAnalyses/>
                
               </Container>
               )}

   
               
               
         
          </Container>
        </>
    )
}
export default AnalyzerAI