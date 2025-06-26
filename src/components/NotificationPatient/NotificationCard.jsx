import { Card, Flex, Title ,Text } from "@mantine/core"
import { BellIcon } from "lucide-react"

const NotificationCard = ({notification = {}}) => {

    const {message,is_read,create_at} = notification;

    return(
        <>
        <Card p={10} radius={10}  bg={!is_read ? '#fff' : '#fcfcfc'} style={{boxShadow:'0 2px 7px #37a9ef33'}} >
            <Flex gap={10} justify={'end'} align={'start'}>
            <Text size={'md'} ta={'right'}>
               {message? message : ' ................المحتوى'}
            </Text>
            <BellIcon  size={20} fill />
            </Flex>
            <Text size="sm" ta={'left'}>
                {create_at ? create_at : '1-1-2022'}
            </Text>
        </Card>
        </>
    )
}
export default NotificationCard