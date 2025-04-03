import { DonutChart } from '@mantine/charts';
import { useEffect,useMemo } from 'react';
import { Grid, Title,Text } from '@mantine/core';
const Diagrams = ({patients}) => {

    const chartData = useMemo(() => [
        { name: 'النوع الأول', value: patients.filter(p => p.sugarType === 'النوع الأول').length, color: 'blue' },
        { name: 'النوع الثاني', value: patients.filter(p => p.sugarType === 'النوع الثاني').length, color: 'red' },
        { name: 'سكري الحمل', value: patients.filter(p => p.sugarType === 'سكري الحمل').length, color: 'orange' },
        { name: 'نوع أخر', value: patients.filter(p => p.sugarType === 'نوع أخر').length, color: 'gray' }
      ], [patients]);

      return( 
      <Grid gutter={20} align='center' justify='center'>
        <Grid.Col  span={12} justify='center' align='center' mb={90}>
            <Title size='xl' mb={20}>عدد المرضى الكلي</Title>
            <Text size='lg'>{patients.length}</Text>
        </Grid.Col>
        <Grid.Col  span={{lg:6,md:6,sm:12,xs:12}} >
        <Title size='md' >
            إحصاء عدد المصابين بكل نوع
        </Title>
      <DonutChart data={chartData} h={300}
      w={300}
      withTooltip
      withLabelsLine
      thickness={40}
      paddingAngle={2}
      tooltipDataSource="segment"
      labelsType="percent" withLabels 
      m='auto'
      />;
      </Grid.Col>

      <Grid.Col span={{lg:6,md:6,sm:12,xs:12}}>
      <Title size='sm'>
            إحصاء أعمار المصابين
        </Title>
      <DonutChart data={chartData} h={300}
      w={300}
      withTooltip
      withLabelsLine
      thickness={40}
      paddingAngle={2}
      tooltipDataSource="segment"
      labelsType="percent" withLabels 
      m='auto'
      />;
      </Grid.Col>

</Grid>
      )
}
export default Diagrams