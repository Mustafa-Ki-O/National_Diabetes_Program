
import { useMutation } from "@tanstack/react-query";
import { FetchReqInfo } from "../../api/SuperVisor/FetchReqInfo";

const useFetchReqInfo = (setRequstInfo) => {
  const { mutate: fetchReqInfo, isPending} = useMutation({
    mutationFn: (id) => 
      FetchReqInfo(id).then(res => {      
        setRequstInfo(res);
      }),
    onSuccess: () => {
      // console.log("تم بنجاح");
      
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { fetchReqInfo, isPending };
};

export default useFetchReqInfo;