import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";
import PostProfile from "../../api/Patient/PostProfile";
import useFetchProfile from "./useFetchProfile";

const usePostProfile = (setInfo) => {
  const navigate = useNavigate();
  const {fetchProfile,isPending:isPendingProfile} = useFetchProfile(setInfo)
  const { mutate: postProfile, isPending } = useMutation({
    mutationFn: (patientInfo) => PostProfile(patientInfo),
    onSuccess: () => {
      console.log("تم بنجاح");
      notifications.show({
      title: 'تم التحديث بنجاح',
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
  return { postProfile, isPending };
};
export default usePostProfile;
