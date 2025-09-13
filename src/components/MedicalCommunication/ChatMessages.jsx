import { Button, Flex, Stack, Text, TextInput,Group, Card, Title, Center } from "@mantine/core"
import { Bot, HandIcon, SendHorizonal, SendIcon } from "lucide-react"
import { useEffect, useState } from "react"
import usePostMsg from "../../useMutation/Patient/usePostMsg"

const ChatMessages = () =>{

    const [firstMsg,setFirstMsg] = useState(false)
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
        const fullMessage = `${message}`;
        setSentMsg(fullMessage);
        postMsg(fullMessage);
        setFirstMsg(true)
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

    // console.log(sendMsgs)
    
    return(
        <>
        <Stack pos={'relative'}>
        <Group  h={'80vh'}  p={5} display={'flex'} style={{flexDirection:'column',flexWrap:'none'}} align="right" justify="space-between" >
            <Stack h={'100%'} pb={'4rem'} style={{overflow:'auto',borderRadius:20}} m={5}
            //   bd={'1px solid #37a9ef'} 
              >
            {sendMsgs.length > 0 && sendMsgs.map((msg,index)=>(
                <Card p={5} radius="md" key={index}  shadow="sm" bg={'#16aabb20'}  >
                     <Text  ta={'right'} p={5} size="xl" >
                   {msg} 
               </Text>
                </Card>
               

            ))  
            }
            {!firstMsg && (
                <>
                <Center mt={'10rem'}>
                    <Stack>

                    <Flex justify={'center'} align={'center'} gap={'sm'}>
                        <Bot size={35} color={'#16aabb'} />
                       <Title ta={'right'} p={5} size="xl" c={'#16aabb'}>
                          أهلا بك ! ما سؤالُك ؟
                    </Title>
                    </Flex>
                 <Text ta={'center'} p={5} size="lg" >
                      قم بطرح السؤال او الاستشارة التي تريدها
                 </Text>
                 </Stack>
                </Center>
               
                </>
            )}
            {response && (
            <Text ta={'right'} p={5} size="lg" bg={'#E7EEF3'} style={{borderRadius:8}}>
                {sentMsg} 
            </Text>
            )}
            </Stack>
                </Group>
          
                {/* <Flex > */}
                <Stack
                
                pt={10}  px={5} w={'95%'} pos={'fixed'} bottom={'1%'} 
                
                style={{borderTop:'1px solid #12121240',borderRadius:15,boxShadow:'0px -10px 14px #12121206'}}
                bg={'#F9FAFC'} gap={10} justify={'space-between'} align={'flex-start'}>
                 <TextInput
                  variant="unstyled"
                  w={'100%'}
                  dir="rtl"
                  placeholder="سؤال /استشارة"
                  size="lg"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  radius={10}
                  styles={{
                    input: {
                      backgroundColor: '#F9FAFC',
                    },
                  }}
                />
                 <Button leftSection={<SendHorizonal  size={30} color="#37a9ef" />} dir="ltr" onClick={handleSubmit} variant="subtle" color="#E7EEF3" 
                   size="md" radius={10} style={{paddingInline:0}} />
                    
               
                </Stack>
               
                
                
            {/* </Flex> */}
            
        </Stack>
        </>
    )
}
export default ChatMessages