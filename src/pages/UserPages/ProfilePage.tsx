import { QRCode } from "@/assets"
import { EditUserProfile } from "@/components/userUI"
import { useGetMe } from "@/hooks"
import { useState } from "react"
import { IoQrCode } from "react-icons/io5"
import { LiaUserEditSolid } from "react-icons/lia"
import { useNavigate } from "react-router-dom"

const ProfilePage = () => {
  const {data: getMyProfile, refetch} = useGetMe();
  const [isEditBoxVisible, setIsEditBoxVisible] = useState(false);
  const [isQRVisible, setIsQRVisible] = useState(false);
  const navigate = useNavigate();

  const toggleEditBox = () => {
    setIsEditBoxVisible(!isEditBoxVisible);
  };

  const toggleQRBox = () => {
    setIsQRVisible(!isQRVisible)
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col bg-white bg-opacity-40 rounded-[10px] w-11/12 md:w-11/12 h-[750px] md:h-[850px]">
        <div className="flex mt-[38px]">
          <div>
            <img 
              src={typeof getMyProfile?.profile === 'string' ? getMyProfile.profile : getMyProfile?.profile ? URL.createObjectURL(getMyProfile.profile) : undefined} 
              alt="" 
              className="ml-[20px] md:ml-[125px] rounded-full md:rounded-[10px] w-[80px] md:w-[150px] h-[80px] md:h-[150px]"
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

          <div className="flex flex-col ml-[15px] md:ml-[30px] font-poppins">
            <div className="md:flex flex-col hidden">
              <h1 className="md:mt-[10px] font-medium text-[18px] md:text-[24px]">{getMyProfile?.displayName}</h1>

              <div className="flex gap-x-4 bg-clip-text bg-gradient-to-r from-[#9934D4] to-[#E365F3] mt-[5px] text-transparent">
                {
                  getMyProfile?.role === "Admin" && (
                    <h2 className="font-semibold text-[14px] md:text-[18px]">Founder Of TCU</h2>
                  ) 
                }
                <h2 className="font-semibold text-[14px] md:text-[18px]">{getMyProfile?.userName}</h2>
              </div>
            </div>

            <div className="flex gap-x-3 md:gap-x-6 mt-[10px] md:mt-[15px] font-medium text-[12px] md:text-[16px]">
              <div className="flex flex-col">
                <h3 className="text-center">3</h3>
                <h3>Published quotes</h3>
              </div>

              <div className="flex flex-col">
                <h3 className="text-center">3</h3>
                <h3>Followers</h3>
              </div>

              <div className="flex flex-col">
                <h3 className="text-center">3</h3>
                <h3>Following</h3>
              </div>
            </div>
          </div>

          <div onClick={toggleQRBox} className="md:flex gap-x-1 border-slate-500 hidden bg-black bg-opacity-15 my-auto mr-[15px] md:mr-[125px] ml-auto p-4 border rounded-[15px] font-poppins cursor-pointer">
            <IoQrCode className="md:mt-[3px] w-[12px] md:w-[24px] h-[12px] md:h-[24px]"/>
          </div>

           {isQRVisible && (
            <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <div className="relative bg-radial-custom-gradient mx-auto md:mx-0 rounded-[8px] w-[400px] h-[150px] md:h-[400px]">
                <h1 className="mt-9 font-medium font-poppins text-[18px] text-center">Get QR Code</h1>
                <div className="flex justify-center mt-5 md:mt-9">
                  <img
                    src={QRCode}
                    alt="QR Code"
                    className="w-[112px] md:w-[225px] h-[112px] md:h-[225px]"
                  />
                </div>
                {/* Close Button */}
                <button
                  className="top-2 right-2 absolute flex justify-center items-center bg-gray-700 rounded-full w-8 h-8 text-white"
                  onClick={toggleQRBox}
                >
                  ✕
                </button>
              </div>
            </div>
        )}
        </div>

        <div className="flex flex-col md:hidden ml-[30px]">
          <h1 className="md:mt-[10px] font-medium text-[18px]">{getMyProfile?.displayName}</h1>

          <div className="flex gap-x-4 bg-clip-text bg-gradient-to-r from-[#9934D4] to-[#E365F3] mt-[5px] text-transparent">
            {
              getMyProfile?.role === "Admin" && (
                <h2 className="font-semibold text-[14px] md:text-[18px]">Founder Of TCU</h2>
              ) 
            }
            <h2 className="font-semibold text-[14px] md:text-[18px]">{getMyProfile?.userName}</h2>
          </div>
        </div>

        <div className="border-slate-500 bg-black bg-opacity-15 mt-[27px] md:ml-[125px] border rounded-[10px] md:w-4/5">
          <p className="md:p-4">{getMyProfile?.bio}</p>
        </div>

        <div className="md:flex mt-[80px]">
          <div className="flex flex-col gap-y-9 ml-[125px] cursor-pointer">
            <div onClick={() =>navigate("/user/find-friends")} className="flex justify-center items-center border-slate-500 bg-black bg-opacity-15 hover:bg-opacity-40 border rounded-[20px] w-[200px] h-[55px]">
              <h1>Friends</h1>
            </div>  
            <div onClick={() => navigate("/user/groups")} className="flex justify-center items-center border-slate-500 bg-black bg-opacity-15 hover:bg-opacity-40 border rounded-[20px] w-[200px] h-[55px]">
              <h1>Joined Groups</h1>
            </div>  
            <div onClick={() => navigate("/user/relation")} className="flex justify-center items-center border-slate-500 bg-black bg-opacity-15 hover:bg-opacity-40 border rounded-[20px] w-[200px] h-[55px]">
              <h1>Relationships</h1>
            </div>  
            <div className="flex justify-center items-center border-slate-500 bg-black bg-opacity-15 hover:bg-opacity-40 border rounded-[20px] w-[200px] h-[55px]">
              <h1>Quotes</h1>
            </div>  
            <div onClick={() => navigate("/user/settings")} className="flex justify-center items-center border-slate-500 bg-black bg-opacity-15 hover:bg-opacity-40 border rounded-[20px] w-[200px] h-[55px]">
              <h1>Settings</h1>
            </div>  
          </div>

          {/* Profile Details */}
          <div className="relative flex flex-col border-slate-500 bg-black bg-opacity-15 mx-auto md:mx-0 md:ml-[28px] border rounded-[10px] w-[350px] md:w-[760px] md:h-full font-poppins">
            <div className="flex mt-[17px] ml-[10px] md:ml-[19px]">
              <h1 className="font-medium text-[16px] md:text-[22px]">Personal Information</h1>
              <LiaUserEditSolid onClick={toggleEditBox} className="mt-[2px] md:mt-1 mr-3 ml-auto w-[18px] md:w-[24px] h-[18px] md:h-[24px] cursor-pointer"/>
            </div>

            <div className="flex flex-col mt-1 ml-[10px] md:ml-[19px]">
              <h3 className="text-[12px] text-slate-600 md:text-[16px]">{getMyProfile?.bio}</h3>

              <div className="mt-[15px] md:mt-[30px] text-[14px] md:text-[20px]">
                <h1 className="flex justify-between mt-4">Name <span className="mr-[150px]">{getMyProfile?.displayName}</span></h1>
                <h1 className="flex justify-between mt-4">Username <span className="mr-[150px]">{getMyProfile?.userName}</span></h1>
                <h1 className="flex justify-between mt-4">Date of Birth <span className="mr-[150px]">{getMyProfile?.dateOfBirth}</span></h1>
                <h1 className="flex justify-between mt-4">Gender <span className="mr-[150px]">{getMyProfile?.gender}</span></h1>
                <h1 className="flex justify-between mt-4 mb-2 md:mb-0">Email <span className="mr-[150px]">{getMyProfile?.email}</span></h1>
              </div>
            </div>
          </div>

          {/* Render EditBox if visible */}
            {isEditBoxVisible && (
              <EditUserProfile refetch={refetch} getMyProfile={getMyProfile} toggleEditBox={toggleEditBox}/>
            )}

          {/* Username and QR code */}
          {/* <div className="flex flex-col mt-6 md:mt-0">
            <div className="flex border-slate-900 bg-white bg-opacity-40 mx-auto md:mx-0 md:ml-[40px] border rounded-[8px] w-[300px] h-[120px] md:h-[170px]">
              <div className="flex flex-col bg-blue-600 bg-opacity-50 my-auto w-full h-[90px] md:h-[130px]">
                <div className="my-auto">
                  <h1 className="flex justify-between mb-5 md:mb-6 ml-[10px] text-[14px] md:text-[16px]">Username: <span>{getMyProfile?.userName}</span> <span className="mt-[2px] md:mt-1 mr-4 cursor-pointer"><BiPencil className="w-[16px] md:w-[18px] h-[16px] md:h-[18px] text-[#591DA9]"/></span></h1>
                  <h1 className="flex justify-between ml-[10px] text-[14px] md:text-[16px]">Invite link: <span>t/fhfj;dhdh</span> <span className="mt-[2px] md:mt-1 mr-4 cursor-pointer"><FaRegCopy className="w-[16px] md:w-[18px] h-[16px] md:h-[18px] text-[#591DA9]"/></span></h1>
                </div>
              </div>
            </div>
            <div className="bg-radial-custom-gradient mx-auto md:mx-0 mt-[25px] mb-10 md:mb-0 md:ml-[40px] rounded-[8px] w-[300px] h-[150px] md:h-[300px]">
              <div className="flex justify-center mt-5 md:mt-9">
                <img src={QRCode} alt="" className="w-[112px] md:w-[225px] h-[112px] md:h-[225px]"/>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ProfilePage