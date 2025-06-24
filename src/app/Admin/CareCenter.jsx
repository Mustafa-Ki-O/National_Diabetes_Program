import { Container, Flex, Title ,Button, Group } from "@mantine/core"
import UpScroll from "../../components/general/UpScroll"
import { useState,useEffect } from "react"
import MultiTabs from "../../components/CareCenter/Tabs"
import Ordering from "../../components/general/Ordering"
import { useDisclosure } from "@mantine/hooks"
import UploadModal from "../../components/CareCenter/UploadModal"
import Progress from "../../components/general/Progress"

const CareCenter = () =>{
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

UpScroll()
    return(
        <>
        <UploadModal
        opened={opened}
        close={close}
        subject={click}
        setProgress={setProgress}
        />
        {progress && <Progress/>}
        <Container  fluid style={{opacity:active?'1':'0' ,transition:'all 0.7s'}} p={20}>
            <Title bg={'#f9f9f9'} size={'2rem'} ta={'end'} px={'lg'} mb={'3rem'} >
                    برامج الرعاية الصحية
            </Title>
            <Flex px={'1rem'} justify={'space-between'} align={'center'}>
              
               <Ordering size={22} button={true}/>
              
                <Button miw={'8rem'} radius={'md'} variant='filled' color={'blue'} size='md' onClick={open}>
                 رفع {handleButtonName(click)}
                </Button>
            </Flex>
            <MultiTabs setClick={setClick}/>
        </Container>
        </>
    )
}
export default CareCenter