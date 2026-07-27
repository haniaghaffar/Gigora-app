import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import BetaBanner from "../components/BetaBanner";

export default function MainLayout({ children }) {
  const { pathname } = useLocation();

  const hideLayout = [
    "/login",
    "/signup",
    "/forgot-password",
    "/reset-password",
  ].includes(pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!hideLayout && (
        <>
          <BetaBanner />
          <Navbar />
        </>
      )}

      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}