import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import FetchPatientReview from "../../api/Admin/FetchPatientReview";
import { useNavigate } from "react-router-dom";

const useFetchPatientReview = (setReview) => {
  const navigate = useNavigate();
  const { mutate: fetchReview, isPending} = useMutation({
    mutationFn: (rid) => FetchPatientReview(rid).then((res)=>{
      setReview(res);
    }),
    onSuccess: () => {
        console.log("تم بنجاح");
    },
    onError: (err) => {
      console.log("ERROR", err);
      notifications.show({
        title: 'هناك خطأ ما ,اعد المحاولة',
        message: err.message || "An unknown error occurred", // Ensure `err.message` exists
        autoClose: 4000,
        color: 'red',
      });
    },
  });
  return { fetchReview,isPending};
};
export default useFetchPatientReview;
