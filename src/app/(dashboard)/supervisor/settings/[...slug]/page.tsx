"use client";
import DashboardMainBody from "@/components/shared/dashboard-main-body";
import SettingsBodyAccount from "@/components/shared/settings-body-account";
import SettingsBodySecurity from "@/components/shared/settings-body-security";
import SettingsNavigation from "@/components/shared/settings-navigation";
import ShouldRender from "@/components/shared/should-render";
import { SupervisorLinksSettings } from "@/lib/constants";
import { useParams } from "next/navigation";
import { memo } from "react";

const navigationList = Object.values(SupervisorLinksSettings);

const details = [
  { label: "full name", value: "Aliyu Mustapha" },
  { label: "Department", value: "General services" },
  { label: "Role", value: "Supervisor" },
  { label: "name", value: "Aliyu Mustapha", canEdit: true },
  { label: "email", value: "a_musty@bizapp.ng", canEdit: true },
  { label: "Phone Number", value: "+23457694038534", canEdit: true },
];
const image = "/images/supervisor.png";

function AgentSettings() {
  const params = useParams();
  const slugParams = params?.slug;
  return (
    <DashboardMainBody className="lg:grid-cols-[390px,1fr] flex-1 lg:overflow-hidden lg:pb-0 pt-[14px]">
      <div className="flex flex-col flex-1 gap-3 lg:overflow-hidden lg:border-r border-gray-9 py-5 lg:pr-9">
        <SettingsNavigation list={navigationList} />
      </div>
      <ShouldRender condition={slugParams?.includes("account")}>
        <SettingsBodyAccount details={details} image={image} />
      </ShouldRender>
      <ShouldRender condition={slugParams?.includes("security")}>
        <SettingsBodySecurity />
      </ShouldRender>
    </DashboardMainBody>
  );
}

export default memo(AgentSettings);
