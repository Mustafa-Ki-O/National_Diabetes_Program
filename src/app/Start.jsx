// Part of National_Diabetes_Program
// Copyright (c) 2025 Mustafa-Ki-O - All rights reserved.

import img from '../assets/images/ribbon.svg'
import modules from '../assets/css/start.module.css'
import { Image ,Stack} from '@mantine/core'
import { Container,Flex,Box,Title } from '@mantine/core'

const Start = () => {

    return(
        <>
        <Container fluid w='100%'>
          {/* <Stack  > */}
             {/* <div className={modules.blue} />
             <div className={modules.gray}  /> */}


          {/* </Stack> */}
         
            <Flex justify='center' align='center' gap={20}>
                     <Box className={modules.p} > 
                       <Title c='black' fz={{base:32,md:44}} ta='center' fw={600}>
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
                        miw={{base:80 ,md:130}}
                        alt="diabetes-Logo" 
                        src={img} 
                    />
                  </Flex>
        </Container>
        
        </>
    )

}
export default Start