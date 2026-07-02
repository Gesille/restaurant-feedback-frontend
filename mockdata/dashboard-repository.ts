import { MOCK_RESTAURANTS, MOCK_SCAN_TREND, MOCK_DEVICE_BREAKDOWN, MOCK_PEAK_HOURS } from "./mock-source";
import { Restaurant, ScanTrendPoint, DeviceBreakdown, PeakHourPoint, DashboardStats } from "./restaurant";


export interface DashboardRepository {
  getRestaurants(): Promise<Restaurant[]>;
  getScanTrend(): Promise<ScanTrendPoint[]>;
  getDeviceBreakdown(): Promise<DeviceBreakdown>;
  getPeakHours(): Promise<PeakHourPoint[]>;
  getDashboardStats(): Promise<DashboardStats>;
}

class MockDashboardRepository implements DashboardRepository {
  async getRestaurants(): Promise<Restaurant[]> {
    return MOCK_RESTAURANTS;
  }

  async getScanTrend(): Promise<ScanTrendPoint[]> {
    return MOCK_SCAN_TREND;
  }

  async getDeviceBreakdown(): Promise<DeviceBreakdown> {
    return MOCK_DEVICE_BREAKDOWN;
  }

  async getPeakHours(): Promise<PeakHourPoint[]> {
    return MOCK_PEAK_HOURS;
  }

  async getDashboardStats(): Promise<DashboardStats> {
    const totalScans = MOCK_RESTAURANTS.reduce((sum, r) => sum + r.scans, 0);
    return {
      activeRestaurants: MOCK_RESTAURANTS.length + 18,
      activeRestaurantsDeltaLabel: "4 this month",
      totalScans,
      totalScansDeltaLabel: "18.2% vs last week",
      avgSessionLabel: "2m 41s",
      avgSessionDeltaLabel: "6s vs last week",
      satisfactionScore: 4.8,
      satisfactionReviewCount: 96,
    };
  }
}

/** Swap this single export to point the app at a real backend later. */
export const dashboardRepository: DashboardRepository =
  new MockDashboardRepository();