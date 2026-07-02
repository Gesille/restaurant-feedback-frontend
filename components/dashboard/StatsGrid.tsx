import { StatCard } from "@/components/dashboard/StatCard";
import { DashboardStats } from "@/mockdata/restaurant";
import { THEME } from "@/utils/theme";
import { useCountUp } from "@/utils/useCountUp";


interface StatsGridProps {
  stats: DashboardStats | null;
}

export function StatsGrid({ stats }: StatsGridProps) {
  const restaurantCount = useCountUp(stats?.activeRestaurants ?? 0);
  const scanCount = useCountUp(stats?.totalScans ?? 0);

  if (!stats) {
    return <div className="stats-grid" aria-busy="true" />;
  }

  return (
    <div className="stats-grid">
      <StatCard
        glowColor={THEME.violet}
        iconBg="#F1EDFF"
        iconColor={THEME.violet}
        icon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M3 21V8l9-5 9 5v13" />
            <path d="M9 21V12h6v9" />
          </svg>
        }
        label="Active Restaurants"
        value={restaurantCount.toLocaleString()}
        deltaLabel={stats.activeRestaurantsDeltaLabel}
        deltaDirection="up"
      />

      <StatCard
        glowColor={THEME.teal}
        iconBg="#E1F9F2"
        iconColor={THEME.teal}
        icon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
            <path d="M14 14h7v7h-7z" />
          </svg>
        }
        label="Total QR Scans"
        value={scanCount.toLocaleString()}
        deltaLabel={stats.totalScansDeltaLabel}
        deltaDirection="up"
      />

      <StatCard
        glowColor={THEME.amber}
        iconBg="#FFF3E4"
        iconColor={THEME.amber}
        icon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 3" />
          </svg>
        }
        label="Avg. Session Time"
        value={stats.avgSessionLabel}
        deltaLabel={stats.avgSessionDeltaLabel}
        deltaDirection="down"
      />

      <StatCard
        glowColor={THEME.coral}
        iconBg="#FFEBEB"
        iconColor={THEME.coral}
        icon={
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            <circle cx="12" cy="12" r="5" />
          </svg>
        }
        label="Client Satisfaction"
        value={
          <>
            {stats.satisfactionScore}
            <span style={{ fontSize: 15, color: THEME.slateLight }}>/5</span>
          </>
        }
        deltaLabel={`Based on ${stats.satisfactionReviewCount} reviews`}
        deltaDirection="up"
      />
    </div>
  );
}