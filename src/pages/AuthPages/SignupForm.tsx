import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useSignUp } from "../../hooks";
import { useEffect, useState } from "react";
import { AuthData } from "../../types/type";

interface Errors {
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const SignupForm = () => {
    const navigate = useNavigate();
    const [accountData, setAccountData] = useState<AuthData>({
        email: "",
        password: ""
    });
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [errors, setErrors] = useState<Errors>({});
    const createAccount = useSignUp();

    useEffect(() => {
        if (createAccount.isSuccess) {
            navigate("");
        }
    }, [createAccount.isSuccess, navigate]);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        const validationErrors: Errors = {};     
          
        if (!accountData.email) {
            validationErrors.email = "* Email is required !";
        } else if (!/\S+@\S+\.\S+/.test(accountData.email)) {
            validationErrors.email = "Invalid Email !";
        }

        if (!accountData.password) {
            validationErrors.password = "* Password is required !";
        } else if (accountData.password.length < 8) {
            validationErrors.password = "Password must be at least 8 characters !";
        }

        if (!confirmPassword) {
            validationErrors.confirmPassword = "* Confirm Password is required !";
        } else if (confirmPassword !== accountData.password) {
            validationErrors.confirmPassword = "Password does not match !";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            createAccount.mutate(accountData);
            console.log(accountData);
        }
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const email = event.target.value;
        setAccountData((prev) => ({ ...prev, email }));
        setErrors((prevErrors) => ({ ...prevErrors, email: "" }));

        if (!email) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: "* Email is required !",
            }));
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setErrors((prevErrors) => ({ ...prevErrors, email: "Invalid Email !" }));
        }
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const password = event.target.value;
        setAccountData((prev) => ({ ...prev, password }));
        setErrors((prevErrors) => ({ ...prevErrors, password: "" }));

        if (!password) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: "* Password is required !",
            }));
        } else if (password.length < 8) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: "Password must be at least 8 characters !",
            }));
        }
    };

    const handleConfirmPasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const confirmPassword = event.target.value;
        setConfirmPassword(confirmPassword);
        setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));

        if (!confirmPassword) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                confirmPassword: "* Confirm Password is required !",
            }));
        } else if (confirmPassword !== accountData.password) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                confirmPassword: "Password does not match !",
            }));
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="flex justify-center text-2xl font-medium text-white font-poppins">Sign up</h2>

            <div className="flex-col mx-auto mt-[30px] md:mt-[20px] w-[350px] lg:w-[550px] font-poppins md:font-thin text-[10px] text-white md:text-[14px]">
                <Label htmlFor="email">
                    Email *
                </Label>
                <Input 
                    type="email" 
                    id="email"
                    value={accountData.email}
                    onChange={handleEmailChange}
                    className="rounded-[8px]"
                />
                {errors.email && (
                    <span className="my-2 text-sm font-bold text-red-500">{errors.email}</span>
                )}
            </div>

            <div className="flex-col mx-auto mt-[20px] w-[350px] lg:w-[550px] font-poppins md:font-thin text-[10px] text-white md:text-[14px]">
                <Label htmlFor="password" className="font-poppins font-thin text-[14px]">
                    Password *
                </Label>
                <Input
                    type="password"
                    id="password"
                    value={accountData.password}
                    onChange={handlePasswordChange}
                    className="rounded-[8px]"
                />
                {errors.password && (
                    <span className="my-2 text-sm font-bold text-red-500">
                        {errors.password}
                    </span>
                )}
            </div>

            <div className="flex-col mx-auto mt-[20px] w-[350px] lg:w-[550px] font-poppins md:font-thin text-[10px] text-white md:text-[14px]">
                <Label htmlFor="confirm">
                    Confirm Your Password *
                </Label>
                <Input 
                    type="password"
                    id="confirm" 
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className="rounded-[8px]"
                />
                {errors.confirmPassword && (
                    <span className="my-2 text-sm font-bold text-red-500">
                        {errors.confirmPassword}
                    </span>
                )}
            </div>

            <div className="flex space-x-2 mx-auto mt-[30px] md:mt-[50px] w-[350px] lg:w-[550px] font-poppins font-thin text-[9px] text-white">
                <Checkbox id="recieve-email" className="mt-1 rounded-[5px]" />
                <Label
                    htmlFor="recieve-email"
                    className="text-[12px] md:text-[14px] cursor-pointer"
                >
                    I want to receive emails about the product, feature updates, event and 
                    marketing promotion.
                </Label>
            </div>

            <h2 className="md:flex mx-auto mt-[24px] w-[350px] md:w-[550px] font-poppins font-thin text-[12px] text-white md:text-[14px]">
                By creating an account, you agree to the <a href="#" className="pl-[2px] md:pl-1 border-b"> Term of use and Privacy Policy.</a>
            </h2>

            <Button onClick={handleSubmit} type="submit" className="flex bg-slate-50 hover:bg-slate-300 mt-[24px] ml-[55px] border rounded-full font-poppins font-thin text-[#8566FF] text-[12px] md:text-[14px]">
                Create An Account
            </Button>

            <h2 className="flex mx-auto mt-[14px] md:mt-[24px] pb-[20px] md:pb-0 w-[400px] md:w-[550px] font-poppins font-thin text-[12px] text-white md:text-[14px]">
                Already have an account? <a href="/" className="md:hover:border-slate-50 hover:border-[#D24DF3] pl-1 border-transparent border-b-0 hover:border-b-2 text-[#D24DF3] md:text-white">Log in</a>
            </h2>
        </div>
    );
};

export default SignupForm;
