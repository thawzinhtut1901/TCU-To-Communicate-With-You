import { QRCode } from "@/assets"
import { UserLogout } from "@/components/userUI"
import { useGetProfile, useUpdateMe } from "@/hooks"
import { useEffect, useRef, useState } from "react"
import { IoClose, IoQrCode } from "react-icons/io5"
import { Outlet, useNavigate } from "react-router-dom"
import { updateProfileData } from "@/types/type";
import { FiCheck } from "react-icons/fi"

const ProfilePage = () => {
  const { data: getMyProfile, refetch } = useGetProfile();
  const updateProfileData = useUpdateMe();
  const [preview, setPreview] = useState<string | undefined>(undefined);
  const [viewProfile, setViewProfile] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isQRVisible, setIsQRVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const [updateProfile, setUpdateProfile] = useState<updateProfileData>({
    userName: getMyProfile?.userName || "",
    displayName: getMyProfile?.displayName || "",
    profilePicture: getMyProfile?.profilePicture,
    dateOfBirth: getMyProfile?.dateOfBirth || "",
    bio: getMyProfile?.bio || "",
    gender: getMyProfile?.gender || "",
  });

  useEffect(() => {
    if (updateProfileData.isSuccess) {
      setIsModalOpen(false);
      setPreview(undefined);
      refetch();
    }
  }, [updateProfileData.isSuccess, refetch])

  const toggleQRBox = () => {
    setIsQRVisible(!isQRVisible)
  }

  const handleProfileClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUpdateProfile((prev) => ({
        ...prev,
        profilePicture: file,
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditProfileClick = () => {
    setIsModalOpen(false);
    fileInputRef.current?.click();
  };

  const handleProfileView = () => {
    setIsModalOpen(false)
    setViewProfile(true)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProfileData.mutate(updateProfile)
  }

  const handleEditProfileClose = () => {
    setIsModalOpen(false);
    setPreview(undefined);
  }

  const handleViewProfileClose = () => {
    setIsModalOpen(false);
    setViewProfile(false);
  }


  return (
    <div className="flex justify-center">
      <div className="flex flex-col bg-white bg-opacity-40 rounded-[10px] w-11/12 md:w-11/12 h-[750px] md:h-[850px]">
        {preview && (
          <div className="relative w-full h-screen">
            <img src={preview} alt="Preview" className="z-50 absolute inset-0 shadow-black shadow-md mx-auto mt-[150px] rounded-[4px] w-4/5 h-full object-cover" />
            <h1 className="flex justify-center mt-5 font-semibold text-[18px] text-slate-700">View Your Profile</h1>
            <form onSubmit={handleSubmit} className="flex mt-4">
              <button type="submit" className="flex gap-x-1 bg-blue-500 hover:bg-blue-300 mr-auto ml-5 p-2 rounded-[6px] text-white"><FiCheck className="w-[24px] h-[24px] text-green-500" />Upload This Photo</button>
              <button onClick={handleEditProfileClose} className="flex mr-4 ml-auto"><IoClose className="w-[24px] h-[24px]" /></button>
            </form>
          </div>

        )}
        {
          viewProfile && (
            <div className="relative w-full h-screen">
              <img
                src={
                  typeof getMyProfile?.profile === "string"
                    ? getMyProfile.profile
                    : getMyProfile?.profile
                      ? URL.createObjectURL(getMyProfile.profile)
                      : undefined
                }
                alt="Preview"
                className="z-50 absolute inset-0 shadow-black shadow-md mx-auto rounded-[4px] w-4/5 h-[850px] object-cover"
              />
              <button onClick={handleViewProfileClose} className="top-3 right-36 z-50 absolute flex">
                <IoClose className="w-[24px] h-[24px]" />
              </button>
            </div>
          )
        }

        <div className={`flex mt-[38px] ${preview ? "hidden" : ""}`}>
          <div>
            <img
              src={typeof getMyProfile?.profile === 'string' ? getMyProfile.profile : getMyProfile?.profile ? URL.createObjectURL(getMyProfile.profile) : undefined}
              alt=""
              className="ml-[20px] md:ml-[125px] rounded-full md:rounded-[10px] w-[80px] md:w-[150px] h-[80px] md:h-[150px]"
              onClick={handleProfileClick}
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              ref={fileInputRef}
            />

            {isModalOpen && (
              <div className="top-[280px] left-40 z-10 absolute flex bg-white shadow-lg p-4 border rounded-md w-[200px]">
                <ul className="font-poppins">
                  <li
                    onClick={handleProfileView}
                    className="hover:bg-gray-200 hover:p-2 py-2 cursor-pointer">View Your Profile</li>
                  <li
                    onClick={handleEditProfileClick}
                    className="hover:bg-gray-200 hover:p-2 py-2 cursor-pointer">Edit Your Profile</li>
                </ul>
              </div>
            )}
          </div>

          <div className="flex flex-col ml-[15px] md:ml-[30px] font-poppins">
            <div className="hidden md:flex flex-col">
              <h1 className="md:mt-[10px] font-medium text-[18px] md:text-[24px]">{getMyProfile?.displayName}</h1>

              <div className="flex gap-x-4 bg-clip-text bg-gradient-to-r from-[#9934D4] to-[#E365F3] mt-[5px] text-transparent">
                {
                  getMyProfile?.role === "Admin" && (
                    <h2 className="font-semibold text-[14px] md:text-[18px]">TCU {getMyProfile?.adminInfo?.adminPosition}</h2>
                  )
                }
                <h2 className="font-semibold text-[14px] md:text-[18px]">{getMyProfile?.userName}</h2>
              </div>
            </div>

            <div className="flex gap-x-3 md:gap-x-6 mt-[10px] md:mt-[15px] font-medium text-[12px] md:text-[16px]">
              <div className="flex flex-col">
                <h3 className="text-center">{getMyProfile?.publishedQuoteCount}</h3>
                <h3>Published quotes</h3>
              </div>

              <div className="flex flex-col">
                <h3 className="text-center">{getMyProfile?.followers}</h3>
                <h3>Followers</h3>
              </div>

              <div className="flex flex-col">
                <h3 className="text-center">{getMyProfile?.following}</h3>
                <h3>Following</h3>
              </div>
            </div>
          </div>

          <div onClick={toggleQRBox} className="hidden md:flex gap-x-1 bg-black bg-opacity-15 my-auto mr-[15px] md:mr-[125px] ml-auto p-4 border border-slate-500 rounded-[15px] font-poppins cursor-pointer">
            <IoQrCode className="md:mt-[3px] w-[12px] md:w-[24px] h-[12px] md:h-[24px]" />
          </div>

          {isQRVisible && (
            <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <div className="relative bg-radial-custom-gradient mx-auto md:mx-0 rounded-[8px] w-[400px] h-[150px] md:h-[400px]">
                <h1 className="mt-9 font-poppins font-medium text-[18px] text-center">Get QR Code</h1>
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

        <div className="md:hidden flex flex-col ml-[30px]">
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

        <div className="bg-black bg-opacity-15 mt-[27px] md:ml-[125px] border border-slate-500 rounded-[10px] md:w-4/5">
          <p className="md:p-4">{getMyProfile?.bio}</p>
        </div>

        <div className={`flex mt-[50px] ${preview ? "hidden" : ""}`}>
          <div className="flex flex-col gap-y-9 ml-[125px] cursor-pointer">
            <div onClick={() => navigate("/user/profile/more-info")} className="flex justify-center items-center bg-black bg-opacity-15 hover:bg-opacity-40 border border-slate-500 rounded-[20px] w-[200px] h-[55px]">
              <h1>Personal Information</h1>
            </div>
            <div onClick={() => navigate("/user/profile/friend-list")} className="flex justify-center items-center bg-black bg-opacity-15 hover:bg-opacity-40 border border-slate-500 rounded-[20px] w-[200px] h-[55px]">
              <h1>Friends</h1>
            </div>
            <div onClick={() => navigate("/user/profile/join-group")} className="flex justify-center items-center bg-black bg-opacity-15 hover:bg-opacity-40 border border-slate-500 rounded-[20px] w-[200px] h-[55px]">
              <h1>Joined Groups</h1>
            </div>
            <div onClick={() => navigate("/user/profile/relationship-list")} className="flex justify-center items-center bg-black bg-opacity-15 hover:bg-opacity-40 border border-slate-500 rounded-[20px] w-[200px] h-[55px]">
              <h1>Relationships</h1>
            </div>
            <div onClick={() => navigate("/user/settings")} className="flex justify-center items-center bg-black bg-opacity-15 hover:bg-opacity-40 border border-slate-500 rounded-[20px] w-[200px] h-[55px]">
              <h1>Settings</h1>
            </div>
            <div className="flex justify-center items-center bg-black bg-opacity-15 hover:bg-opacity-40 border border-slate-500 rounded-[20px] w-[200px] h-[55px]">
              <UserLogout />
            </div>
          </div>

          {/* Profile Details */}
          <div className="relative bg-black bg-opacity-15 mx-auto md:mx-0 md:ml-[28px] border border-slate-500 rounded-[10px] w-[350px] md:w-[760px] md:h-full font-poppins">
            <Outlet />
          </div>

          {/* Render EditBox if visible */}
          {/* {isEditBoxVisible && (
              <EditUserProfile refetch={refetch} getMyProfile={getMyProfile} toggleEditBox={toggleEditBox}/>
            )} */}

          {/* Username and QR code */}
          {/* <div className="flex flex-col mt-6 md:mt-0">
            <div className="flex bg-white bg-opacity-40 mx-auto md:mx-0 md:ml-[40px] border border-slate-900 rounded-[8px] w-[300px] h-[120px] md:h-[170px]">
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