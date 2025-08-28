import { Tabs } from "@mantine/core"
const QueryTabs = () => {

    return(
        <>
        <Tabs p={20} dir='rtl' defaultValue="processing">
              <Tabs.List grow justify={'space-between'} pos={'sticky'} 
              top={60} style={{zIndex:10,borderBottom:'2px solid #00000004'}}
              onClick={(e)=>setClick(e.target.innerText)}
              bg={'#f9f9f9'} >
                <Tabs.Tab fz={{base:'1rem',sm:'1.5rem'}}  value="processing" >
                  
                 الطلبات الحالية
                
                </Tabs.Tab>
                <Tabs.Tab fz={{base:'1rem',sm:'1.5rem'}}  value="accepted" >
                  الطلبات المقبولة
                </Tabs.Tab>
                <Tabs.Tab fz={{base:'1rem',sm:'1.5rem'}} value="rejected" >
                  الطلبات المرفوضة
                </Tabs.Tab>
              </Tabs.List>
        
              <Tabs.Panel mt={'xl'} value="processing">
                قيد المعالجة
              </Tabs.Panel>
        
              <Tabs.Panel mt={'xl'}  value="accepted" >
               مقبول
              </Tabs.Panel>
        
              <Tabs.Panel mt={'xl'} value="rejected">
               مرفوض
              </Tabs.Panel>
            </Tabs>
        </>
    )
}
export default QueryTabs