import sun from '../../assets/vectors/Sun.svg'
import sun1 from '../../assets/vectors/Sun1.svg'
import moon from '../../assets/vectors/Moon.svg'
// import moon1 from '../../assets/vectors/Moon1.svg'
import { useEffect, useState } from 'react'
import { Image } from '@mantine/core'
// import nav from '../assets/css/nav.module.css';

import { useMantineColorScheme } from '@mantine/core';
const ModePicker = () => {
    
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  
  const selectedImg = colorScheme === 'dark' ? moon : sun1 ;


    return (
        <Image 
            mt={3}
            // className={nav.mode}
            src={selectedImg} 
            w={{base:20,md:'1.8vw'}} 
            onClick={() => toggleColorScheme()}
            style={{ cursor: 'pointer' }}
        />
    )
}

export default ModePicker