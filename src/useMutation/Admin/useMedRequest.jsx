import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";
import PostMedRequest from "../../api/Admin/PostMedRequest";
import useFetchRecords from "./useFetchRecords";

const useMedRequest = (activePage,setRecordsInfo) => {
  const navigate = useNavigate();
      const {fetchRecords,isPending:isPendingRecords} = useFetchRecords(setRecordsInfo)
      
  const { mutate: requestMed, isPending } = useMutation({
    mutationFn: (medicine) => PostMedRequest(medicine),
    onSuccess: () => {
        // console.log("تم بنجاح");
      notifications.show({
      title: 'تم رفع الطلب ',
      autoClose: 3000,
      color: 'blue',
    }),
    fetchRecords(activePage);

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
  return {  requestMed, isPending,isPendingRecords };
};
export default useMedRequest;
