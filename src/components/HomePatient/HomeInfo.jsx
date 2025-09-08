import { Text,Button,Stack,Flex,Container, Title, Card, Grid, Paper , Accordion, Box, Group } from "@mantine/core"
import { LineChart } from "@mantine/charts";
import { Stethoscope ,ScanHeart ,CalendarDays ,CalendarCheck, ChartBar, CalendarCheck2, IdCard, Hospital, Calendar1, BotMessageSquare} from "lucide-react";
import dayjs from "dayjs";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import useFetchHomePatient from "../../useMutation/Patient/useFetchHomePatient";
import { useDisclosure } from "@mantine/hooks";
import ContactModal from "./ContactModal";

const HomeInfo = ({setProgress}) => {

  const navigate = useNavigate()

  const [homeInfo,setHomeInfo] = useState({})
  const {fetchHomeP,isPending} = useFetchHomePatient(setHomeInfo)

  const [opened,{open,close}] = useDisclosure()
  const [email,setEmail] = useState()
  useEffect(()=>{
    fetchHomeP()
  },[])

  useEffect(()=>{
    if(homeInfo){
      setEmail(homeInfo.centerEmail)
    }
  },[homeInfo])

    useEffect(()=>{
      setProgress(isPending)
    },[isPending])
    
const labelMap = {
  ldl: 'LDL الكوليسترول الضار',
  hdl: 'HDL الكوليسترول الجيد',
  normal_glocose: 'نسبة السكر'
};

    return(
        <>
        <ContactModal opened={opened} close={close} centerEmail={email}/>
        <Stack gap={{base:10,sm:20}}>
        <Paper p={15} bg={'#fff'} bd={'1px solid #8e8e8e60'} w={{base:'100%',md:'50%'}}  radius={10}>
          <Title mb={20} size={'1.6rem'} ta={'right'}>
            {homeInfo.fullname}
          </Title>
          <Grid gutter={10} >
         <Grid.Col span={6}>
              <Group justify="end" gap={4} align="center">
                   <Text ta={'right'} size={'md'} c={'#8e8e8e'}>تاريخ الميلاد</Text>
                    <Calendar1 size={15} c={'#8e8e8e'}/>
               </Group>
               <Text ta={'right'} size={'md'} fw={'500'} c={'#000'}>{homeInfo.age}</Text>
            </Grid.Col>
            <Grid.Col span={6}>
               <Group justify="end" gap={4} align="center">
               <Text ta={'right'} size={'md'} c={'#8e8e8e'}>الرقم الوطني</Text>
               <IdCard size={15} c={'#8e8e8e'}/>
               </Group>
               <Text ta={'right'} size={'md'} fw={'500'} c={'#000'}>{homeInfo.id_number}</Text>
            </Grid.Col>
            <Grid.Col span={12}>
              <Group justify="end" gap={4} align="center">
                <Text ta={'right'} size={'md'} c={'#8e8e8e'}>الفحص السريري</Text>
                <CalendarCheck2 size={15} c={'#8e8e8e'}/>
              </Group>
                
              <Text ta="right" size="md" fw={500} c="green">
                  {homeInfo.firstReviewDate }

                </Text>
            </Grid.Col>
              <Grid.Col span={12}>
                <Group justify="end" gap={4} align="center">
                <Text ta={'right'} size={'md'} c={'#8e8e8e'}> المركز المشرف </Text>
                <Hospital size={15} c={'#8e8e8e'}/>
                </Group>
               <Text ta={'right'} size={'md'} fw={'500'}  c={'#000'}>{homeInfo.center_name}</Text>
            </Grid.Col>
          </Grid>
          </Paper>
          <Flex gap={10} >
          <Button mih={'5rem'} fz={'1rem'}  fullWidth  variant="gradient" 
            gradient={{ from: '#14B8A6', to: 'cyan', deg: 91 }} radius={10} size="xl" onClick={open}>
               <Stethoscope  size={25} color="#fff" style={{marginRight:10}} />
             تواصل
            
            </Button>
              <Button mih={'5rem'} fz={'1rem'} fullWidth color={'#37a9ef'} variant="filled" radius={10} size="xl"
               onClick={()=>navigate('/National_Diabetes_Program/medical-communication/')} >
            <BotMessageSquare  size={28} color="#fff" style={{marginRight:10}}/>
             دردشة ذكية
            </Button>
          </Flex>
          <Paper p={15} bg={'#fff'} bd={'1px solid #8e8e8e60'} radius={10}>
            {homeInfo?.chartData ? (<LineChart
             h={200}
             data={homeInfo.chartData}
             dataKey="date"
             withLegend
             curveType="monotone"
             legendProps={{ verticalAlign: 'bottom', height: 40 }}
             tooltipProps={{ formatter: (value, name) => [`${value}`, labelMap[name] || name] }}
             series={[
               { name: 'ldl', label: 'LDL ', color: 'indigo.6' },
               { name: 'hdl', label: 'HDL ', color: 'red.6' },
               { name: 'normal_glocose', label: 'نسبة السكر', color: 'teal.6' },
             ]}
           />):(
            <Flex justify={'end'} align={'center'} gap={8} >
           <Text size="md" ta={'right'}>
              لا بتوفر بيانات تحاليل لعرضها
            </Text>
            <ChartBar size={20} />
            </Flex>
            
           )}
          
          </Paper>
          <Title ta={'right'} size={'1.5rem'} mt={10}>المراجعات </Title>       
              <Flex
                dir="ltr"
                bd={'1px solid #fe101070'}
                bg={'#FFF1F2'}
                p={15}
                justify={'end'}
                align={'center'}
                gap={10}
                style={{borderRadius: 10}}
              >
                <Text size={'1.1rem'}>{homeInfo.nextReview}</Text>
                <Text size={'1.1rem'} fw={700} >
                  المراجعة القادمة
                  
                  </Text>
                    <CalendarDays  size={25} color="#fe1010" />
              </Flex>
              
       <Accordion dir="rtl" variant="filled" >
      <Accordion.Item key="past-reviews" value="past-reviews">
       <Accordion.Control  bg={'#8e8e8e20'}>
        <Flex  justify={'start'} align={'center'} gap={10}>
         <CalendarCheck size={25} color="#000" />
            <Text size={'1rem'} >
              المراجعات السابقة
            </Text>
           </Flex>
            
          </Accordion.Control>
           <Accordion.Panel style={{borderRadius:10}} bg={'#8e8e8e20'}>
            {homeInfo?.myReviews?.map((item) => (
              <Text 
                key={item.id}
                ta={'right'} 
                style={{borderRadius: 10}}  
                size={'1.1rem'} 
                c={'#fff'} 
                bg={'#14B8A6'} 
                p={10}
                my={5}
              >
                {item.date}
              </Text>
            ))}

            <Text  px={10} mt={10} ta={'right'} size={'1rem'} td={'underline'} c={'#14B8A6'}>
              سجل المراجعات
              
            </Text>
          </Accordion.Panel>
          </Accordion.Item>
         </Accordion>
        </Stack>
        </>
    )
} 
export default HomeInfo