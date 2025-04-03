import { AppShell, Burger, Flex, Image, Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react"; // Import useState
import nav from '../../assets/css/nav.module.css';
import logo from '../../assets/images/logo.svg';
import { useMantineTheme } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';
import { Navigate, useNavigate } from "react-router";
import { useLocation } from "react-router";
import profile from '../../assets/vectors/profile.svg'
const NavBar = () => {
    const location = useLocation();
    const theme= useMantineTheme();
    const [activeButton, setActiveButton] = useState('home');
    // const [opened, { toggle }] = useDisclosure();
    const [openBurger,setOpenBurger] = useState(false);
    const [openedDrawer, { open,close }] = useDisclosure(false);
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

    useEffect(()=>{
        if(!openedDrawer){
          setOpenBurger(openedDrawer);
        }
    },[ openedDrawer])

    return (
        <>
        {(location.pathname !== '/National_Diabetes_Program/' 
        && location.pathname !== '/National_Diabetes_Program/register/'
        && location.pathname !== '/National_Diabetes_Program/registerAdmin/'
        && location.pathname !== '/National_Diabetes_Program/verifyEmail/') ?(
            <>
            

        <AppShell navbar={{ width: '100%'}}  mb='25vw' hiddenFrom="md">
            
                <AppShell.Navbar
                    bg='#F9FAFC'
                    h='auto'
                    px='lg'
                    py='xs'
                    style={{
                        boxShadow: "0px 1px 1px  #0000006"
                    }}>
                    <Flex justify='space-between' align="center">
                        <Image src={profile}  style={{cursor:'pointer',border:'1px solid #000',borderRadius:'50%'}} w='9vw' onClick={()=>navigate('/National_Diabetes_Program/centerProfile')}/>
                        <Burger color='#37a8ef' lineSize={3} size="md" opened={openBurger} onClick={handleBurger} />
                    </Flex>
                </AppShell.Navbar>
            </AppShell>
        <Drawer size={window.innerWidth / 1.6}  opened={openedDrawer} onClose={close} style={{position:'absolute',left:0}}  overlayProps={{ backgroundOpacity: 0.2, blur: 15 }}>
           <Stack >
                    <Text c='#37a8ef' size="xl"  ta='right'
                    onClick={() => handleButtonClick('home')}
                    className={`${activeButton === 'home' ? nav.activeDrawer : ''}`} >الرئيسية</Text>
                    <Text c='#37a8ef' size="xl" 
                    onClick={() => handleButtonClick('statistics')}  ta='right' className={`${activeButton === 'statistics' ? nav.activeDrawer : ''}`} >الاحصائيات</Text>
           </Stack>
        </Drawer>
            <AppShell navbar={{ width: '100%'}}  mb='9.75vw' visibleFrom="md">
                <AppShell.Navbar
                    bg='#F9FAFC'
                    h='auto'
                    // px='1vw'
                    py='1vw'
                    style={{
                        boxShadow: "0 1px 1px #00000010"
                    }}>
                    <Flex justify='space-between' align="center" px={70} >
                           <Image style={{cursor:'pointer',border:'1px solid #000',borderRadius:'50%'}} src={profile}  w='3vw' onClick={()=>navigate('/National_Diabetes_Program/centerProfile')}/>
                        <Flex mt={5} gap='4.125vw' justify='end' align='center'>     
                                <Text className={`${nav.button} ${activeButton === 'statistics' ? nav.active : ''}`} 
                                onClick={() => handleButtonClick('statistics')} c="#37a8ef" fz={18} style={{cursor:'pointer'}}>الاحصائيات</Text>
                                 <Text className={`${nav.button} ${activeButton === 'home' ? nav.active : ''}`}
                                onClick={() => handleButtonClick('home')} c="#37a8ef" fz={18} style={{cursor:'pointer'}} mr={50}>الصفحة الرئيسية</Text>
                               <Image ml={30} src={logo}  w='4vw' onClick={()=>navigate('/National_Diabetes_Program/home')}/>
                        </Flex>
                        
                    </Flex>
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