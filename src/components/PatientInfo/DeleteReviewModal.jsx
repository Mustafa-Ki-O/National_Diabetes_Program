import { Button, Flex, Modal,Stack,Text, Title } from "@mantine/core"
import useDeleteReview from "../../useMutation/Admin/useDeleteReview";
// import useFetchPatients from "../../useMutation/Admin/useFetchPatients";
import { useEffect, useState } from "react";

const DeleteReviewModal = ({id,opened,close}) => {
    const {deleteReview,isPending} = useDeleteReview();
    // const {fetchPatients,isPending: isPendingFetch} = useFetchPatients(setPatients);
    const [submited,setSubmited] = useState(false);
    const handleDel = () =>{
        setSubmited(true);
        deleteReview(id);
        close();
        // fetchPatients();
      }

    // useEffect(()=>{
    //     if(submited){
    //         setProgress(isPending||isPendingFetch);
    //     }
    //  },[isPending||isPendingFetch])
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
            حذف المراجعة 
          </Title>
          <Text size="md" fw={700} c="#1D1D1B55" ta="center">
            هل انت متأكد من ازالة كافة المعلومات المتعلقة بالمراجعة ؟
          </Text>
          <Flex gap={30} mt={30} w='100%' justify='space-between'>
           <Button size="md" radius={10} fullWidth variant="filled" color="#E53935" onClick={handleDel}>
             حذف
           </Button>
           <Button size="md" radius={10} fullWidth variant="outline" color="#E53935" onClick={close}>
              تراجع
           </Button>
          </Flex>
        </Stack>
      </Modal>
        </>
    )


}
export default DeleteReviewModal