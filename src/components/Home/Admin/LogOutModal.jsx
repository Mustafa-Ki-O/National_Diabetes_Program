import { Button, Flex, Grid, Modal,Stack,Text, Title,Select } from "@mantine/core"
// import { notifications } from "@mantine/notifications";
import useLogOut from "../../../useMutation/Admin/useLogOut";

const LogOutModal = ({opened,close}) =>{
const{logOut,isPending} = useLogOut();

    const handleLogout =()=> {
        logOut()
    }
    return(
        <>
         <Modal
                w="100%"
                radius={20}
                opened={opened}
                onClose={close}
                centered
                overlayProps={{
                  backgroundOpacity: 0.55,
                  blur: 2,
                }}
                style={{ position: "absolute", right: 0 }}
              >
                <Stack pb={50} dir="rtl" className="modal" w="70%" m="auto" gap={15}>
                  <Title order={3} fw={900} ta="center">
                    تسجيل الخروج
                  </Title>
                  <Text ta={'center'} size='md' c={'#8e8e8e96'} fw={'500'} >
                    هل ترغب في تسجيل الخروج ؟
                  </Text>
                  <Flex gap={30} mt={30} w='100%' justify='space-between'>
                   <Button size="md" radius={10} fullWidth variant="filled" color="#E53935" onClick={handleLogout} >
                     مغادرة
                   </Button>
                   <Button size="md" radius={10} fullWidth variant="outline" color="#E53935" onClick={close}>
                      تراجع
                   </Button>
                  </Flex>
                </Stack>
              </Modal>
        </>
    )
}
export default LogOutModal