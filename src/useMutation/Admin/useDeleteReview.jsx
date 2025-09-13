import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import DeleteReview from "../../api/Admin/DeleteReview";
import { useNavigate } from "react-router-dom";

const useDeleteReview = () => {
//   const navigate = useNavigate();
  const { mutate: deleteReview, isPending } = useMutation({
    mutationFn: (id) => DeleteReview(id),
    onSuccess: () => {
        // console.log("تم بنجاح");
        notifications.show({
          title: 'تم حذف المراجعة من السجل',
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
  return { deleteReview, isPending };
};
export default useDeleteReview;
