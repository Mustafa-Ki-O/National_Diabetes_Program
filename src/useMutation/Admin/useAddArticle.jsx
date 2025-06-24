import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";
import PostArticle from "../../api/Admin/PostArticle";

const useAddArticle = () => {

  const navigate = useNavigate();
  const { mutate: addArticle, isPending } = useMutation({
    mutationFn: (formData) => PostArticle(formData),
    onSuccess: () => {
        console.log("تم بنجاح");
        notifications.show({
          title: 'تم رفع المقال بنجاح',
          autoClose: 3000,
        });
        //  navigate(`/National_Diabetes_Program/patientInfo/`)
        // localStorage.clear()
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
  return { addArticle, isPending };
};
export default useAddArticle