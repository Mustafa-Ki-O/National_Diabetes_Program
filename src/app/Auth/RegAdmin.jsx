import { Stack,Title} from "@mantine/core";
import { useEffect ,useState} from "react"
import Logo from "../../components/general/Logo";
import RegAdminForm from "../../components/RegAdmin/RegAdminForm";
import Progress from "../../components/general/Progress";
const RegAdmin = () => {

    const [active,setActive] = useState(false);
    const [progress, setProgress] = useState(false);

    useEffect(()=>{
      setTimeout(()=>{
        setActive(true);
      },500);
    },[active])
    
        return(
        <>
        {progress && <Progress/>}
        <Stack style={{opacity:active?'1':'0' ,transition:'all 0.3s'}} my={50}>
           <Logo/>
            <Stack p={{base:'10px' ,md:'30px'}} m='auto' w={{ base: "90%", md: "40%" }} bd='2px solid #37A9EF' style={{borderRadius:20,backgroundColor:'#ffffff30',backdropFilter:'blur(5px)'}}>
                <Title size='xl' mt={10} c='#37A9EF'> انشاء حساب مركز</Title>
                <RegAdminForm setProgress={setProgress}/>
            </Stack>
            </Stack>
        </>)
}
export default RegAdmin;