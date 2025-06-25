import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";
import PostActivity from "../../api/Admin/PostActivity";
import useFetchActivities from "./useFetchActivities";

const useAddActivity= (setAllActivities) => {

  const {fetchActivities,isPending:isPendingFetch} = useFetchActivities(setAllActivities)
  
  const navigate = useNavigate();
  const { mutate: addActivity, isPending } = useMutation({
    mutationFn: (formData) => PostActivity(formData),
    onSuccess: () => {
       fetchActivities()
        console.log("تم بنجاح");
        notifications.show({
          loading:isPendingFetch,
          title: 'تم رفع النشاط بنجاح',
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
  return { addActivity, isPending };
};
export default useAddActivity