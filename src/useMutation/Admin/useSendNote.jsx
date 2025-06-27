import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import PostNote from "../../api/Admin/PostNote";

const useSendNote = () => {
 
  const { mutate: sendNote, isPending } = useMutation({
    mutationFn: (formData) => PostNote(formData),
    onSuccess: () => {
        console.log("تم بنجاح");
        notifications.show({
          title:"تم الارسال",
          autoClose: 3000,
        });
        
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
  return { sendNote, isPending };
};
export default useSendNote
