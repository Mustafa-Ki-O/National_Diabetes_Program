import { ActionIcon, AppShell, Box, Burger, Flex,Group, Image, Stack, Text ,Popover, Title, useMantineColorScheme} from "@mantine/core";
import { useEffect, useState,useRef } from "react"; // Import useState
import nav from '../../assets/css/nav.module.css';
import logo from '../../assets/images/ndblogo2.png';
import imgSv from '../../assets/images/ndblogo3.png';
import { useMantineTheme } from "@mantine/core";
import useLogOut from "../../useMutation/Admin/useLogOut";
import { Drawer, Button } from '@mantine/core';
import { Navigate, useNavigate } from "react-router";
import { useLocation } from "react-router";
import profile from '../../assets/vectors/admin.svg'
import statistics from '../../assets/vectors/Chart.svg'
import home from '../../assets/vectors/home.svg'
import heart from '../../assets/vectors/heart.svg'
import logout from '../../assets/vectors/Logout1.svg'
import patMang from '../../assets/vectors/Treat.svg'
import drugs from '../../assets/vectors/Drugs.svg'
import settings from '../../assets/vectors/Settings.svg'
import { useDisclosure } from "@mantine/hooks";
import LogOutModal from "../Home/Admin/LogOutModal";
import { Activity, ScanHeart, CircleUserRound, House,BriefcaseMedical, BellIcon, CameraIcon, Hospital, ShieldUser, BotMessageSquare  } from "lucide-react";
import NotifyNav from "./NotifyNav";
import useFetchNotification from "../../useMutation/Patient/useFetchNotification";
import CreateNotificationSocket from "../../api/CreateNotificationsSocket";
import ProfileNav from "./ProfileNav";
import ModePicker from "./ModePicker";
import usePostReadNote from "../../useMutation/Patient/usePostReadNote";

const NavBar = () => {
  // const {colorSchema} = useMantineColorScheme();
    const [openedModal, { open, close }] = useDisclosure(false);
    const location = useLocation();
    const theme= useMantineTheme();
    const [activeButton, setActiveButton] = useState('home');
    const [clickedButton,setClickedButton] = useState('patient-home')
    // const [opened, { toggle }] = useDisclosure();
    // const [openBurger,setOpenBurger] = useState(false);
    const [opened, { toggle }] = useDisclosure();
    const navigate= useNavigate()


    const handleButtonNavClick = (button) => {
        setClickedButton(button);
        if(button === 'care' || button === 'charts' || button ==='camera'){
          window.alert('قيد التطوير')
        }
        else{
          navigate(`/National_Diabetes_Program/${button}/`)
        }

    };


    const handleButtonClick = (button) => {
        setActiveButton(button);
        if(button == 'logOut'){
            open()
        }
        else{
         navigate(`/National_Diabetes_Program/${button}`)
        toggle();
        }
        
    };

    const socketRef = useRef(null);


    const [notifications,setNotifications] = useState([])
    const {fetchNotification,isPending} = useFetchNotification(setNotifications)
 


    const [userRole,setUserRole] = useState()
    const [userId,setUserId] = useState()
    const [userName,setUserName] = useState()

// const location = useLocation();

useEffect(() => {
  const user = JSON.parse(localStorage.getItem('user'));
  setUserRole(user?.role);
  setUserId(user?.id);
  setUserName(user?.name);
}, [location]);

      useEffect(()=>{
      if(userRole==='patient'){
        fetchNotification()
      }
       console.log('userRole is (from p) : ',userRole)
    },[userRole])


    useEffect(()=>{
         if (userRole === 'patient' && userId){
              socketRef.current = CreateNotificationSocket(
           userId,
           (data) => setNotifications(prev => [data, ...prev]),
           (error) => console.error("SSE Error", error),
           () => console.log("SSE Closed")
         );
      
         return () => {
           socketRef.current?.close();
         };
       }
    },[userRole,userId])

   


  const NavIcon = ({ icon: Icon, name, clickedButton, handleButtonNavClick ,label}) => {
  const isActive = location.pathname.includes(name);

  return (
    <div
      // className={`${nav.botom} ${isActive ? nav.botomClick : ''}`}
      style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}
      onClick={() => handleButtonNavClick(name)}
    >
      <Icon
        size={isActive ? 36 : 30}
        strokeWidth={isActive ? 1.8 : 1.6}
        color={isActive ? '#37a9ef' : '#707070'}
        
      />
      <Text
        size={isActive ? 'sm' : 'xs'}
        
        c={isActive ? '#37a9ef' : '#707070'}
      >{label}</Text>
    </div>
  );
};


    return (
        <>
        {(location.pathname !== '/National_Diabetes_Program/' 
        && location.pathname !== '/National_Diabetes_Program/superVisor/'
        && location.pathname !== '/National_Diabetes_Program/register/'
        && location.pathname !== '/National_Diabetes_Program/registerAdmin/'
        && location.pathname !== '/National_Diabetes_Program/verifyEmail/'
        && location.pathname !== '/National_Diabetes_Program/resetPassword/'
        && location.pathname !== '/National_Diabetes_Program/verify-otp/'
        && location.pathname !== '/National_Diabetes_Program/changePassword/' 
        && location.pathname !== '/National_Diabetes_Program/check-sr-code/') ?
        
        userRole === 'supervisor' ? (
          
    <>
    <LogOutModal opened={openedModal} close={close} />
        <AppShell  header={{ height: 60 }}
           dir="rtl"
           navbar={{
             width: 300,
             breakpoint: 'sm',
             collapsed: { mobile: !opened },   
             }}
             mb={'5.1rem'}
             padding="md"
             
            >
            <AppShell.Header w={'100%'} dir="ltr" bg={'#F9FAFC'}>
            <Flex mx={'0.7rem'} h="100%" px="0.2rem" justify='space-between' align={'center'}>
                <Group align="center" gap={30}>
                <Image ml={3} mb={5}  src={imgSv} style={{cursor:'pointer'}} w='3.2rem' onClick={()=>navigate('/National_Diabetes_Program/superVisor/home-sv/')}/>
                {/* <Image src={profile} w='1.7rem' style={{cursor:'pointer',border:'1px solid #000',borderRadius:'50%'}} onClick={()=>navigate('/National_Diabetes_Program/centerProfile')}/> */}
        </Group>  
        <Group>
          <Flex  gap={10} mx={'0.3rem'} justify={'end'} align={'end'}>
            {/* <ModePicker/> */}
            <Title c={'#e67e22'} size="xl"  >
               مشرف رئيسي
            </Title>
            <ShieldUser color={'#e67e22'}  size={27} />
          </Flex>
        
        <Burger
        lineSize={2}
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="md"
          color="#e74c3c"
          // className={nav.burger}
        />    
        </Group>
       </Flex>
      </AppShell.Header>
      <AppShell.Navbar bg={'#F9FAFC'} py="md" pr='0px' w={{base:'60%',sm:'20%'}}>
  <Stack gap={'sm'} px={5} h={'100%'} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
    <Box mt={'1.5rem'} display={'flex'}  style={{flexDirection:'column',gap:10}}>
      <Text p={10} dir="ltr" display={'flex'} c='#121212' fz={16} fw={600} ta='right'
        onClick={() => handleButtonClick('superVisor/home-sv')}
        className={` ${nav.hovered}  ${activeButton === 'superVisor/home-sv' ? nav.activeDrawer : ''}`} 
        style={{cursor:'pointer',justifyContent:'end',alignItems:'center'}}>
        الرئيسية
        <Image className={nav.img} src={home} w={27} h={25} ml={5} />
      </Text>
      <Text p={10} c='#121212' fz={16} fw={600} dir="ltr" display={'flex'} 
        onClick={() => handleButtonClick('superVisor/queryMangement')} ta='right' 
        className={` ${nav.hovered} ${activeButton === 'superVisor/queryMangement' ? nav.activeDrawer : ''}`} 
        style={{cursor:'pointer',justifyContent:'end',alignItems:'center'}}>
              إدارة الاستعلامات
        <Image className={nav.img} src={patMang} w={25} h={25} ml={5} />
      </Text>
      <Text p={10} c='#121212' dir="ltr" fz={16} fw={600} display={'flex'} 
        onClick={() => handleButtonClick('superVisor/dataMangement')} ta='right' 
        className={` ${nav.hovered} ${activeButton === 'superVisor/dataMangement' ? nav.activeDrawer : ''}`} 
        style={{cursor:'pointer',justifyContent:'end',alignItems:'center'}}>
            إدارة البيانات 
        <Image className={nav.img} src={drugs} w={25} h={25} ml={5} />
      </Text>
    
    </Box>

    <Box display={'flex'}  style={{flexDirection:'column',gap:10}}>
      <div style={{width:'100%',height:2,backgroundColor:'#00000030'}}></div>
      {/* <Text p={10} c='#121212' fz={16} fw={600} dir="ltr" display={'flex'} 
        onClick={() => handleButtonClick('centerProfile')} ta='right' 
        className={` ${nav.hovered} ${activeButton === 'centerProfile' ? nav.activeDrawer : ''}`} 
        style={{cursor:'pointer',justifyContent:'end',alignItems:'center'}}>
        إعدادات الحساب
        <Image className={nav.img} src={settings} w={25} h={25} ml={5} />
      </Text> */}
      <Text p={10} c='#121212' fz={16} fw={600} dir="ltr" display={'flex'} 
        onClick={() => handleButtonClick('logOut')} ta='right' 
        className={` ${nav.hovered} ${activeButton === 'logOut' ? nav.activeDrawer : ''}`} 
        style={{cursor:'pointer',justifyContent:'end',alignItems:'center'}}>
        تسجيل الخروج
        <Image className={nav.img} src={logout} w={25} h={25} ml={5} />
      </Text>
    </Box>
  </Stack>
</AppShell.Navbar>
    </AppShell>    
    </>
        
      ): userRole === 'center' ? 
      (
      <>
          <LogOutModal opened={openedModal} close={close} />
        <AppShell  header={{ height: 60 }}
           dir="rtl"
           navbar={{
             width: 300,
             breakpoint: 'sm',
             collapsed: { mobile: !opened },   
             }}
             mb={'5.1rem'}
             padding="md"
             
            >
            <AppShell.Header w={'100%'} dir="ltr" bg={'#F9FAFC'}>
            <Flex mx={'0.7rem'} h="100%" px="0.2rem" justify='space-between' align={'center'}>
                <Group align="center" gap={30}>
                <Image ml={3} mb={5}  src={logo} style={{cursor:'pointer'}} w='3.2rem' onClick={()=>navigate('/National_Diabetes_Program/home')}/>
                {/* <Image src={profile} w='1.7rem' style={{cursor:'pointer',border:'1px solid #000',borderRadius:'50%'}} onClick={()=>navigate('/National_Diabetes_Program/centerProfile')}/> */}
        </Group>  
        <Group>
          <Flex  gap={10} mx={'0.3rem'} justify={'end'} align={'end'}>
            {/* <ModePicker/> */}
            <Title c={'#37a9ef'} size="xl"  >
               {userName} 
            </Title>
            <Hospital color={'#37a9ef'}  size={25} />
          </Flex>
        
        <Burger
        lineSize={2}
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="md"
          color="#16aabb"
          // className={nav.burger}
        />    
        </Group>
       </Flex>
      </AppShell.Header>
      <AppShell.Navbar bg={'#F9FAFC'} py="md" pr='0px' w={{base:'60%',sm:'20%'}}>
  <Stack gap={'sm'} px={5} h={'100%'} style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
    <Box mt={'1.5rem'} display={'flex'}  style={{flexDirection:'column',gap:10}}>
      <Text p={10} dir="ltr" display={'flex'} c='#121212' fz={16} fw={600} ta='right'
        onClick={() => handleButtonClick('home')}
        className={` ${nav.hovered}  ${activeButton === 'home' ? nav.activeDrawer : ''}`} 
        style={{cursor:'pointer',justifyContent:'end',alignItems:'center'}}>
        الرئيسية
        <Image className={nav.img} src={home} w={27} h={25} ml={5} />
      </Text>
      <Text p={10} c='#121212' fz={16} fw={600} dir="ltr" display={'flex'} 
        onClick={() => handleButtonClick('patientMangement')} ta='right' 
        className={` ${nav.hovered} ${activeButton === 'patientMangement' ? nav.activeDrawer : ''}`} 
        style={{cursor:'pointer',justifyContent:'end',alignItems:'center'}}>
        ادارة المرضى
        <Image className={nav.img} src={patMang} w={25} h={25} ml={5} />
      </Text>
      <Text p={10} c='#121212' dir="ltr" fz={16} fw={600} display={'flex'} 
        onClick={() => handleButtonClick('medicinesMangemet')} ta='right' 
        className={` ${nav.hovered} ${activeButton === 'medicinesMangemet' ? nav.activeDrawer : ''}`} 
        style={{cursor:'pointer',justifyContent:'end',alignItems:'center'}}>
        إدارة الأدوية
        <Image className={nav.img} src={drugs} w={25} h={25} ml={5} />
      </Text>
      {/* <Text p={10} c='#121212' dir="ltr" fz={16} fw={600} display={'flex'} 
        onClick={() => handleButtonClick('statistics')} ta='right' 
        className={` ${nav.hovered} ${activeButton === 'statistics' ? nav.activeDrawer : ''}`} 
        style={{cursor:'pointer',justifyContent:'end',alignItems:'center'}}>
        الاحصائيات
        <Image className={nav.img} src={statistics} w={25} h={25} ml={5} />
      </Text> */}
      <Text p={10} c='#121212' fz={16} fw={600} dir="ltr" display={'flex'} 
        onClick={() => handleButtonClick('care')} ta='right' 
        className={` ${nav.hovered} ${activeButton === 'care' ? nav.activeDrawer : ''}`} 
        style={{cursor:'pointer',justifyContent:'end',alignItems:'center'}}>
        برامج الرعاية
        <Image className={nav.img} src={heart} w={25} h={25} ml={5} />
      </Text>
    </Box>

    <Box display={'flex'}  style={{flexDirection:'column',gap:10}}>
      <div style={{width:'100%',height:2,backgroundColor:'#00000030'}}></div>
      <Text p={10} c='#121212' fz={16} fw={600} dir="ltr" display={'flex'} 
        onClick={() => handleButtonClick('centerProfile')} ta='right' 
        className={` ${nav.hovered} ${activeButton === 'centerProfile' ? nav.activeDrawer : ''}`} 
        style={{cursor:'pointer',justifyContent:'end',alignItems:'center'}}>
        إعدادات الحساب
        <Image className={nav.img} src={settings} w={25} h={25} ml={5} />
      </Text>
      <Text p={10} c='#121212' fz={16} fw={600} dir="ltr" display={'flex'} 
        onClick={() => handleButtonClick('logOut')} ta='right' 
        className={` ${nav.hovered} ${activeButton === 'logOut' ? nav.activeDrawer : ''}`} 
        style={{cursor:'pointer',justifyContent:'end',alignItems:'center'}}>
        تسجيل الخروج
        <Image className={nav.img} src={logout} w={25} h={25} ml={5} />
      </Text>
    </Box>
  </Stack>
</AppShell.Navbar>
    </AppShell>    
      </>
      )
      :
      (
       <>
       <AppShell  mb={'4rem'} >
        
        <AppShell.Header p={10} w={'100%'}  bg={'#FFF'} >
          <Flex justify={'space-between'} align={'center'} pr={10}>
             <Image src={logo} w={45} pb={0}/>
             {/* <Group gap={15} align="center"> */}
              <NotifyNav notifications={notifications}/>
              
                {/* <ModePicker/> */}
             {/* </Group> */}
          </Flex>
        </AppShell.Header >
        <AppShell.Footer  p={9} w={'100%'} dir="ltr" bg={'#FFF'}  style={{borderTop:'1px solid #12121208'}}>
        <Flex px={'1rem'} justify={'space-between'} align={'center'}>
          
            <ProfileNav/>
            <NavIcon 
              icon={BriefcaseMedical} 
              name="health-care" 
              clickedButton={clickedButton} 
              handleButtonNavClick={handleButtonNavClick} 
              label='الرعاية الصحية'
            />
            {/* <div
              style={{padding:7,backgroundColor:`${clickedButton === 'camera' ? '#37a9ef': '#707070'}`,borderRadius:'50%'}}
              onClick={() => handleButtonNavClick('camera')}
            >
              <CameraIcon
                size={clickedButton==='camera' ? 48 : 42}
                strokeWidth={clickedButton==='camera' ? 1.8 : 1.6}
                color={clickedButton==='camera' ? '#fff' : '#fff' }
                
              />
            </div> */}
            <NavIcon 
              icon={BotMessageSquare} 
              name="medical-communication" 
              clickedButton={clickedButton} 
              handleButtonNavClick={handleButtonNavClick} 
              label={"AI دردشة "}
            /> 
             {/* <NavIcon 
             icon={ScanHeart} 
             name="analyzer-AI" 
             clickedButton={clickedButton} 
             handleButtonNavClick={handleButtonNavClick}
             label ='AI فحص'
           /> */}
            <NavIcon 
              icon={House} 
              name="patient-home" 
              clickedButton={clickedButton} 
              handleButtonNavClick={handleButtonNavClick} 
              label={'الرئيسية'}
            />
          </Flex>
        </AppShell.Footer>

       </AppShell>
      
          
    </>
      ) 
      :(
            <>
            </>
        )}
        </>
    );
}

export default NavBar;
