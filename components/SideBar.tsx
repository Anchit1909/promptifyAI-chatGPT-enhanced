"use client";

import { signOut, useSession } from "next-auth/react";
import NewChat from "./NewChat";

function Sidebar() {
  const { data: session } = useSession();
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
      {session && (
        <div className="mb-2 flex items-center justify-center">
          <button
            type="button"
            className="block w-fit hover:opacity-50"
            onClick={() => signOut()}
          >
            <img
              className="mx-auto h-12 w-12 rounded-full"
              src={
                session.user?.image ||
                "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
              }
              alt="Profile picture"
            />
          </button>
        </div>
      )}
    </div>
  );
}
export default Sidebar;
