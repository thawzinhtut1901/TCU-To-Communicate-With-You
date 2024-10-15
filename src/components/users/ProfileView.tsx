import { useGetMe } from "@/hooks";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


const ProfileView = () => {
  const navigate = useNavigate();
  const {data: getMyProfile} = useGetMe();

  const handleClose = () => {
    navigate("/admin-dashboard/profile")
  }

  return (
    <div className="border-white/20 bg-slate-400 bg-opacity-30 backdrop-blur-md backdrop-filter w-full h-screen overflow-hidden">
        <button onClick={handleClose} className="flex mr-4 ml-auto"><IoClose className="w-[24px] h-[24px]"/></button>
        <div className="flex justify-center items-center">
            <img 
                src={typeof getMyProfile?.profile === 'string' ? getMyProfile.profile : getMyProfile?.profile ? URL.createObjectURL(getMyProfile.profile) : undefined} 
                alt=""
                className="border-slate-700 shadow-black shadow-lg rounded-[4px] w-1/3 h-[600px]" 
            />
        </div>
    </div>
  )
}

export default ProfileView;