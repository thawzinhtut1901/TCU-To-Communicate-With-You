import { useNavigate } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { useForgetPassword } from "../../hooks"
import { useEffect, useState } from "react"


const ForgetPaswMail = () => {
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate();
  const sendEmail = useForgetPassword(email);

  useEffect(() => {
    if(sendEmail.isSuccess){
      navigate("/forget-password/change-password")
    }
  }, [sendEmail.isSuccess])

  const handleContinue = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    sendEmail.mutate();
    console.log(sendEmail.mutate)
  }

  return (
    <div className="my-[150px] ml-[120px] w-[450px] font-poppins text-white">
        <Label htmlFor="email" className="text-[18px]">
            Enter Your Email
        </Label>

        <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-slate-200 mt-[10px] rounded-[8px] text-[16px]"
        />

        <Button type="submit" onClick={handleContinue} className="bg-[#8566FF] hover:bg-purple-500 mt-[20px] px-auto rounded-[10px] w-[200px] text-white">
            Continue
        </Button>
    </div>
  )
}

export default ForgetPaswMail