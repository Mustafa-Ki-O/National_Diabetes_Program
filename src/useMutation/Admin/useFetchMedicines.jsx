import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";
import FetchMedicines from "../../api/Admin/FetchMedicines";

const useFetchMedicines = () => {
  const { mutate: fetchMedicines, isPending} = useMutation({
    mutationFn: (setMedicines) => FetchMedicines().then((res)=>{
      setMedicines(res);
    }),
    onSuccess: () => {
        // console.log("تم بنجاح");
        
    },
    onError: (err) => {
      console.log("ERROR", err);
      notifications.show({
        title: 'هناك خطأ ما ,اعد المحاولة',
        message: err.message || "An unknown error occurred", 
        autoClose: 4000,
        color: 'red',
      });
    },
  });
  return {fetchMedicines,isPending};
};
export default useFetchMedicines;
