import { Container, Flex, Grid, Indicator, Pagination, Paper, Stack, Text, Title } from "@mantine/core"
import useFetchRecords from "../../useMutation/Admin/useFetchRecords"
import { useEffect, useState } from "react"
import DropDownFilter from "./DropDownFilter"

const Record = ({setProgress}) =>{

    const [recordsInfo,setRecordsInfo] = useState({})
     const [records,setRecords] = useState([])
     const [activePage,setActivePage] = useState(1)
    const [total,setTotal] = useState()
    const {fetchRecords,isPending} = useFetchRecords(setRecordsInfo)

    const [filteredRecords,setFilteredRecords] = useState([])

    useEffect(()=>{
      fetchRecords(activePage)
    },[activePage])

    useEffect(()=>{
        if(recordsInfo){
            setTotal(recordsInfo.nor)
            setRecords(recordsInfo.norip)
        }
    },[recordsInfo])

    
    useEffect(()=>{
       setProgress(isPending)
    },[isPending])

//   useEffect(() => {
//     setFilteredRecords(records)
//   }, [records])
    
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
         <Container p={5} fluid>
          
            <Stack gap={10} justify="end">
               <DropDownFilter records={records} setFilteredRecords={setFilteredRecords} /> 
               {Array.isArray(filteredRecords) && filteredRecords.length > 0 ? (
                 filteredRecords.map((r, i) => <HistoryPaper key={i} record={r} />)
               ) : (
                 <Text ta="center" c="dimmed">لا يوجد سجلات</Text>
               )}
             </Stack>
           <Pagination mt={'3rem'} value={activePage} onChange={setActivePage} total={total} radius="xl" />
         </Container>
        </>
    )
}
export default Record