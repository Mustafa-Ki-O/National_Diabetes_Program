import { Flex,Box,Image,Title } from "@mantine/core"
import img from '../../assets/images/ndblogo2.png';
import imgSv from '../../assets/images/logoSv.png';
import { useLocation } from "react-router";


const Logo = () => {
  const loc = useLocation()
  const inSv = loc.pathname === '/National_Diabetes_Program/superVisor/'
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
                     <Image bg='#F9FAFC' src={inSv ? imgSv : img} h='auto'  miw={100} alt="diabetes-Logo" />
                  </Flex>
        </>
    )

}
export default Logo