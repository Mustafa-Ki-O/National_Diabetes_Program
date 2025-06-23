import { Button, Flex, Stack, Text, TextInput,Group } from "@mantine/core"
import { SendHorizonal, SendIcon } from "lucide-react"
import { useEffect, useState } from "react"
import usePostMsg from "../../useMutation/Patient/usePostMsg"

const ChatMessages = () =>{

    const [userInfo,setUserInfo] = useState({
        userId:'',
        userName:''
    })
    const [message,setMessage] = useState()
    const [sentMsg,setSentMsg] = useState()
    const [sendMsgs,setSendMsgs] = useState([])
    const [response,setResponse] = useState('')
    
    const {postMsg,isPending} = usePostMsg()
    
    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUserInfo({
                userId: user.id,
                userName: user.name
            });
        }
    }, []); 
    
    const handleSubmit = () => {
    if (message && userInfo.userId) { 
        const fullMessage = `مرحبا أنا المستخدم رقمي الخاص هو ${userInfo.userId} واسمي هو ${userInfo.userName}, مضمون الرسالة هو: ${message}`;
        setSentMsg(fullMessage);
        postMsg(fullMessage);
        setMessage('');
    }
};
    

    useEffect(()=>{
        if(sentMsg){
          setSendMsgs((prev)=>([
            ...prev,
            sentMsg
        ]))
    }
    },[sentMsg])

    console.log(sendMsgs)
    
    return(
        <>
        <Stack pos={'relative'}>
        <Group  h={'80vh'}  p={5} display={'flex'} style={{flexDirection:'column',flexWrap:'none'}} align="right" justify="space-between" >
            <Stack h={'100%'} pb={'4rem'} style={{overflow:'auto',borderRadius:20}} m={5}  bd={'2px solid #37a9ef'} >
            {sendMsgs.length > 0 && sendMsgs.map((msg,index)=>(
                <Text key={index} ta={'right'} p={5} size="lg" bg={'#16aabb60'} style={{borderRadius:8}}>
                   {msg} 
               </Text>

            ))  
            }
            
            {response && (
            <Text ta={'right'} p={5} size="lg" bg={'#E7EEF3'} style={{borderRadius:8}}>
                {sentMsg} 
            </Text>
            )}
            </Stack>
                </Group>

            <Flex pt={10}  px={5} w={'95%'} pos={'fixed'} bottom={'1%'} 
            style={{borderTop:'1px solid #70707040'}} bg={'#F9FAFC'} gap={10} justify={'space-between'} align={'center'}>
                <Button dir="ltr" onClick={handleSubmit} variant="filled" color="#E7EEF3"  miw={'2.6rem'} size="md" radius={10} style={{paddingInline:0}}>
                    <SendHorizonal  size={25} color="#37a9ef" />
                </Button>
                <TextInput
                  variant="filled"
                  w={'100%'}
                  dir="rtl"
                  placeholder="سؤال /استشارة"
                  size="md"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  radius={10}
                  styles={{
                    input: {
                      backgroundColor: '#E7EEF3',
                    },
                  }}
                />
                
            </Flex>
    
        </Stack>
        </>
    )
}
export default ChatMessages