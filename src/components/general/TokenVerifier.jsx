// components/TokenVerifier.jsx
import { useEffect } from "react";
// import useVerifyToken from "../useMutation/useVerifyToken";
import useVerifyToken from '../../useMutation/useVerifyToken'
function TokenVerifier({setProgress}) {
  const { verify,isPending } = useVerifyToken();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.token;
    if (token) {
      verify(token);
    }
  }, []);

    useEffect(()=>{
        setProgress(isPending)
    },[isPending])

  return null;
}

export default TokenVerifier;
