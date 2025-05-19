import { Button, Flex, Modal,Stack,Text, Title } from "@mantine/core"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import dayjs from "dayjs";

const AddReviewModal = ({name,patientId,opened,close}) => {
    const [submited,setSubmited] = useState(false);
    const navigate = useNavigate();

    const handleAdd = () =>{
        setSubmited(true);
        close();
        navigate(`/National_Diabetes_Program/patientInfo/${patientId}/add-review`)
      }

      const today = dayjs(new Date()).format('DD-MM-YYYY');
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
             اضافة مراجعة
          </Title>
          <Stack gap={40} dir="ltr" mt={20}>
            <Flex align={'center'} justify={'space-around'}>
             <Text  fw={600} size={'1.4rem'} c={'#000'}>
                {name}
             </Text>
              <Text fw={600} size={'1.4rem'} c={'#000'}>
              : المريض 
             </Text>
            </Flex>
            <Flex align={'center'} justify={'space-around'}>
             <Text fw={600} size={'1.3rem'} c={'#000'}>
                {today}
             </Text>
              <Text fw={600} size={'1.3rem'} c={'#000'}>
             : تاريخ اليوم 
             </Text>
            </Flex>
          </Stack>
          <Flex gap={30} mt={30} w='100%' justify='space-between'>
           <Button size="md" radius={10} fullWidth variant="filled" color="#37a8ef" onClick={handleAdd}>
             متابعة
           </Button>
           <Button size="md" radius={10} fullWidth variant="outline" color="#37a8ef" onClick={close}>
              تراجع
           </Button>
          </Flex>
        </Stack>
      </Modal>
        </>
    )


}
export default AddReviewModal