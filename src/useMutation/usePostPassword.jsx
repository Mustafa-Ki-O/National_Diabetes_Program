import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";
import PostPassword from "../api/PostPassword";

const usePostPassword= () => {
  const navigate = useNavigate();
  const { mutate: postPassword, isPending } = useMutation({
    mutationFn: (form) => PostPassword(form),
    onSuccess: () => {
        // console.log("تم بنجاح");
      notifications.show({
      title:'تم تعيين كلمة المرور بنجاح',
      autoClose: 3000,
      color: 'blue',
    })
      sessionStorage.clear();
      navigate("/National_Diabetes_Program/");
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
  return { postPassword, isPending };
};
export default usePostPassword;
