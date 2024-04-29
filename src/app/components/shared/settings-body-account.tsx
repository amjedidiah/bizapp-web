import Avatar from "@/components/shared/avatar";
import { BAPencil } from "@/lib/icons";
import ShouldRender from "@/components/shared/should-render";

type Props = {
  details: Array<{
    label: string;
    value: string;
    canEdit?: boolean;
  }>;
  image?: string;
};

export default function SettingsBodyAccount({
  details,
  image = "/images/user-female.png",
}: Props) {
  return (
    <div className="flex-1 flex flex-col lg:overflow-hidden gap-6 lg:gap-8 pt-2">
      <div className="flex flex-col gap-1 py-[10px]">
        <p className="text-main-blue-100 text-lg font-semibold lg:leading-8">
          Account
        </p>
        <p className="text-black-100 text-xs">
          Customise the look of your workspace. Feeling adventurous?
        </p>
      </div>
      <div className="flex-1 lg:overflow-y-auto lg:py-2">
        <div className="flex flex-col gap-2">
          <p className="text-gray-800 text-sm font-bold">Profile Photo</p>
          <div className="flex items-center justify-between max-mobile:flex-wrap gap-4 mb-3">
            <Avatar src={image} className="lg:w-[125px] lg:h-[125px]" />
            <div className="flex items-center gap-[10px]">
              <button className="py-2 lg:py-[10px] px-3 rounded-[5px] text-main-blue text-xs lg:text-sm font-medium leading-[18px]">
                Remove Photo
              </button>
              <button className="py-2 lg:py-[10px] px-3 rounded-[5px] bg-yellow-200 bg-opacity-60 text-gray-800 text-xs lg:text-sm font-medium leading-[18px]">
                Change Photo
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:gap-5">
            {details.map(({ label, value, canEdit }) => (
              <div
                className="flex max-mobile:flex-wrap items-center justify-between gap-2 mobile:gap-4"
                key={label}
              >
                <div className="flex flex-col mobile:gap-2">
                  <p className="text-gray-800 text-sm font-bold capitalize">
                    {label}
                  </p>
                  <p className="text-main-blue">{value}</p>
                </div>
                <ShouldRender condition={Boolean(canEdit)}>
                  <button className="py-2 lg:py-[10px] px-3 gap-2 flex items-center rounded-[5px] bg-yellow-200 bg-opacity-60 shadow-template-copy">
                    <span>
                      <BAPencil />
                    </span>
                    <span className="text-main-blue font-semibold max-lg:text-sm">
                      Edit Details
                    </span>
                  </button>
                </ShouldRender>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
