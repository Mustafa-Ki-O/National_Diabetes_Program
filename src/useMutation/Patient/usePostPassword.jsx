import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";
import PostProfile from "../../api/Patient/PostProfile";
import PostPassword from "../../api/Patient/PostPassword";

const usePostPassword = () => {
  const navigate = useNavigate();
  const { mutate: postPassword, isPending } = useMutation({
    mutationFn: (passWord) => PostPassword(passWord),
    onSuccess: () => {
      // console.log("تم بنجاح");
      notifications.show({
      title: 'تم التحقق بنجاح',
      autoClose: 3000,
      color: 'blue',
    })
    //   localStorage.clear();
      navigate("/National_Diabetes_Program/patient-home");
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
