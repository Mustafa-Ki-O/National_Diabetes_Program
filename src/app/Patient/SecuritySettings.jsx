import { Container,Title } from "@mantine/core"
import { useState , useEffect } from "react";
import AccountTabs from "../../components/ProfileSettingsPatient/AccountTabs";
import ChangePassword from "../../components/SecuritySettings/ChangePassword";
const SecuritySettings = () => {


    return(
        <>
        <Container 
        p={10} fluid mb={'4.5rem'} mih={'83vh'}
        >
            <Title my={20} size={'xl'} ta={'right'}>
                 أمان الحساب
               </Title>
            <ChangePassword/>
        </Container>
        </>
    )
}
export default SecuritySettings