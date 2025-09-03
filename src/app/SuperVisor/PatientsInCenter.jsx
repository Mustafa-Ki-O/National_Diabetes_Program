import { Button, Container ,Flex,Group,Stack,Title} from "@mantine/core"
import { Download, Hospital, LocateFixed } from "lucide-react";
import { useEffect, useState ,useMemo} from "react"
import PatientsInfo from "../../components/SuperVisor/PatientsInCenter/PatientsInfo";
import { useDisclosure } from "@mantine/hooks";
import DownloadModal from "../../components/SuperVisor/PatientsInCenter/DownloadModal";

const PatientsInCenter = () => {

                const [active,setActive] = useState(false);
                const [progress,setProgress] = useState(false)
                const[opened,{open,close}] = useDisclosure()

                useEffect(()=>{
                  setTimeout(()=>{
                    setActive(true);
                  },600);
                },[])
        
    return(
                 <>
                 <DownloadModal opened={opened} close={close} />
                       <Container mih={'85vh'} mb={'2rem'} fluid pos={'relative'} p={{base:0,md:'lg'}} style={{opacity:active ? 1:0 ,transition:'all 0.5s'}}>
                            <Title size={'2rem'} ta={'end'} px={'lg'} mb={'3rem'} >
                                 حول المرضى
                              </Title>
                              <Flex justify={'end'} align={'center'} px={'lg'} gap={10}>
                                <Group gap={5}>
                                  <Button  size="sm" 
                                  radius={10} fullWidth variant="subtle" color="#e74c3c" onClick={open}>
                                 <Download size={20}/>
                                  </Button>
                                </Group>
                                  <Title size={'1.4rem'} ta={'end'}  my={'2rem'} >
                                     مركز النادي 
                                  </Title>    
                                  <Hospital size={25} />
                              </Flex>
                              <PatientsInfo />


             </Container>
        </>
    )
}
export default PatientsInCenter