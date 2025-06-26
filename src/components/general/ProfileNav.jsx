import { Popover, Text, Title, Stack, Group, Button, ActionIcon, Indicator } from "@mantine/core";
import { useState } from "react";
import { CircleUserRound, LogOutIcon } from "lucide-react";
import { useNavigate, useLocation } from "react-router";

const ProfileNav = () => {

     const navigate = useNavigate();

    
      const [opened, setOpened] = useState(false);
    
      const handleLogOut = () => {
        setOpened(false); 
        localStorage.clear()
        navigate("/National_Diabetes_Program/");
       
      };
    

    return(
        <>
        <Popover
              width={"auto"}
              position="bottom"
              shadow="md"
              opened={opened}
              onChange={setOpened}
            >
              <Popover.Target>
                
                  <Indicator disabled={!opened} inline color="#16aabb" 
                  position="top-end" size={12} mt={5}
                  radius="xl">
        
        
                   <CircleUserRound strokeWidth={1.5} size={34} color="#37a9ef" style={{cursor:'pointer'}} onClick={() => setOpened((o) => !o)} />
                  
                </Indicator>
              </Popover.Target>
        
              <Popover.Dropdown>
                <Stack gap={5}>
                  <Button leftSection={<LogOutIcon size={15} />} radius={10} mt={10} variant="subtle" c={'#707070'} onClick={handleLogOut} >
                    تسجيل الخروج
                  </Button>
                </Stack>
              </Popover.Dropdown>
            </Popover>
        </>
    )
}
export default ProfileNav