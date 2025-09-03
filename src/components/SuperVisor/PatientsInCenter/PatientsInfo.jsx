import { Card ,Stack ,Flex ,Title ,Text, Grid, Group, Button } from "@mantine/core"
import {  Pill,Syringe} from "lucide-react"
import { DonutChart } from "@mantine/charts";
import { useNavigate, useParams } from "react-router";

const PatientsInfo = () => {

    return(
        <>
        <Grid gutter={20} p={{base:5,sm:20}} justify="end" >
                    <Grid.Col span={{base:12,sm:5}}>
                        <Card radius={10}  mih={'7rem'} bd={'1px solid #12121212'} style={{cursor:'pointer'}}>
                            <Flex align='center' gap={10} justify='end'>
                               <Title size="xl"  >
                                       400
                                 </Title>
                              <Title size="lg">
                                     عدد المراجعات المنجزة خلال الشهر الاخير
                             </Title>
                                
                            </Flex> 

                        </Card>
                    </Grid.Col>
                       <Grid.Col span={{base:12,sm:5}}>
                        <Card radius={10}  mih={'7rem'} bd={'1px solid #12121212'} style={{cursor:'pointer'}}>
                            <Flex align='center' gap={10} justify='end'>
                               <Title size="xl"  >
                                       88%
                                 </Title>
                              <Title size="lg">
                                    المرضى الملتزمين بالمراجعات الدورية
                             </Title>
                                
                            </Flex> 
                            
                        </Card>
                    </Grid.Col>
        
        
        
                     <Grid.Col span={{base:12,sm:5}} >
                        <Card radius={10}  mih={'7rem'} bd={'1px solid #12121212'} style={{cursor:'pointer'}}>
                            <Flex justify={'end'} align={'center'} gap={15}>
                              
                          <Title size="xl"  c='#000' >
                            علبة   584 :
                            </Title>     
                             <Title size="lg"  c='#000' >
                               الخافضات الفموية 
                            </Title>        
                             <Pill size={20} />
                              </Flex>

                            <Flex mt={10} justify={'end'} align={'center'} gap={15}>
                               
                          <Title size="xl"  c='#000' >
                           جرعة  331 :
                            </Title>     
                             <Title size="lg"  c='#000' >
                               الأنسولين
                            </Title>    
                            <Syringe size={20} />    
                              </Flex>
                        </Card>
                    </Grid.Col>
        
                     
                </Grid>
        </>
    )
}
export default PatientsInfo