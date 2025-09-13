import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import FetchPatients from "../../api/Admin/FetchPatients";
import { useNavigate } from "react-router-dom";

const useFetchPatients = (setPatients) => {
  const navigate = useNavigate();
  const { mutate: fetchPatients, isPending} = useMutation({
    mutationFn: () => FetchPatients().then((res)=>{
      setPatients(res);
    }),
    onSuccess: () => {
        // console.log("تم بنجاح");
        // notifications.show({
        //   title: 'تم جلب المرضى المسجلين',
        //   autoClose: 3000,
        // });
        
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
  return { fetchPatients,isPending};
};
export default useFetchPatients;
