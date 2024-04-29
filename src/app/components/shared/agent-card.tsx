"use client";
import { AgentStatus, Role } from "@/lib/constants";
import Image from "next/image";
import Status from "@/components/shared/status";
import useModal from "@/hooks/use-modal";
import InMailMessageModal from "@/components/shared/in-mail-modal/in-mail-message-modal";

const userCardDetails = [
  { name: "gender", value: "Male" },
  { name: "department", value: "General Services" },
  { name: "email", value: "yusuf_adamu2024@xyz.com" },
];

export default function AgentCard() {
  const { modalRef, openModal, closeSelf } = useModal();

  return (
    <div className="flex flex-col p-5 laptop:pt-[60px] sm:max-laptop:flex-row gap-6 rounded-[6px] bg-white shadow-customer h-fit">
      <div className="flex items-center flex-col gap-4">
        <div className="relative w-[120px] h-[120px] rounded">
          <Image
            src="/images/agent-main.png"
            alt=""
            fill
            sizes="100%"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <p className="text-primary text-opacity-80 font-roboto lg:text-xl font-medium lg:leading-8 tracking-[0.15px]">
          Ummi Mohammed
        </p>
        <Status
          className="bg-agent-gradient text-blue-200 font-inter"
          state={AgentStatus.Active}
        />
      </div>
      <div className="flex flex-col gap-4 max-laptop:flex-1 max-laptop:items-start max-laptop:[&>*]:w-full">
        <p className="text-primary text-opacity-80 font-inter lg:text-xl font-medium lg:leading-8 tracking-[0.15px]">
          Profile
        </p>
        <div className="flex flex-col pt-4 gap-3 border-t border-primary border-opacity-10">
          {userCardDetails.map(({ name, value }) => (
            <p
              key={name}
              className="text-primary text-sm tracking-[0.1px] flex max-mobile:flex-col mobile:items-center gap-1"
            >
              <span className="text-opacity-80 font-roboto font-medium lg:leading-[22px] capitalize">
                {name}:
              </span>
              <span className="text-opacity-60 font-inter">{value}</span>
            </p>
          ))}
        </div>
        <div className="pt-6 border-t border-primary border-opacity-10 flex laptop:justify-center">
          <button
            onClick={openModal}
            className="py-2 px-6 mx-auto rounded-[5px] border border-black bg-yellow-200 bg-opacity-60 text-black font-inter font-medium capitalize tracking-[0.46px] text-[15px] leading-[26px]"
          >
            In-Message
          </button>
        </div>

        <InMailMessageModal
          ref={modalRef}
          onCloseSelf={closeSelf}
          role={Role.Supervisor}
        />
      </div>
    </div>
  );
}
