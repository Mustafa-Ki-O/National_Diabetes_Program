import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";
import PostLocation from "../../api/Patient/PostLocation";
import useFetchProfile from "./useFetchProfile";

const usePostLocation = (setInfo) => {
  const navigate = useNavigate();
   const {fetchProfile,isPending:isPendingProfile} = useFetchProfile(setInfo)
  const { mutate: postLocation, isPending } = useMutation({
    mutationFn: (patientInfo) => PostLocation(patientInfo),
    onSuccess: () => {
      // console.log("تم بنجاح");
      notifications.show({
      title:  'تم التحديث بنجاح',
      autoClose: 3000,
      color: 'blue',
    })
    //   localStorage.clear();
    //   navigate("/National_Diabetes_Program/");
    fetchProfile()
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
  return { postLocation, isPending };
};
export default usePostLocation;
