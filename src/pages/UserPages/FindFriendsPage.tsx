import { HomeInput } from "@/components/ui/input"
import { BiSolidCircle } from "react-icons/bi"
import { IoIosSearch } from "react-icons/io"
import "./type.css"
import { useGetAllFriends } from "@/hooks"

const FindFriendsPage = () => {
  const {data: getAllFris} = useGetAllFriends();  
  
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center mt-2 md:mt-0">
        <div className="relative ml-4 md:ml-0">
            <div className="top-[3px] md:-top-[2px] left-6 absolute bg-blue-950 -mt-2 -ml-2 border border-blue-500 rounded-full w-3 md:w-5 h-3 md:h-5"></div>
              <div className="top-0 left-3 md:left-5 absolute inset-y-0 flex items-center pointer-events-none">
                  <IoIosSearch className="text-[16px] text-white md:text-[18px]" />
              </div>
              <HomeInput
                  type="text"
                  placeholder="Please type Username that you want to find"
                  className="bg-white bg-opacity-40 shadow-md md:py-2 pl-8 md:pl-14 border border-blue-500 rounded-[10px] focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
        </div>

        <div className="md:flex hidden">
          <div className="flex gap-x-[2px] md:gap-x-1 ml-1 md:ml-3">
            <BiSolidCircle className="mt-[3px] border rounded-full w-[10px] md:w-[15px] h-[10px] md:h-[15px] text-[#591DA9]"/>
            <h1 className="text-[12px] text-white md:text-[16px]">Username</h1>
          </div>
          <div className="flex gap-x-[2px] md:gap-x-1 ml-1 md:ml-3">
            <BiSolidCircle className="mt-[3px] border rounded-full w-[10px] md:w-[15px] h-[10px] md:h-[15px] text-slate-700"/>
            <h1 className="text-[12px] text-white md:text-[16px]">Group Name</h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[25px]">
        <div className="flex border-2 bg-white bg-opacity-40 rounded-[10px] w-[435px] md:w-[870px] h-[480px] md:h-[600px]">
    
          {/* Friend */}
          <div className="border-slate-500 bg-black bg-opacity-15 m-2 md:m-4 p-4 border rounded-[10px] w-2/3 md:w-3/4">
            <div className="bg-[#2264E5] bg-opacity-15 mx-auto py-1 md:py-0 md:p-2 rounded-[10px] md:w-[97px]">
              <h1 className="text-[16px] text-center md:text-[20px]">Friends</h1>
            </div>

            {/* To Friends Loop */}
            <div className="flex flex-col max-h-[75vh] overflow-auto scrollbar-hide">
              {
                getAllFris?.items?.map((fri:any) => (
                  <div key={fri?.id} className="flex border-[#591DA9] bg-white bg-opacity-15 mt-3 border rounded-[10px]">
                    <img key={fri?.userTwo?.id} src={fri?.userTwo?.profile} alt="" className="m-2 ml-[12px] rounded-full w-[22.5px] md:w-[45px] h-[22.5px] md:h-[45px]"/>
                    <h1 key={fri?.userTwo?.id} className="my-auto ml-[10px] md:ml-[14px] text-[14px] md:text-[18px]">{fri?.userTwo?.displayName}</h1>
                  </div>
                ))
              }
            </div>
          </div>

          {/* Search Showing To Add */}
          <div className="border-slate-500 bg-black bg-opacity-15 m-2 md:m-4 p-4 border rounded-[10px] w-full">

          </div>
        </div>


      </div>
      
    </div>
  )
}

export default FindFriendsPage