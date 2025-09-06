import { Container,Title } from "@mantine/core"
import { useState , useEffect } from "react";
import ChangePassword from "../../components/SecuritySettings/ChangePassword";
import Progress from "../../components/general/Progress";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router";
const SecuritySettings = () => {


      const [progress,setProgress] = useState(false)
      const navigate = useNavigate()
    return(
        <>
         {progress && <Progress/>}
        <Container 
        p={10} fluid mb={'4.5rem'} mih={'83vh'} pos={'relative'}
        >
            <Title my={20} size={'xl'} ta={'right'}>
                 أمان الحساب
               </Title>
               <LogOut size={20} color="#88888888" style={{cursor:'pointer',position:'absolute',top:30,left:20}} onClick={()=>navigate(-1)} />
            <ChangePassword setProgress={setProgress}/>
        </Container>
        </>
    )
}
export default SecuritySettings