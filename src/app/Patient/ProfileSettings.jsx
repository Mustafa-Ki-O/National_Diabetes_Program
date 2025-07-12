import { Container,Title } from "@mantine/core"
import { useState , useEffect } from "react";

import AccountSettings from "../../components/ProfileSettingsPatient/AccountSettings";
const ProfileSettings = () => {

        const [active,setActive] = useState(false);
        const [info,setInfo] = useState({
            fullname:'روبي روبي',
            birth:'18-7-1980',
            id_num:'10999202922',
            email:'email.com',
            phone:'0928222111',

            type:'نوع اول',
            medicins:'أنسولين',

        })
    
    
            useEffect(()=>{
              setTimeout(()=>{
                setActive(true);
              },200);
            },[])

    return(
        <>
        <Container   p={10} fluid 
        mb={'4.5rem'}
        style={{opacity:active?'1':'0',transform:active?'translateY(0px)':'translateY(100px)' ,transition:'all 0.8s'}}>
            <Title mb={30} size={'xl'} ta={'right'}>
                         إعدادات الحساب
               </Title>
            <AccountSettings info={info}/>
        </Container>
        </>
    )
}
export default ProfileSettings