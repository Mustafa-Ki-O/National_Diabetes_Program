import { Tabs } from '@mantine/core';
import Documents from './Documents';
import Videos from './Videos';


const MultiTabs =() => {
  return (
    <Tabs p={20} dir='rtl' defaultValue="doc" >
      <Tabs.List>
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

      <Tabs.Panel mt={'xl'} value="doc">
        <Documents/>
      </Tabs.Panel>

      <Tabs.Panel value="activities">
        النشاطات
      </Tabs.Panel>

      <Tabs.Panel value="videos">
        <Videos/>
      </Tabs.Panel>
    </Tabs>
  );
}
export default MultiTabs 