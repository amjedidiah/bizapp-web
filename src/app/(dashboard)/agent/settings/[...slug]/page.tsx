import DashboardMainBody from "@/components/shared/dashboard-main-body";
import SettingsBody from "@/components/shared/settings-body";
import SettingsNavigation from "@/components/shared/settings-navigation";
import { AgentLinksSettings } from "@/lib/constants";

const navigationList = Object.values(AgentLinksSettings);

export default function AgentSettings() {
  return (
    <DashboardMainBody className="lg:grid-cols-[390px,1fr] flex-1 lg:overflow-hidden lg:pb-0 pt-[14px]">
      <div className="flex flex-col flex-1 gap-3 lg:overflow-hidden lg:border-r border-gray-9 py-5 lg:pr-9">
        <SettingsNavigation list={navigationList} />
      </div>
      <SettingsBody />
    </DashboardMainBody>
  );
}
