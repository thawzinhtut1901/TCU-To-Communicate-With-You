// import { FaPhoneAlt } from "react-icons/fa";
// import { IoMicOutline, IoImageOutline, IoMenu } from "react-icons/io5";
// import { FiVideo } from "react-icons/fi";
// import { FaMagnifyingGlass } from "react-icons/fa6";
// import { SlOptions, SlOptionsVertical } from "react-icons/sl";
// import { BsEmojiSmile } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";

import { ChatLookProfile, ChatSideBar, Chatting, StartChat } from "@/components/users/Chats"
import { useState } from "react";

// const ChatPages = () => {
//   const navigate = useNavigate();

//   const handlePhone = () => {
//     return;
//   };

//   const handleOption = () => {
//     return;
//   };

//   return (
//     <div className="flex flex-row w-screen h-screen">
//       <section className="border-gray-300 bg-custom-gradient p-4 border w-1/5">
//         <div className="flex">
//           <button>
//             <a href="">
//               <IoMenu className="w-10 h-10 text-white" />
//             </a>
//           </button>
//           <a href="">
//             <h1 className="ml-2 font-bold text-2xl text-white italic">TCU</h1>
//           </a>
//         </div>
//         <div className="relative flex items-center mx-auto max-w-md">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="border-gray-300 bg-transparent shadow-sm mt-2 py-1 pr-4 pl-12 border rounded-xl focus:ring-1 focus:ring-blue-500 w-full text-white placeholder-gray-400 focus:outline-none"
//           />
//           <FaMagnifyingGlass className="top-1/2 left-3 sm:left-4 lg:left-6 absolute mt-1 text-gray-500 transform -translate-y-1/2" />
//         </div>

//         <div className="mt-4">
//           <h1 className="text-white">Friends</h1>
//           <hr className="" />
//         </div>
//         <ul className="mt-2">
//           <li>
//             <div className="flex flex-row">
//               <img
//                 src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
//                 alt=""
//                 className="rounded-full w-10 max-w-full h-10 object-cover"
//               />
//               <div className="flex flex-col ml-4">
//                 <h1 className="text-lg text-white">Chan Nyein Thu</h1>
//                 <p className="text-gray-200">bar lot nay lae</p>
//               </div>
//             </div>
//           </li>
//         </ul>

//         <div className="mt-4">
//           <h1 className="text-white">Groups</h1>
//           <hr className="" />
//         </div>
//         <ul className="mt-2">
//           <li>
//             <div className="flex flex-row">
//               <img
//                 src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
//                 alt=""
//                 className="rounded-full w-10 max-w-full h-10 object-cover"
//               />
//               <div className="flex flex-col ml-2">
//                 <h1 className="text-lg text-white">Chan Nyein Thu</h1>
//                 <p className="text-gray-200">bar lot nay lae</p>
//               </div>
//             </div>
//           </li>
//         </ul>
//       </section>
//       <section className="flex-1 bg-custom-gradient h-full">
//         <section className="flex flex-col h-full">
//           <nav className="flex justify-between bg-custom-gradient p-4">
//             <ul className="flex items-center">
//               <li>
//                 <img
//                   src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
//                   alt="User profile picture"
//                   className="rounded-full w-12 h-12 object-cover"
//                 />
//               </li>
//               <li className="ml-4 text-white">
//                 <ul className="flex flex-col">
//                   <li>User Name</li>
//                   <li className="mt-1 text-sm">Active one hour ago</li>
//                 </ul>
//               </li>
//             </ul>
//             <ul className="flex items-center space-x-4">
//               <li>
//                 <button onClick={handlePhone}>
//                   <FaPhoneAlt className="w-5 h-5 text-white" />
//                 </button>
//               </li>
//               <li>
//                 <button>
//                   <FiVideo
//                     // onClick={handleVideo}
//                     className="w-5 h-5 text-white"
//                   />
//                 </button>
//               </li>
//               <li>
//                 <SlOptionsVertical
//                   onClick={handleOption}
//                   className="w-5 h-5 text-white"
//                 />
//               </li>
//             </ul>
//           </nav>

//           <div className="flex-1 bg-white p-4 text-black overflow-auto">
//             <ul>
//               <li className="float-start bg-gray-400 m-2 p-2 border rounded-xl w-fit text-black">
//                 Hello World
//               </li>
//               <li className="float-end bg-gray-400 m-2 p-2 border rounded-xl w-fit text-black">
//                 Min Galar Par Myanmar Pyi
//               </li>
//             </ul>
//           </div>

//           <div className="bg-white p-2">
//             <div className="flex items-center max-w-full">
//               <div className="relative flex-1">
//                 <input
//                   type="text"
//                   className="border-gray-300 bg-custom-gradient shadow-sm py-2 pr-16 pl-12 border rounded-xl focus:ring-1 focus:ring-blue-500 w-full text-white placeholder-gray-400 focus:outline-none"
//                   placeholder="Type something..."
//                 />
//                 <div className="top-1/2 right-3 absolute flex space-x-4 transform -translate-y-1/2">
//                   <IoMicOutline className="text-white text-xl hover:text-gray-300 transition-colors duration-200 cursor-pointer" />
//                   <BsEmojiSmile className="text-white text-xl hover:text-gray-300 transition-colors duration-200 cursor-pointer" />
//                   <IoImageOutline className="text-white text-xl hover:text-gray-300 transition-colors duration-200 cursor-pointer" />
//                 </div>
//               </div>
//               <button
//                 className="bg-gray-800 hover:bg-gray-900 ml-4 px-4 py-2 rounded font-bold text-white"
//                 aria-label="Send message"
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         </section>
//       </section>
//       <section className="border-gray-300 bg-custom-gradient p-4 border w-1/5">
//         <div className="flex flex-col justify-center align-middle">
//           <div className="flex justify-center">
//             <img
//               src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
//               alt=""
//               className="rounded-full w-24 h-24 object-cover"
//             />
//           </div>
//           <h1 className="mt-2 font-bold text-center text-white">
//             Chan Ntein Thu
//           </h1>
//           <p className="mt-1 text-center text-gray-400 text-xs">
//             Active 20m ago
//           </p>

//           <button className="bg-white backdrop-blur-md mx-auto mt-1 px-6 py-2 rounded font-bold">
//             <h2 className="text-black">View Profile</h2>
//           </button>
//           <div className="">
//             <ul>
//               <li className="bg-gray-400 backdrop-blur-md mt-2 pl-2 border rounded text-start">
//                 <button
//                   className="flex justify-items-start items-center ml-4 p-2 rounded-lg w-full text-white"
//                   onClick={() => navigate("/")}
//                 >
//                   <FaMagnifyingGlass className="w-5 h-5" />
//                   <h2 className="ml-10 text-center text-sm text-white">
//                     Search Chat
//                   </h2>
//                 </button>
//               </li>
//               <li className="bg-gray-400 backdrop-blur-md mt-2 p-2 pl-2 border rounded text-start">
//                 <button
//                   className="flex justify-items-start items-center ml-4 rounded-lg w-full text-white"
//                   onClick={() => navigate("/")}
//                 >
//                   <IoImageOutline className="w-5 h-5" />
//                   <h2 className="ml-10 text-center text-sm text-white">
//                     Sent Images
//                   </h2>
//                 </button>
//               </li>
//               <li className="bg-gray-400 backdrop-blur-md mt-2 p-2 pl-2 border rounded text-start">
//                 <button
//                   className="flex justify-items-start items-center ml-4 rounded-lg w-full text-white"
//                   onClick={() => navigate("/")}
//                 >
//                   <SlOptions className="w-5 h-5" />
//                   <h2 className="ml-10 text-center text-sm text-white">
//                     More Options
//                   </h2>
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default ChatPages


const ChatPages = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [lookProfile, setLookProfile] = useState(false);
  return (
    <div className="flex gap-x-4 w-screen h-screen overflow-hidden">
      <ChatSideBar onSelectChat={setSelectedChat} selectedChat={selectedChat}/>
      {selectedChat === null ? <StartChat /> : <Chatting lookProfile={lookProfile} setLookProfile={setLookProfile}/>}
      {lookProfile && <ChatLookProfile />}
    </div>
  )
}

export default ChatPages