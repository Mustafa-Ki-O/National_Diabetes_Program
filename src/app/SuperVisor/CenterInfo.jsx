// Part of National_Diabetes_Program
// Copyright (c) 2025 Mustafa-Ki-O - All rights reserved.

import { Button, Container ,Flex,Group,Stack,Title} from "@mantine/core"
import { Download, Hospital, LocateFixed, LogOut } from "lucide-react";
import { useEffect, useState ,useMemo} from "react"
import InfoCenterCard from "../../components/SuperVisor/CenterInfo/InfoCenterCard";
import StatisticsCenter from "../../components/SuperVisor/CenterInfo/StatisticsCenter";
import { useNavigate, useParams } from "react-router";
import useFetchCenterData from "../../useMutation/SuperVisor/useFetchCenterData";
import Progress from "../../components/general/Progress";
import DownloadModal from "../../components/SuperVisor/PatientsInCenter/DownloadModal";
import { useDisclosure } from "@mantine/hooks";




const CenterInfo = () => {

  const {cityName,cid} = useParams()
            const [active,setActive] = useState(false);
            const [progress,setProgress] = useState(false)
             const [data,setData] = useState({})

              const[opened,{open,close}] = useDisclosure()
            const {fetchCenterData,isPending} = useFetchCenterData(setData)

            useEffect(()=>{
              setTimeout(()=>{
                setActive(true);
              },600);
            },[])

             useEffect(()=>{
                  fetchCenterData(cid)
               },[])

               useEffect(()=>{
                setProgress(isPending)
               },[isPending])
               
             const navigate= useNavigate()
    
    return(
        <>
         {progress && <Progress/>}
         <DownloadModal opened={opened} close={close} setProgress={setProgress} cid={cid}/>
        <Container mih={'85vh'} mb={'2rem'} fluid pos={'relative'} p={{base:0,md:'lg'}} style={{opacity:active ? 1:0 ,transition:'all 0.5s'}}>
                              <LogOut size={25} color="#88888888" style={{cursor:'pointer',position:'absolute',top:13,left:20}} onClick={()=>navigate(-1)} />
                             <Title size={'2rem'} ta={'end'} px={'lg'} mb={'3rem'} >
                                 حول المركز
                               </Title>
                               <Flex justify={'end'} align={'center'} px={'lg'} gap={10}>
                                 <Group gap={5}>
                                   <Button  size="sm" 
                                   radius={10} fullWidth variant="subtle" color="#e74c3c" onClick={open}>
                                  <Download size={20}/>
                                   </Button>
                                 </Group>
                                   <Title size={'1.4rem'} ta={'end'}  my={'2rem'} >
                                     {data?.centerName}
                                   </Title>    
                                   <Hospital size={25} />
                               </Flex>
                              <InfoCenterCard data={data} setProgress={setProgress}/>
                              {/* <StatisticsCenter /> */}

             </Container>
        </>
    )
}
export default CenterInfo