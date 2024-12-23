import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useCreateQuote } from "@/hooks";
import { userPublicQuotesData } from "@/types/type";
import { useState } from "react";

const CreateQuote = () => {
    const createYourQuote = useCreateQuote();
    const [createQuote, setCreateQuote] = useState<userPublicQuotesData>({
        quote: ""
    });

    const handleQuote = (event: React.ChangeEvent<HTMLInputElement>) => {
      const quote = event.target.value;
      setCreateQuote((prev) => ({...prev, quote}))
    }
  
    const handleQuoteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      createYourQuote.mutate(createQuote)
      setCreateQuote((prev) => ({...prev, quote: ""}))
    }

  return (
    <div className="flex flex-col w-full font-poppins">
        <div className="flex flex-col border-slate-500 bg-black bg-opacity-20 mx-auto mt-[16px] border rounded-[8px] w-11/12 h-[260px]">
            <h2 className="mt-[30px] text-center text-white">Share your thoughts with the world—create your own quotes and inspire others today!</h2>
            
            <form onSubmit={handleQuoteSubmit} className="flex flex-col">
                <div className="relative mx-auto mt-[23px] w-full max-w-sm md:max-w-md">
                    <div className="-top-[2px] left-6 absolute border-white bg-[#591DA9] -mt-[3px] md:mt-[2px] -ml-2 border rounded-full md:w-4 md:h-4"></div>
                    <input 
                        value={createQuote.quote}
                        onChange={handleQuote} 
                        className="border-white bg-[#007AFF] bg-opacity-10 shadow-md shadow-slate-400 mt-1 md:mt-2 px-2 md:px-4 py-1 md:py-2 border rounded-[8px] w-[450px] h-[60px] text-[12px] text-center text-slate-50 md:text-[16px] cursor-text"
                    />
                </div>

                <button type="submit" className="bg-black bg-opacity-30 hover:bg-opacity-20 shadow-md shadow-slate-400 mx-auto mt-[23px] rounded-[16px] w-[150px] h-[50px] text-[16px] text-white hover:text-slate-200">
                    Create Quote
                </button>
            </form>

        </div>

        <div className="flex border-slate-500 bg-black bg-opacity-20 mx-auto mt-[22px] border rounded-[8px] w-11/12 h-full overflow-hidden">
            <Table>
                <TableHeader className="bg-black bg-opacity-60">
                    <TableRow>
                        <TableHead></TableHead>
                        <TableHead className="text-center text-white">Your Quotes</TableHead>
                        <TableHead className="text-center text-white">Status</TableHead>
                        <TableHead className="text-center text-white">Published Time</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="cursor-default overflow-auto">
                    <TableRow className="bg-gradient-to-t from-purple-300 to-purple-500 border-b border-b-white">
                        <TableCell className="items-center text-center">
                            <div className="bg-black bg-opacity-60 px-[10px] py-[4px] rounded-full text-[14px] text-white">
                                1
                            </div>
                        </TableCell>
                        <TableCell className="items-center">
                            <div className="py-3 pl-4 border border-black border-opacity-25 rounded-[6px] w-[388px]">
                                Hello
                            </div>
                        </TableCell>
                        <TableCell className="text-center">
                            <div className="bg-[#FBBC05] shadow-[inset_0px_2px_20px_rgba(0,0,0,0.1)] shadow-white py-2 rounded-[8px] w-[100px] font-medium text-white">
                                Pending
                            </div>
                        </TableCell>
                        <TableCell className="text-center">
                            ------
                        </TableCell>
                    </TableRow>

                    <TableRow className="bg-gradient-to-t from-purple-300 to-purple-500 border-b border-b-white">
                        <TableCell className="items-center text-center">
                            <div className="bg-black bg-opacity-60 px-[10px] py-[4px] rounded-full text-[14px] text-white">
                                2
                            </div>
                        </TableCell>
                        <TableCell className="items-center">
                            <div className="py-3 pl-4 border border-black border-opacity-25 rounded-[6px] w-[388px]">
                                Hello
                            </div>
                        </TableCell>
                        <TableCell className="text-center">
                            <div className="bg-[#38D93E] shadow-[inset_0px_2px_20px_rgba(0,0,0,0.1)] shadow-white py-2 rounded-[8px] w-[100px] font-medium text-white">
                                Approved
                            </div>
                        </TableCell>
                        <TableCell className="font-medium text-center text-white">
                            12/06/2025
                        </TableCell>
                    </TableRow>

                    <TableRow className="bg-gradient-to-t from-purple-300 to-purple-500 border-b border-b-white">
                        <TableCell className="items-center text-center">
                            <div className="bg-black bg-opacity-60 px-[10px] py-[4px] rounded-full text-[14px] text-white">
                                3
                            </div>
                        </TableCell>
                        <TableCell className="items-center">
                            <div className="py-3 pl-4 border border-black border-opacity-25 rounded-[6px] w-[388px]">
                                Hello
                            </div>
                        </TableCell>
                        <TableCell className="text-center">
                            <div className="bg-[#E10101] shadow-[inset_0px_2px_20px_rgba(0,0,0,0.1)] shadow-white py-2 rounded-[8px] w-[100px] font-medium text-white">
                                Rejected
                            </div>
                        </TableCell>
                        <TableCell className="text-center">
                            ------
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>



    </div>
  )
}

export default CreateQuote