import { Button, Card, Container, Flex, Grid, Group, Stack, Text, Title ,Progress } from "@mantine/core"
import { Plus, PlusIcon } from "lucide-react"
import { useState,useEffect} from "react"
import AddMedicinModal from "./AddMedicinModal"
import { useDisclosure } from "@mantine/hooks"
import { useLocation } from "react-router"
import MedicineCard from "./MedicinCard"


const MedicinesStore = ({setProgress,medicines}) => {
    const[num,setNum] = useState(200)
    const [centerName,setCenterName] = useState()
    const [opened,{open,close}] = useDisclosure()
    const location = useLocation()

    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      setCenterName(user?.name);
    }, [location]);

     const fullQu = medicines?.reduce((a, c) => a + c.quantity, 0);

     const types=medicines?.map((m,i)=>m.name_english)
     const typesM = types ? [...new Set(types)] : 0

    return(
        <>
        <AddMedicinModal setProgress={setProgress} opened={opened} close={close} centerName={centerName}/>
        <Container p={5} fluid >
            <Stack>
                <Flex justify={'space-between'} align={'center'} >
                    <Title ta={'right'} size={'xl'}>
                      محتوى المخزن
                   </Title> 
                   <Button variant="filled" color={'#707070'} radius={10} onClick={open}> 
                    طلب أدوية
                   <Plus size={'20'} style={{marginRight:5}}/>
                   </Button>
                </Flex>
         
          {/*  */}

             <Grid mt={20}>
                <Grid.Col span={{base:12,sm:6}}>
                 <Text size="lg" fw={500} ta={'right'}>
                 اجمالي الادوية  : {fullQu}
                </Text>
                </Grid.Col>
                <Grid.Col span={{base:12,sm:6}}>
                 <Text size="lg" fw={500} ta={'right'}>
                  عدد الاصناف الكلية : {typesM?.length}
                </Text>
                </Grid.Col>
             </Grid>


               {/*  */}
            
            <div style={{margin:10,height:1,backgroundColor:'#70707070',width:'100%'}} ></div>
            <Stack>
                <Grid gutter={20}>
                   {medicines?.map((item,index) => (
                    <Grid.Col key={index} span={4}>
                      <MedicineCard medicine={item} setProgress={setProgress}/>
                    </Grid.Col>
                  ))}
                </Grid>
              
            </Stack>
            </Stack>
            
        </Container>
        </>
    )
}
export default MedicinesStore