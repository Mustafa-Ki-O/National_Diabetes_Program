import { Card, Text, Title, Button, Group, Progress, Stack,Tooltip, Flex } from "@mantine/core"
import { CirclePlus, PillBottle, PlusIcon } from "lucide-react"
import { useState } from "react"


const MedicineCard = ({quantity,type}) => {
  const [qty, setQty] = useState(0)
const maxStock = 1000;
const percentUsed = (quantity / maxStock) * 100;
const color = percentUsed < 40 ? percentUsed <30 ? 'red' : 'orange' : '#16aabb' ;

  return (
    <Card radius={20} style={{ border: '1px solid #ccc', background: '#f9f9f9', direction: 'rtl' }}>
      <Stack gap={20}>
        <Group position="apart" align="center">
            <PillBottle size={25} />
          <Title size="md">اسم الدواء بالعربية</Title>
          
        </Group>
        <Flex justify={'space-between'} align={'center'}>
            <Text size="sm" c="dimmed">(اسم الدواء بالإنجليزية)</Text>
             <Text size="sm" c="dimmed">{type}</Text>
        </Flex>

        <Group position="apart">
            <Text>الجرعة: 500mg</Text>
          <Text>تاريخ الانتهاء: 2025/12/12</Text>
          
        </Group>

        <Group position="apart" >
          
          <Text fw={600}>الكمية</Text>
          <Group>
              
            <Text  miw={'1.6rem'}>{qty}</Text>
            <CirclePlus color="#37a9ef" size={22} onClick={() => setQty((prev) => prev + 20)} style={{cursor:'pointer'}}/>
          </Group>
        </Group>
        <Tooltip label={`الكمية المتبقية : ${quantity}`} >
            <Progress value={percentUsed} color={color} striped  size="lg"  />
        </Tooltip>
        {qty > 0 && (
          <Button radius={10} size="sm" color="#16aabb">
            تأكيد
          </Button>
        )}
      </Stack>
    </Card>
  )
}

export default MedicineCard
