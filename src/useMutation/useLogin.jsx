import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
// import PostAdmin from "../../api/Admin/PostAdmin";
import { SignIn } from "../api/SignIn";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();
  const { mutate: login, isLoading: isLoading } = useMutation({
    mutationFn: (formData) => SignIn(formData),
    onSuccess: () => {
        console.log("تم بنجاح");
        notifications.show({
          title: 'تم تسجيل الدخول',
          autoClose: 4000,
          color: 'blue',
        })    
    //   toast.success("تم انشاء الحساب بنجاح");
      navigate("/National_Diabetes_Program/home/");
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
  return { login, isLoading };
};
export default useLogin;
