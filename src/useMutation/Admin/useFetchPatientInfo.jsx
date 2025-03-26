import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import FetchAllPatientInfo from "../../api/Admin/FetchAllPatientInfo";
import { useNavigate } from "react-router-dom";

const useFetchPatientInfo = (setInfo) => {
  const navigate = useNavigate();
  const { mutate: fetchInfo, isLoading: isLoading } = useMutation({
    mutationFn: (id) => FetchAllPatientInfo(id).then((res)=>{
      setInfo(res)
    }),
    onSuccess: () => {
        console.log("تم بنجاح");
        notifications.show({
          title: 'تم جلب المعلومات',
          autoClose: 3000,
        });
    // toast.success("تم انشاء الحساب بنجاح");
    // notifications.show({
    //       title: 'تم انشاء الحساب بنجاح',
    //       autoClose: 4000,
    //       color: 'blue',
    // })
    //   navigate("/National_Diabetes_Program/");
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
  return { fetchInfo, isLoading };
};
export default useFetchPatientInfo;
