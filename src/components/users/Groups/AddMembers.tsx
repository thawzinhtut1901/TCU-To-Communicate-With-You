import { Button } from "@/components/ui/button";
import {
  CreateGroupContent,
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreateInput } from "@/components/ui/input";
import { IoIosSearch } from "react-icons/io";
import "./type.css"
import { useCreateGroup, useGetAllFriends } from "@/hooks";
import { useApp } from "@/AppProvider";

import { useState } from 'react';
import { IoIosCamera } from "react-icons/io";
import { createGroupData } from "@/types/type";

export const CreateGroup = ({ onNext, groupData, setGroupData }: { 
  onNext: () => void;
  groupData: createGroupData;
  setGroupData: (data: createGroupData) => void;
}) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setGroupData({ ...groupData, profilePicture: file })
      setImagePreview(URL.createObjectURL(file))
    }
  };

  return (
    <div className="bg-gradient-to-b from-purple-700 via-blue-500 to-blue-400 p-4 rounded-lg">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative flex justify-center items-center bg-purple-600 rounded-full w-20 h-20 cursor-pointer group">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="groupImage"
          />
          <label htmlFor="groupImage" className="flex justify-center items-center w-full h-full cursor-pointer">
            {imagePreview ? (
              <img src={imagePreview} alt="Group" className="rounded-full w-full h-full object-cover" />
            ) : (
              <IoIosCamera className="group-hover:scale-110 text-3xl text-white transition-transform" />
            )}
          </label>
        </div>
        
        <div className="w-full">
          <input
            type="text"
            value={groupData.groupName}
            onChange={(e) => setGroupData({...groupData, groupName: e.target.value})}
            placeholder="Group Name"
            className="bg-white bg-opacity-20 placeholder-opacity-70 focus:ring-opacity-50 px-4 py-2 rounded-lg focus:ring-2 focus:ring-white w-full text-white focus:outline-none placeholder-white"
          />
        </div>

        <div className="flex justify-between pt-4 w-full">
          <Button 
            onClick={onNext} 
            className="bg-black bg-opacity-60 hover:bg-opacity-35 rounded-lg text-white"
          >
            Next
          </Button>
          <Button 
            onClick={() => {}} 
            variant="outline" 
            className="border-white bg-transparent hover:bg-white text-white hover:text-purple-700"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export const AddMembers = () => {
  const {data: getAllFriend} = useGetAllFriends();
  const {userOneId} = useApp();
  const createGroup = useCreateGroup();
  const [step, setStep] = useState<'create' | 'members'>('create');
  const [groupData, setGroupData] = useState<createGroupData>({
    groupName: '',
    memeberIds: [],
    profilePicture: ""
  });
  // const [selectedMembers, setSelectedMembers] = useState<number[]>([]);

  const handleCreateGroup = () => {
    createGroup.mutate(groupData)
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-black bg-opacity-30 shadow-md shadow-slate-400">Create Group</Button>
        </DialogTrigger>
        <CreateGroupContent className="bg-white bg-opacity-45 p-0 rounded-lg sm:max-w-[425px]">
            {
              step === 'members' && (
                <DialogHeader className="bg-black bg-opacity-60 rounded-t-lg h-[114px]">
                  <DialogTitle className="mt-2 ml-[40px] text-[16px] text-white">Add Member</DialogTitle>
                  <div className="relative mx-auto mt-[22px] mb-4">
                    <IoIosSearch className="top-3 left-3 absolute text-purple-700" size={20} />
                    <CreateInput
                      placeholder="Search"
                      className="bg-white py-2 pl-10 rounded-lg text-gray-700"
                    />
                  </div>
              </DialogHeader>
              )
            }         

          {
            step === 'create' ? (
              <CreateGroup 
                onNext={() => setStep('members')}
                groupData={groupData}
                setGroupData={setGroupData}
              />
            ) : (
              <div className="max-h-[400px] cursor-pointer overflow-auto scrollbar-hide">
              {getAllFriend?.items?.map((member:any) => {
                const displayUser = member.userOneId === userOneId ? member.userTwo : member.userOne;
                const isSelected = groupData.memeberIds.includes(displayUser.id);
  
                return (
                  <div
                    key={displayUser?.id}
                    onClick={() => {
                      if(isSelected) {
                        setGroupData({
                          ...groupData,
                          memeberIds: groupData.memeberIds.filter(id => 
                            id !== displayUser.id
                          )
                        })
                      } else {
                        setGroupData({
                          ...groupData,
                          memeberIds: [...groupData.memeberIds, displayUser.id]
                        })
                      }
                    }}
                    className={`flex items-center border-purple-500 hover:bg-purple-200 p-3 border-b border-b-[#591DA9] transition ${
                      isSelected ? 'bg-purple-200' : ''
                    }`}
                  >
                    <img
                      src={displayUser.profile}
                      alt={displayUser.displayName}
                      className="mr-4 rounded-full w-10 h-10"
                    />
                    <div>
                      <p className="font-medium text-[20px]">{displayUser.displayName}</p>
                      {/* <p className="text-[#393939] text-[16px]">{displayUser.description}</p> */}
                    </div>
                  </div>
                )
              })}
            </div>
            )
          }
          {
            step === 'members' && (
              <DialogFooter className="flex justify-between items-center bg-[#591DA9] mt-4 rounded-b-lg h-[60px]">
                <Button type="submit" onClick={handleCreateGroup} className="bg-black bg-opacity-60 hover:bg-opacity-35 rounded-lg text-white">Create</Button>
                <Button className="bg-black bg-opacity-60 hover:bg-opacity-35 rounded-lg text-white">Cancel</Button>
              </DialogFooter>
            )
          }
        </CreateGroupContent>
      </Dialog>
    </div>
  );
};

