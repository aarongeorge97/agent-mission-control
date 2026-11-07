"use client"

import { cn } from "@/lib/utils"

interface AgentCardProps {
  name: string
  status: "active" | "working" | "idle"
  task: string
  tokens?: number
  cost?: number
  successRate?: number
  lastActive?: string
}

export function AgentCard({ name, status, task, tokens, cost, successRate, lastActive }: AgentCardProps) {
  const statusColors = {
    active: { bg: "bg-green-50", border: "border-green-500", text: "text-green-500", label: "● ACTIVE" },
    working: { bg: "bg-blue-50", border: "border-blue-500", text: "text-blue-500", label: "● WORKING" },
    idle: { bg: "bg-slate-50", border: "border-slate-300", text: "text-slate-400", label: "○ IDLE" },
  }

  const { bg, border, text, label } = statusColors[status]

  return (
    <div className={cn(
      "p-3 rounded-md border-l-[3px] cursor-pointer transition-all hover:shadow-md",
      bg, border
    )}>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-semibold text-slate-900">{name}</span>
        <span className={cn("text-[10px] font-semibold", text, status !== "idle" && "animate-pulse")}>
          {label}
        </span>
      </div>
      <p className="text-xs text-slate-500 mb-1.5">{task}</p>
      {status !== "idle" ? (
        <div className="flex gap-2 text-[10px] text-slate-400">
          <span>{(tokens! / 1000).toFixed(1)}K tokens</span>
          <span>•</span>
          <span>${cost?.toFixed(2)}</span>
          <span>•</span>
          <span className="text-green-500">{successRate}% ✓</span>
        </div>
      ) : (
        <div className="text-[10px] text-slate-400">
          Last active {lastActive}
        </div>
      )}
    </div>
  )
}
