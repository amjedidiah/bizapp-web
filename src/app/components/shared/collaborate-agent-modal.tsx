import { BAModalClose } from "@/lib/icons";
import Image from "next/image";
import {
  Fragment,
  HTMLAttributes,
  MouseEventHandler,
  forwardRef,
  useCallback,
} from "react";
import CollaborateNotesModal from "@/components/shared/collaborate-notes-modal";
import useModal from "@/hooks/use-modal";

type Props = {
  onCloseSelf: MouseEventHandler<HTMLDialogElement>;
  onClose: () => void;
} & HTMLAttributes<HTMLDialogElement>;

const agents = [
  {
    id: "1",
    src: "/images/agent-1.png",
    name: "Agent 1",
    department: "General services",
  },
  {
    id: "2",
    src: "/images/agent-2.png",
    name: "Agent 2",
    department: "Finance",
  },
  {
    id: "3",
    src: "/images/agent-3.png",
    name: "Agent 3",
    department: "Fraud cases",
  },
];

export default forwardRef<HTMLDialogElement, Props>(
  function CollaborateAgentModal({ onCloseSelf, onClose }, ref) {
    const { modalRef, openModal, closeSelf, closeModal } = useModal();
    const handleCollaborate = useCallback(() => {
      onClose();
      openModal();
    }, [onClose, openModal]);

    return (
      <Fragment>
        <dialog
          ref={ref}
          onClick={onCloseSelf}
          className="max-mobile:px-2 bg-transparent backdrop:bg-black backdrop:bg-opacity-30"
        >
          <div className="bg-white rounded md:rounded-md lg:rounded-lg">
            <div className="flex items-center justify-between p-4 lg:pl-5 gap-[10px]">
              <p className="font-inter font-semibold flex-1">
                Collaborate with:
              </p>
              <button onClick={onClose}>
                <BAModalClose />
              </button>
            </div>
            <div className="p-4 lg:px-6 flex flex-col gap-4">
              <input
                type="search"
                name="search"
                id="search"
                className="p-3 rounded md:rounded-md lg:rounded-lg border border-gray-50 text-blue-100 font-inter text-sm lg:leading-[25px] placeholder:text-opacity-40 outline-none shadow-none"
                placeholder="Search for agent by name"
              />
              {agents.map(({ id, src, name, department }) => (
                <div key={id} className="flex items-center gap-[14px] py-2">
                  <div className="rounded-full w-[30px] h-[30px] overflow-hidden flex-shrink-0 relative">
                    <Image
                      src={src}
                      alt={name}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center" }}
                      sizes="100%"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px] font-medium flex-1">
                    <p className="text-black font-inter text-sm">{name}</p>
                    <p className="text-gray-75 font-inter text-xs">
                      {department} department
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 lg:px-5">
              <button
                onClick={handleCollaborate}
                className="w-full py-2 px-4 rounded bg-yellow-200 border border-yellow-200 shadow-collaborate-button text-black font-inter text-xs font-medium "
              >
                Collaborate
              </button>
            </div>
          </div>
        </dialog>
        <CollaborateNotesModal
          ref={modalRef}
          onClose={closeModal}
          onCloseSelf={closeSelf}
        />
      </Fragment>
    );
  }
);
