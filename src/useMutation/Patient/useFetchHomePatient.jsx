import { useMutation } from "@tanstack/react-query";
import FetchHomePatient from "../../api/Patient/FetchHomePatient";

const useFetchHomePatient= (setHomeInfo) => {
  const { mutate: fetchHomeP, isPending } = useMutation({
    mutationFn: () => 
      FetchHomePatient().then(res => {      
        setHomeInfo(res);
      }),
    onSuccess: () => {
      console.log("تم بنجاح");
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { fetchHomeP, isPending };
};

export default useFetchHomePatient;