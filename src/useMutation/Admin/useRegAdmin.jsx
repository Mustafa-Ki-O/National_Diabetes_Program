import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import PostAdmin from "../../api/Admin/PostAdmin";
import { useNavigate } from "react-router-dom";

const useRegAdmin = () => {
  const navigate = useNavigate();
  const { mutate: register, isLoading: isLoading } = useMutation({
    mutationFn: (formData) => PostAdmin(formData),
    onSuccess: () => {
        console.log("تم بنجاح");
    //   toast.success("تم انشاء الحساب بنجاح");
    notifications.show({
          title: 'تم انشاء الحساب بنجاح',
          autoClose: 4000,
          color: 'blue',
    })
      navigate("/National_Diabetes_Program/");
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
  return { register, isLoading };
};
export default useRegAdmin;
