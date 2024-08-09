import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  openOTPBox: boolean;
  OTPBoxHandler: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [openOTPBox, setOpenOTPBox] = useState<boolean>(false);

  const OTPBoxHandler = () => {
    setOpenOTPBox(!openOTPBox);
    console.log(openOTPBox);
    
  };

  return (
    <AuthContext.Provider value={{ openOTPBox, OTPBoxHandler }}>
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
