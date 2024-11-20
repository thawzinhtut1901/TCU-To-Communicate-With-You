import { Cover, QRCode } from "@/assets"
import { EditUserProfile } from "@/components/userUI"
import { useGetMe } from "@/hooks"
import { useState } from "react"
import { BiPencil } from "react-icons/bi"
import { FaRegCopy } from "react-icons/fa"
import { LiaUserEditSolid } from "react-icons/lia"
import { VscSettingsGear } from "react-icons/vsc"
import { useNavigate } from "react-router-dom"

const ProfilePage = () => {
  const {data: getMyProfile, refetch} = useGetMe();
  const [isEditBoxVisible, setIsEditBoxVisible] = useState(false);
  const navigate = useNavigate();

  const toggleEditBox = () => {
    setIsEditBoxVisible(!isEditBoxVisible);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col bg-white bg-opacity-40 rounded-[10px] w-11/12 md:w-9/12 h-[750px] md:h-[850px]">
        <div className="relative mx-auto mt-[14px] md:mt-[28px] rounded-[10px] w-11/12 h-[100px] md:h-[180px]">
          <img src={Cover} alt="" className="rounded-[10px] w-full h-full object-cover"/>

        {/* Profile */}
        <div className="bottom-1 absolute inset-x-0 border-white bg-slate-400 bg-opacity-30 backdrop-blur-md backdrop-filter mx-auto border rounded-[10px] w-11/12 md:w-4/5 h-[80px] md:h-[130px] transform translate-y-1/2">
        <div className="flex mt-[10px] md:mt-[20px]">
            <div>
              <img 
                src={typeof getMyProfile?.profile === 'string' ? getMyProfile.profile : getMyProfile?.profile ? URL.createObjectURL(getMyProfile.profile) : undefined} 
                alt="" 
                className="ml-[16px] md:ml-[32px] rounded-[10px] w-[60px] md:w-[75px] h-[60px] md:h-[80px]"
                // onClick={handleProfileClick}
              />

              <input 
                type="file" 
                accept="image/*" 
                // onChange={handleFileChange} 
                className="hidden"
                // ref={fileInputRef}
              />
            </div>

            <div className="flex my-auto ml-[8.5px] md:ml-[17px] font-poppins">
              <h1 className="text-[16px] md:text-[21px]">{getMyProfile?.displayName}</h1>
            </div>

            <div onClick={() => navigate("/user/settings")} className="flex gap-x-1 my-auto mr-[15px] md:mr-[30px] ml-auto font-poppins cursor-pointer">
              <VscSettingsGear className="mt-1 md:mt-[3px] w-[12px] md:w-[24px] h-[12px] md:h-[24px]"/>
              <h1 className="text-[14px] md:text-[20px]">Setting</h1>
            </div>
          </div>
        </div>
        </div>

        <div className="md:flex md:justify-center mt-[80px]">

          {/* Profile Details */}
          <div className="relative flex flex-col bg-white bg-opacity-50 mx-auto md:mx-0 rounded-[10px] w-[350px] md:w-[500px] md:h-[500px] font-poppins">
            <div className="flex mt-[17px] ml-[10px] md:ml-[19px]">
              <h1 className="font-medium text-[16px] md:text-[22px]">Personal Information</h1>
              <LiaUserEditSolid onClick={toggleEditBox} className="mt-[2px] md:mt-1 mr-3 ml-auto w-[18px] md:w-[24px] h-[18px] md:h-[24px] cursor-pointer"/>
            </div>

            <div className="flex flex-col mt-1 ml-[10px] md:ml-[19px]">
              <h3 className="text-[12px] text-slate-600 md:text-[16px]">{getMyProfile?.bio}</h3>

              <div className="mt-[15px] md:mt-[30px] text-[14px] md:text-[20px]">
                <h1 className="mt-4">Full Name: <span className="ml-3">{getMyProfile?.displayName}</span></h1>
                <h1 className="mt-4">Date of Birth: <span className="ml-3">{getMyProfile?.dateOfBirth}</span></h1>
                <h1 className="mt-4">Gender: <span className="ml-3">{getMyProfile?.gender}</span></h1>
                <h1 className="mt-4 mb-2 md:mb-0">Email: <span className="ml-3">{getMyProfile?.email}</span></h1>
              </div>
            </div>
          </div>

          {/* Render EditBox if visible */}
            {isEditBoxVisible && (
              <EditUserProfile refetch={refetch} getMyProfile={getMyProfile} toggleEditBox={toggleEditBox}/>
            )}

          {/* Username and QR code */}
          <div className="flex flex-col mt-6 md:mt-0">
            {/* Username */}
            <div className="flex border-slate-900 bg-white bg-opacity-40 mx-auto md:mx-0 md:ml-[40px] border rounded-[8px] w-[300px] h-[120px] md:h-[170px]">
              <div className="flex flex-col bg-blue-600 bg-opacity-50 my-auto w-full h-[90px] md:h-[130px]">
                <div className="my-auto">
                  <h1 className="flex justify-between mb-5 md:mb-6 ml-[10px] text-[14px] md:text-[16px]">Username: <span>{getMyProfile?.userName}</span> <span className="mt-[2px] md:mt-1 mr-4 cursor-pointer"><BiPencil className="w-[16px] md:w-[18px] h-[16px] md:h-[18px] text-[#591DA9]"/></span></h1>
                  <h1 className="flex justify-between ml-[10px] text-[14px] md:text-[16px]">Invite link: <span>t/fhfj;dhdh</span> <span className="mt-[2px] md:mt-1 mr-4 cursor-pointer"><FaRegCopy className="w-[16px] md:w-[18px] h-[16px] md:h-[18px] text-[#591DA9]"/></span></h1>
                </div>
              </div>
            </div>

            {/* QR */}
            <div className="bg-radial-custom-gradient mx-auto md:mx-0 mt-[25px] mb-10 md:mb-0 md:ml-[40px] rounded-[8px] w-[300px] h-[150px] md:h-[300px]">
              <div className="flex justify-center mt-5 md:mt-9">
                <img src={QRCode} alt="" className="w-[112px] md:w-[225px] h-[112px] md:h-[225px]"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage