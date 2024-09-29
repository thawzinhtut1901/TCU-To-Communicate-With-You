export type AuthData = {
    email: string;
    password: string;
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