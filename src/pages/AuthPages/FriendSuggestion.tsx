import { friSuggestionProfile } from "@/assets"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const FriendSuggestion = () => {
  const navigate = useNavigate();

  const handleSkip = () => {
    navigate("/home");
  };

  return (
    <div className="w-screen h-screen overflow-auto md:overflow-hidden scrollbar-hide">
      <h1 className="mt-[8px] md:ml-[64px] font-luxuriousRoman text-[#D24DF3] text-[30px] text-center md:text-[40px] md:text-start tracking-wide">TCU</h1>

      <div className="flex flex-col justify-center items-center">
        <h2 className="font-poppins text-[#D24DF3] text-[20px] md:text-[30px]">People You May Know</h2>
        <h3 className="mt-[10px] font-poppins text-[10px] md:text-[20px]">Discover new connections and expand your social circle. Here are some suggestions. </h3>

        <div className="gap-4 grid md:grid-cols-2 mt-[20px]">
          <div className="bg-[#007AFF] bg-opacity-75 rounded-[10px] w-[350px] h-[90px] md:h-[120px]">
            <div className="flex mt-[12px] md:mt-[18px]">
              <img src={friSuggestionProfile} alt="" className="ml-[18px] rounded-[8px] w-[40px] md:w-[60px] h-[40px] md:h-[60px]"/>
              <div className="flex flex-col mx-auto font-poppins">
                <h1 className="text-[18px] text-white md:text-[24px]">Toli Moli</h1>
                <p className="font-light text-[10px] text-slate-200 md:text-[12px]">Followed by 312</p>

                <div className="flex gap-x-4">
                  <Button className="bg-blue-600 hover:bg-blue-500 rounded-[8px] w-[100px] h-[30px] md:h-[40px] text-[12px] text-white hover:text-slate-100">Confirm</Button>
                  <Button className="bg-white hover:bg-slate-100 rounded-[8px] w-[100px] h-[30px] md:h-[40px] text-[12px] text-red-600 hover:text-red-300">Delete</Button>
                </div>
              </div>
            </div>

          </div>

          <div className="bg-[#007AFF] bg-opacity-75 rounded-[10px] w-[350px] h-[90px] md:h-[120px]">
            <div className="flex mt-[12px] md:mt-[18px]">
              <img src={friSuggestionProfile} alt="" className="ml-[18px] rounded-[8px] w-[40px] md:w-[60px] h-[40px] md:h-[60px]"/>
              <div className="flex flex-col mx-auto font-poppins">
                <h1 className="text-[18px] text-white md:text-[24px]">Toli Moli</h1>
                <p className="font-light text-[10px] text-slate-200 md:text-[12px]">Followed by 312</p>

                <div className="flex gap-x-4">
                  <Button className="bg-blue-600 hover:bg-blue-500 rounded-[8px] w-[100px] h-[30px] md:h-[40px] text-[12px] text-white hover:text-slate-100">Confirm</Button>
                  <Button className="bg-white hover:bg-slate-100 rounded-[8px] w-[100px] h-[30px] md:h-[40px] text-[12px] text-red-600 hover:text-red-300">Delete</Button>
                </div>
              </div>
            </div>

          </div>

          <div className="bg-[#007AFF] bg-opacity-75 rounded-[10px] w-[350px] h-[90px] md:h-[120px]">
            <div className="flex mt-[12px] md:mt-[18px]">
              <img src={friSuggestionProfile} alt="" className="ml-[18px] rounded-[8px] w-[40px] md:w-[60px] h-[40px] md:h-[60px]"/>
              <div className="flex flex-col mx-auto font-poppins">
                <h1 className="text-[18px] text-white md:text-[24px]">Toli Moli</h1>
                <p className="font-light text-[10px] text-slate-200 md:text-[12px]">Followed by 312</p>

                <div className="flex gap-x-4">
                  <Button className="bg-blue-600 hover:bg-blue-500 rounded-[8px] w-[100px] h-[30px] md:h-[40px] text-[12px] text-white hover:text-slate-100">Confirm</Button>
                  <Button className="bg-white hover:bg-slate-100 rounded-[8px] w-[100px] h-[30px] md:h-[40px] text-[12px] text-red-600 hover:text-red-300">Delete</Button>
                </div>
              </div>
            </div>

          </div>

          <div className="bg-[#007AFF] bg-opacity-75 rounded-[10px] w-[350px] h-[90px] md:h-[120px]">
            <div className="flex mt-[12px] md:mt-[18px]">
              <img src={friSuggestionProfile} alt="" className="ml-[18px] rounded-[8px] w-[40px] md:w-[60px] h-[40px] md:h-[60px]"/>
              <div className="flex flex-col mx-auto font-poppins">
                <h1 className="text-[18px] text-white md:text-[24px]">Toli Moli</h1>
                <p className="font-light text-[10px] text-slate-200 md:text-[12px]">Followed by 312</p>

                <div className="flex gap-x-4">
                  <Button className="bg-blue-600 hover:bg-blue-500 rounded-[8px] w-[100px] h-[30px] md:h-[40px] text-[12px] text-white hover:text-slate-100">Confirm</Button>
                  <Button className="bg-white hover:bg-slate-100 rounded-[8px] w-[100px] h-[30px] md:h-[40px] text-[12px] text-red-600 hover:text-red-300">Delete</Button>
                </div>
              </div>
            </div>

          </div>

          <div className="bg-[#007AFF] bg-opacity-75 rounded-[10px] w-[350px] h-[90px] md:h-[120px]">
            <div className="flex mt-[12px] md:mt-[18px]">
              <img src={friSuggestionProfile} alt="" className="ml-[18px] rounded-[8px] w-[40px] md:w-[60px] h-[40px] md:h-[60px]"/>
              <div className="flex flex-col mx-auto font-poppins">
                <h1 className="text-[18px] text-white md:text-[24px]">Toli Moli</h1>
                <p className="font-light text-[10px] text-slate-200 md:text-[12px]">Followed by 312</p>

                <div className="flex gap-x-4">
                  <Button className="bg-blue-600 hover:bg-blue-500 rounded-[8px] w-[100px] h-[30px] md:h-[40px] text-[12px] text-white hover:text-slate-100">Confirm</Button>
                  <Button className="bg-white hover:bg-slate-100 rounded-[8px] w-[100px] h-[30px] md:h-[40px] text-[12px] text-red-600 hover:text-red-300">Delete</Button>
                </div>
              </div>
            </div>

          </div>
          
          <div className="bg-[#007AFF] bg-opacity-75 rounded-[10px] w-[350px] h-[90px] md:h-[120px]">
            <div className="flex mt-[12px] md:mt-[18px]">
              <img src={friSuggestionProfile} alt="" className="ml-[18px] rounded-[8px] w-[40px] md:w-[60px] h-[40px] md:h-[60px]"/>
              <div className="flex flex-col mx-auto font-poppins">
                <h1 className="text-[18px] text-white md:text-[24px]">Toli Moli</h1>
                <p className="font-light text-[10px] text-slate-200 md:text-[12px]">Followed by 312</p>

                <div className="flex gap-x-4">
                  <Button className="bg-blue-600 hover:bg-blue-500 rounded-[8px] w-[100px] h-[30px] md:h-[40px] text-[12px] text-white hover:text-slate-100">Confirm</Button>
                  <Button className="bg-white hover:bg-slate-100 rounded-[8px] w-[100px] h-[30px] md:h-[40px] text-[12px] text-red-600 hover:text-red-300">Delete</Button>
                </div>
              </div>
            </div>

          </div>

          
        </div>

      </div>

      <div className="flex justify-end my-[15px] mr-[30px] md:mr-[100px]">
        <Button onClick={handleSkip} className="bg-[#007AFF] hover:bg-blue-400 bg-opacity-75 rounded-[8px] w-[100px] md:w-[150px] h-[35px] md:h-[45px] text-[11px] text-white md:text-[12px] hover:text-slate-100">Skip For Now</Button>
      </div>
    </div>
  )
}

export default FriendSuggestion