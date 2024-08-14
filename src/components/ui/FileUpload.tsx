import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/assets";

// interface FileUploadProps {
//   onFileChange: (file: File) => void;
// }

export const FileUpload = () => {
//   const token = getToken() || "";
  const [imagePreview, setImagePreview] = useState<string | null>(null);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files[0]) {
//       const file = event.target.files[0];
//       setImagePreview(URL.createObjectURL(file));
//       onFileChange(file);
//     }
//   };

  const profileImage = imagePreview
    ? imagePreview
    // : data?.profilePicture
    // ? data.profilePicture
    : Avatar;

  return (
    <div className="flex flex-col items-center gap-3 max-w-sm">
      <div className="relative w-[100px] h-[100px]">
        <Input
          id="picture"
          type="file"
          className="absolute inset-0 opacity-0 cursor-pointer"
        //   onChange={handleFileChange}
        />
        <div
          className="flex border-[2px] border-gray-200 bg-gray-200 rounded-full w-full h-full"
          style={{
            backgroundImage: `url(${profileImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};