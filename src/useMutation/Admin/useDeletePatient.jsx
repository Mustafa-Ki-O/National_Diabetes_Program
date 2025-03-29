import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import DeletePatient from "../../api/Admin/DeletePatient";
import { useNavigate } from "react-router-dom";

const useDeletePatient = () => {
//   const navigate = useNavigate();
  const { mutate: deletePatient, isPending } = useMutation({
    mutationFn: (id) => DeletePatient(id),
    onSuccess: () => {
        console.log("تم بنجاح");
        notifications.show({
          title: 'تم حذف الحساب',
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
  return { deletePatient, isPending };
};
export default useDeletePatient;
