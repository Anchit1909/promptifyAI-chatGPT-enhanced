import Chat from "@/components/Chat";
import ChatInput from "@/components/ChatInput";

type Props = {
  params: {
    id: string;
  };
};

//We get these props by default from route.
function ChatPage({ params: { id } }: Props) {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      {/* Chat */}
      <Chat chatId={id} />
      {/* Chat Input */}
      <ChatInput chatId={id} />
    </div>
  );
}

export default ChatPage;
