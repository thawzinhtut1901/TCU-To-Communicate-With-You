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
import { useAdminDeleteUser } from "@/hooks";
import { useEffect } from "react";
import Swal from "sweetalert2";

interface AdminDeleteUserProps {
    userId: number;
    refetch: () => void;
}

const AdminDeleteUser: React.FC<AdminDeleteUserProps> = ({userId, refetch}) => {
    const deleteUser = useAdminDeleteUser();

    useEffect(() => {
        if(deleteUser.isSuccess) {
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "User Successfully!",
                timer: 2000,
            })
            refetch();
        }
    }, [deleteUser.isSuccess, refetch])

    const handleDelete = () => {
        deleteUser.mutate(userId)
    }

  return (
    <div>
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="bg-red-500 hover:bg-red-400 text-white hover:text-white" variant="outline">Delete</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Are you sure to delete?</AlertDialogTitle>
                <AlertDialogDescription>
                    This will permanently delete your account and remove your data from our servers.
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel className="bg-gray-300 hover:bg-gray-200">Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete} className="bg-blue-600 hover:bg-blue-500">Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </div>
  )
}

export default AdminDeleteUser;