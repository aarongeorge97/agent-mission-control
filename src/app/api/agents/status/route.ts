import { NextResponse } from "next/server"
import { agents } from "@/lib/data"

export async function GET() {
  return NextResponse.json({
    success: true,
    timestamp: new Date().toISOString(),
    data: {
      total: agents.length,
      active: agents.filter(a => a.status === "active").length,
      working: agents.filter(a => a.status === "working").length,
      idle: agents.filter(a => a.status === "idle").length,
      agents: agents.map(agent => ({
        id: agent.id,
        name: agent.name,
        status: agent.status,
        task: agent.task,
        metrics: agent.status !== "idle" ? {
          tokens: agent.tokens,
          cost: agent.cost,
          successRate: agent.successRate,
        } : {
          lastActive: agent.lastActive,
        }
      }))
    }
  })
}
