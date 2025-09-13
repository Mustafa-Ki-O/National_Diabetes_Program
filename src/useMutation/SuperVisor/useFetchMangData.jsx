import { useMutation } from "@tanstack/react-query";
import { FetchMangData } from "../../api/SuperVisor/FetchMangData";

const useFetchMangData = () => {
  const { mutate: fetchMangData, isPending} = useMutation({
    mutationFn: (setData) => 
      FetchMangData().then(res => {      
        setData(res);
      }),
    onSuccess: () => {
      // console.log("تم بنجاح");
      
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { fetchMangData, isPending };
};

export default useFetchMangData;