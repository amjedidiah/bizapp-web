import { BACloseConversation } from "@/lib/icons";
import { Dispatch, SetStateAction, useEffect } from "react";
import useModal from "@/hooks/use-modal";
import ChatCloseModal from "@/components/shared/chat/chat-close-modal";

type Props = {
  onCloseChat: Dispatch<SetStateAction<boolean>>;
};

export default function ChatCloseButton({ onCloseChat }: Props) {
  const {
    closeSelf: closeChatCloseModalSelf,
    modalRef: chatCloseModalRef,
    openModal: openChatCloseModal,
  } = useModal();

  useEffect(() => {
    const modal = chatCloseModalRef?.current;
    if (!modal) return;

    modal.addEventListener("close", (e) => {
      const closeChat = Boolean(modal.returnValue);
      if (closeChat) onCloseChat(true);
    });
  }, [chatCloseModalRef, onCloseChat]);

  return (
    <>
      <button
        onClick={openChatCloseModal}
        className="border border-black border-b-0 rounded-t-[10px] bg-yellow-200 bg-opacity-60 flex items-center gap-1 lg:gap-[5px] p-1"
      >
        <span>
          <BACloseConversation />
        </span>
        <span className="text-main-blue max-mobile:hidden">
          Close Conversation
        </span>
      </button>

      <ChatCloseModal
        ref={chatCloseModalRef}
        onCloseSelf={closeChatCloseModalSelf}
      />
    </>
  );
}
