import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
// import PostAdmin from "../../api/Admin/PostAdmin";
import { useNavigate } from "react-router-dom";
import { PostDate } from "../../api/SuperVisor/PostDate";

const usePostDate = () => {

  const navigate = useNavigate();
  const { mutate: postDate,  isPending } = useMutation({
    mutationFn: (date) => PostDate(date),
    onSuccess: () => {
        console.log("تم بنجاح");
        // console.log('res : ',res)
        notifications.show({
          title: "يتم تحميل الملف راقب لوحة التقدم",
          autoClose: 4000,
          color: 'blue',
        })    

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
  return {  postDate, isPending };
};
export default usePostDate;
