import { Popover, Text, Title, Stack, Group, Button, ActionIcon, Indicator, Divider } from "@mantine/core";
import { useState } from "react";
import { CircleUserRound, LogOutIcon, Settings } from "lucide-react";
import { useNavigate, useLocation } from "react-router";

const ProfileNav = () => {

     const navigate = useNavigate();

     const location = useLocation();
      // const [opened, setOpened] = useState(false);
    

      const handleNavigate = () =>{
        navigate('/National_Diabetes_Program/settings/');
        // setOpened(false); 
      }
    
      const isActive = location.pathname.includes('settings')

    return(
        <>
        {/* <Popover
              width={"auto"}
              position="bottom"
              shadow="md"
              opened={opened}
              onChange={setOpened}
            >
              <Popover.Target> */}
               <Indicator disabled={!isActive} inline color="#16aabb" 
                  position="top-end" size={12} 
                  radius="xl">
                <div  style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',margin:0}}>
                 
                    {/* <Stack gap={0}> */}
                   <CircleUserRound 
                   onClick={handleNavigate} 
                   size={isActive ? 38 : 32}
                   strokeWidth={isActive ? 1.8 : 1.6}
                   color={isActive ? '#37a9ef' : '#707070'}
                    style={{cursor:'pointer'}}  />
                    <Text
                  size={isActive ? 'sm' : 'xs'}
                 
                 c={isActive ? '#37a9ef' : '#707070'}
                 >
                  الحساب
                 </Text>
                   {/* </Stack> */}
                </div>
                </Indicator>
              {/* </Popover.Target>
        
              <Popover.Dropdown>
                <Stack gap={8} align="end">
                   <Button rightSection={<Settings size={20} />} radius={10} variant="subtle" c={'#707070'} onClick={handleNavigate} >
                    إعدادات الحساب
                  </Button>
                  <Divider w={'90%'} m={'auto'} mt={8}/>
                  <Button rightSection={<LogOutIcon size={20} />} radius={10} variant="subtle" c={'#707070'} onClick={handleLogOut} >
                    تسجيل الخروج
                  </Button>
                </Stack>
              </Popover.Dropdown>
            </Popover> */}
        </>
    )
}
export default ProfileNav