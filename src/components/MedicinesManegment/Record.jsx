import { Container, Flex, Grid, Indicator, Pagination, Paper, Stack, Text, Title } from "@mantine/core"
import useFetchRecords from "../../useMutation/Admin/useFetchRecords"
import { useEffect, useState } from "react"

const Record = ({setProgress}) =>{

    const [records,setRecords] = useState([])
    const {fetchRecords,isPending} = useFetchRecords(setRecords)


    useEffect(()=>{
      fetchRecords()
    },[])

    
    useEffect(()=>{
       setProgress(isPending)
    },[isPending])
    
    const HistoryPaper = ({record}) =>{
        const {ID,NameArabic,Dosage,MedicationType,RequestedQuantity,CenterID,CreatedAt,ApprovalDate,RecordStatus} = record
        const typeTrans = MedicationType === 'pills' ? 'خافضات فموية' : 'أنسولين';
        return(
            <>
        <Indicator zIndex={2} size={15}  processing={RecordStatus=='inProgress'}
        color={RecordStatus==='rejected'?'red':RecordStatus==='accepted'?'green': 'orange'}>
        <Grid  bg={'#fff'} pos={'relative'}  p={15} justify="end" bd={'1px solid #00000020'} style={{borderRadius:10}}>
          <Text c={'dimmed'} pos={'absolute'} left={8} top={5}>
                {ID}
            </Text>
            <Grid.Col span={{base:12,sm:4}}>
            <Title size={'lg'}>
               ({NameArabic} {Dosage})
            </Title>
            </Grid.Col>
           <Grid.Col span={{base:12,sm:4}}>
                 <Text size="lg" fw={600}>{typeTrans}</Text>

             </Grid.Col>
             <Grid.Col span={{base:12,sm:4}}>
                <Text size="lg" fw={600}>الكمية المطلوبة : {RequestedQuantity}</Text>
             </Grid.Col>


             <Grid.Col span={{base:12,sm:4}}>

                <Text size="md">
                    تاريخ الطلب : { CreatedAt}</Text>
             </Grid.Col>
             <Grid.Col span={{base:12,sm:4}}>
                {RecordStatus==='inProgress'?(
                    <Text size="md">
                        جاري معالجة الطلب ...
                    </Text>
                ):(
                     <Text size="md">
                    تاريخ {RecordStatus==='rejected'?'الرفض':'القبول'} : {ApprovalDate}</Text>
                )}
                
             </Grid.Col>
        </Grid>
        </Indicator>
        </>
        )
        
    }

    return(
        <>
         <Container p={5} fluid >
            <Stack gap={10}>
               {records.map((r,i)=>(
                <HistoryPaper key={i} record={r}/>
               ))}
 
            </Stack>
           <Pagination  mt={'3rem'}  total={10} radius="xl" />
         </Container>
        </>
    )
}
export default Record