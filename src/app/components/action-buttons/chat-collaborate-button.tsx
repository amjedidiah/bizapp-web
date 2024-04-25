import { BACollaborate } from "@/lib/icons";
import useModal from "@/hooks/use-modal";
import CollaborateAgentModal from "@/components/shared/collaborate-agent-modal";

export default function ChatCollaborateButton() {
  const {
    closeModal: closeCollaborateAgentModal,
    closeSelf: closeCollaborateAgentModalSelf,
    modalRef: collaborateAgentModalRef,
    openModal: openCollaborateAgentModal,
  } = useModal();

  return (
    <>
      <button
        onClick={openCollaborateAgentModal}
        className="border border-black border-b-0 rounded-t-[10px] bg-yellow-200 bg-opacity-60 flex items-center gap-1 lg:gap-[5px] p-1"
      >
        <span>
          <BACollaborate />
        </span>
        <span className="text-main-blue max-mobile:hidden">Collaborate</span>
      </button>

      <CollaborateAgentModal
        ref={collaborateAgentModalRef}
        onClose={closeCollaborateAgentModal}
        onCloseSelf={closeCollaborateAgentModalSelf}
      />
    </>
  );
}
