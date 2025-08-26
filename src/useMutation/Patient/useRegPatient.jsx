import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import PostPatient from '../../api/Patient/PostPatient'
import { useNavigate } from "react-router-dom";
import useFetchPatients from "../Admin/useFetchPatients";

const useRegPatient = (setPatients) => {
  const navigate = useNavigate();
  const {fetchPatients,isPending:isPendingFetch} = useFetchPatients(setPatients);

  const { mutate: register, isPending } = useMutation({
    mutationFn: (newFormData) => PostPatient(newFormData),
    onSuccess: () => {
      fetchPatients()
      notifications.show({
      title: 'تمت اضافة المريض بنجاح',
      autoClose: 4000,
      color: 'blue',
    })
      // navigate("/National_Diabetes_Program/verifyEmail/");
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
  return { register, isPending };
};
export default useRegPatient;
