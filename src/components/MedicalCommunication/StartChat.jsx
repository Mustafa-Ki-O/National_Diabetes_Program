import { Container,Text,Title,Button,Stack, Group } from "@mantine/core"
import { BotMessageSquare, HandHeart } from "lucide-react"

const StartChat = ({setActive,active}) =>{
    

    const handleActive = () =>{
        setActive(true)
        
    }
    return(
        <>
        <Container p={0} fluid>
            <Stack >
                <Group justify="center" align="center" gap={5}>
                    <BotMessageSquare size={32} strokeWidth={2} color="#37a9ef" />
                    <Title c={'#37a9ef'} size={'1.5rem'} display={'flex'} style={{justifyContent:'center'}} >
                       الدردشة الذكية 
                     </Title>
                </Group>
            
            <Text size="lg" fw={700} mb={'md'}>
                هنا يمكنك التواصل مع المجيب الآلي الذي سيقدم ويوفر لك النصائح والرعاية 
            </Text>
            </Stack>
            <Button
            my={'2rem'}
            miw={'8rem'}
            size='md'
            variant="gradient" 
            gradient={{ from: '#16a9ef', to: '#00a8a8', deg: 90 }} radius={10}  onClick={handleActive}>
               بدء
            </Button>
             <Text size="md" fw={700} c={'#e40000'} >
                في حالات الطوارئ يمكنك التواصل فورا مع طبيب مختص
            </Text>
            </Container>
        </>
    )
}
export default StartChat