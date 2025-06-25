import { Tabs } from '@mantine/core';
import Documents from './Documents';
import Videos from './Videos';
import Activities from './Activities';


const MultiTabs =({setClick,setProgress,setAllVideos,setAllArticles,setAllActivities,allArticles,allVideos,allActivities}) => {
  return (
    <Tabs p={20} dir='rtl' defaultValue="doc">
      <Tabs.List grow justify={'space-between'} pos={'sticky'} top={60} style={{zIndex:10,borderBottom:'2px solid #00000004'}}
      onClick={(e)=>setClick(e.target.innerText)}
      bg={'#f9f9f9'} >
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

      <Tabs.Panel mt={'xl'} value="doc" >
        <Documents setProgress={setProgress} setAllArticles={setAllArticles} allArticles={allArticles}/>
      </Tabs.Panel>

      <Tabs.Panel mt={'xl'} value="activities">
        <Activities setProgress={setProgress} setAllActivities={setAllActivities} allActivities={allActivities}/>
      </Tabs.Panel>

      <Tabs.Panel mt={'xl'} value="videos">
        <Videos setProgress={setProgress} setAllVideos={setAllVideos} allVideos={allVideos}/>
      </Tabs.Panel>
    </Tabs>
  );
}
export default MultiTabs 