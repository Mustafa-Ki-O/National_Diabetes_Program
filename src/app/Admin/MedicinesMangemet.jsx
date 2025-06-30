// Part of National_Diabetes_Program
// Copyright (c) 2025 Mustafa-Ki-O - All rights reserved.

import { Container ,Title} from "@mantine/core"
import { useEffect, useState ,useMemo} from "react"
import Progress from "../../components/general/Progress"
import MangementTabs from "../../components/MedicinesManegment/MangementTabs";


const MedicinesMangemet = () => {

    const [active,setActive] = useState(false);
    const [progress,setProgress] = useState(false)
    

        
    useEffect(()=>{
      setTimeout(()=>{
        setActive(true);
      },600);
    },[])
    
    // useEffect(() => {
    //     setProgress(isPending);
    // }, [isPending]);
    

    return(
        <>
        <Container mih={'85vh'} mb={'2rem'} fluid pos={'relative'} p={{base:0,md:'lg'}} style={{opacity:active ? 1:0 ,transition:'all 0.5s'}}>
            <Title size={'2rem'} ta={'end'} px={'lg'} mb={'3rem'} >
                    إدارة مخزون الأدوية
              </Title>
              <MangementTabs/>
        </Container>
        </>
    )
}
export default MedicinesMangemet