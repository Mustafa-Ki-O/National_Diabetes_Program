import { Container,Title } from "@mantine/core"
import { useState , useEffect } from "react";
import AccountTabs from "../../components/ProfileSettingsPatient/AccountTabs";
import useFetchProfile from "../../useMutation/Patient/useFetchProfile";
import Progress from "../../components/general/Progress";
const ProfileSettings = () => {


        const [info,setInfo] = useState({})
        const {fetchProfile,isPending} = useFetchProfile(setInfo)

        const [progress,setProgress] = useState(false)

        useEffect(()=>{
         fetchProfile()
        },[])

        useEffect(()=>{
            setProgress(isPending)
        },[isPending])

    return(
        <>
        {progress && <Progress/>}
        <Container 
        p={10} fluid mb={'4.5rem'} mih={'83vh'}
        >
            <Title my={20} size={'xl'} ta={'right'}>
                 معلومات الحساب
               </Title>
            <AccountTabs info={info} setProgress={setProgress}/>
        </Container>
        </>
    )
}
export default ProfileSettings