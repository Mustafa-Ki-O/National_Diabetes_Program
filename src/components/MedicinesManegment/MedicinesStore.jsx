import { Button, Card, Container, Flex, Grid, Group, Stack, Text, Title } from "@mantine/core"
import { Plus, PlusIcon } from "lucide-react"
import { useState } from "react"

const MedicinesStore = () => {
    const[num,setNum] = useState(200)

    return(
        <>
        <Container p={5} fluid >
            <Stack>
                <Flex justify={'space-between'} align={'center'} >
                    <Title ta={'right'} size={'xl'}>
                      محتوى المخزن
                   </Title> 
                   <Button variant="filled" color={'#707070'}> 
                    طلب أدوية
                   <Plus size={'20'} />
                   </Button>
                </Flex>
            
            <Flex dir="ltr" justify={'end'} gap={20}>
                <Text  ta={'right'}>
                    5 أصناف
                </Text>
            <Text size="lg" ta={'right'}>
                   عدد الاصناف الكلية
                </Text>
            </Flex>

          {/*  */}
             <Flex dir="ltr" justify={'end'} gap={20}>
                <Text ta={'right'}>
                   1500 
                </Text>
              <Text size="lg" ta={'right'}>
                 إجمالي أدوية الخافضات الفموية
                </Text>
            </Flex>
               {/*  */}
             <Flex dir="ltr" justify={'end'} gap={20}>
                <Text ta={'right'}>
                   1000 
                </Text>
              <Text size="lg" ta={'right'}>
                  إجمالي أدوية الانسولين
                </Text>
            </Flex>
            {/*  */}
             <Flex dir="ltr" justify={'end'} gap={20}>
                <Text ta={'right'}>
                   2500 
                </Text>
              <Text size="lg" ta={'right'}>
                  اجمالي الادوية 
                </Text>
            </Flex>
            <div style={{margin:10,height:1,backgroundColor:'#70707070',width:'100%'}} ></div>
            <Stack>
                <Grid gutter={20}>
                    {[1,2,3,4,5].map((item)=>(
                        <Grid.Col key={item} span={4}>
                              <Card radius={20} bd={'1px solid #70707050'} bg={'#fff'} style={{boxShadow:'none'}}>
                    <Flex mb={10}  gap={20} direction={'rtl'} justify={'right'} align={'center'}>
                        <Title ta={'right'} size={'lg'}>
                        اسم الدواء عربي
                    </Title>
                    <Text ta={'right'} size="md">
                        (اسم الدواء انجليزي)
                    </Text>
                    </Flex>
                    <Flex my={5} dir="ltr"  justify={'space-between'} align={'center'}>
                        <Text ta={'right'} >تاريخ انتهاء الصلاحية</Text>
                        <Group>
                            <Group gap={2} display={'flex'}>
                                <Button p={3} size="xs"  variant="light" color={'#707070'} onClick={()=>setNum((prev)=>prev+20)}>
                                    <PlusIcon size={15}/>
                                </Button>
                                <Text>
                                   {num}
                                </Text>
                                
                            </Group>
                            <Title size={'lg'} ta={'right'}>الكمية</Title>
                        </Group>
                        
                    </Flex>
                    
                </Card>
                        </Grid.Col>
                    ))}
                </Grid>
              
            </Stack>
            </Stack>
            <Button size={'md'} mt={40} variant="filled" >
                تأكيد الطلب
            </Button>
        </Container>
        </>
    )
}
export default MedicinesStore