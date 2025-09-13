import { useMutation } from "@tanstack/react-query";
import FetchCenters from "../../api/Patient/FetchCenters";

const useFetchCenters = (setCenterNames) => {
  const { mutate: fetchCenters, isPending :isPendingCenters} = useMutation({
    mutationFn: (value) => 
      FetchCenters(value).then(res => {
        const centerNames = res.map(element => element.centerName);
        setCenterNames(centerNames);
      }),
    onSuccess: () => {
      // console.log("تم بنجاح");
      // setCenterNames(data.centerName);
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { fetchCenters, isPendingCenters };
};

export default useFetchCenters;