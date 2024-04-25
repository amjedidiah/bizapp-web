import ChatNavigation from "@/components/shared/chat/chat-navigation";
import ChatList from "@/components/shared/chat/chat-list";

const date = new Date();
const formattedDate = date.toLocaleDateString("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function ChatWrapper() {
  return (
    <div className="-mt-1 flex flex-col gap-6 items-center flex-1 lg:overflow-hidden">
      <ChatNavigation />
      <p className="text-xs text-main-blue font-semibold lg:mr-7">
        {formattedDate}
      </p>
      <ChatList />
    </div>
  );
}
