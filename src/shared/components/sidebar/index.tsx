"use client";
import LogoDark from "@/assets/svgs/logo-dark";
import Link from "next/link";
import React, { useState } from "react";
import CompanyDropDown from "./company.dropdown";
import { Bell, ChevronDown, ChevronUp, LogOut } from "lucide-react";
import NavItem from "./navitem";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const history = useRouter();
  const { data } = useSession();
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isApiOpen, setIsApiOpen] = useState(false);

  const toogleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleApi = () => {
    setIsApiOpen(!isApiOpen);
  };

  return (
    <div
      className={`bg-white flex flex-col ${
        isSidebarCollapsed ? "w-16" : "w-64"
      } transition-all duration-300`}
    >
      {/* Logo and Company section */}
      <div className="p-4">
        <Link href={"/"} className="flex items-center mb-2 gap-5">
          <LogoDark />
          {!isSidebarCollapsed && (
            <span className="text-2xl w-full font-semibold text-[#2A3547] font-Poppins">
              MyPay
            </span>
          )}
        </Link>
        {!isSidebarCollapsed && <CompanyDropDown />}
        <button
          className={`w-full bg-blue-500 text-white font-JakartaSans py-2 px-4 rounded-md text-sm font-medium mt-3 ${
            isSidebarCollapsed ? "hidden" : "block"
          }`}
        >
          Ajouter une entreprise
        </button>

        <button
          onClick={toogleSidebar}
          className="md:hidden absolute top-4 right-4 bg-gray-100 p-2 rounded-md text-black"
        >
          {isSidebarCollapsed ? (
            <ChevronDown size={18} />
          ) : (
            <ChevronUp size={18} />
          )}
        </button>
      </div>

      {/* user profile */}
      <div
        className={`border-b border-gray-200 py-1 !pb-5 px-4 flex ${
          isSidebarCollapsed ? "justify-center" : "items-center justify-between"
        }`}
      >
        {isSidebarCollapsed ? (
          <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-600">
            {data?.user?.name?.charAt(0)}
          </div>
        ) : (
          <>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 mr-3">
                {data?.user?.name?.charAt(0)}
              </div>
              <span className="text-gray-700 font-JakartaSans">
                {data?.user?.name}
              </span>
            </div>
            <button className="text-blue-500 relative">
              <Bell size={18} color="#5A6A85" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full" />
            </button>
          </>
        )}
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 pt-2 md:pt-0">
        {/* pages section */}
        {!isSidebarCollapsed && (
          <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
            PAGES
          </div>
        )}

        <NavItem
          icon="default"
          label="Default"
          isActive={true}
          isCollapsed={isSidebarCollapsed}
        />

        <div className="relative">
          <NavItem
            icon="api"
            label="API"
            hasDropDown={true}
            isOpen={isApiOpen}
            onClick={toggleApi}
            isCollapsed={isSidebarCollapsed}
          />

          {isApiOpen && !isSidebarCollapsed && (
            <div className="bg-gray-50 pl-10 py-1">
              <NavItem
                icon="log"
                label="Log"
                isNested={true}
                isCollapsed={isSidebarCollapsed}
              />
            </div>
          )}
        </div>
        <NavItem
          icon="application"
          label="Application"
          isCollapsed={isSidebarCollapsed}
        />
        <NavItem
          icon="transaction"
          label="Transaction"
          isCollapsed={isSidebarCollapsed}
        />
        <NavItem
          icon="support"
          label="Support"
          isCollapsed={isSidebarCollapsed}
        />
        <NavItem
          icon="create-ticket"
          label="Créer ticket"
          isCollapsed={isSidebarCollapsed}
        />
        <NavItem icon="packs" label="Packs" isCollapsed={isSidebarCollapsed} />
        <NavItem
          icon="mon-entreprise"
          label="Mon entreprise"
          isCollapsed={isSidebarCollapsed}
        />

        <div className="w-full h-[1px] bg-slate-200 mt-4"></div>

        {/* others section */}
        {!isSidebarCollapsed && (
          <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider mt-4">
            OTHERS
          </div>
        )}
        <NavItem
          icon="avatar"
          label="Avatar"
          badge="Coded"
          badgeColor="blue"
          isCollapsed={isSidebarCollapsed}
        />
        <NavItem
          icon="outline"
          label="Outline"
          badge="Outline"
          badgeColor="gray"
          isCollapsed={isSidebarCollapsed}
        />
        <NavItem
          icon="basic"
          label="Basic"
          subtext="8+ Basic Components"
          badge="9"
          badgeColor="blue"
          isRound={true}
          isCollapsed={isSidebarCollapsed}
        />
      </div>

      {/* Logout Button */}
      <div className="py-4 border-t border-gray-200 px-7">
        <button
          className={`flex items-center text-gray-600 hover:text-gray-800 ${
            isSidebarCollapsed ? "justify-center" : ""
          }`}
          onClick={() => {
            signOut();
            history.push("/login");
          }}
        >
          <LogOut size={18} />
          {!isSidebarCollapsed && <span className="ml-2">Se déconnecter</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
