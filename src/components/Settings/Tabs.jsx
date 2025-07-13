import { Button, Divider, Stack, Text ,Accordion,Flex} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { Globe, Info, ShieldCheck, UserRound } from "lucide-react"
import { useNavigate } from "react-router"
import ContactModal from "./ContactModal"
import { useState,useEffect } from "react"
const Tabs = () =>{

    const navigate=useNavigate()
    const [opened,{open,close}] = useDisclosure()

                const [active,setActive] = useState(false);
    
            
                    useEffect(()=>{
                      setTimeout(()=>{
                        setActive(true);
                      },200);
                    },[])

    const handleClick =(value) => {
        if(value == 'contact-settings'  ){
            open()
        }
        else{
            navigate(`/National_Diabetes_Program/${value}/`)
        }
        
    }

    const Element = ({icon:Icon,text,value})=>{

        return(
            <>
            
            <Flex justify='end' align='center' p={5} onClick={()=> handleClick(value)}>
                <Text size="md" >{text}</Text>
                <Icon size={20} style={{marginLeft:8}} />
            </Flex>
            <Divider w={'100%'} />
            </>
        )
    }

    return(
        <>
        <ContactModal opened={opened} close={close}/>
        <Stack style={{opacity:active?'1':'0',transform:active?'translateY(0px)':'translateY(100px)' ,transition:'all 0.8s'}}>
            <Element icon={UserRound} text={'معلومات الحساب'} value={'profile-settings'} />
            <Element icon={ShieldCheck} text={'إعدادات الامان'} value={'security-settings'} />
            {/* <Element icon={Globe} text={'تغيير اللغة'} value={'lang-settings'} /> */}
            <Accordion dir="rtl" radius="md" defaultValue={null} >
            <Accordion.Item value="language-settings" >
              <Accordion.Control style={{paddingInline:0}} >
                <Flex justify={'start'} align={'center'} px={5}>
                    <Globe size={20} style={{marginLeft:8}} />
                إعدادات اللغة 
                </Flex>
                
                </Accordion.Control>
              <Accordion.Panel ta={'right'}>
                <Button
                   ta={'right'}
                  variant="subtle"
                  color="black"
                  display={'block'}
                //   fullWidth
                  onClick={() => SelectLanguage("ar")}
                >
                  العربية
                </Button>
                <Divider w={'90%'} />
                <Button
                   ta={'right'}
                  variant="subtle"
                  color="black"
                  display={'block'}
                //   fullWidth
                  onClick={() => SelectLanguage("en")}
                >
                  الإنجليزية
                </Button>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
            <Element icon={Info} text={'تواصل معنا'} value={'contact-settings'} />
            <Element icon={Info} text={'الشروط والاحكام'} value={'condition-settings'} />
        </Stack>
        </>
    )
}
export default Tabs