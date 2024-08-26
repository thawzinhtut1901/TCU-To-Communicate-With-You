import { useNavigate } from "react-router-dom";
import { Chat, findFri, groupChat, Profile, Setting, Relationship } from "@/assets";
import "./type.css";

const HomePages = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col cursor-default">
      {/* TCU Heading */}
      <h1 className="my-[15px] md:my-[20px] md:ml-[87px] font-roman text-2xl text-start text-white md:text-[50px]">
        TCU
      </h1>

      <div className="flex flex-col items-center">
              {/* Top Bar */}
      <div className="inline-block bg-slate-300 bg-opacity-25 shadow-md shadow-slate-500 mt-2 px-4 py-2 rounded-[10px] text-white">
        Nah, I will win!
      </div>

      {/* Main Content */}
      <div className="flex gap-4 gap-x-6 mt-[40px] w-full max-w-[70rem]">
        {/* Left: Icon Grid */}
        <div className="flex-1 gap-4 grid grid-cols-2 md:grid-cols-3">
          <img
            onClick={() => navigate("/")}
            src={Chat}
            alt="Chats"
            className="shadow-lg shadow-slate-800 w-[170px] h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out object-cover hover:scale-105 hover:grayscale-50"
          />
          <img
            onClick={() => navigate("/")}
            src={findFri}
            alt="Find Friends"
            className="shadow-lg shadow-slate-800 w-[170px] h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out object-cover hover:scale-105 hover:grayscale-50"
          />
          <img
            onClick={() => navigate("/")}
            src={groupChat}
            alt="Group Chats"
            className="shadow-lg shadow-slate-800 w-[170px] h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out object-cover hover:scale-105 hover:grayscale-50"
          />
          <img
            onClick={() => navigate("/")}
            src={Profile}
            alt="Profile"
            className="shadow-lg shadow-slate-800 w-[170px] h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out object-cover hover:scale-105 hover:grayscale-50"
          />
          <img
            onClick={() => navigate("/")}
            src={Setting}
            alt="Settings"
            className="shadow-lg shadow-slate-800 w-[170px] h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out object-cover hover:scale-105 hover:grayscale-50"
          />
          <img
            onClick={() => navigate("/")}
            src={Relationship}
            alt="Relationship"
            className="shadow-lg shadow-slate-800 w-[170px] h-[170px] transform transition-transform duration-300 cursor-pointer ease-in-out object-cover hover:scale-105 hover:grayscale-50"
          />
        </div>

        {/* Right: Friends List or Additional Content */}
        <div className="flex-1 bg-white shadow-black shadow-md p-2 rounded-[8px]">
          {/* You can add your Friends list or any content here */}
          <div className="bg-custom-gradient rounded-b-full h-[50px] text-[24px] text-white">
            <h1 className="flex justify-center items-center pt-2">Friend List</h1>
          </div>
          <div className="bg-custom-gradient mt-4 rounded-b-[10px] rounded-t-[30px] max-h-[60vh] overflow-auto scrollbar-hide">
            <ul>
              <li className="bg-slate-50 bg-opacity-25 m-2 p-2 rounded-[8px] text-white">Bao</li>
              <li className="bg-slate-50 bg-opacity-25 m-2 p-2 rounded-[8px] text-white">Bao</li>
              <li className="bg-slate-50 bg-opacity-25 m-2 p-2 rounded-[8px] text-white">Bao</li>
              <li className="bg-slate-50 bg-opacity-25 m-2 p-2 rounded-[8px] text-white">Bao</li>
              <li className="bg-slate-50 bg-opacity-25 m-2 p-2 rounded-[8px] text-white">Bao</li>
              <li className="bg-slate-50 bg-opacity-25 m-2 p-2 rounded-[8px] text-white">Bao</li>
              <li className="bg-slate-50 bg-opacity-25 m-2 p-2 rounded-[8px] text-white">Bao</li>
              <li className="bg-slate-50 bg-opacity-25 m-2 p-2 rounded-[8px] text-white">Bao</li>
              <li className="bg-slate-50 bg-opacity-25 m-2 p-2 rounded-[8px] text-white">Bao</li>
              <li className="bg-slate-50 bg-opacity-25 m-2 p-2 rounded-[8px] text-white">Bao</li>
              <li className="bg-slate-50 bg-opacity-25 m-2 p-2 rounded-[8px] text-white">Bao</li>
              <li className="bg-slate-50 bg-opacity-25 m-2 p-2 rounded-[8px] text-white">Bao</li>
            </ul>
          </div>

          {/* Add more content here as needed */}
        </div>
      </div>
      </div>
    </div>
  );
};

export default HomePages;

// import React from 'react';

// const App: React.FC = () => {
//   return (
//     <div className="flex justify-center items-center bg-gradient-to-b from-indigo-900 to-purple-900 min-h-screen">
//       <div className="bg-purple-800 shadow-md p-8 rounded-lg w-full max-w-3xl">
//         {/* Header */}
//         <div className="mb-8 text-center">
//           <h1 className="font-bold text-4xl text-white">TCU</h1>
//           <div className="inline-block bg-purple-700 mt-2 px-4 py-2 rounded-full text-white">
//             Nah, I will win!
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="gap-6 grid grid-cols-3 mb-8">
//           {/* Chats */}
//           <div className="bg-purple-600 shadow-md p-4 rounded-lg">
//             <div className="bg-purple-700 p-2 rounded-md">
//               {/* Icon Placeholder */}
//               <div className="text-center text-white">Chats</div>
//             </div>
//           </div>
//           {/* Find Friends */}
//           <div className="bg-purple-600 shadow-md p-4 rounded-lg">
//             <div className="bg-purple-700 p-2 rounded-md">
//               {/* Icon Placeholder */}
//               <div className="text-center text-white">Find Friends</div>
//             </div>
//           </div>
//           {/* Profile */}
//           <div className="bg-purple-600 shadow-md p-4 rounded-lg">
//             <div className="bg-purple-700 p-2 rounded-md">
//               {/* Icon Placeholder */}
//               <div className="text-center text-white">Profile</div>
//             </div>
//           </div>
//           {/* Group Chats */}
//           <div className="bg-purple-600 shadow-md p-4 rounded-lg">
//             <div className="bg-purple-700 p-2 rounded-md">
//               {/* Icon Placeholder */}
//               <div className="text-center text-white">Group Chats</div>
//             </div>
//           </div>
//           {/* Settings */}
//           <div className="bg-purple-600 shadow-md p-4 rounded-lg">
//             <div className="bg-purple-700 p-2 rounded-md">
//               {/* Icon Placeholder */}
//               <div className="text-center text-white">Settings</div>
//             </div>
//           </div>
//           {/* Relationships */}
//           <div className="bg-purple-600 shadow-md p-4 rounded-lg">
//             <div className="bg-purple-700 p-2 rounded-md">
//               {/* Icon Placeholder */}
//               <div className="text-center text-white">Relationship</div>
//             </div>
//           </div>
//         </div>

//         {/* Friends List */}
//         <div className="bg-purple-700 shadow-md p-4 rounded-lg">
//           <h2 className="mb-4 text-white text-xl">Friends</h2>
//           <ul>
//             <li className="mb-2 text-white">New Friends</li>
//             <li className="mb-2 text-white">Boo Bei</li>
//             <li className="mb-2 text-white">小明</li>
//             <li className="mb-2 text-white">小红</li>
//             <li className="mb-2 text-white">Cha Chio</li>
//             {/* Add more friends here */}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;