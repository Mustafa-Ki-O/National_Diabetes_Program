import img from '../assets/images/logo.svg'
import modules from '../assets/css/start.module.css'
import { Image } from '@mantine/core'
import { Container,Flex,Box,Title } from '@mantine/core'

const Start = () => {

    return(
        <>
        <Container fluid w='100%'>
            <Flex  justify='center' align='center' gap={20}>
                     <Box className={modules.p} > 
                       <Title c='black'  style={{ display: 'block', textAlign: 'center' ,fontSize:40,fontWeight:600}}>
                         البرنامج
                         <br />
                         الوطني
                         <br />
                         للسكري
                       </Title>
                     </Box>
                     <Image
                        bg='#F9FAFC'
                        className={modules.img}
                        miw={180}
                        alt="diabetes-Logo" 
                        src={img} 
                    />
                  </Flex>
        </Container>
        
        </>
    )

}
export default Start