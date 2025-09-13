import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";
import FetchProfile from "../../api/Admin/FetchProfile";

const useFetchProfile = (setProfile) => {
  const { mutate: fetchProfile, isPending} = useMutation({
    mutationFn: (id) => FetchProfile(id).then((res)=>{
      setProfile(res);
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
        message: err.message || "An unknown error occurred", 
        autoClose: 4000,
        color: 'red',
      });
    },
  });
  return { fetchProfile,isPending};
};
export default useFetchProfile;
