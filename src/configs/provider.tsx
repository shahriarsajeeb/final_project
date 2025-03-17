"use client";

import Footer from "@/shared/widgets/footer";
import Header from "@/shared/widgets/header";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import React from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();

  return (
    // @ts-ignore
    <SessionProvider>
      {pathName === "/dashboard" ? (
        <>{children}</>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </SessionProvider>
  );
};

export default Provider;
