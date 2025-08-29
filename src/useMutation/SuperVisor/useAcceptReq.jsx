import { useMutation } from "@tanstack/react-query";
import { AcceptReq } from "../../api/SuperVisor/AcceptReq";
import { useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";

const useAcceptReq= () => {
    const navigate=useNavigate()
  const { mutate: accReq, isPending} = useMutation({
    mutationFn: (accReq) =>  AcceptReq(accReq),
     
    onSuccess: () => {
      notifications.show({
            title: 'تم قبول الطلب',
            autoClose: 4000,
            color: 'green',
        }) 
        setTimeout(()=>{
           navigate(-1)
        },400)
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { accReq, isPending };
};

export default useAcceptReq;