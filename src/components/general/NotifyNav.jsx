import { Popover, Text, Title, Stack, Group, Button, ActionIcon, Indicator } from "@mantine/core";
import { useState } from "react";
import { BellIcon } from "lucide-react";
import { useNavigate, useLocation } from "react-router";
import NotificationCard from "../NotificationPatient/NotificationCard";

const NotifyNav = ({ notifications }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isInNotify = location.pathname === "/National_Diabetes_Program/notification/";

  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(false); // ⛔️ اغلاق الـ Popover
    navigate("/National_Diabetes_Program/notification/");
  };

  const isNotReadNotify = notifications.filter((n)=>n.is_read===false);

  return (
    <Popover
      width={"70%"}
      position="bottom"
      withArrow
      shadow="md"
      opened={opened}
      onChange={setOpened}
    >
      <Popover.Target>
        
          <Indicator disabled={!isNotReadNotify || isNotReadNotify.length===0} inline color="red" label={isNotReadNotify.length} 
          position="top-end" size={18} mt={11}
          radius="xl">


            <BellIcon  fill={isInNotify ? "#37a9ef" : "#fff"} size={22} color="#37a9ef" onClick={() => setOpened((o) => !o)}/>
          
        </Indicator>
      </Popover.Target>

      <Popover.Dropdown>
        <Stack gap={5}>
          {notifications.slice(0, 3).map((notification, idx) => (
            <NotificationCard key={idx} notification={notification} />
          ))}
          <Button radius={10} mt={10} variant="light" fullWidth onClick={handleClick}>
            عرض الكل
          </Button>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
};

export default NotifyNav;
