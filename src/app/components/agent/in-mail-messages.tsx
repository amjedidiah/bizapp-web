import { BAInfo } from "@/lib/icons";
import DashboardTitle from "@/components/shared/dashboard-title";
import Button from "@/components/shared/button";

const inMails = [
  {
    id: "1",
    from: "Supervisor A.Y",
    title: "Follow-up on the customer with bad network! 🙏",
    body: "Lorem ipsum dolor sit amet consectetur. Maecenas tristique tincidunt vivamus fames ipsum. Quam imperdiet semper massa arcu sem felis suspendisse vulputate  sada  velit. Lobortis netus ut fringilla turpis risus. Urna faucibus in amet sed ridiculus. Viverra at suscipit sagittis mattis euismod.",
    timeAgo: "1hr",
  },
  {
    id: "2",
    from: "Agent Zara",
    title: "Collaboration: A customer with double payment issues",
    body: "Lorem ipsum dolor sit amet consectetur. Maecenas tristique tincidunt vivamus fames ipsum. Quam imperdiet semper massa arcu sem felis suspendisse vulputate  sada  velit. Lobortis netus ut fringilla turpis risus. Urna faucibus in amet sed ridiculus. Viverra at suscipit sagittis mattis euismod.",
    timeAgo: "1hr",
  },
  {
    id: "3",
    from: "Admin",
    title: "Remainder!!! clear your backlogs",
    body: "Lorem ipsum dolor sit amet consectetur. Maecenas tristique tincidunt vivamus fames ipsum. Quam imperdiet semper massa arcu sem felis suspendisse vulputate  sada  velit. Lobortis netus ut fringilla turpis risus. Urna faucibus in amet sed ridiculus. Viverra at suscipit sagittis mattis euismod.",
    timeAgo: "1hr",
  },
];

export default function InMailMessages() {
  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      <div className="flex max-md:flex-col gap-4 justify-between md:items-end">
        <div className="flex flex-col gap-1 lg:gap-2">
          <DashboardTitle>in-Mail Messages</DashboardTitle>
          <p className="flex items-center gap-1">
            <span className="text-xs text-gray-100">
              Monitor all messages and conversations.
            </span>
            <span>
              <BAInfo />
            </span>
          </p>
        </div>
        <div className="flex gap-4 items-center max-sm:justify-between">
          <Button variant="yellow">Create New in-Mail</Button>
          <Button>View All</Button>
        </div>
      </div>
      <div className="flex flex-col py-[10px] px-[14px] gap-5 rounded-[6px] shadow-in-mails bg-yellow-300">
        {inMails.map(({ id, from, title, body, timeAgo }) => (
          <div key={id} className="flex gap-[17px]">
            <span className="bg-gray-300 rounded-full text-white text-[22px] font-semibold lg:leading-7 w-9 h-9 flex items-center justify-center flex-shrink-0">
              L
            </span>
            <div className="flex flex-col gap-[10px]">
              <div className="flex justify-between">
                <p className="text-main-blue-100 text-xs font-medium">{from}</p>
                <p className="text-gray-300 text-xs font-medium">
                  {timeAgo} ago
                </p>
              </div>
              <div className="flex flex-col gap-[6px]">
                <p className="text-main-blue-100 text-sm font-bold">{title}</p>
                <p className="text-gray-400 text-xs lg:leading-[18px] text-ellipsis line-clamp-1">
                  {body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
