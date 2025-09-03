import { DonutChart } from '@mantine/charts';
import { BarChart } from '@mantine/charts';
import { Flex, Stack, Title } from '@mantine/core';
const StatisticsCenter = () => {


const data1 = [
  { month: 'January', أطفال: 150, شباب: 300, كبار: 500 },
  { month: 'February', أطفال: 200, شباب: 350, كبار: 450 },
  { month: 'March', أطفال: 180, شباب: 400, كبار: 600 },
  { month: 'April', أطفال: 220, شباب: 250, كبار: 700 },
  { month: 'May', أطفال: 190, شباب: 350, كبار: 650 },
  { month: 'June', أطفال: 210, شباب: 400, كبار: 500 },
];
    return(
        <>
        <Flex  w={'100%'} mt={'3rem'} justify={'end'} gap={{base:'5rem',sm:'8rem'}} align={'center'} p={30} 
        direction={{ base: "column", md: "row" }}>
             
             <Stack justify='end' w={{base:'100%',sm:'50%'}}>
                <Title size={'md'}>
                    أعمار المصابين 
                </Title>
                  <BarChart
                      h={300}
                      data={data1}
                      dataKey="month"
                      series={[
                        { name: 'أطفال', color: 'violet.6' },
                        { name: 'شباب', color: 'blue.6' },
                        { name: 'كبار', color: 'teal.6' },
                      ]}
                      tickLine="y"
                    />
             </Stack>

             <Stack  justify='end' >
               
             </Stack>
            
        </Flex>
       
        </>
    )
}
export default StatisticsCenter