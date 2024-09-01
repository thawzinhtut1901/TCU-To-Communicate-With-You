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
  dispalyName: string;
  profilePicture?: File | string;
  bio?: string;
  dateOfBirth?: string;
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

export type UserAccountStatusData = {
  privateUser: number;
  publicUser: number;
}