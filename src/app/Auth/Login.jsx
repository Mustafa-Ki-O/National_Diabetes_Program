import LoginForm from "../../components/Login/LoginForm"
import { Stack,Title} from "@mantine/core";
import { useEffect ,useState} from "react"
import Logo from "../../components/general/Logo";
const Login = () => {

const [active,setActive] = useState(false);

useEffect(()=>{
  setTimeout(()=>{
    setActive(true);
  },500);
},[active])

    return(
    <>
    <Stack style={{opacity:active?'1':'0' ,transition:'all 0.3s'}}>
    <Logo/>
        <Stack p={{base:'10px' ,md:'30px'}} m='auto'  w={{ base: "90%", md: "auto" }} bd='2px solid #37A9EF' style={{borderRadius:20,backgroundColor:'#ffffff30',backdropFilter:'blur(5px)'}}>
            <Title size='xl' c='#37A9EF'>تسجيل الدخول</Title>
            <LoginForm/>
        </Stack>
        </Stack>
    </>
    )
}
export default Login