import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";
import PostArticle from "../../api/Admin/PostArticle";
import useFetchArticles from "./useFetchArticles";

const useAddArticle = (setAllArticles) => {

 const {fetchArticles,isPending:isPendingFetch} = useFetchArticles(setAllArticles)

  const navigate = useNavigate();
  const { mutate: addArticle, isPending } = useMutation({
    mutationFn: (formData) => PostArticle(formData),
    onSuccess: () => {
        fetchArticles()
        console.log("تم بنجاح");
        notifications.show({
          loading:isPendingFetch,
          title: 'تم رفع المقال بنجاح',
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
  return { addArticle, isPending };
};
export default useAddArticle