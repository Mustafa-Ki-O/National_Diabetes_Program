import { Tabs } from "@mantine/core"
import InProgress from "./InProgress"
import useFetchQueries from "../../../useMutation/SuperVisor/useFetchQueries"
import { useEffect, useState } from "react"
import Progress from "../../general/Progress"
import Accepted from "./Accepted"
import Rejected from "./Rejected"
const QueryTabs = () => {

  const [requests,setRequests] = useState([])
  const {fetchQueries,isPending} = useFetchQueries()

   const [progress,setProgress] = useState(false)

  useEffect(()=>{
    fetchQueries(setRequests)
  },[])

  useEffect(()=>{
    setProgress(isPending)
  },[isPending])

  const inProgressR= requests?.filter((r,i) => r.status === 'inProgress')
  const acceptedR= requests?.filter((r,i) => r.status === 'accepted')
  const rejectedR= requests?.filter((r,i) => r.status === 'rejected')

    return(
        <>
        {progress && <Progress/>}
        <Tabs p={20} dir='rtl' defaultValue="inProgress">
              <Tabs.List grow justify={'space-between'} pos={'sticky'} 
              top={60} style={{zIndex:10,borderBottom:'2px solid #00000004'}}
              onClick={(e)=>setClick(e.target.innerText)}
              bg={'#f9f9f9'} >
                <Tabs.Tab fz={{base:'1rem',sm:'1.5rem'}}  value="inProgress" >
                  
                 الطلبات الحالية
                
                </Tabs.Tab>
                <Tabs.Tab fz={{base:'1rem',sm:'1.5rem'}}  value="accepted" >
                  الطلبات المقبولة
                </Tabs.Tab>
                <Tabs.Tab fz={{base:'1rem',sm:'1.5rem'}} value="rejected" >
                  الطلبات المرفوضة
                </Tabs.Tab>
              </Tabs.List>
              
              <Tabs.Panel mt={'xl'} value="inProgress">
                <InProgress inProgressR={inProgressR}/>
              </Tabs.Panel>
        
              <Tabs.Panel mt={'xl'}  value="accepted" >
               <Accepted acceptedR={acceptedR}/>
              </Tabs.Panel>
        
              <Tabs.Panel mt={'xl'} value="rejected">
                <Rejected rejectedR={rejectedR}/>
              </Tabs.Panel>
            </Tabs>
        </>
    )
}
export default QueryTabs