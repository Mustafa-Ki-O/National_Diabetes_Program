import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
// import PostAdmin from "../../api/Admin/PostAdmin";
import { useNavigate } from "react-router-dom";
import { SignInSv } from "../../api/SuperVisor/SignInSv";

const useLoginSv = () => {

  const navigate = useNavigate();
  const { mutate: loginSv,  isPending } = useMutation({
    mutationFn: (formData) => SignInSv(formData),
    onSuccess: (res) => {
        console.log("تم بنجاح");
        console.log('res : ',res)
        notifications.show({
          title: 'تم تسجيل الدخول',
          autoClose: 4000,
          color: 'blue',
        })    
      navigate("/National_Diabetes_Program/superVisor/home-sv/")
    //   res.role === 'center' ? navigate("/National_Diabetes_Program/home/") : res.first_login ? navigate("/National_Diabetes_Program/resetPassword/") : navigate("/National_Diabetes_Program/patient-home/")
      
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
  return { loginSv, isPending };
};
export default useLoginSv;
