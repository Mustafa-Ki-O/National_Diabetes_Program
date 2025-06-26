import LoginForm from "../../components/Login/LoginForm"
import { Stack,Text,Title} from "@mantine/core";
import { useEffect ,useState} from "react"
import Logo from "../../components/general/Logo";
import Progress from "../../components/general/Progress";
import TestPatientUploader from "../../Testing/TestPatientUploader";
const Login = () => {

const [active,setActive] = useState(false);
const [progress, setProgress] = useState(false);


useEffect(()=>{
  setTimeout(()=>{
    setActive(true);
  },500);
},[active])

    return(
    <>
    {/* <TestPatientUploader/> */}
    {progress && <Progress />}
    <Stack style={{opacity:active?'1':'0' ,transition:'all 0.3s'}} my={50}>
    <Logo/>
        <Stack p={{base:'10px' ,md:'30px'}} m='auto'  w={{ base: "90%", md: "35%" }}  style={{borderRadius:20,border:'2px solid #16aabb',backdropFilter:'blur(5px)'}}>
            <Title size='xl' c='#37A9EF'>تسجيل الدخول</Title>
            <Text size='sm' c={'#8e8e8e96'} fw={'500'}>قم بتسجيل الدخول الى حسابك </Text>
            <LoginForm setProgress={setProgress}/>
        </Stack>
        </Stack>
    </>
    )
}
export default Login