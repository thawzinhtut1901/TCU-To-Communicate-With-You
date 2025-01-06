export type AuthData = {
    email: string;
    password: string;
  };

export type CreateAdminData = {
    email: string;
    password: string;
    adminPosition: string;
  };

export type LoginData = {
  emailOrUserName: string;
  password: string;
}

export type VerifyData = {
  email: string;
  otp: string;
};

export type NewPswData = {
  password: string;
  key: string;
}

export type profileSetupData = {
  userName: string;
  displayName: string;
  profilePicture?: File | string;
  bio?: string;
  dateOfBirth?: string;
  gender: string;
}

export type updateProfileData = {
  userName: string;
  displayName: string;
  profilePicture?: File;
  dateOfBirth?: string;
  bio?: string;
  gender: string;
}

export type userPublicQuotesData = {
  quote: string;
}

export type UserData = {
  userName: string;
  role: string;
  displayName: string;
  email: string;
  profile?: File | string;
  bio: string;
  dateOfBirth: string;
  gender: string;
}

export type Users = {
  userName: string;
  displayName: string;
  email: string;
  gender: string;
  status: {
    active: string;
    showMe: string;
};
}

export type UsersAccountData = {
  items: Users[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
};
}

export type AddAdminsData = {
  userNameOrEmail: string;
}

export type GoogleLogInData = {
  email: "",
  displayName: "",
  profile: ""
}

export type GenderCountData = {
  male : number,
  female: number,
  ratherNotSay: number,
}

export type quoteAdminUpdateData = {
  status: string;
}

export type userDeleteAccountData = {
  password: string;
}

export type createChatData = {
  userTwoId: number;
  message: string
}

export type ChatUser = {
  id: number;
  userName: string;
  displayName: string;
  role: string;
  email: string;
  profile?: string;
}

export type ChatMessageData = {
  chatId: string;
  createdAt: string;
  groupChatId: string | null;
  id: number;
  imageMsg: any[];
  reactions: any;
  receiverId: number;
  receiverUser: ChatUser;
  replyTo: any;
  seen: boolean;
  senderId: number;
  senderUser: ChatUser;
  text: string;
  updatedAt: string;
  videoMsg: any;
  voiceMsg: any;
}

export type SocketData = {
  chatName: string;
  id: string;
  isArchived: boolean;
  message: ChatMessageData;
  userOne: ChatUser;
  userTwo: ChatUser;
  userOneId: number;
  userTwoId: number;
}

export type CreateMessageData = {
  chatId: string,
  text: string,
}

export type createGroupData = {
  groupName: string,
  memeberIds: number[],
  profilePicture?: File | string;
}