import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";
import PostOtp from "../api/PostOtp";

const usePostOtp= () => {
  const navigate = useNavigate();
  const { mutate: postOtp, isPending } = useMutation({
    mutationFn: (otp) => PostOtp(otp),
    onSuccess: () => {
        // console.log("تم بنجاح");
      notifications.show({
      title: 'تم التحقق بنجاح',
      autoClose: 3000,
      color: 'blue',
    })
    //   localStorage.clear();
     navigate('/National_Diabetes_Program/changePassword/')
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
  return { postOtp, isPending };
};
export default usePostOtp;
