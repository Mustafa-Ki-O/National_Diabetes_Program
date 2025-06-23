import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
// import PostAdmin from "../../api/Admin/PostAdmin";
import { SignIn } from "../api/SignIn";
import { useNavigate } from "react-router-dom";

const useLogin = () => {

  const navigate = useNavigate();
  const { mutate: login,  isPending } = useMutation({
    mutationFn: (formData) => SignIn(formData),
    onSuccess: (res) => {
        console.log("تم بنجاح");
        console.log('res : ',res)
        notifications.show({
          title: 'تم تسجيل الدخول',
          autoClose: 4000,
          color: 'blue',
        })    
      res.role === 'center' ? navigate("/National_Diabetes_Program/home/") : navigate("/National_Diabetes_Program/patient-home/")
      
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
  return { login, isPending };
};
export default useLogin;
