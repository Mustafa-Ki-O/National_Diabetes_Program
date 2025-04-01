import { Flex,Box,Image,Title } from "@mantine/core"
import img from '../../assets/images/logo.svg';


const Logo = () => {
    return(
        <>
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
                     <Image bg='#F9FAFC' src={img} h='auto'  w={80} alt="diabetes-Logo" />
                  </Flex>
        </>
    )

}
export default Logo