import { Flex, Group, Modal, Text, Title } from "@mantine/core"
import { PenLine } from "lucide-react"
const ViewDocModal = ({opened,close,item}) => {

   if (!item) return null; 
    return(
        <>
        <Modal
        w={'100%'}
        style={{ position: "absolute", right: 0 }}
        opened={opened}
        onClose={close}
        fullScreen
        radius={0}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        <Title my={20} size={'xl'}  ta={'right'}>
            {item.title}
        </Title>
        <Text size="md" ta={'right'}>
            {item.desc}
        </Text>
        <Flex my={20} dir={'rtl'} justify={'right'} align={'center'} >
                  <Title size="sm" ta={'right'}>
                  تم النشر في {item.createAt} بواسطة  :   
                </Title>
                 <Group display={'flex'} gap={5}>
                    <Title size="sm">{item.centerName}</Title>
                     <PenLine size={15} />
                 </Group>

        </Flex>
      </Modal>
        </>
    )
}
export default ViewDocModal