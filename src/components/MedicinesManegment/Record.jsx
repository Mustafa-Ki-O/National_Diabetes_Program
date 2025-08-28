import { Container, Flex, Paper, Stack, Text, Title } from "@mantine/core"

const Record = ({setProgress}) =>{

    const HistoryPaper = ({name,id,status,type,date,qnt}) =>(
        <>
        <Paper radius={20} p={20} bd={'1px solid #00000020'}>
            <Flex justify={'space-between'}>
            <Title size={'md'}>
                {name}+ الجرعة
            </Title>
            <Text>الكمية المطلوبة : {qnt}</Text>
            <Text>
                {id}
            </Text>
            </Flex>
            <Flex justify={'space-between'} align={'center'}>
                <Text>{type}</Text>
                <Text>{date}</Text>
                <div style={{width:20,height:20,backgroundColor:status ? '#27a9ef' : 'red',borderRadius:'50%'}}/>
            </Flex>


        </Paper>
        </>
    )

    return(
        <>
         <Container p={5} fluid >
            <Stack gap={5}>
                 <HistoryPaper name={'ميتفورمين'} qnt={250} id={21227} status={1} date={'18-4-2025'} type={'خافضات فموية'}/>
                 <HistoryPaper name={'ميتفورمين'} qnt={250} id={21228} status={0} date={'1-3-2025'}  type={'أنسولين'}/>
                 <HistoryPaper name={'ميتفورمين'} qnt={250} id={21229} status={1} date={'15-11-2024'} type={'أنسولين'}/>
 
            </Stack>
           
         </Container>
        </>
    )
}
export default Record