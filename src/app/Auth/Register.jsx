import RegisterForm from "../../components/Register/RegisterForm";
import { Container,Stack,Title,Image,Box,Flex } from "@mantine/core";
import img from '../../assets/images/diabetes.jpg'
import { useEffect ,useState} from "react"

const Register = () => {

    const [active,setActive] = useState(false);
    
    useEffect(()=>{
      setTimeout(()=>{
        setActive(true);
      },500);
    },[active])
    
        return(
        <>
        <Stack style={{opacity:active?'1':'0' ,transition:'all 0.3s'}}>
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
            <Stack p={{base:'10px' ,md:'30px'}} m='auto' w={{ base: "90%", md: "60%" }} bd='2px solid #37A9EF' style={{borderRadius:20}}>
                <Title size='xl' mt={10} c='#37A9EF'>انشاء حساب</Title>
                <RegisterForm/>
            </Stack>
            </Stack>
        </>)
}
export default Register