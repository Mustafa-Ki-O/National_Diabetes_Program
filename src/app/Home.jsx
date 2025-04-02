import { Container ,Text,Grid, Stack, Title,Image, Flex,Button,Popover, Select} from "@mantine/core";
import PatientsCards from "../components/Home/Admin/PatientsCards";
import { useState,useEffect } from "react";
import { useMemo } from "react";
import Progress from "../components/general/Progress";
import useFetchPatients from "../useMutation/Admin/useFetchPatients";
import Search from "../components/Home/Admin/search";
import search from'../assets/vectors/search.png'
import home from '../assets/css/home.module.css'
const Home = () => {
  
  const userData = localStorage.getItem('user');
  const user = useMemo(() => userData ? JSON.parse(userData) : null, [userData]);
  const [progress, setProgress] = useState(false);
  
  const [patients, setPatients] = useState([]);
  const {fetchPatients,isPending} = useFetchPatients(setPatients);
  const [searchedPatients,setSearchedPatients] = useState([])
  const [ sugarType,setSugarType] = useState()
  const [orderAge,setOrderAge] = useState()
  const [orderNames,setOrderNames] = useState()
  // const [isSubmitted, setIsSubmitted] = useState(false);
 
  useEffect(()=>{
    fetchPatients()
  },[]);

  useEffect(() => {
    setProgress(isPending);
}, [isPending]);

const handleChangeAge = (value) =>{
  setOrderAge(value)
}

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
  }else{
    setSearchedPatients(patients)
    setOrderNames('')
  }
}

const getMostCommonSugarType = () => {
  if (patients.length === 0) return null;

  const completedPatients = patients.filter(patient => patient.isCompleted);

  if (completedPatients.length === 0) return 'لم يتم التحقق من المرضى !';

  const sugarCounts = completedPatients.reduce((acc, patient) => {
    const type = patient.sugarType; 
    if (type) { 
      acc[type] = (acc[type] || 0) + 1;
    }
    return acc;
  }, {});

  const mostCommon = Object.entries(sugarCounts).reduce(
    (max, [type, count]) => count > max.count ? { type, count } : max,
    { type: '', count: 0 }
  );

  return mostCommon.type || 'لم يتم تحديد نوع';
};

const mostCommonSugarType = getMostCommonSugarType();

console.log(mostCommonSugarType)
const num = patients.length -1;
    return (

        <>
        {progress && <Progress/>}
        <Container  fluid  pb={30} mih='100vh'>
         {user?.role === 'center' ?(
            <>
            {patients.length !==0 ? (
            <Grid justify="end"  gutter={40}  px={20} mx={3}>  
            <Grid.Col  bg={{base:'#fff',md:'transparent'}} span={{ lg: 3, md: 4, sm: 12, xs: 6 }} style={{borderRadius:10}}  align='end'>
                <Title size='xl' mb={20}>
                  عدد المرضى
                </Title>
                <Text size="md">
                {num > 10 ? 'مريض' : 'مرضى'} {  num} 
                </Text>
            </Grid.Col>
            
            <Grid.Col bg={{base:'#fff',md:'transparent'}} style={{borderRadius:10}} span={{ lg: 3, md: 4, sm: 12, xs: 6 }} align='end' mr={{base:0,lg:180}}>
            <Title size='xl' mb={20}>
                السكري الأكثر شيوعا
            </Title>
                <Text size="md" >
                {mostCommonSugarType || 'لا توجد بيانات'}
                </Text>
            </Grid.Col>
            
            <Grid.Col className={home.grid} align='end' span={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
              <Flex justify='end' gap={10}>
              <Image src={search} mb={10} w={30} className={home.search}/>
                 <Text size="lg" fw={700} mb={10}  >
                    ابحث عن مريض 
                </Text>  
              </Flex>
              <Flex gap={3}>
              <Popover width={'fit-content'} position="bottom"  withArrow shadow="md">
              <Popover.Target>
              <Button radius={10} size="md" miw={80}  variant="light" c='#37A9EF'>فرز</Button>
              </Popover.Target>
               <Popover.Dropdown>
                 <Stack gap={20}>
                  {/* <Flex justify='end' align='center' gap={20}>
                   <Select 
                   w='45%'
                   placeholder='أكبر/أصغر'
                   data={[{value:'older',label:'الأكبر سناً'},{value:'newer',label:'الاصغر سناً'}]}
                   onChange={handleChangeAge}
                   value={orderAge ?orderAge : null}
                   allowDeselect
                   variant="unstyled"
                   comboboxProps={{  transitionProps: { transition: 'pop', duration: 200 } ,dropdownPadding:10,shadow:'sm'}}
                   />
                   <Text size="sm">العمر</Text>
                  </Flex> */}
                  <Flex  justify='end' align='center'>
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
                  <Flex  justify='end' align='center'>
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
             {/* <Text size="lg" fw={700} mb={10}>
               هناك ما يزيد عن {num} {num > 10 ? 'مريض' : 'مرضى'} ,يمكنك البحث هنا
             </Text> */}
            
            <PatientsCards setPatients={setPatients}  patients={searchedPatients} setProgress={setProgress}/>
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
export default Home;