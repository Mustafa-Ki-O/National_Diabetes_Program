import img from '../assets/images/diabetes.jpg'
import modules from '../assets/css/start.module.css'
import { Image } from '@mantine/core'
import { Container,Flex,Box,Title } from '@mantine/core'

const Start = () => {

    return(
        <>
        <Container fluid w='100%'>
            <Flex  justify='center' align='center' gap={10}>
                     <Box className={modules.p} > 
                       <Title c='black'  style={{ display: 'block', textAlign: 'center' ,fontSize:40,fontWeight:600}}>
                         البرنامج
                         <br />
                         الوطني
                         <br />
                         للسكري
                       </Title>
                     </Box>
                     <Image className={modules.img} src={img} ta='justify' w={120} h='auto' p={0} m={0}  />
                  </Flex>
        </Container>
        
        </>
    )

}
export default Start