import { FirstRank, SecondRank, Star, ThirdRank } from "@/assets"
import { FaRankingStar } from "react-icons/fa6"

const LeaderBoard = () => {
  return (
    <div className="flex flex-col w-full font-poppins">
        <div className="flex flex-col h-[70px]">
            <div className="flex items-center gap-x-8 bg-gradient-to-t from-purple-300 to-purple-500 border-b border-b-white rounded-t-[10px]">
                <div className="flex gap-x-4 ml-[15px]">
                    <img src={FirstRank} alt="" className="w-[65px] h-[21px]"/>
                    <h1 className="font-medium text-[16px]">Thaw Zin</h1>
                </div>
                <div className="flex items-center border-gray-800 my-2 pl-[14px] border rounded-[10px] w-[512px] h-[50px] font-medium text-[16px] text-white">
                    Welcome To TCU
                </div>
                <div className="flex items-center gap-x-1">
                    <img src={Star} alt="" className="w-[25px] h-[25px]"/>
                    <h2 className="font-medium text-[16px]">1234567</h2>
                </div>
            </div>

            <div className="flex items-center gap-x-8 bg-gradient-to-t from-purple-300 to-purple-500 border-b border-b-white">
                <div className="flex gap-x-4 ml-[15px]">
                    <img src={SecondRank} alt="" className="w-[65px] h-[21px]"/>
                    <h1 className="font-medium text-[16px]">Thaw Zin</h1>
                </div>
                <div className="flex items-center border-gray-800 my-2 pl-[14px] border rounded-[10px] w-[512px] h-[50px] font-medium text-[16px] text-white">
                    Welcome To TCU
                </div>
                <div className="flex items-center gap-x-1">
                    <img src={Star} alt="" className="w-[25px] h-[25px]"/>
                    <h2 className="font-medium text-[16px]">1234567</h2>
                </div>
            </div>

            <div className="flex items-center gap-x-8 bg-gradient-to-t from-purple-300 to-purple-500 border-b border-b-white">
                <div className="flex gap-x-4 ml-[15px]">
                    <img src={ThirdRank} alt="" className="w-[65px] h-[21px]"/>
                    <h1 className="font-medium text-[16px]">Thaw Zin</h1>
                </div>
                <div className="flex items-center border-gray-800 my-2 pl-[14px] border rounded-[10px] w-[512px] h-[50px] font-medium text-[16px] text-white">
                    Welcome To TCU
                </div>
                <div className="flex items-center gap-x-1">
                    <img src={Star} alt="" className="w-[25px] h-[25px]"/>
                    <h2 className="font-medium text-[16px]">1234567</h2>
                </div>
            </div>

            <div className="flex items-center gap-x-8 bg-gradient-to-t from-purple-300 to-purple-500 border-b border-b-white">
                <div className="flex items-center gap-x-[35px] ml-[35px]">
                    <div className="flex bg-black bg-opacity-60 px-2 py-[2px] rounded-full text-white">
                        4
                    </div>
                    <h1 className="font-medium text-[16px]">Thaw Zin</h1>
                </div>
                <div className="flex items-center border-gray-800 my-2 pl-[14px] border rounded-[10px] w-[512px] h-[50px] font-medium text-[16px] text-white">
                    Welcome To TCU
                </div>
                <div className="flex items-center gap-x-1">
                    <img src={Star} alt="" className="w-[25px] h-[25px]"/>
                    <h2 className="font-medium text-[16px]">1234567</h2>
                </div>
            </div>

            <div className="flex bg-gradient-to-t from-purple-300 to-purple-500 border-b border-b-white">
                <div className="flex flex-col">
                    <div className="flex gap-x-1 mt-1 ml-[35px] text-black text-opacity-60">
                        <FaRankingStar className="w-[18px] h-[18px]"/>
                        <h1 className="mt-1 text-[13px]">My Rank</h1>
                    </div>

                    <div className="flex items-center gap-x-7">
                        <div className="flex gap-x-[35px] ml-[35px]">
                            <div className="flex bg-black bg-opacity-60 px-2 py-[2px] rounded-full text-[14px] text-white">
                                #
                            </div>
                            <h1 className="font-medium text-[16px]">Thaw Zin</h1>
                        </div>
                        <div className="flex items-center border-gray-800 my-2 pl-[14px] border rounded-[10px] w-[512px] h-[50px] font-medium text-[16px] text-white">
                            Welcome To TCU
                        </div>
                        <div className="flex items-center gap-x-1">
                            <img src={Star} alt="" className="w-[25px] h-[25px]"/>
                            <h2 className="font-medium text-[16px]">1234567</h2>
                        </div>
                    </div>
                </div>
               
            </div>


        </div>
    </div>
  )
}

export default LeaderBoard