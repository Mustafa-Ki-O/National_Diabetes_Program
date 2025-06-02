import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";
import PostEmail from "../api/PostEmail";

const usePostEmail = () => {
  const navigate = useNavigate();
  const { mutate: postEmail, isPending } = useMutation({
    mutationFn: (email) => PostEmail(email),
    onSuccess: (data, variables) => {
        console.log("تم بنجاح");
      notifications.show({
      title: "أدخل الكود الذي تلقيته",
      autoClose: 3000,
      color: 'blue',
    })
    //   localStorage.clear();
      sessionStorage.setItem('email',JSON.stringify(variables))
      navigate("/National_Diabetes_Program/verify-otp/");
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
  return { postEmail, isPending };
};
export default usePostEmail;
