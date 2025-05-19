import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
// import PostAdmin from "../../api/Admin/PostAdmin";
import { VerifyToken } from "../api/VerifyToken";
import { useNavigate } from "react-router-dom";

const useVerifyToken = () => {
  const navigate = useNavigate();
  const { mutate: verify,  isPending } = useMutation({
    mutationFn: (token) => VerifyToken(token),
onSuccess: () => {
    const no = notifications.show({
      title: 'جاري تسجيل الدخول',
      autoClose: false,
      radius: 'md',
      color: 'blue',
      loading: true,
      withCloseButton: false,
    });

   setTimeout(() => {
    notifications.update({
      id: no,
      title: 'تم تسجيل الدخول',
      autoClose: 2000,
      radius: 'md',
      color: 'green',
      loading: false,
    });
  }, 2000);
    navigate("/National_Diabetes_Program/home/");
  }, 
    onError: (err) => {
      console.log("ERROR", err);
      notifications.show({
        title: 'انتهت صلاحية الجلسة',
        message: "يرجى تسجيل الدخول مرة أخرى",
        autoClose: 4000,
        color: 'red',
      });
    },
    
  });
  return { verify, isPending };
};
export default useVerifyToken;
