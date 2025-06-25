import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";
import FetchActivities from "../../api/Admin/FetchActivities";

const useFetchActivities = (setAllActivities) => {
  const { mutate: fetchActivities, isPending} = useMutation({
    mutationFn: () => FetchActivities().then((res)=>{
      setAllActivities(res);
    }),
    onSuccess: () => {
        console.log("تم بنجاح");
        
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
  return { fetchActivities,isPending};
};
export default useFetchActivities;
