"use client";

import { PlusIcon } from "@heroicons/react/24/solid";

function NewChat() {
  return (
    <button
      type="button"
      className="chatRow border border-my-black"
      onClick={() => {}}
    >
      <PlusIcon className="h-4 w-4 flex-shrink-0"></PlusIcon>
      <p className="">New Chat</p>
    </button>
  );
}
export default NewChat;
