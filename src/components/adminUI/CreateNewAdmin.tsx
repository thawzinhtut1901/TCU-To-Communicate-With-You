import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CardInput } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCreateAdmin } from "@/hooks"
import { CreateAdminData } from "@/types/type"
import { useEffect, useState } from "react"

interface Errors {
  email?: string;
  password?: string;
  adminPosition?: string;
}

const CreateNewAdmin = ({refetch} : {refetch: any}) => {
  const createAdmin = useCreateAdmin();
  const [errors, setErrors] = useState<Errors>({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [createNewAdminData, setCreateNewAdminData] = useState<CreateAdminData>({
    email: "",
    password: "",
    adminPosition: "",
  })

  useEffect(() => {
    if (createAdmin.isError) {
      const backendError = createAdmin.error.message || "An unexpected error";
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: backendError,
      }));
    }

    if (createAdmin.isSuccess) {
      setIsDialogOpen(false);
      resetForm();
      refetch();
    }
  }, [createAdmin.isError, createAdmin.isSuccess, refetch]);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    setCreateNewAdminData((prev) => ({ ...prev, email }));
    setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    setCreateNewAdminData((prev) => ({ ...prev, password }));
    setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const adminPosition = event.target.value;
    setCreateNewAdminData((prev) => ({...prev, adminPosition}));
    setErrors((prevErrors) => ({ ...prevErrors, adminPosition: "" }));
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const validationErrors: Errors = {};

    if (!createNewAdminData.email) {
      validationErrors.email = "* Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(createNewAdminData.email)) {
      validationErrors.email = "Invalid Email!";
    }

    if (!createNewAdminData.password) {
      validationErrors.password = "* Password is required!";
    } else if (createNewAdminData.password.length < 8) {
      validationErrors.password = "Password must be at least 8 characters!";
    }

    if(!createNewAdminData.adminPosition) {
      validationErrors.adminPosition = "* Role is required!"
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      createAdmin.mutate(createNewAdminData);
      setIsDialogOpen(false);
    }
  }

  const resetForm = () => {
    setCreateNewAdminData({ email: "", password: "", adminPosition: "" });
    setErrors({});
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => resetForm()} className="bg-gray-400 hover:bg-gray-300 hover:text-slate-50" variant="outline">Create Admin</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Admin</DialogTitle>
          <DialogDescription>
            Create Your New Admin Account here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="gap-4 grid py-4">
          <div className="items-center gap-4 grid grid-cols-4">
            <Label htmlFor="email" className="">
              Email
            </Label>
            <CardInput id="email" onChange={handleEmailChange} value={createNewAdminData.email}  className="col-span-3" />
          </div>

            {errors.email && (
              <span className="my-2 font-bold text-red-500 text-xs">
                {errors.email}
              </span>
            )}

          <div className="items-center gap-4 grid grid-cols-4">
            <Label htmlFor="password" className="">
              Password
            </Label>
            <CardInput id="password" onChange={handlePasswordChange} value={createNewAdminData.password} className="col-span-3" />
          </div>
          
            {errors.password && (
              <span className="my-2 font-bold text-red-500 text-xs">
                {errors.password}
              </span>
            )}

          <div className="items-center gap-4 grid grid-cols-4">
            <Label htmlFor="role" className="">
              Role
            </Label>
            <CardInput id="role" onChange={handleRoleChange} value={createNewAdminData.adminPosition} className="col-span-3" />
          </div>
          
        </div>
        <DialogFooter>
          <Button className="bg-blue-500 hover:bg-blue-400"  onClick={handleSubmit}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CreateNewAdmin