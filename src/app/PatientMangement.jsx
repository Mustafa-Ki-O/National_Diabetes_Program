// Part of National_Diabetes_Program
// Copyright (c) 2025 Mustafa-Ki-O - All rights reserved.

import { Container ,Text,Grid, Stack, Title,Image, Flex,Button,Popover, Select, Group} from "@mantine/core";
import PatientsCards from "../components/Home/Admin/PatientsCards";
import { useState,useEffect } from "react";
import { useMemo } from "react";
import Progress from "../components/general/Progress";
import useFetchPatients from "../useMutation/Admin/useFetchPatients";
import Search from "../components/Home/Admin/search";
import search from'../assets/vectors/search.png'
import home from '../assets/css/home.module.css'
const PatientMangement = () => {
  
  const userData = localStorage.getItem('user');
  const user = useMemo(() => userData ? JSON.parse(userData) : null, [userData]);
  const [progress, setProgress] = useState(false);
  
  const [patients, setPatients] = useState([]);
  const [active,setActive] = useState(false);
  const {fetchPatients,isPending} = useFetchPatients(setPatients);
  const [searchedPatients,setSearchedPatients] = useState([])
  const [ sugarType,setSugarType] = useState()
  const [orderNames,setOrderNames] = useState()
 
  useEffect(()=>{
    fetchPatients()
  },[]);

  useEffect(() => {
    setProgress(isPending);
}, [isPending]);

useEffect(()=>{
  setTimeout(()=>{
    setActive(!isPending);
  },600);
},[isPending])


const handleChangeType = (value) =>{
  if(value!==null && value !==undefined){
    setSugarType(value);
    setSearchedPatients(patients?.filter(patient => patient.sugarType === value));
  }
  else{
    setSearchedPatients(patients)
    setSugarType('')
  }
}

const handleChangeName = (value) =>{
  if(value!==null && value!==undefined){
    setOrderNames(value);
    const sortedPatients = [...patients];
    sortedPatients.sort((a,b)=>{
      const nameA = a.fullname || '';
      const nameB = b.fullname || '';
      if(value==='تصاعدي'){
       return nameA.localeCompare(nameB, 'ar', { sensitivity:'base' })
      }
      else if(value === 'تنازلي'){
       return nameB.localeCompare(nameA, 'ar', { sensitivity:'base' })
      } 
    })
    
    setSearchedPatients(sortedPatients);
  } else{
    setSearchedPatients(patients)
    setOrderNames('')
  }
}

    return (

        <>
        {progress && <Progress/>}
        <Container pos={'relative'} p={{base:0,md:'lg'}} fluid  pb={60} mih='85vh' style={{opacity:active?'1':'0' ,transition:'all 0.7s'}}>
         {user?.role === 'center' ?(
            <>
            {/* <Group w={'100%'} p={0}> */}
          
            <Title size={'2rem'} ta={'end'} px={'lg'} mb={'1rem'} >
              إدارة المرضى
            </Title>
            {patients.length !==0 ? (
            <Grid dir justify="end"  gutter={20} gap={20} pos={'sticky'} top={{base:-10,sm:0}}
                style={{
                  zIndex:10,
                  background: '#F9FAFC',
                  paddingBottom:20,
                  borderBottom: '2px solid #00000010' // يعطي حد خفيف أنيق
                }}>  
              <Grid.Col span={12}>
              
             </Grid.Col>
              <Grid.Col visibleFrom="sm" style={{alignSelf:'end',justifyItems:'end'}} span={{base:12,sm:5}}>
              <Flex  gap={3} justify={'space-between'}>
              <Popover width={'fit-content'} position="bottom"  withArrow shadow="md">
              <Popover.Target>
              <Button radius={10} size="md" fullWidth variant="light" c='#37A9EF' >فرز المرضى حسب</Button>
              </Popover.Target>
               <Popover.Dropdown>
                 <Stack gap={20}  >
                  <Flex gap={20}  justify='space-between' align='center'>
                    <Select
                    w='50%'
                    placeholder="حدد النوع"
                   data={['النوع الأول','النوع الثاني','سكري الحمل','نوع أخر']}
                   value={sugarType}
                   onChange={handleChangeType}
                   size="sm"
                   allowDeselect
                   variant="unstyled"
                   clearable
                   comboboxProps={{  transitionProps: { transition: 'pop', duration: 200 } ,dropdownPadding:10,shadow:'sm'}}
                   />
                   <Text size="sm">نوع السكري</Text>
                  </Flex>
                  <Flex gap={20} justify='space-between' align='center'>
                  <Select
                   w='50%'
                   placeholder="تنازلي/تصاعدي"
                   data={['تنازلي','تصاعدي']}
                   value={orderNames}
                   onChange={handleChangeName}
                   size="sm"
                   allowDeselect
                   variant="unstyled"
                   clearable
                   comboboxProps={{  transitionProps: { transition: 'pop', duration: 200 } ,dropdownPadding:10,shadow:'sm'}}
                   />
                   <Text size="sm">الاسم</Text>
                  </Flex>
                 </Stack>
               </Popover.Dropdown>
             </Popover>
             
              </Flex>
              
             
            </Grid.Col>
             <Grid.Col className={home.grid} align='end' span={{ base:12,sm:7 }}>
              <Stack px={'lg'} >
               <Flex   justify='end' gap={30}>
                <Flex  hiddenFrom="sm" gap={3} justify={'space-between'}>
              <Popover width={'fit-content'} position="bottom"  withArrow shadow="md">
              <Popover.Target>
              <Button radius={10} size="md" miw={'7rem'} variant="light" c='#37A9EF' >فرز</Button>
              </Popover.Target>
               <Popover.Dropdown>
                 <Stack gap={10}>
                  <Flex gap={20}  justify='space-between' align='center'>
                    <Select
                    w='50%'
                    placeholder="حدد النوع"
                   data={['النوع الأول','النوع الثاني','سكري الحمل','نوع أخر']}
                   value={sugarType}
                   onChange={handleChangeType}
                   size="sm"
                   allowDeselect
                   variant="unstyled"
                   clearable
                   comboboxProps={{  transitionProps: { transition: 'pop', duration: 200 } ,dropdownPadding:10,shadow:'sm'}}
                   />
                   <Text size="sm">نوع السكري</Text>
                  </Flex>
                  <Flex gap={20} justify='space-between' align='center'>
                  <Select
                   w='50%'
                   placeholder="تنازلي/تصاعدي"
                   data={['تنازلي','تصاعدي']}
                   value={orderNames}
                   onChange={handleChangeName}
                   size="sm"
                   allowDeselect
                   variant="unstyled"
                   clearable
                   comboboxProps={{  transitionProps: { transition: 'pop', duration: 200 } ,dropdownPadding:10,shadow:'sm'}}
                   />
                   <Text size="sm">الاسم</Text>
                  </Flex>
                 </Stack>
               </Popover.Dropdown>
             </Popover>
             
              </Flex>
                <Group m={0} >
<Image src={search} w={30} className={home.search}/>
                 <Text size="lg" fw={700}  >
                    ابحث عن مريض 
                </Text>  
                </Group>
               
              </Flex>
               <Search patients={patients} setSearchedPatients={setSearchedPatients}/>
              </Stack>
              
              </Grid.Col>
            
            </Grid>
            
            
            ):(<></>)}

            {/* <Container h={'24vh'} /> */}
            {/* </Group> */}
            <PatientsCards  setPatients={setPatients}  patients={searchedPatients} setProgress={setProgress}/>
            </>
         ):(
            <>
              hello
            </>
         )}
        </Container>
        
        </>
    )
}
export default PatientMangement;