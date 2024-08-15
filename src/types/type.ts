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