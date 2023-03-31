"use client";

import { db } from "@/firebase";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";

type Props = {
  chatId: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  // useSwr to get the model
  const model = "text-davinci-003";

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );
    //Toast notification to say Loading
    const notification = toast.loading("ChatGPT is thinking... ");

    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      //Toast notification to say successful.
      toast.success("ChatGPT has responded...", {
        id: notification, //this one will replace the previous one.
      });
    });
  };

  return (
    <>
      <div className="rounded-lg bg-gray-700/50 text-gray-400 text-sm">
        <form onSubmit={sendMessage} className="flex flex-grow space-x-5 p-2">
          <input
            type="text"
            placeholder="Type your message here..."
            className="flex-grow bg-transparent p-2 text-gray-100 placeholder:px-1 focus:outline-none disabled:cursor-not-allowed disabled:text-gray-300"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            autoFocus
            disabled={!session}
          />
          <button
            type="submit"
            className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed "
            disabled={!prompt || !session}
          >
            <PaperAirplaneIcon className="h-4 w-4 -rotate-45"></PaperAirplaneIcon>
          </button>
        </form>
      </div>
      {/* ModelSelection */}
      <div className="py-2 md:hidden"></div>
    </>
  );
}

export default ChatInput;
