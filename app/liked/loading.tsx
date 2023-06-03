"use client";

import { BounceLoader } from "react-spinners";

import Box from "@/components/Box";

const Loading = () => {
  return ( 
    <Box ClassName="h-full flex items-center justify-center">
      <BounceLoader color="#22c55e" size={50} />
    </Box>
  );
}
 
export default Loading;