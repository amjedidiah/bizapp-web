"use client";
import ShouldRender from "@/components/shared/should-render";
import { memo } from "react";
import { useParams } from "next/navigation";
import SettingsBodyAccount from "@/components/shared/settings-body-account";
import SettingsBodySecurity from "@/components/shared/settings-body-security";

function SettingsBody() {
  const params = useParams();
  const slugParams = params?.slug;

  return (
    <>
      <ShouldRender condition={slugParams?.includes("account")}>
        <SettingsBodyAccount />
      </ShouldRender>
      <ShouldRender condition={slugParams?.includes("security")}>
        <SettingsBodySecurity />
      </ShouldRender>
    </>
  );
}

export default memo(SettingsBody);
