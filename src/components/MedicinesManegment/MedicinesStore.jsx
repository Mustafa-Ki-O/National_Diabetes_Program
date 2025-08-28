import { Button, Card, Container, Flex, Grid, Group, Stack, Text, Title ,Progress } from "@mantine/core"
import { Plus, PlusIcon } from "lucide-react"
import { useState,useEffect} from "react"
import AddMedicinModal from "./AddMedicinModal"
import { useDisclosure } from "@mantine/hooks"
import { useLocation } from "react-router"
import MedicineCard from "./MedicinCard"


const MedicinesStore = ({setProgress}) => {
    const[num,setNum] = useState(200)
    const [centerName,setCenterName] = useState()
    const [opened,{open,close}] = useDisclosure()
    const location = useLocation()

    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      setCenterName(user?.name);
    }, [location]);

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
                   اجمالي الادوية  : 2500
                </Text>
                </Grid.Col>
                <Grid.Col span={{base:12,sm:6}}>
                 <Text size="lg" fw={500} ta={'right'}>
                  عدد الاصناف الكلية : 5
                </Text>
                </Grid.Col>
             </Grid>


               {/*  */}
            
            <div style={{margin:10,height:1,backgroundColor:'#70707070',width:'100%'}} ></div>
            <Stack>
                <Grid gutter={20}>
                   {[1, 2, 3, 4, 5].map((item) => (
                    <Grid.Col key={item} span={4}>
                      <MedicineCard quantity={100+ item*100} type={item <3 ? 'أنسولين' : 'خافضات فموية'}/>
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