import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import DeletePatient from "../../api/Admin/DeletePatient";
import { useNavigate } from "react-router-dom";
import DeleteProfile from "../../api/Admin/DeleteProfile";

const useDeleteProfile = () => {
  const navigate = useNavigate();
  const { mutate: deleteProfile, isPending } = useMutation({
    mutationFn: (formData) => DeleteProfile(formData),
    onSuccess: () => {
        // console.log("تم بنجاح");
        notifications.show({
          title: 'تم حذف الحساب',
          autoClose: 3000,
        });
        navigate('/National_Diabetes_Program/')
        localStorage.clear()
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
  return { deleteProfile, isPending };
};
export default useDeleteProfile;
