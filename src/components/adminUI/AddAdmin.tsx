import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import AddAdminTable from "./AddAdminTable";

const AddAdmin = () => {
  const [isAddEdit, setIsAddEdit] = useState(false);

  const handleEdit = () => {
    setIsAddEdit(true);
  };

  const handleClose = () => {
    setIsAddEdit(false);
  };

  return (
    <div>
      {isAddEdit ? (
        // Dialog box (modal)
        <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="relative bg-white shadow-lg p-6 rounded-lg w-full max-w-2xl max-h-[600px] overflow-auto">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="top-3 right-3 absolute text-gray-600 hover:text-gray-900"
            >
              <IoClose className="w-[20px] h-[20px]"/>
            </button>

            {/* Admin Table */}
            <div>
              <AddAdminTable />
            </div>
          </div>
        </div>
      ) : (
        // "Add Admin" button
        <div
          onClick={handleEdit}
          className="flex gap-x-1 bg-[#591DA9] hover:bg-purple-600 ml-auto p-2 rounded-[8px] text-[14px] text-white cursor-pointer"
        >
          <BsPlusLg className="mt-[2px] w-[15px] h-[15px]" />
          <h1>Add Admin</h1>
        </div>
      )}
    </div>
  );
};

export default AddAdmin;
