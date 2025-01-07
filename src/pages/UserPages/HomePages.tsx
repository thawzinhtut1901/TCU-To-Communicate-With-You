import { useNavigate } from "react-router-dom";
import { LightChats, LightFindFri, LightProfile, LightSetting, LightRelation, Quote, Star } from "@/assets";
import "./type.css";
import { useGetAllFriends, useGetMe, useGetPublishQuotes } from "@/hooks";
import { Button } from "@/components/ui/button";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdOutlineNotificationImportant, MdOutlinePersonAddAlt } from "react-icons/md";

const HomePages = () => {
  const navigate = useNavigate();
  const  {data: getPublishQuotes} = useGetPublishQuotes();
  const {data: getMe} = useGetMe();
  const {data: getAllFris} = useGetAllFriends();

  return (
    <div>
      <div className="flex justify-end">
          {
            getMe?.role === "Admin" && (
              <div onClick={() => navigate("/admin-dashboard")} className="flex">
                <Button className="font-poppins font-semibold text-slate-50 md:text-[18px]">To Admin Dashboard <AiOutlineArrowRight /></Button>
              </div>
            )
          }
      </div>

      <div className="relative mx-auto w-full max-w-sm md:max-w-md">
        <div className="-top-[2px] left-6 absolute bg-black -mt-[3px] md:-mt-2 -ml-2 border border-blue-500 rounded-full w-3 md:w-5 h-3 md:h-5"></div>
        <h1
          key={getPublishQuotes?.id}
          className="flex justify-between bg-black bg-opacity-25 shadow-md shadow-slate-400 mt-1 md:mt-2 px-2 md:px-4 py-1 md:py-2 border border-blue-500 rounded-[8px] max-w-[24rem] md:max-w-[40rem] text-[12px] text-center text-slate-50 md:text-[16px] cursor-default"
        >
          <span className="mx-auto">{getPublishQuotes?.quote}</span>
          <div className="relative group">
            <img src={Star} alt="" className="w-[24px] h-[24px]" />
            <span className="-bottom-10 left-1/2 absolute bg-white opacity-0 group-hover:opacity-100 px-4 py-2 rounded-md text-black text-xs transition-opacity -translate-x-1/2 duration-200">
              Vote
            </span>
          </div>
        </h1>
    </div>


      <div className="flex md:flex-row flex-col justify-center gap-x-8 mt-[30px] md:mt-[40px]">
          <div className="gap-4 grid grid-cols-3 mx-auto md:mx-0">
            <img onClick={() => navigate("/chats")} src={LightChats} alt="" className="w-[100px] md:w-[170px] h-[100px] md:h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out hover:scale-105 hover:grayscale-50 object-cover"/>
            <img onClick={() => navigate("/user/find-friends")} src={LightFindFri} alt="" className="w-[100px] md:w-[170px] h-[100px] md:h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out hover:scale-105 hover:grayscale-50 object-cover"/>
            <img onClick={() => navigate("/user/profile")} src={LightProfile} alt="" className="w-[100px] md:w-[170px] h-[100px] md:h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out hover:scale-105 hover:grayscale-50 object-cover"/>
            <img onClick={() => navigate("/user/quotes")} src={Quote} alt="" className="w-[100px] md:w-[170px] h-[100px] md:h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out hover:scale-105 hover:grayscale-50 object-cover"/>
            <img onClick={() => navigate("/user/settings")} src={LightSetting} alt="" className="w-[100px] md:w-[170px] h-[100px] md:h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out hover:scale-105 hover:grayscale-50 object-cover"/>
            <img onClick={() => navigate("/user/relation")} src={LightRelation} alt="" className="w-[100px] md:w-[170px] h-[100px] md:h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out hover:scale-105 hover:grayscale-50 object-cover"/>
          </div>

          <div className="flex flex-col bg-black bg-opacity-25 mt-4 md:mt-0 rounded-[8px] w-[420px] max-h-[60vh] font-poppins">
            <div className="flex items-center bg-white bg-opacity-20 mx-auto mt-[20px] rounded-[12px] w-[200px] h-[50px]">
              <h1 className="flex mx-auto font-medium text-[16px] text-white">Friends</h1>
            </div>

            <div className="flex items-center bg-white bg-opacity-20 mx-auto mt-[23px] w-[96%] h-[50px] cursor-pointer">
              <div className="bg-white ml-[10px] rounded-[4px] w-[24px] h-[24px]">
                <MdOutlinePersonAddAlt className="w-[22px] h-[22px] text-[#591DA9]"/>
              </div>

              <h1 className="ml-[10px] font-medium text-[16px] text-white">Friend Request</h1>

              <div className="flex ml-auto">
                <MdOutlineNotificationImportant className="w-[24px] h-[24px] text-[#E10101]"/>
              </div>
            </div>

            <div className="flex flex-col overflow-auto scrollbar-hide">
              {
                getAllFris?.items?.length > 0 && getAllFris?.items?.map((fri: any) => {
                  const isUserOne = getMe?.id === fri.userOneId;
                  const user = isUserOne ? fri.userTwo : fri.userOne;

                  return (
                    <div key={fri?.id} className="flex items-center bg-white bg-opacity-20 mx-auto mt-[13px] w-[96%] h-[50px]">
                      <img src={user?.profile} alt="" className="ml-[10px] w-[36px] h-[36px]"/>
                      <h1 className="ml-[16px] font-medium text-[18px] text-white">{user?.displayName}</h1>
                    </div>
                  )
                })
              }
              {/* <ul>
                {getAllFris?.items?.length > 0 && getAllFris?.items.map((fri: any) => {
                  const isUserOne = getMe?.id === fri.userOneId;
                  const user = isUserOne ? fri.userTwo : fri.userOne; 

                  return (
                    <li
                      key={fri.id}
                      className="flex border-slate-50 border rounded-[4px] text-white"
                    >
                      <img src={user.profile} className="my-1 md:my-0 mr-[12px] md:mr-[17px] rounded-[5px] w-[24px] md:w-[34px] h-[24px] md:h-[34px]" />
                      <h1 className="mt-1 text-[16px] md:text-[18px]">{user.displayName}</h1>
                    </li>
                  );
                })}
              </ul> */}
            </div>
          </div>

          {/* <div className="flex flex-col mt-4 md:mt-0">
            <div className="flex justify-center items-center bg-black bg-opacity-25 mx-auto md:mx-0 rounded-b-full w-[320px] md:w-[420px] h-[30px] md:h-[50px]">
              <h1 className="font-medium font-poppins text-white md:text-[26px]">Friends</h1>
            </div>

            <div className="bg-black bg-opacity-25 mx-auto md:mx-0 mt-2 md:mt-4 rounded-b-[8px] rounded-t-[20px] md:rounded-b-[10px] md:rounded-t-[30px] w-[320px] md:w-[420px] max-h-[35vh] md:max-h-[50vh] overflow-auto scrollbar-hide">
              <ul>
               {getAllFris?.items?.length > 0 && getAllFris?.items.map((fri: any) => {
                 const isUserOne = getMe?.id === fri.userOneId;
                 const user = isUserOne ? fri.userTwo : fri.userOne; 

                 return (
                   <li
                     key={fri.id}
                     className="flex border-slate-50 m-2 md:m-3 p-[2px] md:p-2 pl-2 border rounded-[4px] text-white"
                   >
                     <img src={user.profile} className="my-1 md:my-0 mr-[12px] md:mr-[17px] rounded-[5px] w-[24px] md:w-[34px] h-[24px] md:h-[34px]" />
                     <h1 className="mt-1 text-[16px] md:text-[18px]">{user.displayName}</h1>
                   </li>
                 );
               })}
             </ul>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default HomePages;    