import { useNavigate } from "react-router-dom";
import { LightChats, LightFindFri, LightProfile, LightGroups, LightSetting, LightRelation, Logo } from "@/assets";
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
      <div className="flex justify-between">
        <img src={Logo} alt="" className="w-[200px] h-[100px]"/>
          {
            getMe?.role === "Admin" && (
              <div onClick={() => navigate("/admin-dashboard")} className="flex">
                <Button className="gap-x-1 font-poppins font-semibold text-[#591DA9] md:text-[18px]">To Admin Dashboard <AiOutlineArrowRight /></Button>
              </div>
            )
          }
      </div>

      <div className="flex justify-center mt-[30px]">
        <h1 key={getPublishQuotes?.id} className="border-slate-100 bg-black bg-opacity-25 shadow-md shadow-slate-600 mt-1 md:mt-2 px-2 md:px-4 py-1 md:py-2 border rounded-[8px] max-w-[24rem] md:max-w-[40rem] text-[12px] text-slate-50 md:text-[16px] cursor-default">
          {getPublishQuotes?.quote}
        </h1>
      </div>

      <div className="flex md:flex-row flex-col justify-center gap-x-8 mt-[30px] md:mt-[40px]">
          <div className="gap-4 grid grid-cols-3 mx-auto md:mx-0">
            <img onClick={() => navigate("/chats")} src={LightChats} alt="" className="w-[100px] md:w-[170px] h-[100px] md:h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out object-cover hover:scale-105 hover:grayscale-50"/>
            <img src={LightFindFri} alt="" className="w-[100px] md:w-[170px] h-[100px] md:h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out object-cover hover:scale-105 hover:grayscale-50"/>
            <img src={LightProfile} alt="" className="w-[100px] md:w-[170px] h-[100px] md:h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out object-cover hover:scale-105 hover:grayscale-50"/>
            <img src={LightGroups} alt="" className="w-[100px] md:w-[170px] h-[100px] md:h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out object-cover hover:scale-105 hover:grayscale-50"/>
            <img src={LightSetting} alt="" className="w-[100px] md:w-[170px] h-[100px] md:h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out object-cover hover:scale-105 hover:grayscale-50"/>
            <img src={LightRelation} alt="" className="w-[100px] md:w-[170px] h-[100px] md:h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out object-cover hover:scale-105 hover:grayscale-50"/>
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


// <div className="flex flex-col">
    //   {/* TCU Heading */}
    //   <div className="flex justify-between">
    //     <h1 className="bg-[#B895E7] my-[10px] md:my-[20px] ml-[20px] md:ml-[87px] font-roman text-[30px] text-center text-white md:text-start md:text-[50px]">
    //       TCU
    //     </h1>
    //     {
    //       getMe?.role === "Admin" && (
    //         <div onClick={() => navigate("/admin-dashboard")} className="flex">
    //           <Button className="gap-x-1 font-poppins font-semibold md:text-[18px]">To Admin Dashboard <AiOutlineArrowRight /></Button>
    //         </div>
    //       )
    //     }
    //   </div>
    //   <div className="flex flex-col items-center">
    //           {/* Top Bar */}
    //         <div key={getPublishQuotes?.id} className="inline-block bg-slate-300 bg-opacity-25 shadow-md shadow-slate-500 mt-1 md:mt-2 px-2 md:px-4 py-1 md:py-2 rounded-[10px] max-w-[24rem] md:max-w-[40rem] text-[12px] text-white md:text-[16px]">
    //             {getPublishQuotes?.quote}
    //         </div>
      

    //   {/* Main Content */}
    //   <div className="flex md:flex-row flex-col gap-4 md:gap-4 mt-[30px] md:mt-[40px] md:w-full md:max-w-[70rem]">
    //     <div className="flex-1 gap-4 grid grid-cols-3">
    //       <img
    //         onClick={() => navigate("/chats")}
    //         src={Chat}
    //         alt="Chats"
    //         className="shadow-lg shadow-slate-800 w-[100px] md:w-[170px] h-[100px] md:h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out object-cover hover:scale-105 hover:grayscale-50"
    //       />
    //       <img
    //         onClick={() => navigate("")}
    //         src={findFri}
    //         alt="Find Friends"
    //         className="shadow-lg shadow-slate-800 w-[100px] md:w-[170px] h-[100px] md:h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out object-cover hover:scale-105 hover:grayscale-50"
    //       />
    //       <img
    //         onClick={() => navigate("")}
    //         src={groupChat}
    //         alt="Group Chats"
    //         className="shadow-lg shadow-slate-800 w-[100px] md:w-[170px] h-[100px] md:h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out object-cover hover:scale-105 hover:grayscale-50"
    //       />
    //       <img
    //         onClick={() => navigate("/profile")}
    //         src={Profile}
    //         alt="Profile"
    //         className="shadow-lg shadow-slate-800 w-[100px] md:w-[170px] h-[100px] md:h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out object-cover hover:scale-105 hover:grayscale-50"
    //       />
    //       <img
    //         onClick={() => navigate("")}
    //         src={Setting}
    //         alt="Settings"
    //         className="shadow-lg shadow-slate-800 w-[100px] md:w-[170px] h-[100px] md:h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out object-cover hover:scale-105 hover:grayscale-50"
    //       />
    //       <img
    //         onClick={() => navigate("")}
    //         src={Relationship}
    //         alt="Relationship"
    //         className="shadow-lg shadow-slate-800 w-[100px] md:w-[170px] h-[100px] md:h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out object-cover hover:scale-105 hover:grayscale-50"
    //       />
    //     </div>

    //     {/* Right: Friends List or Additional Content */}
    //     <div className="flex-1 bg-white shadow-black shadow-md mt-4 md:mt-0 p-2 rounded-[8px]">
    //       <div className="bg-custom-gradient rounded-b-full h-[30px] md:h-[50px] text-[16px] text-white md:text-[24px]">
    //         <h1 className="flex justify-center items-center pt-1 md:pt-2">Friend List</h1>
    //       </div>

    //       <div className="bg-custom-gradient mt-2 md:mt-4 rounded-b-[8px] rounded-t-[20px] md:rounded-b-[10px] md:rounded-t-[30px] max-h-[35vh] md:max-h-[50vh] overflow-auto scrollbar-hide">
    //         <ul>
    //           {getAllFris?.items?.length > 0 && getAllFris?.items.map((fri: any) => {
    //             const isUserOne = getMe?.id === fri.userOneId;
    //             const user = isUserOne ? fri.userTwo : fri.userOne; 

    //             return (
    //               <li
    //                 key={fri.id}
    //                 className="flex bg-slate-50 bg-opacity-25 m-2 md:m-3 p-[2px] md:p-2 pl-2 rounded-[8px] text-white"
    //               >
    //                 <img src={user.profile} className="my-1 md:my-0 mr-[12px] md:mr-[17px] rounded-[5px] w-[24px] md:w-[34px] h-[24px] md:h-[34px]" />
    //                 <h1 className="mt-1 text-[16px] md:text-[18px]">{user.displayName}</h1>
    //               </li>
    //             );
    //           })}
    //         </ul>
    //       </div>

    //     </div>
    //   </div>
    //   </div>
    // </div>