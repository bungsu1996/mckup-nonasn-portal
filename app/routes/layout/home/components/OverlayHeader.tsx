import { NavLink, Link  } from "react-router";
import { Settings, User, LogOut } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui/tooltip";

const IconContainer = () => {
  return (
    <div className="flex justify-center items-center h-10 relative -mt-28">
      <div className="shadow-lg p-1 px-8 flex gap-6 sm:gap-8 items-center justify-center border-2 border-white rounded-lg">
        <Link to="/" className="hover:text-[#272850] text-white transition duration-300">
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger><Settings size={20} className="cursor-pointer size-4 md:size-5 lg:size-5 mt-2" /></TooltipTrigger>
              <TooltipContent><p className="text-[10px]">Settings</p></TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
        <Link to="/" className="hover:text-[#272850] text-white transition duration-300">
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger><User size={20} className="cursor-pointer size-4 md:size-5 lg:size-5 mt-2" /></TooltipTrigger>
              <TooltipContent><p className="text-[10px]">Profiles</p></TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
        <Link to="/" className="hover:text-[#272850] text-white transition duration-300">
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger><LogOut size={20} className="cursor-pointer size-4 md:size-5 lg:size-5 mt-2" /></TooltipTrigger>
              <TooltipContent><p className="text-[10px]">Log out</p></TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
      </div>
    </div>
  );
};

export default IconContainer;