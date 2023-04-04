"use client";

import { db } from "@/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import ChatRow from "./ChatRow";
import NewChat from "./NewChat";
import ModelSelection from "./ModelSelection";

function Sidebar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );
  return (
    <div className="flex h-screen flex-col p-2">
      <div className="flex-1">
        <div className="flex flex-col gap-y-2">
          {/* NewChat */}
          <NewChat />
          {/* Model Selection */}
          <div className="hidden md:inline">
            <ModelSelection />
          </div>
          {loading && (
            <div className="animate-pulse text-center text-gray-100">
              <p>Loading Chats...</p>
            </div>
          )}

          {/* Map through the ChatRows */}
          <div className="flex flex-col space-y-2 my-2">
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
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
