import { Container,Text,Title,Button,Stack } from "@mantine/core"
import { HandHeart } from "lucide-react"

const StartChat = ({setActive,active}) =>{
    

    const handleActive = () =>{
        setActive(true)
        
    }
    return(
        <>
        <Container p={0} fluid>
            <Stack >
            <Title c={'#37a9ef'} size={'1.5rem'} display={'flex'} style={{justifyContent:'center'}} >
                <HandHeart size={32} strokeWidth={1.4} />
                مرحبا بك في الدعم الطبي
            </Title>
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