import { EditUserProfile } from "@/components/userUI";
import { useGetMe } from "@/hooks";
import { useState } from "react";
import { LiaUserEditSolid } from "react-icons/lia"

const ProfileInfo = () => {
  const {data: getMyProfile, refetch } = useGetMe();
  const [isEditBoxVisible, setIsEditBoxVisible] = useState(false);

  const toggleEditBox = () => {
    setIsEditBoxVisible(!isEditBoxVisible);
  };

  return (
    <div className="flex flex-col">
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

        {isEditBoxVisible && (
              <EditUserProfile refetch={refetch} getMyProfile={getMyProfile} toggleEditBox={toggleEditBox}/>
        )}
    </div>
  )
}

export default ProfileInfo
