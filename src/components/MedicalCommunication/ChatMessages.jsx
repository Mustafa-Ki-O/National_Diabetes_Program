import {
  Button,
  Flex,
  Stack,
  Text,
  TextInput,
  Group,
  Card,
  Title,
  Center,
  Loader,
} from "@mantine/core";
import { Bot, SendHorizonal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import usePostMsg from "../../useMutation/Patient/usePostMsg";

const ChatMessages = () => {
  const [firstMsg, setFirstMsg] = useState(false);
  // const [userInfo, setUserInfo] = useState({
  //   userId: "",
  //   userName: "",
  // });
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]); // كل الرسائل
  const [timer, setTimer] = useState(false);
  // const [response,setResponse] = useState('')
  const { postMsg ,isPending} = usePostMsg();

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   if (user) {
  //     setUserInfo({
  //       userId: user.id,
  //       userName: user.name,
  //     });
  //   }
  // }, []);

         const handleSubmit = async () => {
  if (message) {
    const userMsg = { role: "user", text: message };
    setMessages((prev) => [...prev, userMsg]);
    setMessage("");
    setFirstMsg(true);

    try {
      // شغل اللودر
      setTimer(true);
      console.log('timer1 : ',timer)

      const response = await postMsg({"question":message});

      // طفي اللودر
      setTimer(false);

       console.log('timer2 : ',timer)
      if (response) {
        const botMsg = { role: "bot", text: response.answer };
        setMessages((prev) => [...prev, botMsg]);
      }
    } catch (error) {
         const errorMsg = { role: "error", text: "هناك خطأ ما عاود لاحقا" };
         setMessages((prev) => [...prev, errorMsg]);
      console.error("Error fetching bot response:", error);
     setTimer(false);
    }
     
  }
};
         
  const messagesEndRef = useRef(null);

  // Scroll تلقائي لآخر رسالة
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);



  return (
    <>
         <Stack h="auto" mih={'80vh'}  pos={'relative'}>
      {/* الرسائل */}
      <Stack
      
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "1rem",
        }}
      >
        {messages.map((msg, index) => (
          <Card
            key={index}
            p={5}
            radius="md"
            shadow="sm"
            w="70%"
            bg={
              msg.role === "user"
                ? "#16aabb20"
                : msg.role === "bot"
                ? "#E7EEF3"
                : "#ee101010"
            }
            style={{
              borderRadius:
                msg.role === "user"
                  ? "15px 0px 15px 15px"
                  : "0px 15px 15px 20px",
              alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
            }}
          >
            <Text
              ta="right"
              p={5}
              size="lg"
              c={msg.role === "error" ? "red" : "black"}
            >
              {msg.text}
            </Text>
          </Card>
        ))}

        {/* شاشة البداية */}
        {!firstMsg && messages.length === 0 && (
          <Center mt="10rem">
            <Stack>
              <Flex justify="center" align="center" gap="sm">
                <Bot size={35} color="#16aabb" />
                <Title ta="right" p={5} size="xl" c="#16aabb">
                  أهلا بك ! ما سؤالُك ؟
                </Title>
              </Flex>
              <Text ta="center" p={5} size="lg">
                قم بطرح السؤال او الاستشارة التي تريدها
              </Text>
            </Stack>
          </Center>
        )}

        {/* اللودينغ */}
        {timer && (
          <Flex justify="start" align="center" gap={10}>
            <Loader type="dots" />
            <Text ta="left" size="md">
              جاري المعالجة
            </Text>
          </Flex>
        )}

        {/* مرجع للسكرول */}
        <div ref={messagesEndRef} />
      </Stack>

      {/* إدخال الرسائل */}
      <Stack
      align="start"
      pos={'sticky'}
      bottom={'3rem'}
        pt={10}
        px={5}
        style={{
          borderTop: "1px solid #12121240",
          borderRadius: 15,
          boxShadow: "0px -10px 14px #16aabb10",
          transform:'translateY(10px)'
        }}
        bg="#F9FAFC"
        gap={10}
      >
        <TextInput
          variant="unstyled"
          w="100%"
          dir="rtl"
          placeholder="سؤال / استشارة"
          size="lg"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          radius={10}
          styles={{
            input: {
              backgroundColor: "#F9FAFC",
            },
          }}
        />
        <Button
          leftSection={<SendHorizonal size={30} color="#37a9ef" />}
          dir="ltr"
          onClick={handleSubmit}
          variant="subtle"
          color="#E7EEF3"
          size="md"
          radius={10}
          style={{ paddingInline: 0 }}
        />
      </Stack>
    </Stack>

    </>
  );
};

export default ChatMessages;
