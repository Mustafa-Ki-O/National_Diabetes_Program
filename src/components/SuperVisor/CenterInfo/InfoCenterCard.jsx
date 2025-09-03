import { Card ,Stack ,Flex ,Title ,Text, Grid, Group, Button } from "@mantine/core"
import { ArrowUpLeft, Hospital, LocateFixed, User, UserCheck, UserCog, UserRound, UserSquare } from "lucide-react"
import { DonutChart } from "@mantine/charts";
import { useNavigate, useParams } from "react-router";
const InfoCenterCard = () => {

       const data = [
     { name: 'ذكور', value: 400, color: '#37a9ef' },
     { name: 'إناث', value: 300, color: 'pink' },

    ];
    const {id,cid} = useParams()

    const navigate = useNavigate()
    return(
        <>
        <Grid gutter={20} p={{base:5,sm:20}} justify="space-between" >
            <Grid.Col span={{base:12,sm:4}}>
                 <DonutChart startAngle={180} endAngle={0} data={data} />;
            </Grid.Col>
            <Grid.Col span={{base:12,sm:4}}>
                <Card radius={10}  mih={'7rem'} bd={'1px solid #12121212'} style={{cursor:'pointer'}}>
                    <Flex align='center' gap={10} justify='end'>
                       <Title size="xl"  >
                               800
                         </Title>
                      <Title size="lg">
                             عدد المسجلين خلال الشهر الأخير
                     </Title>
                        
                    </Flex> 
                </Card>
            </Grid.Col>



             <Grid.Col span={{base:12,sm:4}}>
                <Card radius={10}  mih={'7rem'} bd={'1px solid #12121212'} style={{cursor:'pointer'}}>
                    <Flex justify={'end'} align={'center'} gap={10}>

   
                       <UserRound size={30} />
             
                  
                  <Title size="xl"  c='#000' >
                     7043 :
                    </Title>     
                     <Title size="lg"  c='#000' >
                       عدد المرضى الكلي
                    </Title>        
                      </Flex>
                      <Button w={'fit-content'} size="sm" radius={10} mt={15} variant="outline" color={'#e67e22'} 
                      style={{alignSelf:'end'}} onClick={()=>navigate(`/National_Diabetes_Program/superVisor/dataMangement/cityInfo/${id}/centerInfo/${cid}/patients-center`)}>
                         <ArrowUpLeft size={25} color="#e67e22" />
                        <Text size="md">
                            المزيد من التفاصيل
                        </Text>
                      </Button>
                </Card>
            </Grid.Col>

             
        </Grid>
        </>
    )
}
export default InfoCenterCard