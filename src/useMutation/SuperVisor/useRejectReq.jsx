
import { useMutation } from "@tanstack/react-query";
import { RejectReq } from "../../api/SuperVisor/RejectReq";
import { useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";


const useRejectReq = () => {
     const navigate=useNavigate()
  const { mutate: rejReq, isPending} = useMutation({
    mutationFn: (id) =>  RejectReq(id),
     
    onSuccess: () => {
      // console.log("تم بنجاح");
      notifications.show({
            title: 'تم رفض الطلب',
            autoClose: 4000,
            color: 'orange',
        })    
        setTimeout(()=>{
           navigate(-1)
        },400)
        
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { rejReq, isPending };
};

export default useRejectReq;