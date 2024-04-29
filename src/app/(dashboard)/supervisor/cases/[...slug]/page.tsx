"use client";
import PendingRequests from "@/components/shared/pending-requests";
import DashboardMainBody from "@/components/shared/dashboard-main-body";
import {
  CasesLinks,
  CustomerStatus,
  Role,
  SupervisorLinksCases,
} from "@/lib/constants";
import { useParams } from "next/navigation";
import BodyNavigation from "@/components/shared/body-navigation";
import { useMemo } from "react";

const pendingRequests = [
  {
    id: "1",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Pending,
    location: "Wudil, Kano",
    agent: "----",
  },
  {
    id: "2",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Pending,
    location: "Wudil, Kano",
    agent: "----",
  },
  {
    id: "3",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Pending,
    location: "Wudil, Kano",
    agent: "----",
  },
  {
    id: "4",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Pending,
    location: "Wudil, Kano",
    agent: "----",
  },
  {
    id: "5",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Pending,
    location: "Wudil, Kano",
    agent: "----",
  },
  {
    id: "6",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Pending,
    location: "Wudil, Kano",
    agent: "----",
  },
];

const attendingRequests = [
  {
    id: "1",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Attending,
    location: "Wudil, Kano",
    agent: "Zahra",
  },
  {
    id: "2",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Attending,
    location: "Wudil, Kano",
    agent: "Zahra",
  },
  {
    id: "3",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Attending,
    location: "Wudil, Kano",
    agent: "Zahra",
  },
  {
    id: "4",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Attending,
    location: "Wudil, Kano",
    agent: "Zahra",
  },
  {
    id: "5",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Attending,
    location: "Wudil, Kano",
    agent: "Zahra",
  },
  {
    id: "6",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Attending,
    location: "Wudil, Kano",
    agent: "Zahra",
  },
];

const closedRequests = [
  {
    id: "1",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Closed,
    location: "Wudil, Kano",
    agent: "Zahra",
  },
  {
    id: "2",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Closed,
    location: "Wudil, Kano",
    agent: "Zahra",
  },
  {
    id: "3",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Closed,
    location: "Wudil, Kano",
    agent: "Zahra",
  },
  {
    id: "4",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Closed,
    location: "Wudil, Kano",
    agent: "Zahra",
  },
  {
    id: "5",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Closed,
    location: "Wudil, Kano",
    agent: "Zahra",
  },
  {
    id: "6",
    customer: "Tanimu Ali Salisu",
    issue: "Wallet",
    department: "finance",
    status: CustomerStatus.Closed,
    location: "Wudil, Kano",
    agent: "Zahra",
  },
];

const routes = [
  {
    name: CasesLinks.Pending,
    href: SupervisorLinksCases.Pending,
    count: 3,
  },
  {
    name: CasesLinks.Attending,
    href: SupervisorLinksCases.Attending,
    count: 5,
  },
  {
    name: CasesLinks.Closed,
    href: SupervisorLinksCases.Closed,
    count: 2,
  },
];

const requests = {
  [CasesLinks.Pending.toLowerCase()]: pendingRequests,
  [CasesLinks.Attending.toLowerCase()]: attendingRequests,
  [CasesLinks.Closed.toLowerCase()]: closedRequests,
};

export default function SupervisorCases() {
  const params = useParams();

  const dataRequests = useMemo(
    () => requests[params.slug as CasesLinks],
    [params?.slug]
  );

  if (!dataRequests.length) return null;

  return (
    <DashboardMainBody className="sm:grid-cols-[1fr,auto] max-sm:[&_div]:w-full sm:[&_div:nth-child(3)]:col-span-full">
      <BodyNavigation routes={routes} />
      <PendingRequests
        requests={dataRequests}
        role={Role.Supervisor}
        onlyFilter
      />
    </DashboardMainBody>
  );
}
