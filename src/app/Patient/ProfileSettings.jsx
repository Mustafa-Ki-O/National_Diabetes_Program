import { Container,Title } from "@mantine/core"
import { useState , useEffect } from "react";
import AccountTabs from "../../components/ProfileSettingsPatient/AccountTabs";
import useFetchProfile from "../../useMutation/Patient/useFetchProfile";
import Progress from "../../components/general/Progress";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router";
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
         const navigate = useNavigate()
    return(
        <>
        {progress && <Progress/>}
        <Container 
        p={10} fluid mb={'4.5rem'} mih={'83vh'} pos={'relative'}
        >
            <Title my={20} size={'xl'} ta={'right'}>
                 معلومات الحساب
               </Title>
                <LogOut size={20} color="#88888888" style={{cursor:'pointer',position:'absolute',top:30,left:20}} onClick={()=>navigate(-1)} />
            <AccountTabs info={info} setProgress={setProgress} setInfo={setInfo}/>
        </Container>
        </>
    )
}
export default ProfileSettings