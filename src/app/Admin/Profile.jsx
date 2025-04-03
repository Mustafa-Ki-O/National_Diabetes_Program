import { Image,Container,Grid } from "@mantine/core"
import CenterProfile from "../../components/Home/Admin/CenterProfile"

import useFetchProfile from "../../useMutation/Admin/useFetchProfile"
import { useEffect, useState } from "react"
import Progress from "../../components/general/Progress"
const Profile = () => {

    const[profile,setProfile] = useState({})
    const [progress,setProgress] = useState(false)
    const {fetchProfile,isPending} = useFetchProfile(setProfile)
    const [active,setActive] = useState(false);
    
    useEffect(()=>{
        fetchProfile()
    },[])

    useEffect(()=>{
        setProgress(isPending)
    },[isPending])

    
useEffect(()=>{
  setTimeout(()=>{
    setActive(!isPending);
  },600);
},[isPending])

    return(
        <>
        <Container fluid px={60} >
            {progress && <Progress/>}
           <CenterProfile profile={profile} setProfile={setProfile}/>
        </Container>
        </>


    )
}
export default Profile