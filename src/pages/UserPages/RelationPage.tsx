import { RequestRelation, ToConnectRelationFri } from "@/components/users/Relationship"


const RelationPage = () => {
  return (
    <div className="flex justify-center w-screen h-screen">
      <div className="flex flex-col bg-white bg-opacity-40 rounded-[10px] w-9/12 h-[750px]">
        <div className="flex justify-center mb-[35px]">
          <h1 className="font-medium font-poppins text-[26px]">Relationship</h1>
        </div>

        <div className="flex gap-x-[50px]">
          <ToConnectRelationFri/>
          <RequestRelation/>
        </div>
      </div>
      {/* <div className="flex gap-x-[91px] bg-white bg-opacity-40 mb-6 rounded-[10px] w-11/12 md:w-9/12 h-[750px] md:h-[750px]">
        <div className="flex bg-blue-500 w-screen">
          <h1 className="font-medium font-poppins text-[26px]">Relationship</h1>
        </div>
       
        <ToConnectRelationFri/>
        <Outlet/>
      </div> */}
    </div>
  )
}

export default RelationPage

// import { ToConnectRelationFri } from "@/components/users/Relationship";
// import { Outlet } from "react-router-dom";

// const RelationPage = () => {
//   return (
//     <div className="flex justify-center items-center">
//       <div className="flex flex-col items-center gap-y-6 bg-white bg-opacity-40 mb-6 p-4 rounded-[10px] w-11/12 md:w-9/12 h-[750px] md:h-[750px]">
//         {/* Centered Relationship Text */}
//         <h1 className="font-medium font-poppins text-[26px]">Relationship</h1>
        
//         {/* Additional Content */}
//         <ToConnectRelationFri />
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default RelationPage;
