import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

const CreateQuote = () => {
  return (
    <div className="flex flex-col w-full font-poppins">
        <div className="flex flex-col border-slate-500 bg-black bg-opacity-20 mx-auto mt-[16px] border rounded-[8px] w-5/6 h-[260px]">
            <h2 className="mt-[30px] text-center text-white">Share your thoughts with the world—create your own quotes and inspire others today!</h2>

            <div className="relative mx-auto mt-[23px] w-full max-w-sm md:max-w-md">
                <div className="-top-[2px] left-6 absolute border-white bg-[#591DA9] -mt-[3px] md:mt-[2px] -ml-2 border rounded-full md:w-4 md:h-4"></div>
                <input className="border-white bg-[#007AFF] bg-opacity-10 shadow-md shadow-slate-400 mt-1 md:mt-2 px-2 md:px-4 py-1 md:py-2 border rounded-[8px] w-[450px] h-[60px] text-[12px] text-center text-slate-50 md:text-[16px] cursor-text"/>
            </div>

            <button type="submit" className="bg-black bg-opacity-30 hover:bg-opacity-20 shadow-md shadow-slate-400 mx-auto mt-[23px] rounded-[16px] w-[150px] h-[50px] text-[16px] text-white hover:text-slate-200">
                Create Quote
            </button>
        </div>

        <div className="flex border-slate-500 bg-black bg-opacity-20 mx-auto border rounded-[8px] w-5/6 h-full">
            <Table>
                <TableHeader className="bg-black bg-opacity-60">
                    <TableRow>
                        <TableHead></TableHead>
                        <TableHead className="text-center text-white">Your Quotes</TableHead>
                        <TableHead className="text-center text-white">Status</TableHead>
                        <TableHead className="text-center text-white">Published Time</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow className="bg-gradient-to-t from-purple-300 to-purple-500 border-b border-b-white">
                        <TableCell className="flex items-center text-center">
                            <div className="bg-black bg-opacity-60 px-[10px] py-[2px] rounded-full text-[14px] text-white">
                                1
                            </div>
                        </TableCell>
                        <TableCell className="text-center"></TableCell>
                        <TableCell className="text-center"></TableCell>
                        <TableCell className="text-center"></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>



    </div>
  )
}

export default CreateQuote