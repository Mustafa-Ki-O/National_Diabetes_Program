import { Button, Flex, Tabs, Text } from "@mantine/core"
import InProgress from "./InProgress"
import useFetchQueries from "../../../useMutation/SuperVisor/useFetchQueries"
import { useEffect, useState } from "react"
import Progress from "../../general/Progress"
import Accepted from "./Accepted"
import Rejected from "./Rejected"
import { RefreshCcw } from "lucide-react"
const QueryTabs = () => {

  const [requests,setRequests] = useState([])
  const {fetchQueries,isPending} = useFetchQueries()

   const [progress,setProgress] = useState(false)

  useEffect(()=>{
    fetchQueries(setRequests)
  },[])
  
  const updateRequest = ()=>{fetchQueries(setRequests)}

    useEffect(()=>{
      setProgress(isPending)
    },[isPending])

    const inProgressR = requests?.filter((r,i) => r.status === 'inProgress')
    const acceptedR = requests?.filter((r,i) => r.status === 'accepted')
    const rejectedR = requests?.filter((r,i) => r.status === 'rejected')

    
// #e74c3c second
// #e67e22 primary
    return(
        <>
        {progress && <Progress/>}
        <Flex px={{base:5,sm:20}} justify={'end'} align={'center'} gap={10}>
          <Button variant="filled" size="xs" radius={15} color="#e67e22" onClick={updateRequest} >
          <RefreshCcw size={15}  />
        </Button>
        <Text size="lg">
          تحديث الطلبات
        </Text>
        </Flex>
        
        
        <Tabs p={20} dir='rtl' defaultValue="inProgress">
              <Tabs.List grow justify={'space-between'} pos={'sticky'} 
              top={60} style={{zIndex:10,borderBottom:'2px solid #00000004'}}
              onClick={(e)=>setClick(e.target.innerText)}
              bg={'#f9f9f9'} >
                <Tabs.Tab fz={{base:'1rem',sm:'1.5rem'}}  value="inProgress" >
                  
                 الطلبات الحالية
                
                </Tabs.Tab>
                <Tabs.Tab fz={{base:'1rem',sm:'1.5rem'}}  value="accepted" >
                  المقبولة
                </Tabs.Tab>
                <Tabs.Tab fz={{base:'1rem',sm:'1.5rem'}} value="rejected" >
                  المرفوضة
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