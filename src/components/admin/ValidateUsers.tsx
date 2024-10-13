import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


const ValidateUsers = () => {
  return (
    <div className="overflow-auto vertical-scrollbar">
      <div className="flex flex-col mx-[40px]">
        <h1 className="my-[20px] font-bold font-roboto text-[28px]">Validate Users</h1>

        <div className="bg-white shadow-inner shadow-slate-500 mt-[24px] rounded-[8px] cursor-pointer">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                  <TableCell className="font-medium"></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell className="text-right"></TableCell>
                </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default ValidateUsers