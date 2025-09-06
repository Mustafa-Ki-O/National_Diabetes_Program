import { useMutation } from "@tanstack/react-query";
import { FetchCityData } from "../../api/SuperVisor/FetchCityData";
import { FetchCenterData } from "../../api/SuperVisor/FetchCenterData";

const useFetchCenterData = (setData) => {
  const { mutate: fetchCenterData, isPending} = useMutation({
    mutationFn: (centerId) => 
      FetchCenterData(centerId).then(res => {      
        setData(res);
      }),
    onSuccess: () => {
      console.log("تم بنجاح");
      
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { fetchCenterData, isPending };
};

export default useFetchCenterData;