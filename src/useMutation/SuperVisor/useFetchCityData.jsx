import { useMutation } from "@tanstack/react-query";
import { FetchCityData } from "../../api/SuperVisor/FetchCityData";

const useFetchCityData = (setData) => {
  const { mutate: fetchCityData, isPending} = useMutation({
    mutationFn: (cityName) => 
      FetchCityData(cityName).then(res => {      
        setData(res);
      }),
    onSuccess: () => {
      // console.log("تم بنجاح");
      
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { fetchCityData, isPending };
};

export default useFetchCityData;