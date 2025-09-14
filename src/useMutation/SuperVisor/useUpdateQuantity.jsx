import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import { UpdateQuantity } from "../../api/SuperVisor/UpdateQuantity";
import useFetchRecords from "../Admin/useFetchRecords";

const useUpdateQuantity= (activePage,setRecordsInfo) => {
    // const navigate=useNavigate()
        const {fetchRecords,isPending:isPendingRecords} = useFetchRecords(setRecordsInfo)
        
  const { mutate: updateReq, isPending} = useMutation({
    mutationFn: (req) =>  UpdateQuantity(req),
     
    onSuccess: () => {
      notifications.show({
            title: 'تم ارسال الطلب',
            autoClose: 4000,
            color: 'blue',
        }) ,
        fetchRecords(activePage);
    
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { updateReq, isPending ,isPendingRecords };
};

export default useUpdateQuantity;