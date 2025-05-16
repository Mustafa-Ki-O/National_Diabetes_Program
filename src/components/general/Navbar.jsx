import { AppShell, Box, Burger, Flex,Group, Image, Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react"; // Import useState
import nav from '../../assets/css/nav.module.css';
import logo from '../../assets/images/NDBLogo.svg';
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
const NavBar = () => {
    const [openedModal, { open, close }] = useDisclosure(false);
    const location = useLocation();
    const theme= useMantineTheme();
    const [activeButton, setActiveButton] = useState('home');
    // const [opened, { toggle }] = useDisclosure();
    // const [openBurger,setOpenBurger] = useState(false);
    const [opened, { toggle }] = useDisclosure();
    const navigate= useNavigate()
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

    // const handleBurger = () => {
    //     setOpenBurger(!openBurger);
    // }

    // useEffect(() => {
    //     if (openBurger) {
    //         open();
    //     }
    // }, [openBurger]);


    return (
        <>
        {(location.pathname !== '/National_Diabetes_Program/' 
        && location.pathname !== '/National_Diabetes_Program/register/'
        && location.pathname !== '/National_Diabetes_Program/registerAdmin/'
        && location.pathname !== '/National_Diabetes_Program/verifyEmail/') ?(
    <>
    <LogOutModal opened={openedModal} close={close} />
        <AppShell header={{ height: 60 }}
           dir="rtl"
           navbar={{
             width: 300,
             breakpoint: 'sm',
             collapsed: { mobile: !opened },   
             }}
             mb={'5.1rem'}
             padding="md"
             
            >
            <AppShell.Header dir="ltr" bg={'#F9FAFC'}>
            <Flex mx={'0.7rem'} h="100%" px="0.2rem" justify='space-between' align={'center'}>
                <Group align="center" gap={30}>
                <Image ml={3} mb={5}  src={logo} style={{cursor:'pointer'}} w='6.5rem' onClick={()=>navigate('/National_Diabetes_Program/home')}/>
                {/* <Image src={profile} w='1.7rem' style={{cursor:'pointer',border:'1px solid #000',borderRadius:'50%'}} onClick={()=>navigate('/National_Diabetes_Program/centerProfile')}/> */}
        </Group>  
        <Burger
        lineSize={2}
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="md"
        //   className={nav.burger}
        />    
       </Flex>
      </AppShell.Header>
      <AppShell.Navbar bg={'#F9FAFC'} py="md" pr='0px' w={{base:'60%',sm:'20%'}}>
      <Stack gap={'sm'} mt={20} px={5}  >
        {/* <Flex gap={10} justify={'space-between'}> */}
               <Text  p={10} dir="ltr"  display={'flex'}  c='#121212'  fz={16} fw={600} ta='right'
                    onClick={() => handleButtonClick('home')}
                     className={` ${nav.hovered}  ${activeButton === 'home' ? nav.activeDrawer : ''}`} style={{cursor:'pointer',justifyContent:'end',alignItems:'center'}}>
                           الرئيسية
                    <Image className={nav.img} src={home} w={27} h={25} ml={5} />
                </Text>
                <Text p={10} c='#121212' fz={16} fw={600}  dir="ltr"  display={'flex'} 
                onClick={() => handleButtonClick('patientMangement')}  ta='right' className={` ${nav.hovered}   ${activeButton === 'patientMangement' ? nav.activeDrawer : ''}`} 
                style={{cursor:'pointer',justifyContent:'end',alignItems:'center'}}>
                   ادارة المرضى
                    <Image  className={nav.img} src={patMang} w={25} h={25} ml={5} />
                </Text>
                
                 <Text p={10} c='#121212'  dir="ltr"  fz={16} fw={600}  display={'flex'} 
                onClick={() => handleButtonClick('medicinesMangemet')}  ta='right' className={` ${nav.hovered}   ${activeButton === 'medicinesMangemet' ? nav.activeDrawer : ''}`} 
                style={{cursor:'pointer',justifyContent:'end',alignItems:'center'}}>
                    إدارة الأدوية
                    <Image  className={nav.img} src={drugs} w={25} h={25} ml={5} />
                </Text>
                <Text p={10} c='#121212'  dir="ltr"  fz={16} fw={600}  display={'flex'} 
                onClick={() => handleButtonClick('statistics')}  ta='right' className={` ${nav.hovered}   ${activeButton === 'statistics' ? nav.activeDrawer : ''}`} 
                style={{cursor:'pointer',justifyContent:'end',alignItems:'center'}}>
                    الاحصائيات
                    <Image  className={nav.img} src={statistics} w={25} h={25} ml={5} />
                </Text>
                <Text p={10} c='#121212' fz={16} fw={600}  dir="ltr"  display={'flex'} 
                onClick={() => handleButtonClick('care')}  ta='right' className={` ${nav.hovered}   ${activeButton === 'care' ? nav.activeDrawer : ''}`} 
                style={{cursor:'pointer',justifyContent:'end',alignItems:'center'}}>
                   برامج الرعاية
                    <Image  className={nav.img} src={heart} w={25} h={25} ml={5} />
                </Text>
                <Stack p={0} mt={'50%'}>
                    <div style={{width:'100%',height:2,backgroundColor:'#00000030'}}></div>
                <Text p={10} c='#121212' fz={16} fw={600}  dir="ltr"  display={'flex'} 
                onClick={() => handleButtonClick('centerProfile')}  ta='right' className={` ${nav.hovered}  ${activeButton === 'centerProfile' ? nav.activeDrawer : ''}`} 
                style={{cursor:'pointer',justifyContent:'end',alignItems:'center'}}>
                    إعدادات الحساب
                    <Image  className={nav.img} src={settings} w={25} h={25} ml={5} />
                </Text>
                 <Text p={10} c='#121212' fz={16} fw={600}  dir="ltr"  display={'flex'} 
                onClick={() => handleButtonClick('logOut')}  ta='right' className={` ${nav.hovered}  ${activeButton === 'logOut' ? nav.activeDrawer : ''}`} 
                style={{cursor:'pointer',justifyContent:'end',alignItems:'center'}}>
                   تسجيل الخروج
                    <Image  className={nav.img} src={logout} w={25} h={25} ml={5} />
                </Text>
                </Stack>
           </Stack>
      </AppShell.Navbar>
    </AppShell>    
    </>
        ):(
            <></>
        )}
        </>
    );
}

export default NavBar;




// 
// import { AppShell, Burger, Flex, Image, Stack, Text } from "@mantine/core";
// import { useEffect, useState } from "react"; // Import useState
// import nav from '../../assets/css/nav.module.css';
// import logo from '../../assets/images/logo.svg';
// import { useMantineTheme } from "@mantine/core";
// import { useDisclosure } from '@mantine/hooks';
// import { Drawer, Button } from '@mantine/core';
// import { Navigate, useNavigate } from "react-router";
// import { useLocation } from "react-router";
// import profile from '../../assets/vectors/admin.svg'
// const NavBar = () => {
//     const location = useLocation();
//     const theme= useMantineTheme();
//     const [activeButton, setActiveButton] = useState('home');
//     // const [opened, { toggle }] = useDisclosure();
//     const [openBurger,setOpenBurger] = useState(false);
//     const [openedDrawer, { open,close }] = useDisclosure(false);
//     const navigate= useNavigate()
//     const handleButtonClick = (button) => {
//         setActiveButton(button);
//         navigate(`/National_Diabetes_Program/${button}`)
//     };

//     const handleBurger = () => {
//         setOpenBurger(!openBurger);
//     }

//     useEffect(() => {
//         if (openBurger) {
//             open();
//         }
//     }, [openBurger]);

//     useEffect(()=>{
//         if(!openedDrawer){
//           setOpenBurger(openedDrawer);
//         }
//     },[ openedDrawer])

//     return (
//         <>
//         {(location.pathname !== '/National_Diabetes_Program/' 
//         && location.pathname !== '/National_Diabetes_Program/register/'
//         && location.pathname !== '/National_Diabetes_Program/registerAdmin/'
//         && location.pathname !== '/National_Diabetes_Program/verifyEmail/') ?(
//             <>
            

//         <AppShell  navbar={{ width: '100%'}}  mb='25vw' hiddenFrom="md">
            
//                 <AppShell.Navbar
//                     bg='#F9FAFC'
//                     h='auto'
//                     px='lg'
//                     py='xs'
//                     style={{
//                         boxShadow: "0px 1px 1px  #0000006"
//                     }}>
//                     <Flex justify='space-between' align="center">
//                         <Image src={profile}  style={{cursor:'pointer',border:'1px solid #000',borderRadius:'50%'}} w='9vw' onClick={()=>navigate('/National_Diabetes_Program/centerProfile')}/>
//                         <Burger color='#37a8ef' lineSize={3} size="md" opened={openBurger} onClick={handleBurger} />
//                     </Flex>
//                 </AppShell.Navbar>
//             </AppShell>
//         <Drawer size={window.innerWidth / 1.6}  opened={openedDrawer} onClose={close} style={{position:'absolute',left:0}}  overlayProps={{ backgroundOpacity: 0.2, blur: 15 }}>
//            <Stack >
//                     <Text c='#37a8ef' size="xl"  ta='right'
//                     onClick={() => handleButtonClick('home')}
//                     className={`${activeButton === 'home' ? nav.activeDrawer : ''}`} >الرئيسية</Text>
//                     <Text c='#37a8ef' size="xl" 
//                     onClick={() => handleButtonClick('statistics')}  ta='right' className={`${activeButton === 'statistics' ? nav.activeDrawer : ''}`} >الاحصائيات</Text>
//            </Stack>
//         </Drawer>
//             <AppShell navbar={{ width: '100%'}}  mb='9.75vw' visibleFrom="md">
//                 <AppShell.Navbar
//                     bg='#F9FAFC'
//                     h='auto'
//                     // px='1vw'
//                     py='1vw'
//                     style={{
//                         boxShadow: "0 1px 1px #00000010"
//                     }}>
//                     <Flex justify='space-between' align="center" px={70} >
//                            <Image style={{cursor:'pointer',border:'1px solid #000',borderRadius:'50%'}} src={profile}  w='3vw' onClick={()=>navigate('/National_Diabetes_Program/centerProfile')}/>
//                         <Flex mt={5} gap='4.125vw' justify='end' align='center'>     
//                                 <Text className={`${nav.button} ${activeButton === 'statistics' ? nav.active : ''}`} 
//                                 onClick={() => handleButtonClick('statistics')} c="#37a8ef" fz={18} style={{cursor:'pointer'}}>الاحصائيات</Text>
//                                  <Text className={`${nav.button} ${activeButton === 'home' ? nav.active : ''}`}
//                                 onClick={() => handleButtonClick('home')} c="#37a8ef" fz={18} style={{cursor:'pointer'}} mr={50}>الصفحة الرئيسية</Text>
//                                <Image ml={30} src={logo}  w='4vw' onClick={()=>navigate('/National_Diabetes_Program/home')}/>
//                         </Flex>
                        
//                     </Flex>
//                 </AppShell.Navbar>
//             </AppShell>
//             </>
//         ):(
//             <></>
//         )}
//         </>
//     );
// }

// export default NavBar;