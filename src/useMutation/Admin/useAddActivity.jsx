import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";
import PostActivity from "../../api/Admin/PostActivity";

const useAddActivity= () => {

  const navigate = useNavigate();
  const { mutate: addActivity, isPending } = useMutation({
    mutationFn: (formData) => PostActivity(formData),
    onSuccess: () => {
        console.log("تم بنجاح");
        notifications.show({
          title: 'تم رفع النشاط بنجاح',
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
  return { addActivity, isPending };
};
export default useAddActivity