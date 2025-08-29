import { useMutation } from "@tanstack/react-query";

import { FetchQueries } from "../../api/SuperVisor/FetchQueries";

const useFetchQueries = () => {
  const { mutate: fetchQueries, isPending} = useMutation({
    mutationFn: (setRequsts) => 
      FetchQueries().then(res => {      
        setRequsts(res);
      }),
    onSuccess: () => {
      console.log("تم بنجاح");
      
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { fetchQueries, isPending };
};

export default useFetchQueries;