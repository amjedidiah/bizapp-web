"use client";
import { useParams } from "next/navigation";
import Empty from "@/components/shared/empty";
import { BACopy } from "@/lib/icons";

export default function TemplateBody() {
  const params = useParams();
  if (typeof params.slug !== "string" && !params.slug?.length)
    return <Empty text="Open a template" />;

  return (
    <div className="flex-1 flex flex-col lg:overflow-hidden gap-4">
      <div className="flex items-center justify-between">
        <p className="text-main-blue-100 text-lg lg:text-xl font-semibold lg:leading-8">
          How to deposit to your wallet
        </p>
        <button className="py-[10px] px-[18px] flex gap-2 rounded-lg border border-slate-900 shadow-template-copy">
          <span>
            <BACopy />
          </span>
          <span className="text-main-blue">Copy</span>
        </button>
      </div>
      <div className="flex-1 lg:overflow-y-auto text-main-blue text-opacity-70 lg:pb-5">
        Lorem ipsum dolor sit amet consectetur. Sagittis risus pellentesque
        velit pulvinar dui odio. Interdum cursus sapien vulputate ipsum pharetra
        sit tristique. Proin tincidunt vel duis ullamcorper tincidunt tempus
        urna donec sit. Nunc at tortor cursus egestas viverra aliquam morbi
        felis senectus. Scelerisque malesuada adipiscing eget placerat quis
        posuere turpis id. Augue elit habitasse cursus condimentum sit
        pellentesque aliquam. Pellentesque lobortis nec enim amet magna
        vulputate. Sed porttitor tincidunt eros turpis diam curabitur. Mauris at
        tortor varius convallis. Blandit id hendrerit ut egestas gravida orci
        eget curabitur viverra. Dui in et consectetur vitae dolor eu et
        fermentum. Dolor dui tellus id proin. Sit arcu aliquet dictum gravida
        integer sit morbi tortor. In magna felis lectus erat eget amet. Mi enim
        iaculis rhoncus consequat ultricies cursus in odio senectus. Nisi
        praesent augue quis quam augue tortor rhoncus sem ultrices. In ut cursus
        ultrices at dignissim arcu et sit elementum. Tortor proin lacinia proin
        vitae tristique enim. Molestie eget ac quis id tincidunt mi eget. Nibh
        lectus id morbi aenean tempor. Dui tincidunt orci ac donec eu dui
        dignissim rhoncus. Massa commodo semper volutpat blandit interdum.
        Platea eget massa pellentesque enim malesuada felis. Mauris leo
        tincidunt vulputate volutpat. Blandit porta et et vitae porta fusce.
        Faucibus enim id dolor commodo ligula sed est vel. Gravida dictum mattis
        diam aenean amet. Venenatis amet lobortis mi a sed lorem placerat lacus.
        Mauris at ut molestie elementum vel. Sollicitudin aliquet vel morbi in
        elit feugiat sed. Adipiscing pharetra pharetra proin commodo duis amet
        habitant. Urna egestas laoreet egestas nibh vitae quis. Leo est
        tristique et molestie maecenas varius vel. Volutpat egestas condimentum
        diam mauris dictum.
      </div>
    </div>
  );
}
