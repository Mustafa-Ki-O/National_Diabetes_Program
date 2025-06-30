// Part of National_Diabetes_Program
// Copyright (c) 2025 Mustafa-Ki-O - All rights reserved.

import { Stack,Title,Text } from "@mantine/core";
import { useState,useEffect } from "react";
import Progress from "../../components/general/Progress";
import VerifyPwdForm from "../../components/VerifyPwd/VerifyPwdForm";

const VerifyPwd = () => {

    const [active,setActive] = useState(false);
    const [progress, setProgress] = useState(false);
    
    useEffect(()=>{
      setTimeout(()=>{
        setActive(true);
      },500);
    },[active])
    
    return(<>
    {progress && <Progress/>}
    <Stack style={{opacity:active?'1':'0' ,transition:'all 0.3s'}} my={50}>
      <Stack bg={'#fff'}  p={{base:'10px' ,md:'30px'}} m='auto'  w={{ base: "90%", md: "30%" }} bd='2px solid #37A9EF' style={{borderRadius:20,backgroundColor:'#ffffff30',backdropFilter:'blur(5px)'}}>
          <Title c='#37a8ef' size='xl'>تحقق الرمز</Title>
          <Text size="md">أدخل الكود الذي تلقيته</Text>
          <VerifyPwdForm setProgress={setProgress} />
        
    </Stack>
    </Stack>
        </>
    )
}
export default VerifyPwd