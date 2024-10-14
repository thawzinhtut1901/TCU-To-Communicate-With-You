import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  QuoteDialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import { QuotePublishInput } from "@/components/ui/input"

const PublishQuote = () => {
  return (
    <div>
         <Dialog>
            <DialogTrigger asChild>
                <Button className="gap-x-1 bg-gray-400 hover:bg-gray-300 text-white hover:text-black" variant="outline">
                    Publish
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <div className="flex items-center">
                    <QuotePublishInput id="quote" className="col-span-3" />
                </div>
                <QuoteDialogFooter className="flex justify-center items-center">
                    <Button className="bg-purple-700 hover:bg-purple-600 text-center" type="submit">Lunch To All Users</Button>
                </QuoteDialogFooter>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default PublishQuote