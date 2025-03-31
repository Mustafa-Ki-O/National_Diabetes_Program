import { AppShell, Burger, Flex, Image, Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react"; // Import useState
import nav from '../../assets/css/nav.module.css';
import logo from '../../assets/images/diabetes.jpg'
import { useMantineTheme } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';
import { Navigate, useNavigate } from "react-router";
import { useLocation } from "react-router";
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
                        <Image src={logo}  w='6.4vw' onClick={()=>navigate('/National_Diabetes_Program/home')}/>
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
                        boxShadow: "0 1px 1px #00000060"
                    }}>
                    <Flex justify='space-between' align="center" px={70} >
                           <Image src={logo}  w='2.4vw' onClick={()=>navigate('/National_Diabetes_Program/home')}/>
                        <Flex gap='4.125vw' >     
                                <Text className={`${nav.button} ${activeButton === 'statistics' ? nav.active : ''}`} 
                                onClick={() => handleButtonClick('statistics')} c="#37a8ef" fz={18}>الاحصائيات</Text>
                                 <Text className={`${nav.button} ${activeButton === 'home' ? nav.active : ''}`}
                                onClick={() => handleButtonClick('home')} c="#37a8ef" fz={18}>الصفحة الرئيسية</Text>
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