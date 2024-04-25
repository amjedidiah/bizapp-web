import { BAEmptyChat } from "@/lib/icons";

export default function ChatEmpty() {
  return (
    <div className="flex flex-col md:gap-10 justify-center items-center">
      <span className="max-md:[&_svg]:max-w-[80%] [&_svg]:mx-auto">
        <BAEmptyChat />
      </span>
      <p className="text-light-red text-lg lg:text-xl leading-5 -tracking-[0.4px] text-center">
        Open a chat or start a new Chat
      </p>
    </div>
  );
}
