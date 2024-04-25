import { BAMic, BAOfficePin, BASend } from "@/lib/icons";
import { useState } from "react";
import ShouldRender from "@/components/shared/should-render";
import ChatCloseButton from "@/components/action-buttons/chat-close-button";
import ChatEscalateButton from "@/components/action-buttons/chat-escalate-button";
import ChatCollaborateButton from "@/components/action-buttons/chat-collaborate-button";

export default function ChatBodyActions() {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <div className="lg:sticky bottom-0 w-full flex flex-col">
      <ShouldRender condition={isClosed}>
        <p className="p-[10px] bg-red-100 text-white font-extrabold text-opacity-70 text-center">
          Conversation Closed
        </p>
      </ShouldRender>

      <ShouldRender condition={!isClosed}>
        <div className="flex items-center justify-end gap-2 laptop:gap-3">
          <ChatCollaborateButton />
          <ChatEscalateButton />
          <ChatCloseButton onCloseChat={setIsClosed} />
        </div>
        <div className="max-mobile:grid max-mobile:grid-cols-[auto,1fr] flex items-center p-2 mobile:p-3 sm:pl-[26px] gap-3 mobile:gap-6 border-t border-slate-800 bg-white">
          <span>
            <BAOfficePin />
          </span>
          <form className="max-mobile:row-start-2 max-mobile:col-span-full flex items-center gap-3 mobile:gap-4 lg:gap-5 flex-1">
            <input
              type="text"
              className="flex-1 rounded-lg border border-gray-15 shadow-none outline-none p-[10px] h-auto text-primary-100 font-inter text-sm leading-[18px] placeholder:text-opacity-50"
              aria-label="message"
              placeholder="Write a message"
            />
            <span>
              <BASend />
            </span>
          </form>
          <span className="max-mobile:row-start-1 flex items-center justify-center w-[42px] h-[42px] rounded-full bg-yellow-200 bg-opacity-60">
            <BAMic />
          </span>
        </div>
      </ShouldRender>
    </div>
  );
}
