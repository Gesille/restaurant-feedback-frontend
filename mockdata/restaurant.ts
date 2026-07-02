export type RestaurantStatus = "active" | "paused";

export interface Restaurant {
  id: string;
  name: string;
  location: string;
  scans: number;
  menuViews: number;
  weeklyTrendPct: number;
  status: RestaurantStatus;
  onboardedLabel: string;
  color: string;
  menuUrl: string;
}

export interface ScanTrendPoint {
  label: string;
  scans: number;
  ordersStarted: number;
}

export interface DeviceBreakdown {
  mobilePct: number;
  tabletPct: number;
  desktopPct: number;
}

export interface PeakHourPoint {
  hourLabel: string;
  scans: number;
}

export interface DashboardStats {
  activeRestaurants: number;
  activeRestaurantsDeltaLabel: string;
  totalScans: number;
  totalScansDeltaLabel: string;
  avgSessionLabel: string;
  avgSessionDeltaLabel: string;
  satisfactionScore: number;
  satisfactionReviewCount: number;
}