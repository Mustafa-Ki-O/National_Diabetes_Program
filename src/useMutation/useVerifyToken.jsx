import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import { VerifyToken } from "../api/VerifyToken";
import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
const useVerifyToken = () => {
  const navigate = useNavigate();
      const [userRole,setUserRole] = useState()
  
      useEffect(()=>{
       const user = JSON.parse(localStorage.getItem('user'))
       setUserRole(user?.role)
      },[userRole])
  
  const { mutate: verify, isPending } = useMutation({
    mutationFn: (token) => VerifyToken(token),
    onMutate: () => {
      // عرض إشعار التحميل عند بدء الطلب
      const no = notifications.show({
        title: 'جاري تسجيل الدخول',
        message: 'يرجى الانتظار...',
        autoClose: false,
        radius: 'md',
        color: 'blue',
        loading: true,
        withCloseButton: false,
      });
      return { no }; 
    },
    onSuccess: (data, variables, context) => {
      // console.log('data : ',data)
      // تحديث الإشعار عند النجاح
      notifications.update({
        id: context.no,
        title: 'تم تسجيل الدخول',
        message: null,
        autoClose: 2000,
        radius: 'md',
        color: 'green',
        loading: false,
      });
      
      setTimeout(() => {
        console.log(userRole)
        userRole === 'center' ? navigate("/National_Diabetes_Program/home/") : navigate("/National_Diabetes_Program/patient-home/")
      }, 2000);
    }, 
    onError: (err, variables, context) => {
      // تحديث الإشعار عند الخطأ
      notifications.update({
        id: context.no,
        title: 'انتهت صلاحية الجلسة',
        message: "يرجى تسجيل الدخول مرة أخرى",
        autoClose: 4000,
        color: 'red',
        loading: false,
      });
    },
  });
  
  return { verify, isPending };
};

export default useVerifyToken;