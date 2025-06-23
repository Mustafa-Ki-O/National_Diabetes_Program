import { Container,Tabs } from "@mantine/core"
import { useState,useEffect } from "react";
import DocumentsCare from "../../components/HealthCare/DocumentsCare";
const HealthCare = () => {

        const [active,setActive] = useState(false);
        const [scrolled,setScrolled] = useState(false)

        useEffect(()=>{
          setTimeout(()=>{
            setActive(true);
          },200);
        },[])

        useEffect(() => {
          const handleScroll = () => setScrolled(window.scrollY > 20);
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);

    return(
        <>
        <Container px={0} py={10} mih={'90vh'}  fluid mb={'4.5rem'} 
        style={{opacity:active?'1':'0',transform:active?'translateY(0px)':'translateY(100px)' ,transition:'all 0.8s'}}>
             <Tabs dir='rtl' defaultValue="doc">
                  <Tabs.List pt={6}  grow justify="space-between" pos={'sticky'} top={57} 
                  style={{zIndex:10,borderBottom:'2px solid #00000004',backgroundColor:scrolled ? '#fff':'#F9FAFC',transition:'all 0.4s'}}>
                    <Tabs.Tab fz={{base:'1rem',sm:'1.5rem'}} value="doc" >
                      المقالات
                    </Tabs.Tab>
                    <Tabs.Tab fz={{base:'1rem',sm:'1.5rem'}}  value="activities" >
                      النشاطات
                    </Tabs.Tab>
                    <Tabs.Tab fz={{base:'1rem',sm:'1.5rem'}} value="videos" >
                      الفيديوهات
                    </Tabs.Tab>
                  </Tabs.List>

                  <Tabs.Panel p={10} mt={'xl'} value="doc" >
                    <DocumentsCare/>
                  </Tabs.Panel>
            
                  <Tabs.Panel p={10} mt={'xl'} value="activities">
                    النشاطات
                  </Tabs.Panel>
            
                  <Tabs.Panel p={10} mt={'xl'} value="videos">
                    الفيديوهات
                  </Tabs.Panel>
            </Tabs>
        </Container>
        </>
    )
}
export default HealthCare