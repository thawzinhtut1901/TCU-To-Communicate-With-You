import { Cover, Facebook, friSuggestionProfile, Instagram, Twitter } from "@/assets";
import "./type.css";
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "../ui/button";
import { BiPencil } from "react-icons/bi";
import { VscSettingsGear } from "react-icons/vsc";
import { LiaUserEditSolid } from "react-icons/lia";
import { useGetMe } from "@/hooks";

const Profile = () => {
  const {data: getMyProfile} = useGetMe();
  console.log(getMyProfile)

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
        <div className="flex flex-col border-white/20 bg-slate-400 bg-opacity-30 backdrop-blur-md backdrop-filter px-[30px] border rounded-[20px] w-[480px] h-[448px] font-poppins">
          <div className="flex justify-between mt-[17px]">
            <h1 className="text-[24px]">Profile Information</h1>
            <LiaUserEditSolid className="mt-1 w-[24px] h-[24px]"/>
          </div>
          <p className="opacity-65 mt-[12px] text-[16px]">{getMyProfile?.bio} </p>
          <h2 className="mt-[30px] text-[20px]">Full Name : <span>{getMyProfile?.displayName}</span></h2>
          <h2 className="mt-[30px] text-[20px]">Mobile : <span>(95)2544444444</span></h2>
          <h2 className="mt-[30px] text-[20px]">Email : <span>{getMyProfile?.email}</span></h2>
          <h2 className="mt-[30px] text-[20px]">Location : <span>Myanmar</span></h2>
          <h2 className="flex gap-x-1 mt-[30px] text-[20px]">Social : 
            <span className="flex items-center gap-x-1">
              <img src={Facebook} alt="" className="w-[40px] h-[33px]"/>
              <img src={Instagram} alt="" className="w-[40px] h-[40px]"/>
              <img src={Twitter} alt="" className="w-[30px] h-[26px]"/>
            </span>
          </h2>
        </div>

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