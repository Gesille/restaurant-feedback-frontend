import type { ReactNode } from "react";

interface StatCardProps {
  glowColor: string;
  iconBg: string;
  iconColor: string;
  icon: ReactNode;
  label: string;
  value: ReactNode;
  deltaLabel: string;
  deltaDirection: "up" | "down";
}

export function StatCard({
  glowColor,
  iconBg,
  iconColor,
  icon,
  label,
  value,
  deltaLabel,
  deltaDirection,
}: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="glow" style={{ background: glowColor }} />
      <div className="stat-icon" style={{ background: iconBg, color: iconColor }}>
        {icon}
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      <span className={`stat-delta ${deltaDirection === "up" ? "up" : "down"}`}>
        {deltaDirection === "up" ? "▲" : "▼"} {deltaLabel}
      </span>
    </div>
  );
}