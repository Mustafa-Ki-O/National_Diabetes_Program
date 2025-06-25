import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";

import FetchArticles from "../../api/Admin/FetchArticles";

const useFetchArticles = (setAllArticles) => {
  const { mutate: fetchArticles, isPending} = useMutation({
    mutationFn: () => FetchArticles().then((res)=>{
      setAllArticles(res);
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
  return { fetchArticles,isPending};
};
export default useFetchArticles;
