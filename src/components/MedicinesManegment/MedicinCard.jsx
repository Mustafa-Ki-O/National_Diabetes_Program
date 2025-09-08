import { Card, Text, Title, Button, Group, Progress, Stack,Tooltip, Flex } from "@mantine/core"
import { CirclePlus, PillBottle, PlusIcon } from "lucide-react"
import { useEffect, useState } from "react"
import useUpdateQuantity from "../../useMutation/SuperVisor/useUpdateQuantity"
import UpdateQModal from "./UpdateQModal"
import { useDisclosure } from "@mantine/hooks"


const MedicineCard = ({medicine,setProgress}) => {
  const {id,name_arabic , name_english ,medication_type , dosage ,quantity ,units_per_box} = medicine
  const [qty, setQty] = useState(0)
const maxStock = 2000;
const percentUsed = (quantity / maxStock) * 100;
const color = percentUsed < 40 ? percentUsed <30 ? 'red' : 'orange' : '#16aabb' ;

const [opened,{open,close}] = useDisclosure()
const {updateReq,isPending} = useUpdateQuantity()

    useEffect(()=>{
      setProgress(isPending)
    },[isPending])


  return (
    <>
    <UpdateQModal 
    opened={opened}
    close={close}
    medicine={medicine}
    newQ={qty}
    setProgress={setProgress}
    setQty={setQty}
    />

    <Card radius={20} shadow={'sm'} 
    style={{ border: '1px solid #ccc', direction: 'rtl' }} bg={quantity < 50 ? '#e74c3c20':'#fff'}>
      <Stack gap={20}>
        <Group position="apart" align="center">
            <PillBottle size={25} />
          <Title size="md">
            {name_arabic}
            </Title>
          
        </Group>
        <Flex justify={'space-between'} align={'center'}>
            <Text size="sm" c="dimmed">
               ({name_english})
              </Text>
             <Text size="sm" c="dimmed">
              {medication_type}
              </Text>
        </Flex>

        <Group position="apart">
            <Text>
             {dosage} 
            </Text>
          <Text>تاريخ الانتهاء: 2025/12/12</Text>
          
        </Group>

        <Group position="apart" >
          
          <Text size='lg' fw={600}>
            {quantity}
            </Text>
          <Group mr={10}>
              
            
            <CirclePlus color="#37a9ef" size={22} onClick={() => setQty((prev) => prev + 20)} style={{cursor:'pointer'}}/>
         <Text  miw={'1.6rem'}>{qty}</Text>
          </Group>
        </Group>
        <Tooltip label={`الكمية المتبقية : ${quantity}`} >
            <Progress value={percentUsed} color={color} striped  size="lg"  />
        </Tooltip>
        {qty > 0  && (
          <Button onClick={open} radius={10} size="sm" color="#16aabb" >
            تأكيد
          </Button>
        )}
      </Stack>
    </Card>
    </>
  )
}

export default MedicineCard
