import { Container ,Text,Grid, Stack, Title,Image, Flex,Button,Popover, Select} from "@mantine/core";
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
    setSearchedPatients(patients.filter(patient => patient.sugarType === value));
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
        <Container p={{base:0,md:'lg'}} fluid  pb={60} mih='85vh' style={{opacity:active?'1':'0' ,transition:'all 0.7s'}}>
         {user?.role === 'center' ?(
            <>
            <Title size={'2rem'} ta={'end'} px={'lg'} mb={'3rem'} >
              إدارة المرضى
            </Title>
            {patients.length !==0 ? (
            <Grid justify="end"  gutter={20} gap={20} px={'lg'}  >  
   
            <Grid.Col className={home.grid} align='end' span={{ lg: 12, md: 12, sm: 12, xs: 12 }}>
              <Flex  justify='end' gap={10}>
              <Image src={search} mb={10} w={30} className={home.search}/>
                 <Text size="lg" fw={700} mb={10}  >
                    ابحث عن مريض 
                </Text>  
              </Flex>
              <Flex gap={3} justify={'space-between'}>
              <Popover width={'fit-content'} position="bottom"  withArrow shadow="md">
              <Popover.Target>
              <Button radius={10} size="md" miw={{base:80,sm:'15rem'}}  variant="light" c='#37A9EF' ml={'1rem'}>فرز المرضى حسب</Button>
              </Popover.Target>
               <Popover.Dropdown>
                 <Stack gap={20}>
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
              <Search patients={patients} setSearchedPatients={setSearchedPatients}/>
              </Flex>
              
             
            </Grid.Col>
            
            </Grid>
            ):(<></>)}
            
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