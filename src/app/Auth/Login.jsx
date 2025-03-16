import { Title,Flex, Image, Stack,Box } from "@mantine/core"
import LoginForm from "../../components/Login/LoginForm"
import img from '../../assets/images/diabetes.jpg'
import { useEffect ,useState} from "react"
const Login = () => {

const [active,setActive] = useState(false);

useEffect(()=>{
  setTimeout(()=>{
    setActive(true);
  },1000);
},[active])

    return(
    <>
    <Stack style={{opacity:active?'1':'0' ,transition:'all 0.5s'}}>
      <Flex  justify='center' align='center' gap={5}>
         <Box>
           <Title size='xl' c='black' style={{ display: 'block', textAlign: 'center' }}>
             البرنامج
             <br />
             الوطني
             <br />
             للسكري
           </Title>
         </Box>
         <Image src={img} h='auto' w={50}  />
      </Flex>
        <Stack p={30} m='auto'  w='auto' bd='2px solid #37A9EF' style={{borderRadius:20}}>
            <Title size='xl' c='#37A9EF'>تسجيل الدخول</Title>
            <LoginForm/>
        </Stack>
        </Stack>
    </>
    )
}
export default Login