import { ChatPages } from "@/pages/UserPages"
import { Outlet } from "react-router-dom"

const ChatLayouts = () => {
  return (
    <div className="bg-radial-custom-gradient">
        <ChatPages/>
        <Outlet/>
    </div>
  )
}

export default ChatLayouts