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
import { useCreateQuoteAdmin } from "@/hooks"
import { userPublicQuotesData } from "@/types/type"
import { useState } from "react"
import { BsPlusLg } from "react-icons/bs"

const CreateAdminQuote = () => {
    const createAdminQuote = useCreateQuoteAdmin();
    const [quoteData, setQuoteData] = useState<userPublicQuotesData>({
      quote: ""
    });

    const handleCreate = (event: React.ChangeEvent<HTMLInputElement>) => {
        const quote = event.target.value;
        setQuoteData((prev) => ({...prev, quote}))
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        createAdminQuote.mutate(quoteData);
    }

    const resetForm = () => {
        setQuoteData({quote: ""});
    }
    
  return (
    <div>
        <Dialog>
            <DialogTrigger asChild>
                <Button onClick={() => resetForm()} className="gap-x-1 bg-purple-700 hover:bg-purple-600 text-white hover:text-white" variant="outline">
                    <BsPlusLg className="w-[15px] h-[15px]"/>
                    Create
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                <DialogTitle>Add Your Quote</DialogTitle>
                <DialogDescription>
                    Add your quote here. Click add when you're done.
                </DialogDescription>
                </DialogHeader>
                <div className="gap-4 grid py-4">
                <div className="items-center gap-4 grid grid-cols-4">
                    <Label htmlFor="quote" className="text-right">
                        Quote
                    </Label>
                    <CardInput id="quote" value={quoteData.quote} onChange={handleCreate} className="col-span-3" />
                </div>
                </div>
                <DialogFooter>
                <Button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-400" type="submit">Add</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default CreateAdminQuote