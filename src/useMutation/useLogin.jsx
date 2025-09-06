import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
// import PostAdmin from "../../api/Admin/PostAdmin";
import { SignIn } from "../api/SignIn";
import { useNavigate } from "react-router-dom";
import { User } from "lucide-react";

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
      // res.role === 'center' ? navigate("/National_Diabetes_Program/home/") : res.first_login ? navigate("/National_Diabetes_Program/resetPassword/") : navigate("/National_Diabetes_Program/patient-home/")
       if (res.role === 'center') {
         navigate("/National_Diabetes_Program/home/");
       } else if (res.first_login) {

           navigate("/National_Diabetes_Program/resetPassword/");
       } else {
            const user = JSON.parse(localStorage.getItem('user'));
           user.first_use_seen = true;
           localStorage.setItem('user', JSON.stringify(user));
           navigate("/National_Diabetes_Program/patient-home/");
       }

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
