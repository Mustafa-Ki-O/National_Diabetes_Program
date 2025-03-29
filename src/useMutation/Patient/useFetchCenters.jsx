import { useMutation } from "@tanstack/react-query";
import FetchCenters from "../../api/Patient/FetchCenters";

const useFetchCenters = () => {
  const { mutate: fetchCenters, isPending } = useMutation({
    mutationFn: (setCenterNames) => 
      FetchCenters().then(res => {
        const centerNames = res.map(element => element.centerName);
        setCenterNames(centerNames);
      }),
    onSuccess: () => {
      console.log("تم بنجاح");
      // setCenterNames(data.centerName);
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { fetchCenters, isPending };
};

export default useFetchCenters;