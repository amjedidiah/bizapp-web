import { BAEscalate } from "@/lib/icons";
import { useEffect } from "react";
import useModal from "@/hooks/use-modal";
import CollaborateNotesModal from "@/components/shared/collaborate-notes-modal";
import ChatEscalateModal from "@/components/shared/chat/chat-escalate-modal";

export default function ChatEscalateButton() {
  const {
    closeModal: closeCollaborateModal,
    closeSelf: closeCollaborateModalSelf,
    modalRef: collaborateModalRef,
    openModal: openCollaborateModal,
  } = useModal();
  const {
    closeSelf: closeChatEscalateModalSelf,
    modalRef: chatEscalateModalRef,
    openModal: openChatEscalateModal,
  } = useModal();

  useEffect(() => {
    const modal = chatEscalateModalRef?.current;
    if (!modal) return;

    modal.addEventListener("close", (e) => {
      const escalateChat = Boolean(modal.returnValue);
      if (escalateChat) openCollaborateModal();
    });
  }, [chatEscalateModalRef, openCollaborateModal]);

  return (
    <>
      <button
        onClick={openChatEscalateModal}
        className="border border-black border-b-0 rounded-t-[10px] bg-yellow-200 bg-opacity-60 flex items-center gap-1 lg:gap-[5px] p-1"
      >
        <span>
          <BAEscalate />
        </span>
        <span className="text-main-blue max-mobile:hidden">Escalate</span>
      </button>

      <CollaborateNotesModal
        ref={collaborateModalRef}
        onClose={closeCollaborateModal}
        onCloseSelf={closeCollaborateModalSelf}
      />

      <ChatEscalateModal
        ref={chatEscalateModalRef}
        onCloseSelf={closeChatEscalateModalSelf}
      />
    </>
  );
}
