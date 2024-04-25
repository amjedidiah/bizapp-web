import SettingsNavigationItem, {
  SettingsNavigationItemProps,
} from "@/components/shared/settings-navigation-item";

type Props = {
  list: Array<SettingsNavigationItemProps>;
};

export default function SettingsNavigation({ list }: Props) {
  return list.map((item) => (
    <SettingsNavigationItem key={item.name} {...item} />
  ));
}
