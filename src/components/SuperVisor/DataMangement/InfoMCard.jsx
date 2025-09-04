import { Card ,Stack ,Flex ,Title ,Text, Grid, Group } from "@mantine/core"
import { Hospital, LocateFixed, User, UserCheck, UserCog, UserRound, UserSquare } from "lucide-react"

const InfoMCard = ({data}) =>{

    const {nopis,nopis_lm,first_center} = data
    return(
        <>
        <Grid gutter={20} p={{base:5,sm:20}} justify="end" >

            <Grid.Col span={{base:12,sm:5}}>
                <Card radius={10}  mih={'6rem'} bd={'1px solid #12121212'} style={{cursor:'pointer'}}>
                    <Flex align='center' gap={10} justify='end'>
                       <Title size="xl"  >
                               {nopis_lm}
                         </Title>
                      <Title size="lg">
                             عدد المسجلين خلال الشهر الأخير
                     </Title>
                        
                    </Flex> 
                </Card>
            </Grid.Col>



             <Grid.Col span={{base:12,sm:4}}>
                <Card radius={10}  mih={'6rem'} bd={'1px solid #12121212'} style={{cursor:'pointer'}}>
                    <Flex justify={'end'} align={'center'} gap={10}>
  
                       <UserRound size={30} />
                  <Title size="xl"  c='#000' >
                       {nopis} :
                    </Title>     
                     <Title size="lg"  c='#000' >
                       عدد المرضى الكلي
                    </Title>        
  
                      </Flex>
                </Card>
            </Grid.Col>

             <Grid.Col span={{base:12,sm:6}} >
                <Card radius={10}  mih={'8rem'} bd={'1px solid #12121212'} style={{cursor:'pointer'}}>
                    <Flex align='center' gap={30} justify='end'>
                        <Group gap={10}>
                            <UserRound size={30} />
                            <Title size={'xl'}>
                                {first_center?.PatientsCount}
                            </Title>
                           
                        </Group>
                       
                         <div style={{height:'6rem',width:1 ,backgroundColor:'#12121290',padding:0}} />
                      <Stack gap={10} align="end" >
                          <Group>
                                <Title size="lg">
                                   المركز الاول : {first_center?.CenterName}
                                </Title>
                                <Hospital size={25} />
                            </Group>
                            <Group>
                                <Title size="lg">
                                    المدينة : {first_center?.CenterCity}
                                </Title>
                                <LocateFixed size={25} />
                            </Group>
                        </Stack>
                    </Flex>
                </Card>   
            </Grid.Col>
        </Grid>
        </>
    )
}
export default InfoMCard