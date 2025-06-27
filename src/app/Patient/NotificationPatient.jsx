import { Container,Stack, Title } from "@mantine/core"
import { useState,useEffect } from "react";
import NotificationCard from "../../components/NotificationPatient/NotificationCard";
import useFetchNotification from "../../useMutation/Patient/useFetchNotification";
import Progress from "../../components/general/Progress";
import usePostReadNote from "../../useMutation/Patient/usePostReadNote";


const NotificationPatient = () => {
    
        const [notifications,setNotifications] = useState([])
        const {fetchNotification,isPending} = useFetchNotification(setNotifications)
        const {postRead,_} = usePostReadNote()


        const [progress,setProgress] = useState(false)
    
        const [active,setActive] = useState(false);
        
                useEffect(()=>{
                  setTimeout(()=>{
                    setActive(true);
                  },200);
                },[])

                useEffect(()=>{
                    fetchNotification()
                },[])
        
                useEffect(()=>{
                    setProgress(isPending)
                },[isPending])

                useEffect(()=>{
                    setTimeout(()=>{
                        postRead()
                    },2000)
                },[])


    return(
        <>
        {progress && <Progress/>}
         <Container mih={'80vh'}
                 style={{opacity:active?'1':'0',transform:active?'translateY(0px)':'translateY(100px)' ,transition:'all 0.8s'}}
                p={10} fluid mb={'4.5rem'}>
                    <Title mb={30} size={'xl'} ta={'right'}>
                        الاشعارات
                    </Title>
                    <Stack gap={10}>
            {notifications.map((notification,i)=>(
                <NotificationCard key={i} notification={notification}/>
            ))}
            </Stack>

        </Container>
        </>
    )
}
export default NotificationPatient