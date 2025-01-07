import { BestieRelation, FriendRealtion, friSuggestionProfile, PartnerRelation, SiblingRelation } from "@/assets"


const RequestRelation = () => {
  return (
    <div className="flex flex-col mr-[30px] w-full">
      <div className="bg-[#B895E7] bg-opacity-20 shadow-inner shadow-popover-foreground border border-black border-opacity-20">
        <h1 className="my-[20px] font-semibold text-[20px] text-center">Request To Make Relationship</h1>

        <div className="flex items-center bg-gradient-to-br from-blue-400 via-blue-400 to-gray-500 mx-auto rounded-[8px] w-11/12 h-[220px]">
          <img src={friSuggestionProfile} alt="" className="ml-[20px] rounded-full w-[150px] h-[150px]"/>

          <div className="flex flex-col ml-[15px] font-poppins">
            <h1 className="font-medium text-[20px]">Thaw Zin</h1>
            
            <div className="flex gap-x-4 mt-[5px] font-semibold text-[15px] text-white">
              <h2>Founder Of TCU</h2>
              <h2>@username</h2>
            </div>

            <div className="flex gap-x-6 mt-[10px] font-medium">
              <div className="flex flex-col">
                <h3 className="text-[15px] text-center">3</h3>
                <h3 className="text-[13px]">Published quotes</h3>
              </div>

              <div className="flex flex-col">
                <h3 className="text-[15px] text-center">3</h3>
                <h3 className="text-[13px]">Followers</h3>
              </div>

              <div className="flex flex-col">
                <h3 className="text-[15px] text-center">3</h3>
                <h3 className="text-[13px]">Following</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-y-6 mt-[30px] mb-8">
          <div className="flex gap-x-6">
            <div className="flex flex-col items-center bg-[#2264E5] bg-opacity-15 shadow-inner shadow-slate-200 rounded-[20px] w-[125px] h-[125px]">
              <img src={FriendRealtion} alt="" className="w-[80px] h-[90px]"/>
              <h1 className="font-medium font-poppins text-[20px] text-white">Friend</h1>
            </div>

            <div className="flex flex-col items-center bg-[#2264E5] bg-opacity-15 shadow-inner shadow-slate-200 rounded-[20px] w-[125px] h-[125px]">
              <img src={BestieRelation} alt="" className="w-[80px] h-[90px]"/>
              <h1 className="font-medium font-poppins text-[20px] text-white">Bestie</h1>
            </div>
          </div>

          <div className="flex gap-x-6">
            <div className="flex flex-col items-center bg-[#2264E5] bg-opacity-15 shadow-inner shadow-slate-200 rounded-[20px] w-[125px] h-[125px]">
              <img src={PartnerRelation} alt="" className="w-[90px] h-[90px]"/>
              <h1 className="font-medium font-poppins text-[20px] text-white">Partner</h1>
            </div>

            <div className="flex flex-col items-center bg-[#2264E5] bg-opacity-15 shadow-inner shadow-slate-200 rounded-[20px] w-[125px] h-[125px]">
              <img src={SiblingRelation} alt="" className="w-[80px] h-[90px]"/>
              <h1 className="font-medium font-poppins text-[20px] text-white">Sibling</h1>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default RequestRelation