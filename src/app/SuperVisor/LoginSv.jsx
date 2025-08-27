// Part of National_Diabetes_Program
// Copyright (c) 2025 Mustafa-Ki-O - All rights reserved.

import LoginForm from "../../components/SuperVisor/LoginForm";
import { Stack,Text,Title} from "@mantine/core";
import { useEffect ,useState} from "react"
import Logo from "../../components/general/Logo";
import Progress from "../../components/general/Progress";
// import TestPatientUploader from "../../Testing/TestPatientUploader";
const LoginSv = () => {

const [active,setActive] = useState(false);
const [progress, setProgress] = useState(false);


useEffect(()=>{
  setTimeout(()=>{
    setActive(true);
  },500);
},[active])

// #e74c3c second
// #e67e22 primary

    return(
    <>
    {/* <TestPatientUploader/> */}
    {progress && <Progress />}
    <Stack style={{opacity:active?'1':'0' ,transition:'all 0.3s'}} mb={{base:'10rem',sm:'1rem'}} >
    <Logo />
        <Stack p={{base:'10px' ,md:'30px'}} m='auto' mt={'4rem'}   w={{ base: "90%", md: "35%" }}  style={{borderRadius:20,border:'2px solid #e67e22',backdropFilter:'blur(5px)'}}>
            <Title size='xl' c='#e67e22'>
             (SuperVisor)  تسجيل الدخول مشرف 
            </Title>
            <Text size='sm' c={'#2c3e50'} fw={'500'}>
                إدارة عليا
              </Text>
            <LoginForm setProgress={setProgress}/>
        </Stack>
        </Stack>
    </>
    )
}
export default LoginSv