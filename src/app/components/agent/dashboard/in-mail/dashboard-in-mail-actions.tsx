"use client";

import Button from "@/components/shared/button";
import Link from "next/link";
import InMailMessageModal from "@/components/shared/in-mail-modal/in-mail-message-modal";
import { memo } from "react";
import useModal from "@/hooks/use-modal";
import { AgentLinks } from "@/lib/constants";

function DashboardInMailActions() {
  const { modalRef, openModal, closeSelf } = useModal();

  return (
    <>
      <div className="flex gap-4 items-center max-sm:justify-between">
        <Button variant="yellow" onClick={openModal}>
          Create New in-Mail
        </Button>
        <Link href={AgentLinks.Chat.pathname}>
          <Button>View All</Button>
        </Link>
      </div>
      <InMailMessageModal ref={modalRef} onCloseSelf={closeSelf} />
    </>
  );
}

export default memo(DashboardInMailActions);
