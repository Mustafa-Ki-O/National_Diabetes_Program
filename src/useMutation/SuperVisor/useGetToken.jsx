
import { useMutation } from "@tanstack/react-query";
import { FetchReqInfo } from "../../api/SuperVisor/FetchReqInfo";
import { GetToken } from "../../api/SuperVisor/GetToken";

const useGetToken= (setCode) => {
  const { mutate: getToken, isPending} = useMutation({
    mutationFn: (id) => 
      GetToken(id).then(res => {      
        setCode(res);
      }),
    onSuccess: () => {
      notifications.show({
                title: 'تم توليد رمز صالح ل 12 ساعة',
                autoClose: 4000,
                color: 'blue',
              })   
      
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { getToken, isPending };
};

export default useGetToken;