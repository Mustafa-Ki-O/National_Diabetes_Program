import { useState } from "react";
import { Skeleton } from "@mantine/core";
const CenterProfile = () => {
const[info,setInfo]=useState()

return(
    <>
    {info ? (
       <></>
    ):( <>
        {/* <Skeleton height={150} circle mb="xl" /> */}
        <Skeleton height={50} width="70%" radius="xl" />
        <Skeleton height={50} mt={6}width="70%" radius="xl" />
        <Skeleton height={50} mt={6} width="70%" radius="xl" />
        </>
    )}
    </>
)
}
export default CenterProfile;