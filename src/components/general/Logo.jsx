import { Flex,Box,Image,Title } from "@mantine/core"
import img from '../../assets/images/ndblogo2.png';


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
                     <Image bg='#F9FAFC' src={img} h='auto'  miw={100} alt="diabetes-Logo" />
                  </Flex>
        </>
    )

}
export default Logo