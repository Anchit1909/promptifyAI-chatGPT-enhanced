"use client";

import NewChat from "./NewChat";

function Sidebar() {
  return (
    <div className="flex h-screen flex-col p-2">
      <div className="flex-1">
        <div className="flex flex-col gap-y-2">
          {/* NewChat */}
          <NewChat />
          {/* Model Selection */}
          <div className="hidden md:inline">
            {/* <ModelSelection></ModelSelection> */}
          </div>

          {/* Map through the ChatRows */}
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
