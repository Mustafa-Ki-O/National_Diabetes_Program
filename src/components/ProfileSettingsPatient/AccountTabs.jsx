import { Tabs } from '@mantine/core';
import { Archive, LocationEdit, Tablets, UserRoundPen } from 'lucide-react';
import AccountSettings from './AccountSettings';
import AccountDrugs from './AccountDrugs';
import AccountLocation from './AccountLocation';
import { useState,useEffect } from 'react';


const AccountTabs =({info,setProgress,setInfo}) => {

            const [active,setActive] = useState(false);

        
                useEffect(()=>{
                  setTimeout(()=>{
                    setActive(true);
                  },200);
                },[])
  return (

    <Tabs  p={10} dir='rtl' defaultValue="account" style={{opacity:active?'1':'0',transform:active?'translateY(0px)':'translateY(100px)' ,transition:'all 0.8s'}}>
      <Tabs.List bg={'#f9f9f9'} grow justify={'space-between'} pos={'sticky'} top={60} style={{zIndex:10,borderBottom:'2px solid #00000004'}}
      >
      <Tabs.Tab fz={{base:'1rem',sm:'1.5rem'}} value="account" >
        <UserRoundPen style={{marginLeft:5}} size={15} />
           الشخصية
        </Tabs.Tab>
        <Tabs.Tab fz={{base:'1rem',sm:'1.5rem'}}  value="location" >
            <LocationEdit style={{marginLeft:5}} size={15} />
            الموقع
        </Tabs.Tab>
        <Tabs.Tab fz={{base:'1rem',sm:'1.5rem'}}  value="drugs" >
            <Tablets style={{marginLeft:5}} size={15} />
            العلاج
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel mt={'lg'} value="account" >
       <AccountSettings info={info} setProgress={setProgress} setInfo={setInfo}/>
      </Tabs.Panel>

      <Tabs.Panel mt={'lg'} value="location">
          <AccountLocation info={info} setProgress={setProgress} setInfo={setInfo}/>
      </Tabs.Panel>
      
      <Tabs.Panel mt={'lg'} value="drugs">
          <AccountDrugs info={info} />
      </Tabs.Panel>

    </Tabs>
  );
}
export default AccountTabs