import { ChatPages } from "@/pages/UserPages"
import { Outlet } from "react-router-dom"

const ChatLayouts = () => {
  return (
    <div className="flex gap-x-4 bg-radial-custom-gradient w-screen h-screen overflow-hidden">
        <ChatPages/>
        <Outlet/>
    </div>
  )
}

export default ChatLayouts