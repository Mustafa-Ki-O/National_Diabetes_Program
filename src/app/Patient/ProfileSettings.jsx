import { Container,Title } from "@mantine/core"
import { useState , useEffect } from "react";
import AccountTabs from "../../components/ProfileSettingsPatient/AccountTabs";
const ProfileSettings = () => {


        const [info,setInfo] = useState({
            fullname:'روبي روبي',
            birth:'18-7-1980',
            id_num:'10999202922',
            email:'email.com',
            phone:'0928222111',

            type:'نوع اول',
            medicins:['خافضات فموية','ميتفورمين'],

            location:'حمص',
            centerName:'مركز حمص الخارق'

        })
    


    return(
        <>
        <Container 
        p={10} fluid mb={'4.5rem'} mih={'83vh'}
        >
            <Title my={20} size={'xl'} ta={'right'}>
                 معلومات الحساب
               </Title>
            <AccountTabs info={info}/>
        </Container>
        </>
    )
}
export default ProfileSettings