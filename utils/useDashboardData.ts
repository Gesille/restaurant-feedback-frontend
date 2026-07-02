"use client";

import { dashboardRepository } from "@/mockdata/dashboard-repository";
import { Restaurant, ScanTrendPoint, DeviceBreakdown, PeakHourPoint, DashboardStats } from "@/mockdata/restaurant";
import { useEffect, useState } from "react";


interface DashboardData {
  restaurants: Restaurant[];
  scanTrend: ScanTrendPoint[];
  deviceBreakdown: DeviceBreakdown | null;
  peakHours: PeakHourPoint[];
  stats: DashboardStats | null;
  isLoading: boolean;
}

/**
 * Loads every slice of dashboard data through the repository interface.
 * Components consuming this hook never know (or need to know) whether the
 * data came from a mock, a REST API, or a database.
 */
export function useDashboardData(): DashboardData {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [scanTrend, setScanTrend] = useState<ScanTrendPoint[]>([]);
  const [deviceBreakdown, setDeviceBreakdown] =
    useState<DeviceBreakdown | null>(null);
  const [peakHours, setPeakHours] = useState<PeakHourPoint[]>([]);
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    Promise.all([
      dashboardRepository.getRestaurants(),
      dashboardRepository.getScanTrend(),
      dashboardRepository.getDeviceBreakdown(),
      dashboardRepository.getPeakHours(),
      dashboardRepository.getDashboardStats(),
    ]).then(([r, trend, device, hours, dashboardStats]) => {
      if (!isMounted) return;
      setRestaurants(r);
      setScanTrend(trend);
      setDeviceBreakdown(device);
      setPeakHours(hours);
      setStats(dashboardStats);
      setIsLoading(false);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return { restaurants, scanTrend, deviceBreakdown, peakHours, stats, isLoading };
}