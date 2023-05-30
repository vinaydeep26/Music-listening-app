"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

// import useAuthModal from "@/hooks/useAuthModal";
// import { useUser } from "@/hooks/useUser";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({
    image,
    name,
    href,
  }) => {
    const router = useRouter();
    const onClick = () => {
        // if (!user) {
        //   return authModal.onOpen();
        // }
    
        router.push(href);
      };
    

    return ( 
        <div>
            List
        </div>
    );
  }

  export default ListItem
