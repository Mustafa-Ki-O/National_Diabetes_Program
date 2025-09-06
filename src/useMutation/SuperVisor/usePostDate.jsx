import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
// import PostAdmin from "../../api/Admin/PostAdmin";
import { useNavigate } from "react-router-dom";
import { PostDate } from "../../api/SuperVisor/PostDate";

const usePostDate = (setUrl) => {

  const navigate = useNavigate();
  const { mutate: postDate,  isPending } = useMutation({
    mutationFn: (date) => PostDate(date),
        onSuccess: (response) => {

      console.log("تم رفع الملف بنجاح");

      notifications.show({
        title: "الملف جاهز للتحميل",
        autoClose: 4000,
        color: 'blue',
      });

      // استلام الرابط من الاستجابة وتعيينه في setUrl
      if (response?.url) {
        setUrl(response.url);  // تعيين الرابط عند النجاح
      } else {
        notifications.show({
          title: 'لم يتم العثور على الرابط',
          message: 'لم يتم العثور على رابط الملف المرفوع',
          autoClose: 4000,
          color: 'red',
        });
      }
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
