import { Container,Text,Title,Button,Stack } from "@mantine/core"


const FirstUse = ({setClick,click}) => {

        const handleActive = () =>{
        setClick(false)
        const user = JSON.parse(localStorage.getItem('user'))
        user.first_use_seen = false
        localStorage.setItem('user', JSON.stringify(user));
    }
    return(
        <>
        <Container p={0} fluid>
           <Stack >
                 <Title c={'#37a9ef'} size={'1.6rem'} display={'flex'} style={{justifyContent:'center'}} >
                AI    قارئ التحاليل الطبية 
                  </Title>
                  <Text size="lg" fw={700} mb={'md'}>
                       هنا يمكنك رفع التحاليل الطبية التي أجريتها كصورة , ومن ثم سيقوم الذكاء الصنعي بتحليل البيانات وارسال النتائج اليك
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
                </Container>
        </>
    )
}
export default FirstUse