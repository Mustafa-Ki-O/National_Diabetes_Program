import { Card ,Grid,Text,TextInput,Title,Divider, Flex, Table ,Paper} from "@mantine/core"
import info from '../../assets/css/nav.module.css';
import React from "react"
const TreatmentsPatientReview = ({review}) =>{


const rows = review.treatments?.druges?.map((drug, index) => (
  <Table.Tr ta={'right'} fz={'1.3rem'} key={index}>
    <Table.Td >
      {index + 1}
    </Table.Td>
    <Table.Td >
      {drug.name || ''}
    </Table.Td>
    <Table.Td >
      {drug.units || ''} جرعة
    </Table.Td>
    <Table.Td >
      {drug.dosage_per_day || ''} جرعة يومياً
    </Table.Td>
  </Table.Tr>
));


    return(

        <>
         <Paper shadow="md" p={20} radius="md" withBorder bg="#fffefc">
      <Grid gutter="1rem" dir="rtl" align="end">
        {/* نوع العلاج */}
        <Grid.Col span={12}>
          <Flex p={20} className={info.hovered} align="center" gap="5rem">
            <Text fw={600} size="1.4rem">نوع العلاج:</Text>
            <Text size="1.4rem" fw={500}>
              {review.treatments?.type?.join('، ') || ''}
            </Text>
          </Flex>
        </Grid.Col>

        {/* نوع الإنسولين */}
        {review.treatments?.type?.includes("أنسولين") && (
          <Grid.Col span={12}>
            <Flex p={20} className={info.hovered} align="center" gap="5rem">
              <Text fw={600} size="1.4rem">نوع الإنسولين:</Text>
              <Text size="1.4rem" fw={500}>
                {review.treatments?.speed || ''}
              </Text>
            </Flex>
          </Grid.Col>
        )}

        {/* جدول الأدوية */}
        {review.treatments?.druges?.length > 0 && (
          <Grid.Col span={12}>
            <Divider size="sm" label="الأدوية" labelPosition="center" my={10} />

           <Table
  withColumnBorders
  highlightOnHover
  striped
  horizontalSpacing="sm" verticalSpacing="sm"
>
  <Table.Thead  fz={'1.3rem'} >
    <Table.Tr>
      <Table.Th ></Table.Th>
      <Table.Th >اسم الدواء</Table.Th>
      <Table.Th >عدد الوحدات</Table.Th>
      <Table.Th >الجرعات اليومية</Table.Th>
    </Table.Tr>
  </Table.Thead>
  <Table.Tbody>{rows}</Table.Tbody>
</Table>

          </Grid.Col>
        )}
      </Grid>
    </Paper>
     
        </>
    )
}
export default TreatmentsPatientReview