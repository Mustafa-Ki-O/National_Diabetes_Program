import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import { UpdateQuantity } from "../../api/SuperVisor/UpdateQuantity";

const useUpdateQuantity= () => {
    // const navigate=useNavigate()
  const { mutate: updateReq, isPending} = useMutation({
    mutationFn: (req) =>  UpdateQuantity(req),
     
    onSuccess: () => {
      notifications.show({
            title: 'تم ارسال الطلب',
            autoClose: 4000,
            color: 'blue',
        }) 
        // setTimeout(()=>{
        //    navigate(-1)
        // },400)
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { updateReq, isPending };
};

export default useUpdateQuantity;