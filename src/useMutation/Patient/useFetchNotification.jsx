import { useMutation } from "@tanstack/react-query";
import FetchNotification from "../../api/Patient/FetchNotification";

const useFetchNotification = (setNotifications) => {
  const { mutate: fetchNotification, isPending} = useMutation({
    mutationFn: () => 
      FetchNotification().then(res => {      
        setNotifications(res);
      }),
    onSuccess: () => {
      console.log("تم بنجاح");
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { fetchNotification, isPending };
};

export default useFetchNotification;