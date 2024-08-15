import { Avatar } from "@/assets"
import { Button } from "@/components/ui/button"
import { Creating } from "@/components/ui/buttonLoading"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useProfileSetUp } from "@/hooks"
import { profileSetupData } from "@/types/type"
import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

interface Errors {
  userName?: string;
}

const ProfileSetup = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<Errors>({});
  const ProfileSetup = useProfileSetUp();
  const [formData, setFormData] = useState<profileSetupData>({
    userName: "",
    dispalyName: "",
    profilePicture: "",
    bio: "",
    dateOfBirth: "",
    gender: "",
  });
  console.log(ProfileSetup);

  useEffect(() => {
    if(ProfileSetup.isSuccess) {
      navigate("")
    }
  });

  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userName = event.target.value;
    setFormData((prev) => ({...prev, userName}));
    setErrors((prevErrors) => ({...prevErrors, userEmail: ""}));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.files) {
      const profilePicture = event?.target?.files[0];
      setFormData((prev) => ({...prev, profilePicture}))
    }
  };
  
  const handleBirth = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateOfBirth = event.target.value;
    setFormData((prev) => ({...prev, dateOfBirth}));
  };

  const handleGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const gender = event.target.value;
    setFormData((prev) => ({...prev, gender}));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors: Errors = {};

    if(!formData.userName) {
      validationErrors.userName = "* Please Enter Your Username!"
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      ProfileSetup.mutate(formData);
    }
  };

  return (
    <div className="justify-center items-center bg-custom-gradient w-full h-screen container-lg">
      <div className="py-10 font-bold text-center">
        <h1 className="text-4xl text-white">
          Welcome To <span className="font-bold text-purple">TCU</span>
        </h1>
      </div>

      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <div className="w-[124px] h-[123px]">
              {formData.profilePicture instanceof File ? (
                <img
                  src={URL.createObjectURL(formData.profilePicture)}
                  alt="Uploaded Cover"
                  className="rounded-full w-full h-full object-cover"
                />
              ) : ( 
                <label
                  htmlFor="fileInput"
                  className="flex flex-col justify-center items-center rounded-full cursor-pointer"
                >
                  <img src={Avatar} alt="" className="rounded-full"/>
                </label>
              )}
            </div>

          <div className="flex justify-center mt-[16px] h-[27px]">
            <input
              onChange={handleFileChange}
              name="profilePicture"
              type="file"
              className="hidden"
              id="fileInput"
            />
          </div>
          </div>

          {/* username */}
          <div className="flex-col sm:col-span-4 mx-auto mt-5">
            <Label className="text-white">Username *</Label>
            <div className="mt-0">
              <Input
                type="text"
                id="username"
                value={formData.userName}
                onChange={handleUserName}
                className="border-white rounded-[8px] w-full text-white"
              />

              {
                errors.userName && (
                  <span className="my-2 font-bold text-red-500 text-xs">
                    {errors.userName}
                  </span>
                ) 
              }
            </div>
          </div>

          {/* Name
          <div className="sm:col-span-4 mt-5">
            <Label className="text-white">Your Full Name</Label>

            <div className="mt-1">
              <Input
                type="text"
                id="fullname"
                value={formData.dispalyName}
                onChange={handleDisplayName}
                className="border-white rounded-[8px] w-full text-white"
              />
            </div>
          </div> */}

          {/* Bio */}
          {/* <div className="sm:col-span-4 mt-5">
            <Label className="text-white">Bio</Label>

            <div className="mt-1">
              <Input
                type="text"
                id="bio"
                value={formData.bio}
                onChange={handleBio}
                className="border-white rounded-[8px] w-full text-white"
              />
            </div>
          </div> */}

          {/* Gender and Date of Birth */}
          <div className="flex flex-wrap justify-center mt-5">
            <div className="flex-1 pr-4 sm:w-1/2">
              <Label htmlFor="gender" className="text-white">
                Gender
              </Label>
              <div className="mt-1">
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleGender}
                  className="block bg-transparent shadow-sm px-4 py-2 border-transparent rounded-xl ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 ring-inset focus:ring-inset w-full text-white appearance-none"
                >
                  <option value="" disabled className="bg-white m-1 p-1 text-black">
                    Select an option
                  </option>
                  <option value="Male" className="m-1 p-1 text-black">
                    Male
                  </option>
                  <option value="Female" className="m-1 p-1 text-black">
                    Female
                  </option>
                </select>
              </div>
            </div>

            <div className="flex-1 pl-4 sm:w-1/2">
              <Label htmlFor="birth" className="text-white">
                Date of Birth
              </Label>
              <div className="mt-1">
                <input
                  id="birth"
                  name="birth"
                  value={formData.dateOfBirth}
                  onChange={handleBirth}
                  type="date"
                  className="block border-white bg-transparent shadow-sm px-4 py-2 rounded-xl ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600 ring-inset focus:ring-inset w-full text-white placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-5">
            {
              !ProfileSetup.isPending ? (
                <Button
                  type="submit"
                  className="flex justify-center hover:border-white hover:border-2 bg-white hover:bg-slate-200 shadow-md px-4 py-2 border-none rounded-xl w-10/12 font-medium text-black text-lg"
                >
                  Get Start
                </Button>
              ): (
                <div className="flex justify-center hover:border-white hover:border-2 bg-white hover:bg-slate-200 shadow-md px-4 py-2 border-none rounded-xl w-10/12 font-medium text-black text-lg">
                  <Creating/>
                </div>
              )
            }
          </div>

          <div className="mt-2 text-center">
            <p className="text-white">
              Have a question?
              <span>
                <NavLink
                  to={""}
                  className="font-bold text-lg text-purple-600 underline ms-1"
                >
                  Email Us
                </NavLink>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfileSetup