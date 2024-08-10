import { AuthData } from "@/types/type";
import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  openOTPBox: boolean;
  OTPBoxHandler: () => void;
  accountData: AuthData;
  setAccountData: React.Dispatch<React.SetStateAction<AuthData>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [openOTPBox, setOpenOTPBox] = useState<boolean>(false);
  const [accountData, setAccountData] = useState<AuthData>({
    email: "",
    password: "",
  });

  const OTPBoxHandler = () => {
    setOpenOTPBox(!openOTPBox);
    console.log(openOTPBox);
  };

  return (
    <AuthContext.Provider
      value={{ openOTPBox, OTPBoxHandler, accountData, setAccountData }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error();
  }
  return context;
};
