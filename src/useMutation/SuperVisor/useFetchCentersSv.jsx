import { useMutation } from "@tanstack/react-query";
import { FetchCentersSv } from "../../api/SuperVisor/FetchCentersSv";

const useFetchCentersSv = () => {
  const { mutate: fetchCenters, isPending} = useMutation({
    mutationFn: (setCenters) => 
      FetchCentersSv().then(res => {      
        setCenters(res);
      }),
    onSuccess: () => {
      // console.log("تم بنجاح");
      // setCenterNames(data.centerName);
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { fetchCenters, isPending };
};

export default useFetchCentersSv;