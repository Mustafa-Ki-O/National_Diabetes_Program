import { Image,Container,Grid } from "@mantine/core"
import CenterProfile from "../../components/Home/Admin/CenterProfile"
import useFetchProfile from "../../useMutation/Admin/useFetchProfile"
import { useEffect, useState ,useMemo} from "react"
import Progress from "../../components/general/Progress"
const Profile = () => {
 const userData = localStorage.getItem('user');
  const user = useMemo(() => userData ? JSON.parse(userData) : null, [userData]);
  const userId = user.id;
  const[profile,setProfile] = useState({})
    const [progress,setProgress] = useState(false)
    const {fetchProfile,isPending} = useFetchProfile(setProfile)
    const [active,setActive] = useState(false);

    useEffect(()=>{
        fetchProfile(userId)
    },[userId])

    useEffect(()=>{
        setProgress(isPending)
    },[isPending])

    
useEffect(()=>{
  setTimeout(()=>{
    setActive(!isPending);
  },600);
},[isPending])

useEffect(() => {
    setProgress(isPending);
}, [isPending]);

    return(
        <>
        {progress && <Progress/>}
        <Container mb={'2rem'} fluid px={{base:'sm',lg:'md'}} style={{opacity:active ? 1:0 ,transition:'all 0.5s'}} >
            {progress && <Progress/>}
           <CenterProfile profile={profile} setProfile={setProfile} setProgress={setProgress}/>
        </Container>
        </>


    )
}
export default Profile