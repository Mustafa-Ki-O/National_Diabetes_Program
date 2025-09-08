import { Button, Flex, List, Modal,Stack,Text, ThemeIcon, Title } from "@mantine/core"
import { Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router"

const WarningModal = ({opened,close,medicines}) => {
    
    const navigate = useNavigate()
    const handleClick =() => {
        navigate('/National_Diabetes_Program/medicinesMangemet/')
    }

    return(
        <>
         <Modal
        w="100%"
        radius={20}
        opened={opened}
        onClose={close}
        centered
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 2,
        }}
        style={{ position: "absolute", right: 0 }}
      >
        <Stack pb={50} dir="rtl" className="modal" w="70%" m="auto" gap={15}>
          <Title order={3} fw={900} ta="center">
            دعم المخزون
          </Title>
          <Text size="md" fw={700} c="#1D1D1B55" ta="center">
            يجب ارسال طلب أدوية لجلبها الى المخزن
          </Text>
          <List px={10} spacing="sm"
            icon={
            <ThemeIcon color="red" radius="xl" size={12}>
              <Circle size={8} />
            </ThemeIcon>
          }>
               {medicines?.map((med) => (
              <List.Item key={med.id}>
                {`${med.name_arabic} ${med.dosage}mg (${med.quantity} علبة)`}
              </List.Item>
            ))}
          </List>
          <Flex gap={30} mt={30} w='100%' justify='space-between'>
           <Button size="md" radius={10} fullWidth variant="filled" color="#E53935" onClick={handleClick}>
             انتقال الى المخزن
           </Button>
          </Flex>
        </Stack>
      </Modal>
        </>
    )
}
export default WarningModal