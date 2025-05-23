import {
  BarChart3,
  Building2,
  ChevronDown,
  ChevronUp,
  FileCode2,
  FileSpreadsheet,
  FileText,
  Headphones,
  LogOut,
  MonitorSmartphone,
  Package,
  Settings,
  TicketCheck,
  User,
  UserCircle2,
} from "lucide-react";
import React from "react";

interface NavItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
  hasDropDown?: boolean;
  isOpen?: boolean;
  onClick?: () => void;
  isNested?: boolean;
  badge?: string;
  badgeColor?: string;
  isRound?: boolean;
  subtext?: string;
  isCollapsed?: boolean;
}

const NavItem = ({
  icon,
  label,
  isActive = false,
  hasDropDown = false,
  isOpen = false,
  onClick,
  isNested = false,
  badge,
  badgeColor = "blue",
  isRound = false,
  subtext,
  isCollapsed = false,
}: NavItemProps) => {
  const getIcon = () => {
    switch (icon) {
      case "default":
        return <User size={18} />;
      case "api":
        return <Settings size={18} />;
      case "log":
        return <FileText size={18} />;
      case "application":
        return <MonitorSmartphone size={18} />;
      case "transaction":
        return <BarChart3 size={18} />;
      case "support":
        return <Headphones size={18} />;
      case "create-ticket":
        return <TicketCheck size={18} />;
      case "packs":
        return <Package size={18} />;
      case "mon-entreprise":
        return <Building2 size={18} />;
      case "avatar":
        return <UserCircle2 size={18} />;
      case "outline":
        return <FileCode2 size={18} />;
      case "basic":
        return <FileSpreadsheet size={18} />;
      case "se-deconnecter":
        return <LogOut size={18} />;
      default:
        return <FileText size={18} />;
    }
  };

  const getBadgeClasses = () => {
    if (badgeColor === "blue") {
      return "bg-blue-500 text-white";
    } else if (badgeColor === "gray") {
      return "bg-white border border-gray-300 text-gray-600";
    }
    return "bg-blue-500 text-white";
  };

  return (
    <div
      className={`
  ${isActive ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"}
  ${isNested ? "pl-10" : ""}
  ${isCollapsed ? "justify-center" : ""}
  flex items-center rounded-lg px-4 py-2 cursor-pointer transition-colors
  `}
      onClick={onClick}
    >
      <div className="flex-1">
        <div className="flex items-center">
          <span className={isActive ? "text-white" : "text-gray-500"}>
            {getIcon()}
          </span>

          {!isCollapsed && (
            <>
              <span className={`ml-3 ${subtext ? "font-medium" : ""}`}>
                {label}
              </span>
            </>
          )}
        </div>

        {!isCollapsed && (
          <>
            {subtext && (
              <div className="ml-2 flex flex-col items-start">
                <span className="text-xs text-gray-400 block pl-[18px]">
                  {subtext}
                </span>
              </div>
            )}
          </>
        )}
      </div>

      {!isCollapsed && (
        <>
          {badge && (
            <span
              className={`${
                isRound
                  ? "rounded-full w-5 h-5 flex items-center justify-center"
                  : "rounded-xl px-2 py-0.5"
              }
            ${getBadgeClasses()} text-xs ml-2
            `}
            >
              {badge}
            </span>
          )}
          {hasDropDown && (
            <span className="ml-2">
              {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default NavItem;
