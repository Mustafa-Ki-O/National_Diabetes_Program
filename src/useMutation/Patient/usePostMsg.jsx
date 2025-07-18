import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";
import PostMsg from "../../api/Patient/PostMsg";

const usePostMsg = () => {
  const navigate = useNavigate();
  const { mutate: postMsg, isPending } = useMutation({
    mutationFn: (patientMsg) => PostMsg(patientMsg),
    onSuccess: () => {
        console.log("تم بنجاح");
      notifications.show({
      title: 'تم التحقق بنجاح',
      autoClose: 3000,
      color: 'blue',
    })
    //   localStorage.clear();
    //   navigate("/National_Diabetes_Program/");
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
  return { postMsg, isPending };
};
export default usePostMsg;
