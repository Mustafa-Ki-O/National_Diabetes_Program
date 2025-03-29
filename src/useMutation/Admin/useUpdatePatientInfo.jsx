import { useMutation } from "@tanstack/react-query";
import { notifications } from '@mantine/notifications';
import UpdatePatientInfo from "../../api/Admin/UpdatePatientInfo";

const useUpdatePatientInfo = (setPatient) => {
  const mutation = useMutation({
    mutationFn: async (patientData) => {
      const response = await UpdatePatientInfo(patientData);
      return response; // Make sure this returns the data
    },
    onSuccess: (res) => {
      setPatient(res);
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
    updatePatient: mutation.mutate,
    isLoading: mutation.isLoading
  };
};

export default useUpdatePatientInfo;