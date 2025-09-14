import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";
import PostMsg from "../../api/Patient/PostMsg";

const usePostMsg = () => {
  const navigate = useNavigate();
  const { mutateAsync: postMsg, isPending } = useMutation({
    mutationFn: (msg) => PostMsg(msg),
    onSuccess: () => {
    // console.log("تم بنجاح");
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
