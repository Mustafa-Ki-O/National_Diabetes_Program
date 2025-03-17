import { Flex,Box,Image,Title } from "@mantine/core"
import img from '../../assets/images/diabetes.jpg'
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
                     <Image src={img} h='auto' w={50}  />
                  </Flex>
        </>
    )

}
export default Logo