import { useMutation } from "@tanstack/react-query";
import FetchHomePatient from "../../api/Patient/FetchHomePatient";
import FetchPatientProfile from "../../api/Patient/FetchPatientProfile";

const useFetchProfile= (setInfo) => {
  const { mutate: fetchProfile, isPending } = useMutation({
    mutationFn: () => 
      FetchPatientProfile().then(res => {      
        setInfo(res);
      }),
    onSuccess: () => {
      console.log("تم بنجاح");
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { fetchProfile, isPending };
};

export default useFetchProfile;