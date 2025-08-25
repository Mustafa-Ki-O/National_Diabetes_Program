// Part of National_Diabetes_Program
// Copyright (c) 2025 Mustafa-Ki-O - All rights reserved.

import { Stack,Title,Text, Container } from "@mantine/core";
import { useEffect ,useState} from "react"
import Progress from "../../components/general/Progress";

import CheckForm from "../../components/CheckSrCode/CheckForm";

const CheckSrCode = () => {

const [active,setActive] = useState(false);
const [progress, setProgress] = useState(false);


useEffect(()=>{
  setTimeout(()=>{
    setActive(true);
  },500);
},[active])

    return(
    <>

    {progress && <Progress />}
        <Stack bg={'#fff'} p={{base:10,sm:35}}  m='auto'  w={{ base: "90%", sm: "30%" }}  style={{opacity:active?'1':'0' ,transition:'all 0.3s',borderRadius:20,border:'2px solid #16aabb',backdropFilter:'blur(5px)'}}>
            <Title size='xl' c='#37A9EF'>
                أنشاء حساب مركز جديد
            </Title>
            <Text size='sm' c={'#8e8e8e96'} fw={'500'}>
                أدخل الرمز السري للمتابعة
            </Text>
            <CheckForm setProgress={setProgress}/>
        </Stack>
    </>
    )
}
export default CheckSrCode ;