import { Card ,Stack ,Flex ,Title ,Text, Grid, Group } from "@mantine/core"
import { Hospital, LocateFixed, User, UserCheck, UserCog, UserRound, UserSquare } from "lucide-react"

const InfoCityCard = ({data}) =>{

     const {nopic,nopic_lm} = data
    return(
        <>
        <Grid gutter={20} p={{base:5,sm:20}} justify="end" >
            <Grid.Col span={{base:12,sm:5}}>
                <Card radius={10}  mih={'6rem'} bd={'1px solid #12121212'} style={{cursor:'pointer'}}>
                    <Flex align='center' gap={10} justify='end'>
                       <Title size="xl"  >
                              {nopic_lm}
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
                      {nopic}:
                    </Title>     
                     <Title size="lg"  c='#000' >
                       عدد المرضى الكلي
                    </Title>        
  
                      </Flex>
                </Card>
            </Grid.Col>     
        </Grid>
        </>
    )
}
export default InfoCityCard