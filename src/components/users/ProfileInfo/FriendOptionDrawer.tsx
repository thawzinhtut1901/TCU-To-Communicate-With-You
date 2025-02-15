import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"
import { Button } from "@/components/ui/button"
import { BsThreeDots } from "react-icons/bs"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerTrigger,
  } from "@/components/ui/drawer"  
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { FaRegStar } from "react-icons/fa6";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsPersonXFill } from "react-icons/bs";
import { RiUserUnfollowFill } from "react-icons/ri";
import { useUnfriend } from "@/hooks"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";


interface FriendOptionDrawerDesktopProps {
    frisId: number;
    refetch: () => void;
    friendChatId: string;
  }

export function FriendOptionDrawer() {
  return (
    <div>
        <Drawer>
            <DrawerTrigger asChild>
                <BsThreeDots className="w-[18px] h-[18px]"/>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                <div className="p-4 pb-0">
                    <div className="flex justify-center items-center space-x-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full w-8 h-8 shrink-0"
                    >
                        <Minus />
                        <span className="sr-only">Decrease</span>
                    </Button>
                    <div className="flex-1 text-center">
                        <div className="font-bold text-7xl tracking-tighter">
                        </div>
                        <div className="text-[0.70rem] text-muted-foreground uppercase">
                        Calories/day
                        </div>
                    </div>
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full w-8 h-8 shrink-0"
                    >
                        <Plus />
                        <span className="sr-only">Increase</span>
                    </Button>
                    </div>
                    <div className="mt-3 h-[120px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart>
                        <Bar
                            dataKey="goal"
                            style={
                            {
                                fill: "hsl(var(--foreground))",
                                opacity: 0.9,
                            } as React.CSSProperties
                            }
                        />
                        </BarChart>
                    </ResponsiveContainer>
                    </div>
                </div>
                <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    </div>
  )
}

export function FriendOptionDrawerDesktop({ frisId, refetch, friendChatId }: FriendOptionDrawerDesktopProps) {
    const unfriend = useUnfriend();
    const navigate = useNavigate();

    useEffect(() => {
        if(unfriend.isSuccess) {
            refetch();
        }
    }, [unfriend.isSuccess, refetch])

    const handleUnfriend = (friendId:number) => {
        unfriend.mutate(friendId)
    }

    return (
        <div className="font-poppins">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button>
                        <span>
                            <BsThreeDots className="w-[18px] h-[18px] text-black"/>
                        </span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuGroup>
                    <DropdownMenuItem className="flex items-center gap-x-3 font-bold text-[16px]">
                        <FaRegStar className="w-[18px] h-[18px]"/>
                        Favorites
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => navigate(`/chats/${friendChatId}`)} className="flex items-center gap-x-3 font-bold text-[16px]">
                        <BiMessageRoundedDetail className="w-[18px] h-[18px]"/>
                        Message Thaw Zin
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex items-center gap-x-3 font-bold text-[16px]">
                    <RiUserUnfollowFill  className="w-[18px] h-[18px]"/>
                        Unfollow
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() =>handleUnfriend(frisId)} className="flex items-center gap-x-3 font-bold text-[16px]">
                        <BsPersonXFill className="w-[18px] h-[18px]"/>
                        Unfriend
                    </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}