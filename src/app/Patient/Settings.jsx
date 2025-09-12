import { Container , Image, Title} from "@mantine/core"
import { User } from "lucide-react";
import { useState,useEffect } from "react";
import Tabs from "../../components/Settings/Tabs";
import { Outlet } from "react-router";
const Settings = () => {
        


    return(
        <>
         <Container 
                p={10} fluid mb={'4.5rem'} mih={'83vh'}
               >
                    <Title my={20} size={'xl'} ta={'right'}>
                        إعدادات الحساب
                       </Title>
                    {/* <Image bg={'gray'} radius={'50%'} mb={20} src={<User size={20}/>} w={'6rem'} h={'6rem'} m={'auto'}/> */}
                    <Tabs/>
                    <Outlet />
           </Container>
        </>
    )
}
export default Settings