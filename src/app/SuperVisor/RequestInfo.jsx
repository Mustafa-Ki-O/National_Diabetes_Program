import { Button, Container ,Flex,Stack,Title} from "@mantine/core"
import { Hospital, LocateFixed, LogOut } from "lucide-react";
import { useEffect, useState ,useMemo} from "react"
import Progress from "../../components/general/Progress"
import { useNavigate, useParams } from "react-router";

import useFetchReqInfo from "../../useMutation/SuperVisor/useFetchReqInfo";
import InfoCard from "../../components/SuperVisor/RquestInfo/InfoCard";


const RequestInfo = () =>{

        const [active,setActive] = useState(false);
        const [progress,setProgress] = useState(false)
        const [reqInfo,setReqInfo] = useState({})
        const {fetchReqInfo,isPending} = useFetchReqInfo(setReqInfo)
        // const [id,setId] = useState()
        const {reqId} = useParams()

        const navigate = useNavigate()
        
        // useEffect(()=>{
        //   setId(reqId)
        // },[reqId])

        useEffect(()=>{
          if(reqId){
            fetchReqInfo(reqId)
          }
          
          setTimeout(()=>{
            setActive(true);
          },600);
        },[])

        useEffect(()=>{
          setProgress(isPending)
        },[isPending])

// #e74c3c second
// #e67e22 primary

    return(
        <>
         {progress && <Progress/>}
                <Container mih={'85vh'} mb={'2rem'} fluid pos={'relative'} p={{base:0,md:'lg'}} style={{opacity:active ? 1:0 ,transition:'all 0.5s'}}>
                     <Title size={'2rem'} ta={'end'} px={'lg'} mb={'4rem'} >
                         معلومات الطلب

                     </Title>
                     <LogOut size={25} color="#88888888" style={{cursor:'pointer',position:'absolute',top:13,left:20}} onClick={()=>navigate(-1)} />
                     <InfoCard reqInfo={reqInfo}/>
                </Container>
        
        </>
    )
}
export default RequestInfo