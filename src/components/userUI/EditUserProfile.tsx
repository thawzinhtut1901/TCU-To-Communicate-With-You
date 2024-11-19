import { useUpdateMe } from "@/hooks"
import { Button } from "../ui/button"
import { CardInput } from "../ui/input"
import { Label } from "../ui/label"
import { CardTextarea } from "../ui/textarea"
import { useEffect, useState } from "react"
import { updateProfileData } from "@/types/type";
import { IoClose } from "react-icons/io5"


const EditUserProfile = ({toggleEditBox , getMyProfile} : {toggleEditBox() : void, getMyProfile: updateProfileData;}) => {
  const updateProfileData = useUpdateMe();
  const [updateProfile, setUpdateProfile] = useState<updateProfileData> ({
    userName: getMyProfile.userName || "", 
    displayName: getMyProfile.displayName || "",
    profilePicture: getMyProfile.profilePicture,
    dateOfBirth: getMyProfile.dateOfBirth || "",
    bio: getMyProfile.bio || "",
    gender: getMyProfile.gender || "",
  });
  console.log(getMyProfile)

  useEffect(() => {
    if(updateProfileData.isSuccess) {
        toggleEditBox();
    }
  }, [updateProfileData.isSuccess, toggleEditBox])

  const handleDisplayName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateProfile((prev) => ({
        ...prev,
        displayName: event.target.value
    }))
  }

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateProfile((prev) => ({
        ...prev,
        userName: event.target.value
    }))
  }

  const handleBirthDay = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateProfile((prev) => ({
        ...prev,
        dateOfBirth: event.target.value
    }))
  }

  const handleGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdateProfile((prev) => ({
        ...prev,
        gender: event.target.value
    }))
  }

  const handleBio = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUpdateProfile((prev) => ({
        ...prev,
        bio: event.target.value
    }))
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProfileData.mutate(updateProfile)
  }

  return (
    <div className="top-1/2 left-1/2 z-10 fixed inset-0 border-slate-100 bg-radial-custom-gradient border rounded-[8px] w-5/6 h-[600px] md:h-[550px] font-primary transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-between pt-[30px]">
            <h1 className="pl-[30px] md:pl-[45px] text-[18px] text-white md:text-[22px]">Edit Profile Information</h1>
            <IoClose onClick={toggleEditBox} className="mr-4 md:mr-[45px] w-[20px] h-[20px]"/>
        </div>

        <form onSubmit={handleSubmit}>
            <div className="flex md:flex-row flex-col gap-x-24 pt-[15px] md:pt-[30px] pl-[30px] md:pl-[45px]">
                <div className="flex flex-col gap-y-1">
                    <Label htmlFor="name" className="text-[15px]">Edit Your Name</Label>

                    <CardInput 
                        id="name"
                        name="name"
                        value={updateProfile.displayName}
                        onChange={handleDisplayName}
                        type="text" 
                        className="shadow-md shadow-slate-900"
                    />
                </div>

                <div className="flex flex-col gap-y-1 mt-4 md:mt-0">
                    <Label htmlFor="birth" className="text-[15px]">Edit Your Date Of Birth</Label>

                    <CardInput 
                        id="birth"
                        name="birth"
                        value={updateProfile.dateOfBirth}
                        onChange={handleBirthDay}
                        type="date" 
                        className="shadow-md shadow-slate-900"
                    />
                </div>

                <div className="flex flex-col gap-y-1 mt-4 md:mt-0">
                    <Label htmlFor="gender" className="text-[15px]">Edit Your Gender</Label>

                    <CardInput 
                        id="gender"
                        name="gender"
                        value={updateProfile.gender}
                        onChange={handleGender}
                        type="text" 
                        className="shadow-md shadow-slate-900"
                    />
                </div>
            </div>

            <div className="flex md:flex-row flex-col gap-x-24 mt-4 md:mt-0 md:pt-[30px] pl-[30px] md:pl-[45px]">
                <div className="flex flex-col gap-y-1">
                    <Label htmlFor="username" className="text-[15px]">Edit Your Username</Label>

                    <CardInput 
                        id="username"
                        name="username"
                        value={updateProfile.userName}
                        onChange={handleUsername}
                        type="text" 
                        className="shadow-md shadow-slate-900"
                    />
                </div>
            </div>

            <div className="flex flex-col mt-4 md:mt-0 md:pt-[30px] pl-[30px] md:pl-[45px]">
                <Label htmlFor="bio" className="text-[15px]">Bio</Label>

                <CardTextarea
                    id="bio"
                    name="bio"
                    value={updateProfile.bio}
                    onChange={handleBio}
                    className="shadow-md shadow-slate-900"
                />
            </div>

            <div className="flex justify-center my-[30px] md:my-[56px]">
                <Button type="submit" className="bg-black bg-opacity-70">Save Changes</Button>
            </div>
        </form>
    </div>
  )
}

export default EditUserProfile