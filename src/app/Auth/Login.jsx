import { Title,Flex, Image, Stack,Box } from "@mantine/core"
import LoginForm from "../../components/Login/LoginForm"
import img from '../../assets/images/diabetes.jpg'
const Login = () => {

    return(
    <>
    <Stack>
      <Flex justify='center' align='center'>
         <Box>
           <Title size='xl' c='black' style={{ display: 'block', textAlign: 'center' }}>
             البرنامج
             <br />
             الوطني
             <br />
             للسكري
           </Title>
         </Box>
         <Image src={img} h='auto' w={80} />
      </Flex>
        <Stack p={30} m='auto' w='auto' bd='2px solid #37A9EF' style={{borderRadius:20}}>
            <Title size='xl' c='#37A9EF'>تسجيل الدخول</Title>
            <LoginForm/>
        </Stack>
        </Stack>
    </>
    )
}
export default Login