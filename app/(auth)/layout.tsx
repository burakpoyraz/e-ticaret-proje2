import React from "react";
import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <div className="hidden lg:block lg:w-2/5 h-full">
        <Image
          alt="logo"
          src="/login.jpg"
          width={1080}
          height={1920}
          className="w-full h-screen object-cover object-top brightness-75"
           
        />
      </div>

      <div className="w-full lg:w-3/5 h-full flex items-center justify-center"> 
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
