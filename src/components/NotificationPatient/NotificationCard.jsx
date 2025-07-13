import { Card, Flex, Title ,Text } from "@mantine/core"
import { BellIcon } from "lucide-react"
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
const NotificationCard = ({notification = {}}) => {

    const location = useLocation()
    const {message,is_read,created_at} = notification;
    const [click,setClick] = useState(is_read)

    const handleRead =()=>{
        if( location.pathname==='/National_Diabetes_Program/notification/' ){
           setClick(true) 
        }
    }

    return(
        <>
        <Card onClick={handleRead} p={10} radius={10}  bg={!click ? '#fff' : '#ececfc'} style={{boxShadow:'0 2px 7px #37a9ef23'}} >
            <Flex gap={10} justify={'end'} align={'start'}>
            <Text size={'md'} ta={'right'}>
               {message? message : ' ................المحتوى'}
            </Text>
            <BellIcon  size={20} fill={!click?'#000':'transparent'} />
            </Flex>
            <Text size="sm" ta={'left'}>
              {created_at ? created_at.split('T')[0] : ''}
            </Text>
        </Card>
        </>
    )
}
export default NotificationCard