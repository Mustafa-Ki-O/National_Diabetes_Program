import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";
import PostReadNotification from "../../api/Patient/PostReadNotification";

const usePostReadNote = () => {
  const { mutate: postRead, isPending } = useMutation({
    mutationFn: () => PostReadNotification(),
    onSuccess: () => {
        console.log("تم بنجاح");

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
  return { postRead, isPending };
};
export default usePostReadNote;
