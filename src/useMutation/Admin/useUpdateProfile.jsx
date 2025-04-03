import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import UpdateProfile from "../../api/Admin/UpdateProfile";

const useUpdateProfile = (setProfile) => {
  const mutation = useMutation({
    mutationFn: async (profileData) => {
      const response = await UpdateProfile(profileData);
      return response; 
    },
    onSuccess: (res) => {
      setProfile(res);
      notifications.show({
        title: "تم رفع التعديلات بنجاح",
        autoClose: 4000,
      });
    },
    onError: (err) => {
      notifications.show({
        title: 'هناك خطأ ما، أعد المحاولة',
        message: err.message || "حدث خطأ غير معروف",
        autoClose: 4000,
        color: 'red',
      });
    }
  });

  return {
    updateProfile: mutation.mutate,
    isPending: mutation.isPending
  };
};

export default useUpdateProfile;