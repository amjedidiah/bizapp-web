"use client";
import BodyNavigation from "@/components/shared/body-navigation";
import { AgentLinksSettingsSecurity } from "@/lib/constants";
import EmailPreferenceForm from "@/components/shared/email-preference-form";
import { memo } from "react";
import AccountPasswordForm from "@/components/shared/account-password-form";
import { usePathname } from "next/navigation";
import ShouldRender from "@/components/shared/should-render";

const routes = Object.values(AgentLinksSettingsSecurity);

function SettingsBodySecurity() {
  const pathname = usePathname();
  const showPasswordForm = pathname.includes("password");

  return (
    <div className="flex-1 flex flex-col items-center lg:overflow-hidden gap-6 lg:gap-8 pt-2">
      <div className="flex flex-col gap-1 border-b border-gray-9 py-[10px] w-full">
        <p className="text-main-blue-100 text-lg font-semibold lg:leading-8">
          Security
        </p>
        <p className="text-black-100 text-xs">
          Customise the look of your workspace. Feeling adventurous?
        </p>
      </div>
      <BodyNavigation routes={routes} level={1} />

      <ShouldRender condition={!showPasswordForm}>
        <EmailPreferenceForm />
      </ShouldRender>
      <ShouldRender condition={showPasswordForm}>
        <AccountPasswordForm />
      </ShouldRender>
    </div>
  );
}

export default memo(SettingsBodySecurity);
