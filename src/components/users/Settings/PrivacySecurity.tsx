import { ActiveStatus, PersonBook } from "@/assets"
import { AiOutlineStop } from "react-icons/ai"
import { MdAutoDelete, MdMailOutline, MdOutlineCalendarMonth, MdOutlineDevices, MdPersonOutline } from "react-icons/md"
import "./type.css";
import { useEffect, useState } from "react";
import { CardInput } from "@/components/ui/input";
import { useDeleteUserAccount } from "@/hooks";
import { userDeleteAccountData } from "@/types/type";
import { useNavigate } from "react-router-dom";
import { logout } from "@/services/authService";

const PrivacySecurity = () => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [passwordType, setPasswordType] = useState<userDeleteAccountData>({
    password: ""
  });
  const deleteUserAccount = useDeleteUserAccount();

  useEffect(() => {
    if(deleteUserAccount.isSuccess) {
      handleDialog();
      logout();
      navigate("/");
    }
  }, [deleteUserAccount.isSuccess, logout, navigate])

  const handleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const handlePasswordConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordType((prev) => ({
      ...prev,
      password: event.target.value
    }))
  }

  const handleDeleteAccount = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    deleteUserAccount.mutate(passwordType);
  }
  
  return (
    <div className="flex justify-center items-center mx-auto font-roboto">
    <div className="flex flex-col border-slate-500 shadow-inner shadow-slate-700 border w-[400px] h-[700px]">
        <div className="bg-white mx-auto mt-[20px] p-3 rounded-[12px] w-[200px]">
          <h1 className="text-[#591DA9] text-[14px] text-center">Privacy And Security</h1> 
        </div>

         {/* Devices */}
        <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
            <div className="flex items-center font-medium text-[14px]">
                <MdOutlineDevices className="mx-[17px] w-[20px] h-[20px] text-[#591DA9]"/>
                Devices
            </div>

            <div className="flex items-center mr-5">
              <h1 className="font-medium text-[#591DA9] text-[15px]">3</h1>
            </div>
        </div>

        {/* Block user */}
        <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
            <div className="flex items-center font-medium text-[14px]">
              <AiOutlineStop className="mx-[17px] w-[20px] h-[20px] text-[#591DA9]"/>
              Block Users
            </div>

            <div className="flex items-center mr-5">
              <h1 className="font-medium text-[#591DA9] text-[15px]">3</h1>
            </div>
        </div>

        {/* Last Seen Online */}
        <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
            <div className="flex items-center font-medium text-[14px]">
              <img src={ActiveStatus} alt="" className="mx-[17px] w-[20px] h-[20px]"/>
              Last Seen & Online
            </div>

            <div className="flex items-center mr-5">
            <h1 className="font-medium text-[#591DA9] text-[15px]">Everybody</h1>
            </div>
        </div>

        {/* Profile */}
        <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
            <div className="flex items-center font-medium text-[14px]">
              <MdPersonOutline className="mx-[17px] w-[20px] h-[20px] text-[#591DA9]"/>
              Profile Photos
            </div>

            <div className="flex items-center mr-5">
            <h1 className="font-medium text-[#591DA9] text-[15px]">Everybody</h1>
            </div>
        </div>

        {/* Bio */}
        <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
            <div className="flex items-center font-medium text-[14px]">
              <img src={PersonBook} alt="" className="mx-[19px] w-[16px] h-[20px]"/>
              Bio
            </div>

            <div className="flex items-center mr-5">
            <h1 className="font-medium text-[#591DA9] text-[15px]">Nobody</h1>
            </div>
        </div>

        {/* Message */}
        <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
            <div className="flex items-center font-medium text-[14px]">
              <MdMailOutline className="mx-[17px] w-[20px] h-[20px] text-[#591DA9]"/>
              Messages
            </div>

            <div className="flex items-center mr-5">
            <h1 className="font-medium text-[#591DA9] text-[15px]">Everybody</h1>
            </div>
        </div>

        {/* Forward Message */}
        <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
            <div className="flex items-center font-medium text-[14px]">
              <MdMailOutline className="mx-[17px] w-[20px] h-[20px] text-[#591DA9]"/>
              Forward Messages
            </div>

            <div className="flex items-center mr-5">
            <h1 className="font-medium text-[#591DA9] text-[15px]">Everybody</h1>
            </div>
        </div>

        {/* Date Of birth */}
        <div className="flex justify-between bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[50px] cursor-pointer">
            <div className="flex items-center font-medium text-[14px]">
              <MdOutlineCalendarMonth className="mx-[17px] w-[20px] h-[20px] text-[#591DA9]"/>
              Date of Birth
            </div>

            <div className="flex items-center mr-5">
              <h1 className="font-medium text-[#591DA9] text-[15px]">Nobody</h1>
            </div>
        </div>

        {/* Deactivate */}
        <div onClick={handleDialog} className="flex bg-white shadow-inner shadow-slate-700 mt-[16px] w-full h-[70px] cursor-pointer">
          <div className="flex flex-col my-auto">
            <div className="flex items-center font-medium text-[#591DA9] text-[14px]">
                <MdAutoDelete className="mx-[17px] w-[20px] h-[20px]"/>
                Delete My Account
              </div>

              <div className="flex gap-x-[185px] mt-[14px] text-[14px]">
                <h1 className="ml-[55px] font-normal">If away for</h1>

                <div className="flex items-center">
                  <h1 className="font-medium text-[#591DA9] text-[15px]">12 months</h1>
                </div>
              </div>
          </div>
        </div>

        {isDialogOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <form onSubmit={handleDeleteAccount} className="bg-white shadow-lg p-6 rounded w-[35%]">
            <h2 className="font-bold text-gray-800 text-lg">
              Are You Sure You Want to Delete Your Account?
            </h2>
            <p className="mt-2 text-gray-600 text-sm">
              This action cannot be undone.
            </p>

            <div className="flex flex-col mt-4">
              <CardInput 
                name="password"
                id="password"
                type="text"
                value={passwordType.password}
                onChange={handlePasswordConfirm}
                placeholder="Please Type Your Password to confirm!"
                className=""
              />
            </div>
            <div className="flex justify-end gap-4 mt-4">
              <button
                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded text-gray-800"
                onClick={handleDialog}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white"
                type="submit"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
    </div>
  )
}

export default PrivacySecurity