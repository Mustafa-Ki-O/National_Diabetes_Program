// Part of National_Diabetes_Program
// Copyright (c) 2025 Mustafa-Ki-O - All rights reserved.

import img from '../assets/images/ndblogo4.png'
import imgSv from '../assets/images/logoSv.png'
import modules from '../assets/css/start.module.css'
import { Image ,Stack} from '@mantine/core'
import { Container,Flex,Box,Title } from '@mantine/core'
import { useLocation } from 'react-router'

const Start = () => {

    const loc = useLocation()
    const inSv = loc.pathname === '/National_Diabetes_Program/superVisor/'
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
                        miw={{base:140 ,md:160}}
                        alt="diabetes-Logo" 
                        src={inSv? imgSv : img} 
                    />
                  </Flex>
        </Container>
        
        </>
    )

}
export default Start