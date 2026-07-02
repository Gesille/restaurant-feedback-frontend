import { DashboardIcon, RestaurantsIcon, QrIcon, AnalyticsIcon, ClientsIcon, ReportsIcon, SettingsIcon } from "@/icons/icons";
import type { ComponentType, SVGProps } from "react";


export interface NavItem {
  label: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  badge?: string;
  active?: boolean;
}

export interface NavSection {
  label: string;
  items: NavItem[];
}

export const NAV_SECTIONS: NavSection[] = [
  {
    label: "Overview",
    items: [
      { label: "Dashboard", icon: DashboardIcon, active: true },
      { label: "Restaurants", icon: RestaurantsIcon },
      { label: "QR Codes", icon: QrIcon, badge: "12" },
      { label: "Analytics", icon: AnalyticsIcon },
    ],
  },
  {
    label: "Workspace",
    items: [
      { label: "Clients", icon: ClientsIcon },
      { label: "Reports", icon: ReportsIcon },
      { label: "Settings", icon: SettingsIcon },
    ],
  },
];