import { friSuggestionProfile } from "@/assets"

const ToConnectRelationFri = () => {
  return (
    <div className="flex flex-col ml-[40px] w-2/3">
      <div className="bg-black bg-opacity-10 border border-black border-opacity-20 rounded-[20px]">
        <h1 className="mt-[10px] font-medium text-[20px] text-center">Friends</h1>

        <div className="flex gap-x-[21px] mt-[17px] ml-[20px] font-medium font-poppins">
          <div className="flex flex-col justify-center items-center gap-y-5 bg-gradient-to-t from-gray-500 to-purple-600 rounded-[12px] w-[150px] h-[150px]">
            <img src={friSuggestionProfile} alt="" className="rounded-[4px] w-[60px] h-[60px]"/>
            <h2 className="text-[16px] text-white">Thaw Thaw</h2>
          </div>

          <div className="flex flex-col justify-center items-center gap-y-5 bg-gradient-to-t from-gray-500 to-purple-600 rounded-[12px] w-[150px] h-[150px]">
            <img src={friSuggestionProfile} alt="" className="rounded-[4px] w-[60px] h-[60px]"/>
            <h2 className="text-[16px] text-white">Thaw Thaw</h2>
          </div>
        </div>
        
        <div className="flex gap-x-[21px] mt-[17px] ml-[20px] font-medium font-poppins">
          <div className="flex flex-col justify-center items-center gap-y-5 bg-gradient-to-t from-gray-500 to-purple-600 rounded-[12px] w-[150px] h-[150px]">
            <img src={friSuggestionProfile} alt="" className="rounded-[4px] w-[60px] h-[60px]"/>
            <h2 className="text-[16px] text-white">Thaw Thaw</h2>
          </div>

          <div className="flex flex-col justify-center items-center gap-y-5 bg-gradient-to-t from-gray-500 to-purple-600 rounded-[12px] w-[150px] h-[150px]">
            <img src={friSuggestionProfile} alt="" className="rounded-[4px] w-[60px] h-[60px]"/>
            <h2 className="text-[16px] text-white">Thaw Thaw</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToConnectRelationFri