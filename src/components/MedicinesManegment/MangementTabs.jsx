import { Tabs } from '@mantine/core';
import { Archive, Tablets } from 'lucide-react';
import MedicinesStore from './MedicinesStore';



const MangementTabs =() => {
  return (
    <Tabs  p={20} dir='rtl' defaultValue="store">
      <Tabs.List bg={'#f9f9f9'} grow justify={'space-between'} pos={'sticky'} top={60} style={{zIndex:10,borderBottom:'2px solid #00000004'}}
      >
        <Tabs.Tab fz={{base:'1rem',sm:'1.5rem'}} value="store" >
             <Tablets style={{marginLeft:5}} size={20} />
            المخزن
           
        </Tabs.Tab>
        <Tabs.Tab fz={{base:'1rem',sm:'1.5rem'}}  value="history" >
            <Archive style={{marginLeft:5}} size={20} />
              السجل
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel mt={'xl'} value="store" >
       <MedicinesStore/>
      </Tabs.Panel>

      <Tabs.Panel mt={'xl'} value="history">
           السجل 
      </Tabs.Panel>

    </Tabs>
  );
}
export default MangementTabs