import { AppShell, Burger, Flex,Group, Image, Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react"; // Import useState
import nav from '../../assets/css/nav.module.css';
import logo from '../../assets/images/logo.svg';
import { useMantineTheme } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';
import { Navigate, useNavigate } from "react-router";
import { useLocation } from "react-router";
import profile from '../../assets/vectors/admin.svg'
import statistics from '../../assets/vectors/chart.png'
import home from '../../assets/vectors/home.svg'
const NavBar = () => {
    const location = useLocation();
    const theme= useMantineTheme();
    const [activeButton, setActiveButton] = useState('home');
    // const [opened, { toggle }] = useDisclosure();
    const [openBurger,setOpenBurger] = useState(false);
    const [opened, { toggle }] = useDisclosure();
    const navigate= useNavigate()
    const handleButtonClick = (button) => {
        setActiveButton(button);
        navigate(`/National_Diabetes_Program/${button}`)
    };

    const handleBurger = () => {
        setOpenBurger(!openBurger);
    }

    useEffect(() => {
        if (openBurger) {
            open();
        }
    }, [openBurger]);

    // useEffect(()=>{
    //     if(!openedDrawer){
    //       setOpenBurger(openedDrawer);
    //     }
    // },[ openedDrawer])

    return (
        <>
        {(location.pathname !== '/National_Diabetes_Program/' 
        && location.pathname !== '/National_Diabetes_Program/register/'
        && location.pathname !== '/National_Diabetes_Program/registerAdmin/'
        && location.pathname !== '/National_Diabetes_Program/verifyEmail/') ?(
    <>
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
            <AppShell.Header dir="ltr">
            <Flex h="100%" px="0.2rem" justify='space-between' align={'center'}>
                <Group align="center" gap={40}>
                <Image ml={30} src={logo} style={{cursor:'pointer'}} w='2.5rem' onClick={()=>navigate('/National_Diabetes_Program/home')}/>
                <Image src={profile} w='1.7rem' style={{cursor:'pointer',border:'1px solid #000',borderRadius:'50%'}} onClick={()=>navigate('/National_Diabetes_Program/centerProfile')}/>
        </Group>  
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />    
       </Flex>
      </AppShell.Header>
      <AppShell.Navbar py="md" pr='md' w={{base:'60%',sm:'20%'}}>
      <Stack gap={'lg'} mt={20} >
        {/* <Flex gap={10} justify={'space-between'}> */}
        <Text dir="ltr"  display={'flex'}  c='#37a8ef' fz={22} ta='right'
                onClick={() => handleButtonClick('home')}
                className={`${activeButton === 'home' ? nav.activeDrawer : ''}`} style={{cursor:'pointer',justifyContent:'end',alignItems:'center'}}>
                    الرئيسية
                    <Image src={home} w={27} h={25} ml={5}/>
                    </Text>
         
        {/* </Flex> */}
                
                <Text c='#37a8ef' fz={22} dir="ltr"  display={'flex'} 
                onClick={() => handleButtonClick('statistics')}  ta='right' className={`${activeButton === 'statistics' ? nav.activeDrawer : ''}`} 
                style={{cursor:'pointer',justifyContent:'end',alignItems:'center'}}>
                    الاحصائيات
                    <Image src={statistics} w={20} h={20} ml={5}/>
                    </Text>
           
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