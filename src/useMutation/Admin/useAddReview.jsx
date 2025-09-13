import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";
import PostReview from "../../api/Admin/PostReview";

const useAddReview = (patientId) => {
  // console.log(patientId)
  const navigate = useNavigate();
  const { mutate: addReview, isPending } = useMutation({
    mutationFn: (formData) => PostReview(formData),
    onSuccess: () => {
        // console.log("تم بنجاح");
        notifications.show({
          title: 'تم رفع المراجعة بنجاح',
          autoClose: 3000,
        });
         navigate(`/National_Diabetes_Program/patientInfo/${patientId}/`)
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
  return { addReview, isPending };
};
export default useAddReview