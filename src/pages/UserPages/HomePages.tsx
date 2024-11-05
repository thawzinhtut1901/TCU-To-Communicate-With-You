import { useNavigate } from "react-router-dom";
import { LightChats, LightFindFri, LightProfile, LightGroups, LightSetting, LightRelation } from "@/assets";
import "./type.css";
import { useGetAllFriends, useGetMe, useGetPublishQuotes } from "@/hooks";
import { Button } from "@/components/ui/button";
import { AiOutlineArrowRight } from "react-icons/ai";

const HomePages = () => {
  const navigate = useNavigate();
  const  {data: getPublishQuotes} = useGetPublishQuotes();
  const {data: getMe} = useGetMe();
  const {data: getAllFris} = useGetAllFriends();
  console.log(getAllFris);
  console.log(getMe);

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

      <div className="relative mx-auto w-full max-w-md">
          <div className="-top-[2px] left-6 absolute bg-black -mt-2 -ml-2 border border-blue-500 rounded-full w-5 h-5"></div>
            <h1 key={getPublishQuotes?.id} className="bg-black bg-opacity-25 shadow-md shadow-slate-400 mt-1 md:mt-2 px-2 md:px-4 py-1 md:py-2 border border-blue-500 rounded-[8px] max-w-[24rem] md:max-w-[40rem] text-[12px] text-center text-slate-50 md:text-[16px] cursor-default">
              {getPublishQuotes?.quote}
            </h1>
      </div>

      <div className="flex md:flex-row flex-col justify-center gap-x-8 mt-[30px] md:mt-[40px]">
          <div className="gap-4 grid grid-cols-3 mx-auto md:mx-0">
            <img onClick={() => navigate("/chats")} src={LightChats} alt="" className="w-[100px] md:w-[170px] h-[100px] md:h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out object-cover hover:scale-105 hover:grayscale-50"/>
            <img onClick={() => navigate("/user/find-friends")} src={LightFindFri} alt="" className="w-[100px] md:w-[170px] h-[100px] md:h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out object-cover hover:scale-105 hover:grayscale-50"/>
            <img onClick={() => navigate("/user/profile")} src={LightProfile} alt="" className="w-[100px] md:w-[170px] h-[100px] md:h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out object-cover hover:scale-105 hover:grayscale-50"/>
            <img onClick={() => navigate("/user/groups")} src={LightGroups} alt="" className="w-[100px] md:w-[170px] h-[100px] md:h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out object-cover hover:scale-105 hover:grayscale-50"/>
            <img onClick={() => navigate("/user/settings")} src={LightSetting} alt="" className="w-[100px] md:w-[170px] h-[100px] md:h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out object-cover hover:scale-105 hover:grayscale-50"/>
            <img onClick={() => navigate("/user/relation")} src={LightRelation} alt="" className="w-[100px] md:w-[170px] h-[100px] md:h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out object-cover hover:scale-105 hover:grayscale-50"/>
          </div>

          <div className="flex flex-col mt-4 md:mt-0">
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
          </div>
      </div>
    </div>
  );
};

export default HomePages;    