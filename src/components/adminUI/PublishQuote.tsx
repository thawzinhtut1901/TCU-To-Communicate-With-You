import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  QuoteDialogFooter,
} from "@/components/ui/dialog"
import { QuotePublishInput } from "@/components/ui/input"
import { useGetOneQuote, usePublishQuote } from "@/hooks";
import { DialogTitle } from "@mui/material";

interface PublishQuoteProps {
  open: boolean,
  onClose: () => void;
  quoteId: number; 
}

const PublishQuote:React.FC<PublishQuoteProps> = ({open, onClose, quoteId}) => {
  const {data: getOneQuote, isLoading} = useGetOneQuote({quoteId});
  const publishToAll = usePublishQuote();

  if(!isLoading){
  console.log(getOneQuote);
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    publishToAll.mutate(quoteId)
  }

  return (
    <div>
         <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogTitle className="hidden">Publish Quote</DialogTitle>
                <div className="flex items-center">
                    <QuotePublishInput id="quote" value={getOneQuote?.quote || ""} className="col-span-3 text-center" />
                </div>
                <QuoteDialogFooter className="flex justify-center items-center">
                    <Button onClick={handleSubmit} className="bg-purple-700 hover:bg-purple-600 text-center" type="submit">Lunch To All Users</Button>
                </QuoteDialogFooter>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default PublishQuote