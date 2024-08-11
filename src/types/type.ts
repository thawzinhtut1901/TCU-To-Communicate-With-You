export type AuthData = {
    email: string;
    password: string;
  };

export type VerifyData = {
  email: string;
  otp: string;
};

export type NewPswData = {
  password: string;
  key: string;
}
