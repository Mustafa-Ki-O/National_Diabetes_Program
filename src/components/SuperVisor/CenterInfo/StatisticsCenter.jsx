import { DonutChart } from '@mantine/charts';
import { BarChart } from '@mantine/charts';
import { Flex, Stack, Title } from '@mantine/core';
const StatisticsCenter = () => {

   const data = [
     { name: 'ذكور', value: 400, color: '#37a9ef' },
     { name: 'إناث', value: 300, color: 'pink' },

    ];

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
        <Flex w={'100%'} mt={'3rem'} justify={'end'} gap={'8rem'} align={'end'} p={30}>
             <Stack justify='end' >
                <Title size={'md'}>
                    توزع المرض بين الجنسين
                </Title>
                 <DonutChart startAngle={180} endAngle={0} data={data} />;
             </Stack>
             <Stack justify='end' w={'50%'}>
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
            
        </Flex>
       
        </>
    )
}
export default StatisticsCenter