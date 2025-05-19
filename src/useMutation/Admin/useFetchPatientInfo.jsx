import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import FetchAllPatientInfo from "../../api/Admin/FetchAllPatientInfo";
import { useNavigate } from "react-router-dom";

const useFetchPatientInfo = (setPatient) => {
  const navigate = useNavigate();
  const { mutate: fetchInfo, isPending: isPendingFetch} = useMutation({
    mutationFn: (id) => FetchAllPatientInfo(id).then((res)=>{
      setPatient(res)
    }),
    onSuccess: () => {
        console.log("تم بنجاح");
        notifications.show({
          title: 'تم جلب المعلومات',
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
  return { fetchInfo, isPendingFetch };
};
export default useFetchPatientInfo;
