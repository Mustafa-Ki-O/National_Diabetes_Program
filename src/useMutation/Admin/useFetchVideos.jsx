import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";
import FetchVideos from "../../api/Admin/FetchVideos";

const useFetchVideos = (setAllVideos) => {
  const { mutate: fetchVideos, isPending} = useMutation({
    mutationFn: () => FetchVideos().then((res)=>{
      setAllVideos(res);
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
  return { fetchVideos,isPending};
};
export default useFetchVideos;
