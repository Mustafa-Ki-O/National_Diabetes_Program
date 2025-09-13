import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";

const useLogOut = () => {
  const navigate = useNavigate();
  const { mutate: logOut, isPending } = useMutation({
    mutationFn: () => localStorage.clear() ,
        onSuccess: () => {
        navigate("/National_Diabetes_Program/")
        // console.log("تم بنجاح");
        notifications.show({
          title: 'تم تسجيل الخروج من الحساب',
          autoClose: 3000,
        });
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
  return { logOut, isPending };
};
export default useLogOut ;
