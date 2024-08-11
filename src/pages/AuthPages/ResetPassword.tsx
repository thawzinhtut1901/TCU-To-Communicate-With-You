import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"

const ResetPassword = () => {
  return (
    <div className="mt-[120px] ml-[120px] w-[450px] font-poppins text-white">
        <Label htmlFor="new-password" className="text-[18px]">
            Enter New Password *
        </Label>

        <Input
            type="password"
            id="confirm-password"
            className="bg-slate-200 mt-[10px] rounded-[8px] text-[16px]"
        />

        <div className="mt-[20px]">
            <Label htmlFor="confirm-password" className="text-[18px]">
                Confirm New Password *
            </Label>

            <Input
                type="password"
                id="new-password"
                className="bg-slate-200 mt-[10px] rounded-[8px] text-[16px]"
            />
        </div>

        <Button className="bg-[#8566FF] hover:bg-purple-500 mt-[40px] px-auto rounded-[10px] w-[200px] text-white">
            Confirm
        </Button>
    </div>
  )
}

export default ResetPassword