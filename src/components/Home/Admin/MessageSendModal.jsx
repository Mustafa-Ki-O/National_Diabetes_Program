import { Button, Flex, Group, Modal, Text, Textarea, Title } from "@mantine/core"
import { MessageCirclePlus, PenLine } from "lucide-react"
import useSendNote from "../../../useMutation/Admin/useSendNote"
import { useEffect, useState } from "react"

const MessageSendModal = ({patientId,opened,close,setProgress}) => {

    const {sendNote,isPending}=useSendNote()
    const [message,setMessage] = useState('')
    
    const handleSend = ()=>{
        console.log(message)
        sendNote({
            receiver_id:patientId,
            message:message
    })
    close()
    }

    useEffect(()=>{
        setProgress(isPending)
    },[isPending])
    return(
    <>
     <Modal
            w={'100%'}
            style={{ position: "absolute", right: 0 }}
            opened={opened}
            onClose={close}
            radius={20}
            transitionProps={{ transition: 'fade', duration: 200 }}
            
          >
            <Title my={20} size={'xl'} ta={'center'}>
           <MessageCirclePlus size={20} />    مراسلة المريض 
            </Title>
            
            <Textarea
              size="xl"
              minRows={4}
              placeholder="مضمون الرسالة / الاشعار"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              radius={10}
              dir="rtl" 
              styles={{
                input: {
                  textAlign: 'right',
                },
              }}
            />
            <Flex my={20} dir={'rtl'} justify={'right'} align={'center'} >
                   <Flex gap={30} mt={30} w='100%' justify='space-between'>
                             <Button size="md" radius={10} fullWidth variant="filled" color="#37a8ef" onClick={handleSend}>
                             ارسال
                             </Button>
                             <Button size="md" radius={10} fullWidth variant="outline" color="#37a8ef" onClick={close}>
                               رجوع
                  </Button>
                </Flex>

            </Flex>
          </Modal>

    </>)
}
export default MessageSendModal