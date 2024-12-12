import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { logout } from "@/services/authService";
import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
    const navigate = useNavigate();

    const confirmLogout = () => {
        logout();
        navigate("/")
    };

  return (
    <div>
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="flex justify-center items-center gap-x-3 text-black">
                    <MdOutlineLogout className="w-[20px] h-[20px]"/>
                    Log Out
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Are you want to log out?</AlertDialogTitle>
                <AlertDialogDescription>
                    If you want to log out, please continue button.
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={confirmLogout} className="bg-blue-600 hover:bg-blue-500">Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </div>
  )
}

export default UserLogout