"use client";

import ComplaintsCard from "@/components/shared/complaints-card";
import { CustomerStatus } from "@/lib/constants";
import { memo, useState } from "react";

const complaints = [
  {
    id: "1",
    date: "25th, Dec. 2024",
    time: "07:30 pm",
    agent: "Ummi Moh’d",
    department: "General Services",
    status: CustomerStatus.Closed,
    details:
      "Pulvinar eu morbi bibendum sollicitudin fermentum sed sit augue. Rutrum ut justo gravida cras dui at. Cum at dignissim faucibus lectus mauris dapibus. Tortor feugiat dolor amet rhoncus nisi. Ut nunc convallis dolor morbi. Lectus urna cursus morbi at gravida mi tristique congue sed. Egestas in iaculis tellus viverra eget sed sit vulputate feugiat. Nulla massa tortor in commodo dis id. Elementum purus volutpat nascetur tristique fermentum gravida eget consequat.",
  },
  {
    id: "2",
    date: "25th, Dec. 2024",
    time: "07:30 pm",
    agent: "Ummi Moh’d",
    department: "General Services",
    status: CustomerStatus.Attending,
    details:
      "Pulvinar eu morbi bibendum sollicitudin fermentum sed sit augue. Rutrum ut justo gravida cras dui at. Cum at dignissim faucibus lectus mauris dapibus. Tortor feugiat dolor amet rhoncus nisi. Ut nunc convallis dolor morbi. Lectus urna cursus morbi at gravida mi tristique congue sed. Egestas in iaculis tellus viverra eget sed sit vulputate feugiat. Nulla massa tortor in commodo dis id. Elementum purus volutpat nascetur tristique fermentum gravida eget consequat.",
  },
  {
    id: "3",
    date: "25th, Dec. 2024",
    time: "07:30 pm",
    agent: "Ummi Moh’d",
    department: "General Services",
    status: CustomerStatus.Pending,
    details:
      "Pulvinar eu morbi bibendum sollicitudin fermentum sed sit augue. Rutrum ut justo gravida cras dui at. Cum at dignissim faucibus lectus mauris dapibus. Tortor feugiat dolor amet rhoncus nisi. Ut nunc convallis dolor morbi. Lectus urna cursus morbi at gravida mi tristique congue sed. Egestas in iaculis tellus viverra eget sed sit vulputate feugiat. Nulla massa tortor in commodo dis id. Elementum purus volutpat nascetur tristique fermentum gravida eget consequat.",
  },
];

function Complaints() {
  const [activeIndex, setActiveIndex] = useState<number | undefined>(0);

  return (
    <div className="grid text-primary text-opacity-80 font-inter font-semibold tracking-[0.15px] text-center gap-5">
      <div className="grid md:grid-cols-[repeat(4,1fr),36px] px-4 max-md:hidden">
        <p>Date</p>
        <p>Time</p>
        <p>Agent</p>
        <p>Department</p>
        <p></p>
      </div>
      {complaints.map((item, i) => (
        <ComplaintsCard
          key={item.id}
          index={i}
          isActive={activeIndex === i}
          onSetActive={setActiveIndex}
          {...item}
        />
      ))}
    </div>
  );
}

export default memo(Complaints);
