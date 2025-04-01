import { useMutation } from "@tanstack/react-query";
import FetchCities from "../../api/Patient/FetchCities";

const useFetchCities = () => {
  const { mutate: fetchCities, isPending :isPendingCities} = useMutation({
    mutationFn: (setCitiesNames) => 
      FetchCities().then(res => {      
        setCitiesNames(res);
      }),
    onSuccess: () => {
      console.log("تم بنجاح");
      // setCenterNames(data.centerName);
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { fetchCities, isPendingCities };
};

export default useFetchCities;