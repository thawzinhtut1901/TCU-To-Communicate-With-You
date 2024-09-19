import { FaPhoneAlt } from "react-icons/fa";
import { IoMicOutline, IoImageOutline, IoMenu } from "react-icons/io5";
import { FiVideo } from "react-icons/fi";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { SlOptions, SlOptionsVertical } from "react-icons/sl";
import { BsEmojiSmile } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ChatPages = () => {
  const navigate = useNavigate();

  const handlePhone = () => {
    return;
  };

  const handleOption = () => {
    return;
  };

  return (
    <div className="h-screen w-screen flex flex-row">
      <section className="w-1/5 bg-custom-gradient p-4 border border-gray-300">
        <div className="flex  ">
          <button>
            <a href="">
              <IoMenu className="h-10 w-10 text-white" />
            </a>
          </button>
          <a href="">
            <h1 className="text-white text-2xl  italic font-bold ml-2">TCU</h1>
          </a>
        </div>
        <div className="relative flex items-center max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search..."
            className="pl-12 pr-4 py-1 border border-gray-300  shadow-sm rounded-xl bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full mt-2"
          />
          <FaMagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 sm:left-4 lg:left-6 mt-1" />
        </div>

        <div className="mt-4">
          <h1 className="text-white">Friends</h1>
          <hr className="" />
        </div>
        <ul className="mt-2">
          <li>
            <div className="flex flex-row">
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="rounded-full w-10 h-10 max-w-full object-cover"
              />
              <div className="flex flex-col ml-4">
                <h1 className="text-white text-lg">Chan Nyein Thu</h1>
                <p className="text-gray-200">bar lot nay lae</p>
              </div>
            </div>
          </li>
        </ul>

        <div className="mt-4">
          <h1 className="text-white">Groups</h1>
          <hr className="" />
        </div>
        <ul className="mt-2">
          <li>
            <div className="flex flex-row">
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="rounded-full w-10 h-10 max-w-full object-cover"
              />
              <div className="flex flex-col ml-2">
                <h1 className="text-white text-lg">Chan Nyein Thu</h1>
                <p className="text-gray-200">bar lot nay lae</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
      <section className="flex-1 bg-custom-gradient h-full">
        <section className="flex flex-col h-full ">
          <nav className="flex justify-between bg-custom-gradient p-4">
            <ul className="flex items-center">
              <li>
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="User profile picture"
                  className="w-12 h-12 rounded-full object-cover "
                />
              </li>
              <li className="text-white ml-4">
                <ul className="flex flex-col">
                  <li>User Name</li>
                  <li className="mt-1 text-sm">Active one hour ago</li>
                </ul>
              </li>
            </ul>
            <ul className="flex items-center space-x-4">
              <li>
                <button onClick={handlePhone}>
                  <FaPhoneAlt className="text-white w-5 h-5" />
                </button>
              </li>
              <li>
                <button>
                  <FiVideo
                    // onClick={handleVideo}
                    className="text-white w-5 h-5"
                  />
                </button>
              </li>
              <li>
                <SlOptionsVertical
                  onClick={handleOption}
                  className="text-white w-5 h-5"
                />
              </li>
            </ul>
          </nav>

          <div className="flex-1 bg-white overflow-auto p-4 text-black">
            <ul>
              <li className="bg-gray-400 text-black float-start  p-2 border w-fit rounded-xl m-2">
                Hello World
              </li>
              <li className="bg-gray-400 text-black float-end p-2 border w-fit rounded-xl m-2">
                Min Galar Par Myanmar Pyi
              </li>
            </ul>
          </div>

          <div className="p-2 bg-white">
            <div className="flex items-center max-w-full">
              <div className="relative flex-1">
                <input
                  type="text"
                  className="pl-12 pr-16 py-2 border border-gray-300 rounded-xl shadow-sm bg-custom-gradient text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                  placeholder="Type something..."
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-4">
                  <IoMicOutline className="text-white text-xl cursor-pointer hover:text-gray-300 transition-colors duration-200" />
                  <BsEmojiSmile className="text-white text-xl cursor-pointer hover:text-gray-300 transition-colors duration-200" />
                  <IoImageOutline className="text-white text-xl cursor-pointer hover:text-gray-300 transition-colors duration-200" />
                </div>
              </div>
              <button
                className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded ml-4"
                aria-label="Send message"
              >
                Send
              </button>
            </div>
          </div>
        </section>
      </section>
      <section className="w-1/5 bg-custom-gradient p-4 border border-gray-300">
        <div className="flex justify-center align-middle flex-col">
          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="w-24 h-24 rounded-full object-cover  "
            />
          </div>
          <h1 className="text-center mt-2 text-white font-bold">
            Chan Ntein Thu
          </h1>
          <p className="text-center text-xs text-gray-400 mt-1">
            Active 20m ago
          </p>

          <button className="bg-white font-bold py-2 px-6 rounded mx-auto backdrop-blur-md mt-1">
            <h2 className="text-black">View Profile</h2>
          </button>
          <div className="">
            <ul>
              <li className="mt-2 border text-start pl-2 backdrop-blur-md bg-gray-400  rounded">
                <button
                  className="flex items-center justify-items-start  rounded-lg text-white w-full ml-4 p-2"
                  onClick={() => navigate("/")}
                >
                  <FaMagnifyingGlass className="w-5 h-5" />
                  <h2 className="text-white ml-10 text-sm text-center">
                    Search Chat
                  </h2>
                </button>
              </li>
              <li className="mt-2 border text-start pl-2 backdrop-blur-md bg-gray-400  p-2 rounded">
                <button
                  className="flex items-center justify-items-start  rounded-lg text-white w-full ml-4"
                  onClick={() => navigate("/")}
                >
                  <IoImageOutline className="w-5 h-5" />
                  <h2 className="text-white ml-10 text-sm text-center">
                    Sent Images
                  </h2>
                </button>
              </li>
              <li className="mt-2 border text-start pl-2 backdrop-blur-md bg-gray-400 p-2 rounded">
                <button
                  className="flex items-center justify-items-start  rounded-lg text-white w-full ml-4 "
                  onClick={() => navigate("/")}
                >
                  <SlOptions className="w-5 h-5" />
                  <h2 className="text-white ml-10 text-sm text-center">
                    More Options
                  </h2>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChatPages