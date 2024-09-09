import { Cover, Facebook, friSuggestionProfile, Instagram, Twitter } from "@/assets";
import "./type.css";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "../ui/button";
import { BiPencil } from "react-icons/bi";
import { VscSettingsGear } from "react-icons/vsc";
import { LiaUserEditSolid } from "react-icons/lia";
import { useGetMe, useUpdateMe } from "@/hooks";
import { useEffect, useState } from "react";
import { updateProfileData } from "@/types/type";
import { IoClose } from "react-icons/io5";
import { FiCheck } from "react-icons/fi";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const {data: getMyProfile} = useGetMe();
  const updateProfileData = useUpdateMe();
  const [updateProfile, setUpdateProfile] = useState<updateProfileData> ({
    userName: "",
    displayName: "",
    profilePicture: undefined,
    bio: "",
    gender: "",
  });

  useEffect(() => {
    if(getMyProfile) {
      setUpdateProfile((prev) => ({
        ...prev,
        userName: getMyProfile.userName || "",
        displayName: getMyProfile.displayName || "",
        bio: getMyProfile.bio || "",
        gender: getMyProfile.gender || "",
      }));
    }
  }, [getMyProfile]);

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if(file) {
  //     setUpdateProfile((prev) => ({
  //       ...prev,
  //       profilePicture: file,
  //     }));
  //   }
  // };

  const handleSubmit =(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProfileData.mutate(updateProfile, {
      onSuccess: () => {
        setIsEditing(false)
      }
    });
  }

  const handleEditClick = () => {
    setIsEditing(true)
  };

  return (
    <div className="flex flex-col w-full overflow-auto vertical-scrollbar">
      <div className="relative mx-auto mt-[4px] rounded-[10px] w-11/12 h-[180px]">
        <img src={Cover} alt="" className="rounded-[10px] w-full h-full object-cover"/>
        <BiPencil className="absolute top-2 right-2 w-[24px] h-[24px] text-[24px] cursor-pointer"/>

        <div className="bottom-0 absolute inset-x-0 border-white/20 bg-slate-400 bg-opacity-30 backdrop-blur-md backdrop-filter mx-auto border rounded-[10px] w-4/5 h-[130px] transform translate-y-1/2">
          <div className="flex mt-[20px]">
          <img 
            src={typeof getMyProfile?.profile === 'string' ? getMyProfile.profile : getMyProfile?.profile ? URL.createObjectURL(getMyProfile.profile) : undefined} 
            alt="" 
            className="ml-[32px] rounded-[10px] w-[80px] h-[80px]"
          />
            <div className="flex flex-col my-auto ml-[17px] font-poppins">
              <h1 className="text-[21px]">{getMyProfile?.displayName}</h1>
              <p className="opacity-80 text-[16px]">Founder of TCU</p>
            </div>

            <div className="flex gap-x-1 my-auto mr-[30px] ml-auto font-poppins">
              <VscSettingsGear className="mt-[3px] w-[24px] h-[24px]"/>
              <h1 className="text-[20px]">Setting</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mb-4 justify-center gap-x-5 mt-[100px]">
        <form onSubmit={handleSubmit} className="flex flex-col border-white/20 bg-slate-400 bg-opacity-30 backdrop-blur-md backdrop-filter px-[30px] border rounded-[20px] w-[480px] h-[448px] font-poppins">
          <div className="flex mt-[17px]">
            <h1 className="text-[24px]">Profile Information</h1>
            {
              isEditing ? (
                <div className="flex ml-auto gap-x-2 cursor-pointer">
                  <IoClose className=" w-[24px] text-red-600 h-[24px]"/>
                  <Button type="submit"><FiCheck className="w-[24px] text-green-500 h-[24px]"/></Button>
                </div>
              ) : (
                <LiaUserEditSolid onClick={handleEditClick} className="mt-1 ml-auto w-[24px] h-[24px] cursor-pointer"/>
              )
            }
          </div>
          <p className="opacity-65 mt-[12px] text-[16px]">
            {
              isEditing ? (
                <textarea
                  name="bio"
                  className="border rounded w-[400px] p-2"
                  value={updateProfile.bio}
                  onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                    setUpdateProfile((prev) => ({
                      ...prev,
                      bio: event.target.value,
                    }));
                  }}
                />
              ) : (
                getMyProfile?.bio 
              )
            }
            
          </p>
          <h2 className="mt-[30px] text-[20px]">Full Name : 
            <span>
              {
                isEditing ? (
                  <input className="px-1" 
                    type="text" 
                    name="displayName" 
                    value={updateProfile.displayName} 
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setUpdateProfile((prev) => ({
                      ...prev,
                      displayName: event.target.value,
                    }));
                  }
                }/>
                ) : (
                  getMyProfile?.displayName
                )
              }
            </span>
          </h2>
          <h2 className="mt-[30px] text-[20px]">Gender : 
            <span>
              {
                isEditing ? (
                  <input 
                    type="text"
                    name="gender"
                    value={updateProfile.gender}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setUpdateProfile((prev) => ({
                        ...prev,
                        gender: event.target.value,
                      }));
                    }}
                  />
                ) : (
                  getMyProfile?.gender
                )
              }
            </span>
          </h2>
          <h2 className="mt-[30px] text-[20px]">UserName : 
            <span>
              {
                isEditing ? (
                  <input 
                    type="text"
                    name="userName"
                    value={updateProfile.userName}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setUpdateProfile((prev) => ({
                        ...prev,
                        userName: event.target.value,
                      }));
                    }}
                  />
                ) : (
                  getMyProfile?.userName
                )
              }
            </span>
          </h2>
          <h2 className="mt-[30px] text-[20px]">Location : <span>Myanmar</span></h2>
          <h2 className="flex gap-x-1 mt-[30px] text-[20px]">Social : 
            <span className="flex items-center gap-x-1">
              <img src={Facebook} alt="" className="w-[40px] h-[33px]"/>
              <img src={Instagram} alt="" className="w-[40px] h-[40px]"/>
              <img src={Twitter} alt="" className="w-[30px] h-[26px]"/>
            </span>
          </h2>
        </form>

        <div className="border-white/20 mb-4 bg-slate-400 bg-opacity-30 backdrop-blur-md backdrop-filter border rounded-[20px] w-[480px]">
          <div className="mt-[17px] px-[30px] font-poppins text-[24px]">
            <h1 className="">Conversation</h1>
          </div>

          <div className="flex flex-col md:max-h-[62vh] overflow-auto scrollbar-hide">
            <div className="flex bg-white mx-[10px] mt-[10px] rounded-[10px] h-[80px]">
              <Avatar className="top-[5px] ml-[12px]">
                <AvatarImage src={friSuggestionProfile} />
              </Avatar> 
              <div className="mx-[16px] my-auto">
                <h1 className="font-medium text-[20px]">Person 1</h1>
                <p className="text-[16px]">Hey You!</p>
              </div>

              <div className="my-auto mr-2 ml-auto">
                <Button className="bg-[#B895E7] bg-opacity-40 rounded-[4px]">Reply</Button>
              </div>
            </div>
            <div className="flex bg-white mx-[10px] mt-[10px] rounded-[10px] h-[80px] ">
              <Avatar className="top-[5px] ml-[12px]">
                <AvatarImage src={friSuggestionProfile} />
              </Avatar> 
              <div className="mx-[16px] my-auto">
                <h1 className="font-medium text-[20px]">Person 1</h1>
                <p className="text-[16px]">Hey You!</p>
              </div>

              <div className="my-auto mr-2 ml-auto">
                <Button className="bg-[#B895E7] bg-opacity-40 rounded-[4px]">Reply</Button>
              </div>
            </div>
            <div className="flex bg-white mx-[10px] mt-[10px] rounded-[10px] h-[80px] ">
              <Avatar className="top-[5px] ml-[12px]">
                <AvatarImage src={friSuggestionProfile} />
              </Avatar> 
              <div className="mx-[16px] my-auto">
                <h1 className="font-medium text-[20px]">Person 1</h1>
                <p className="text-[16px]">Hey You!</p>
              </div>

              <div className="my-auto mr-2 ml-auto">
                <Button className="bg-[#B895E7] bg-opacity-40 rounded-[4px]">Reply</Button>
              </div>
            </div>
            <div className="flex bg-white mx-[10px] mt-[10px] rounded-[10px] h-[80px] ">
              <Avatar className="top-[5px] ml-[12px]">
                <AvatarImage src={friSuggestionProfile} />
              </Avatar> 
              <div className="mx-[16px] my-auto">
                <h1 className="font-medium text-[20px]">Person 1</h1>
                <p className="text-[16px]">Hey You!</p>
              </div>

              <div className="my-auto mr-2 ml-auto">
                <Button className="bg-[#B895E7] bg-opacity-40 rounded-[4px]">Reply</Button>
              </div>
            </div>
            <div className="flex bg-white mx-[10px] mt-[10px] rounded-[10px] h-[80px] ">
              <Avatar className="top-[5px] ml-[12px]">
                <AvatarImage src={friSuggestionProfile} />
              </Avatar> 
              <div className="mx-[16px] my-auto">
                <h1 className="font-medium text-[20px]">Person 1</h1>
                <p className="text-[16px]">Hey You!</p>
              </div>

              <div className="my-auto mr-2 ml-auto">
                <Button className="bg-[#B895E7] bg-opacity-40 rounded-[4px]">Reply</Button>
              </div>
            </div>
            <div className="flex bg-white mx-[10px] mt-[10px] rounded-[10px] h-[80px] ">
              <Avatar className="top-[5px] ml-[12px]">
                <AvatarImage src={friSuggestionProfile} />
              </Avatar> 
              <div className="mx-[16px] my-auto">
                <h1 className="font-medium text-[20px]">Person 1</h1>
                <p className="text-[16px]">Hey You!</p>
              </div>

              <div className="my-auto mr-2 ml-auto">
                <Button className="bg-[#B895E7] bg-opacity-40 rounded-[4px]">Reply</Button>
              </div>
            </div>
            <div className="flex bg-white mx-[10px] mt-[10px] rounded-[10px] h-[80px] ">
              <Avatar className="top-[5px] ml-[12px]">
                <AvatarImage src={friSuggestionProfile} />
              </Avatar> 
              <div className="mx-[16px] my-auto">
                <h1 className="font-medium text-[20px]">Person 1</h1>
                <p className="text-[16px]">Hey You!</p>
              </div>

              <div className="my-auto mr-2 ml-auto">
                <Button className="bg-[#B895E7] bg-opacity-40 rounded-[4px]">Reply</Button>
              </div>
            </div>
            <div className="flex bg-white mx-[10px] mt-[10px] rounded-[10px] h-[80px] ">
              <Avatar className="top-[5px] ml-[12px]">
                <AvatarImage src={friSuggestionProfile} />
              </Avatar> 
              <div className="mx-[16px] my-auto">
                <h1 className="font-medium text-[20px]">Person 1</h1>
                <p className="text-[16px]">Hey You!</p>
              </div>

              <div className="my-auto mr-2 ml-auto">
                <Button className="bg-[#B895E7] bg-opacity-40 rounded-[4px]">Reply</Button>
              </div>
            </div>
            <div className="flex bg-white mx-[10px] mt-[10px] rounded-[10px] h-[80px] ">
              <Avatar className="top-[5px] ml-[12px]">
                <AvatarImage src={friSuggestionProfile} />
              </Avatar> 
              <div className="mx-[16px] my-auto">
                <h1 className="font-medium text-[20px]">Person 1</h1>
                <p className="text-[16px]">Hey You!</p>
              </div>

              <div className="my-auto mr-2 ml-auto">
                <Button className="bg-[#B895E7] bg-opacity-40 rounded-[4px]">Reply</Button>
              </div>
            </div>
            <div className="flex bg-white mx-[10px] mt-[10px] rounded-[10px] h-[80px] ">
              <Avatar className="top-[5px] ml-[12px]">
                <AvatarImage src={friSuggestionProfile} />
              </Avatar> 
              <div className="mx-[16px] my-auto">
                <h1 className="font-medium text-[20px]">Person 1</h1>
                <p className="text-[16px]">Hey You!</p>
              </div>

              <div className="my-auto mr-2 ml-auto">
                <Button className="bg-[#B895E7] bg-opacity-40 rounded-[4px]">Reply</Button>
              </div>
            </div>
            <div className="flex bg-white mx-[10px] mt-[10px] rounded-[10px] h-[80px] ">
              <Avatar className="top-[5px] ml-[12px]">
                <AvatarImage src={friSuggestionProfile} />
              </Avatar> 
              <div className="mx-[16px] my-auto">
                <h1 className="font-medium text-[20px]">Person 1</h1>
                <p className="text-[16px]">Hey You!</p>
              </div>

              <div className="my-auto mr-2 ml-auto">
                <Button className="bg-[#B895E7] bg-opacity-40 rounded-[4px]">Reply</Button>
              </div>
            </div>
            <div className="flex bg-white mx-[10px] mt-[10px] rounded-[10px] h-[80px] ">
              <Avatar className="top-[5px] ml-[12px]">
                <AvatarImage src={friSuggestionProfile} />
              </Avatar> 
              <div className="mx-[16px] my-auto">
                <h1 className="font-medium text-[20px]">Person 1</h1>
                <p className="text-[16px]">Hey You!</p>
              </div>

              <div className="my-auto mr-2 ml-auto">
                <Button className="bg-[#B895E7] bg-opacity-40 rounded-[4px]">Reply</Button>
              </div>
            </div>


          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Profile