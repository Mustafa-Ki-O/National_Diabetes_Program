import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import FetchSomeInfoHome from "../../api/Admin/FetchSomeInfoHome";

const useFetchSomeInfoHome = (setHomeInfo) => {
  const { mutate: fetchHomeInfo, isPending} = useMutation({
    mutationFn: () => FetchSomeInfoHome().then((res)=>{
      setHomeInfo(res);
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
  return { fetchHomeInfo,isPending};
};
export default useFetchSomeInfoHome;
