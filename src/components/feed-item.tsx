import { cn } from "@/lib/utils"

interface FeedItemProps {
  agent: string
  message: string
  time: string
  type: "success" | "info" | "warning" | "neutral"
}

export function FeedItem({ agent, message, time, type }: FeedItemProps) {
  const colors = {
    success: { bg: "bg-green-50", text: "text-green-700" },
    info: { bg: "bg-blue-50", text: "text-blue-700" },
    warning: { bg: "bg-amber-50", text: "text-amber-700" },
    neutral: { bg: "bg-slate-50", text: "text-slate-600" },
  }

  const { bg, text } = colors[type]

  return (
    <div className={cn("p-2.5 rounded-md text-xs", bg, text)}>
      <span className="font-semibold">{agent}:</span> {message}
      <div className="text-[10px] text-slate-400 mt-1">{time}</div>
    </div>
  )
}
