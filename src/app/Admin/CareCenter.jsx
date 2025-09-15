// Part of National_Diabetes_Program
// Copyright (c) 2025 Mustafa-Ki-O - All rights reserved.

import { Container, Flex, Title ,Button, Group } from "@mantine/core"
import UpScroll from "../../components/general/UpScroll"
import { useState,useEffect } from "react"
import MultiTabs from "../../components/CareCenter/Tabs"
import Ordering from "../../components/general/Ordering"
import { useDisclosure } from "@mantine/hooks"
import UploadModal from "../../components/CareCenter/UploadModal"
import Progress from "../../components/general/Progress"
import { ListFilterPlus, Upload, UploadCloud } from "lucide-react"

const CareCenter = () => {

        const [progress,setProgress] = useState(false)
        const [active,setActive] = useState(false);

        const[click,setClick]=useState('المقالات')
    
        const [opened,{open,close}] = useDisclosure()

        const handleButtonName = (click) =>{
          if(click==='النشاطات'){
            return "نشاط"
          }
          if(click==='المقالات'){
            return 'مقال'
          }
          if(click==='الفيديوهات'){
            return "فيديو"
          }
        }

    useEffect(()=>{
      setTimeout(()=>{
        setActive(true);
      },600);
    },[])

    const[allActivities,setAllActivities] = useState([])
    const[allVideos,setAllVideos] = useState([])
    const[allArticles,setAllArticles] = useState([])

UpScroll()
     

    return(
        <>
        <UploadModal
        opened={opened}
        close={close}
        mainSubject={click}
        setProgress={setProgress}
        setAllArticles={setAllArticles}
        setAllActivities={setAllActivities}
        setAllVideos={setAllVideos}
        />

        {progress && <Progress/>}
        <Container mih={'100vh'}  fluid style={{opacity:active?'1':'0' ,transition:'all 0.7s'}} p={20}>
            <Title bg={'#f9f9f9'} size={'2rem'} ta={'end'} px={'lg'} mb={'3rem'} >
                    برامج الرعاية الصحية
            </Title>
            <Flex px={'1rem'} justify={'start'} align={'center'}>
              
               {/* <Ordering size={22} button={true}/> */}
              
                <Button miw={'8rem'} radius={10} variant='filled' color={'#37a9ef'} size='md' onClick={open}>
                 رفع {handleButtonName(click)} <UploadCloud style={{marginLeft:10}} size={22} color={'#fff'} />
                </Button>
            </Flex>
            <MultiTabs setClick={setClick} setProgress={setProgress} 
            setAllActivities={setAllActivities} setAllArticles={setAllArticles} setAllVideos={setAllVideos}
            allActivities={allActivities} allArticles={allArticles} allVideos={allVideos}
            />
        </Container>
        </>
    )
}
export default CareCenter