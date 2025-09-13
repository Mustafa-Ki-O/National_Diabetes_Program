import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import FetchRecords from "../../api/Admin/FetchRecords";

const useFetchRecords = (setRecords) => {
  const { mutate: fetchRecords, isPending} = useMutation({
    mutationFn: (activePage) => FetchRecords(activePage).then((res) => {
      setRecords(res);
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
  return { fetchRecords,isPending};
};
export default useFetchRecords;
