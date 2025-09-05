import { Container,Title } from "@mantine/core"
import { useState , useEffect } from "react";
import ChangePassword from "../../components/SecuritySettings/ChangePassword";
import Progress from "../../components/general/Progress";
const SecuritySettings = () => {


      const [progress,setProgress] = useState(false)
    
    return(
        <>
         {progress && <Progress/>}
        <Container 
        p={10} fluid mb={'4.5rem'} mih={'83vh'}
        >
            <Title my={20} size={'xl'} ta={'right'}>
                 أمان الحساب
               </Title>
            <ChangePassword setProgress={setProgress}/>
        </Container>
        </>
    )
}
export default SecuritySettings