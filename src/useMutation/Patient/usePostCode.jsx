import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";
import PostCode from "../../api/Patient/PostCode";

const usePostCode = () => {
  const navigate = useNavigate();
  const { mutate: postCode, isPending } = useMutation({
    mutationFn: (patientInfo) => PostCode(patientInfo),
    onSuccess: () => {
        console.log("تم بنجاح");
      notifications.show({
      title: 'تم التحقق بنجاح',
      autoClose: 3000,
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
  return { postCode, isPending };
};
export default usePostCode;
