'use client'

import { authClient } from "@/lib/authClient";
import { useRouter } from "next/navigation";


const BoorowBtn = () => {
    const route=useRouter();
    const {data:session}=authClient.useSession()
    const BtnClick=()=>{
          if(session?.user){
             return alert('success')
          }
          else{
route.push('/signin')
          }
    }
  return (
    <button
     onClick={BtnClick}
      size="lg"
      className="bg-slate-900 btn text-white font-bold  hover:bg-blue-600 transition-all"
    >
      Borrow Now
    </button>
  );
};

export default BoorowBtn;
