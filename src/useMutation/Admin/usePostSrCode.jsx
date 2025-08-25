import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";
import PostSrCode from "../../api/Admin/PostSrCode";

const usePostSrCode = () => {
  const navigate = useNavigate();
  const { mutate: postCode, isPending } = useMutation({
    mutationFn: (secret_key) => PostSrCode(secret_key),
    onSuccess: () => {
        console.log("تم بنجاح");
      notifications.show({
      title: 'تم التحقق بنجاح',
      autoClose: 3000,
      color: 'blue',
    })
    //   localStorage.clear();
     navigate('/National_Diabetes_Program/registerAdmin/')
    },
    onError: (err) => {
      console.log("ERROR", err);
      notifications.show({
        title: 'هناك خطأ ما ,اعد المحاولة',
        message: err.message || "An unknown error occurred", 
        autoClose: 4000,
        color: 'red',
      });
    },
  });
  return { postCode, isPending };
};
export default usePostSrCode;
