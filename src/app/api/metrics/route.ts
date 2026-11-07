import { NextResponse } from "next/server"
import { businessData, agents, tasks } from "@/lib/data"

export async function GET() {
  const allTasks = [
    ...tasks.backlog,
    ...tasks.todo,
    ...tasks.inProgress,
    ...tasks.done,
  ]

  return NextResponse.json({
    success: true,
    timestamp: new Date().toISOString(),
    data: {
      activity: {
        tasksCompleted: tasks.done.length,
        activeAgents: agents.filter(a => a.status !== "idle").length,
        queuedTasks: tasks.backlog.length + tasks.todo.length,
        totalTasks: allTasks.length,
      },
      agents: {
        total: agents.length,
        active: agents.filter(a => a.status === "active").length,
        working: agents.filter(a => a.status === "working").length,
        idle: agents.filter(a => a.status === "idle").length,
      },
      stores: {
        total: businessData.stores.length,
        activeUsers: businessData.anchorAccount.activeUsers,
        weeklyRunRate: businessData.anchorAccount.weeklyRunRate,
      },
      currentFocus: {
        agent: "Revenue Intelligence Agent",
        task: "Reconciling Harbor wire confirmations against bank deposits (Week 12)",
      }
    }
  })
}
