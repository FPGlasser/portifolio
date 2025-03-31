import { IconName } from "lucide-react/dynamic";

export type MenuProps = {
  id: string;
  title: string;
  url: string;
  isActive?: boolean;
  icon: IconName;
};

export type SubMenuProps = {
  id: string;
  title: string;
  url: string;
};

export type MenuWithSubMenuProps = MenuProps & {
  submenu: SubMenuProps[];
};
