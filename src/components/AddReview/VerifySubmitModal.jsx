import { Button, Flex, Modal,Stack,Text, Title ,Checkbox} from "@mantine/core"
import { useNavigate } from "react-router";
import useAddReview from "../../useMutation/Admin/useAddReview";
import { useEffect, useState } from "react";
const VerifySubmitModal = ({id,opened,close,reviewData,setProgress,setDownload}) =>{
 const navigate = useNavigate()
 const {addReview,isPending} = useAddReview(id);

 const [checkedc,setCheckedc] = useState(false)
    const handleVerify = () =>{
      
        addReview(reviewData)
        if(checkedc){
          setDownload(true);     
        }
        setCheckedc(false)
        close();
      }

    useEffect(()=>{
            setProgress(isPending);
     },[isPending])

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
            <Title size={'lg'} fw={'bold'} >تأكيد المراجعة</Title>
          <Text size="md" fw={700} c="#00000065" ta="center">
            هل انت واثق من معلومات المراجعة ؟
            
          </Text>
          <Checkbox
                          size="md"
                          // indeterminate
                          // variant="filled"
                          fw={600}
                          label="تحميل نسخة إلكترونية من المراجعة"
                          checked={checkedc}
                          onChange={(e) => setCheckedc(e.currentTarget.checked)} 
                        />
          <Flex gap={30} mt={30} w='100%' justify='space-between'>
           <Button size="md" radius={10} fullWidth variant="filled" color="#37A9EF" onClick={handleVerify}>
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
export default VerifySubmitModal