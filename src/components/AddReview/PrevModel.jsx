import { Button, Flex, Modal,Stack,Text} from "@mantine/core"
import { useNavigate } from "react-router";
const PrevModel = ({id,opened,close}) => {
 
  const navigate = useNavigate()

    const handlePrev = () =>{

        navigate(`/National_Diabetes_Program/patientInfo/${id}/`)
        close();
      
      }

    return(
        <>
        <Modal
        // zIndex={100}
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
          <Text size="md" fw={700} c="#00000065" ta="center">
            ستفقد جميع البيانات في هذه الصفحة عند العودة
          </Text>
          <Flex gap={30} mt={30} w='100%' justify='space-between'>
           <Button size="md" radius={10} fullWidth variant="filled" color="#37A9EF" onClick={handlePrev}>
             تأكيد
           </Button>
           <Button size="md" radius={10} fullWidth variant="outline" color="#37A9EF" onClick={close}>
              تراجع
           </Button>
          </Flex>
        </Stack>
      </Modal>
        </>
    )


}
export default PrevModel