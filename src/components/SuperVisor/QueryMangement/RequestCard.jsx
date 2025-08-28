import { Card, Text, Title, Button, Group, Progress, Stack,Tooltip, Flex } from "@mantine/core"
import { CirclePlus, PillBottle, PlusIcon } from "lucide-react"
import { useState } from "react"


const RequsetCard = () => {


    return(
        <>
        <Card bg={'#fff'} radius={20} style={{ border: '1px solid #ccc', background: '#f9f9f9', direction: 'rtl' }}>
              <Stack gap={20}>
                <Group position="apart" align="center">
                    <PillBottle size={25} />
                  <Title size="md">
                    ميتفورمين 
                    </Title>
                  
                </Group>
                <Flex justify={'space-between'} align={'center'}>
                    <Text size="sm" c="dimmed">
                       (Mitformine)
                      </Text>
                     <Text size="sm" c="dimmed">
                      {حبوب}
                      </Text>
                </Flex>
        
                <Group position="apart">
                    <Text>
                     {dosage} 
                    </Text>
                  <Text>تاريخ الانتهاء: 2025/12/12</Text>
                  
                </Group>
        
                <Group position="apart" >
                  
                  <Text fw={600}>
                    {quantity}
                    </Text>
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
        </>
    )
}
export default RequsetCard