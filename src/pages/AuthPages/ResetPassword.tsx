
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { useNewPassword } from "@/hooks/useAuth"
import { useEffect, useState } from "react"
import { NewPswData } from "@/types/type"
import { useLocation } from "react-router-dom"

interface Errors {
    password?: string;
    confirmPassword?: string;
}

const ResetPassword = () => {
    const NewPassword = useNewPassword();
    const location = useLocation();
    const [passwordChange, setPasswordChange] = useState<NewPswData>({
        password: "",
        key: "",
    })
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [errors, setErrors] = useState<Errors>({});

    useEffect(() => {
        const key = location?.state?.key;
        if(key) {
            setPasswordChange((prev) => ({...prev, key}))
        }
    }, [location.state]);

    useEffect(() => {
        if(NewPassword.isSuccess) {
            console.log(NewPassword.data)
        }
    }, [NewPassword.isSuccess]);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const validationErrors: Errors = {};

        if (!passwordChange.password) {
            validationErrors.password = "* Password is required !";
        } else if (passwordChange.password.length < 8) {
            validationErrors.password = "Password must be at least 8 characters !";
        }

        if (!confirmPassword) {
            validationErrors.confirmPassword = " ";
        } else if (confirmPassword !== passwordChange.password) {
            validationErrors.confirmPassword = "Password does not match !";
        }

        setErrors(validationErrors);

        if(Object.keys(validationErrors).length === 0) {
            console.log("Password Change Object:", passwordChange);
            NewPassword.mutate(passwordChange);
        }
    }

    const newPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const password = event.target.value;
        setPasswordChange((prev) => ({ ...prev, password }));
        setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }

    const handleConfirmPasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const confirmPassword = event.target.value;
        setConfirmPassword(confirmPassword);
        setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
    };

  return (
    <div className="md:mt-[120px] md:ml-[120px] w-[350px] md:w-[450px] font-poppins text-white">
        <h1 className="flex justify-center md:hidden mt-[24px] font-semibold text-[20px]">Reset Password</h1>
        <h2 className="md:hidden my-[10px]">Please type something you’ll remember</h2>
        <Label htmlFor="password" className="md:text-[18px]">
            Enter New Password *
        </Label>

        <Input
            type="password"
            id="password"
            value={passwordChange.password}
            onChange={newPasswordHandler}
            className="md:bg-slate-200 mt-[5px] md:mt-[10px] rounded-[8px] md:text-black md:text-[16px]"
        />

        {errors.password && (
            <span className="my-2 font-bold text-red-500 text-sm">
                {errors.password}
            </span>
        )}

        <div className="mt-[10px] md:mt-[20px]">
            <Label htmlFor="confirm" className="md:text-[18px]">
                Confirm New Password *
            </Label>

            <Input
                type="password"
                id="confirm"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="md:bg-slate-200 mt-[5px] md:mt-[10px] rounded-[8px] md:text-[16px] md:text-black"
            />
            {errors.confirmPassword && (
                <span className="my-2 font-bold text-red-500 text-sm">
                    {errors.confirmPassword}
                </span>
            )}
        </div>

       <div className="flex justify-center md:justify-start">
        <Button
                type="button"
                onClick={handleSubmit}
                className="bg-slate-200 md:bg-[#8566FF] md:hover:bg-purple-500 hover:bg-slate-400 mt-[30px] md:mt-[40px] px-auto rounded-full md:rounded-[10px] w-[200px] text-[#393ED0] md:text-white"
            >
                Confirm
            </Button>
       </div>
    </div>
  )
}

export default ResetPassword