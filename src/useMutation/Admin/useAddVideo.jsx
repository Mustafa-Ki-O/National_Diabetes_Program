import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import { useNavigate } from "react-router-dom";
import PostVideo from "../../api/Admin/PostVideo";
import useFetchVideos from "./useFetchVideos";

const useAddVideo = (setAllVideos) => {

   const {fetchVideos,isPending:isPendingFetch} = useFetchVideos(setAllVideos)
  const navigate = useNavigate();
  const { mutate: addVideo, isPending } = useMutation({
    mutationFn: (formData) => PostVideo(formData),
    onSuccess: () => {
      fetchVideos()
        console.log("تم بنجاح");
        notifications.show({
          loading:isPendingFetch,
          title: 'تم رفع الفيديو بنجاح',
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
  return { addVideo, isPending };
};
export default useAddVideo