import { cn } from "@/lib/utils"

interface MetricCardProps {
  label: string
  value: string
  change?: string
  changeType?: "up" | "down"
  subtext?: string
  accentColor?: "green" | "amber" | "blue" | "red"
}

export function MetricCard({ label, value, change, changeType, subtext, accentColor }: MetricCardProps) {
  const accentStyles = {
    green: "border-l-4 border-l-green-500",
    amber: "border-l-4 border-l-amber-500",
    blue: "border-l-4 border-l-blue-500",
    red: "border-l-4 border-l-red-500",
  }

  return (
    <div className={cn(
      "bg-white border-2 border-slate-100 rounded-xl p-6 transition-all duration-300 shadow-sm hover:border-amber-500 hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-0.5 relative overflow-hidden group",
      accentColor && accentStyles[accentColor]
    )}>
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="text-xs text-slate-500 mb-2 uppercase tracking-wider font-semibold">{label}</div>
      <div className="text-2xl font-bold text-slate-900 mb-2">{value}</div>
      {change && (
        <div className={cn(
          "text-sm flex items-center gap-1 font-medium",
          changeType === "up" ? "text-green-500" : "text-red-500"
        )}>
          {changeType === "up" ? "↑" : "↓"} {change}
        </div>
      )}
      {subtext && (
        <div className="text-sm text-green-500 font-medium mt-1">{subtext}</div>
      )}
    </div>
  )
}
