import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const agentWorkflows = [
  {
    id: 1,
    name: "Revenue Reconciliation",
    trigger: "Daily @ 9:00 AM",
    agents: ["Revenue Intel", "Email Monitor"],
    status: "active",
    lastRun: "Today 9:00 AM",
    nextRun: "Tomorrow 9:00 AM",
  },
  {
    id: 2,
    name: "Lead Scoring Pipeline",
    trigger: "On new lead detection",
    agents: ["Growth Pipeline", "Email Monitor"],
    status: "active",
    lastRun: "12 min ago",
    nextRun: "On trigger",
  },
  {
    id: 3,
    name: "Fleet Health Check",
    trigger: "Hourly",
    agents: ["Fleet Ops", "Compliance"],
    status: "idle",
    lastRun: "45 min ago",
    nextRun: "15 min",
  },
  {
    id: 4,
    name: "Daily Summary Report",
    trigger: "Daily @ 6:00 PM",
    agents: ["Orchestrator", "Revenue Intel", "Growth Pipeline"],
    status: "scheduled",
    lastRun: "Yesterday 6:00 PM",
    nextRun: "Today 6:00 PM",
  },
  {
    id: 5,
    name: "Compliance Monitoring",
    trigger: "Every 4 hours",
    agents: ["Compliance", "Fleet Ops"],
    status: "active",
    lastRun: "2 hours ago",
    nextRun: "2 hours",
  },
]

const statusVariant = {
  active: "success",
  idle: "secondary",
  scheduled: "warning",
} as const

export default function AgentFlowPage() {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Agent Flow</h2>
        <p className="text-slate-500">Automated workflows and agent orchestration</p>
      </div>

      {/* Flow Diagram */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Orchestration Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center gap-4 py-8">
            <div className="bg-slate-900 text-white px-6 py-4 rounded-lg text-center">
              <div className="text-2xl mb-1">📨</div>
              <div className="text-sm font-medium">Triggers</div>
              <div className="text-xs text-slate-400">Email, Time, Events</div>
            </div>
            <div className="text-2xl text-slate-300">→</div>
            <div className="bg-blue-500 text-white px-6 py-4 rounded-lg text-center">
              <div className="text-2xl mb-1">🤖</div>
              <div className="text-sm font-medium">Orchestrator</div>
              <div className="text-xs text-blue-200">Orchestrator</div>
            </div>
            <div className="text-2xl text-slate-300">→</div>
            <div className="flex flex-col gap-2">
              {["Revenue Intel", "Email Monitor", "Fleet Ops", "Growth Pipeline"].map((agent) => (
                <div key={agent} className="bg-slate-100 px-4 py-2 rounded text-xs font-medium text-slate-700">
                  {agent}
                </div>
              ))}
            </div>
            <div className="text-2xl text-slate-300">→</div>
            <div className="bg-green-500 text-white px-6 py-4 rounded-lg text-center">
              <div className="text-2xl mb-1">✅</div>
              <div className="text-sm font-medium">Actions</div>
              <div className="text-xs text-green-200">Update, Notify, Log</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Workflows List */}
      <div className="space-y-4">
        {agentWorkflows.map((workflow) => (
          <Card key={workflow.id} className="hover:translate-x-1 transition-transform cursor-pointer">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-base font-semibold text-slate-900">{workflow.name}</h3>
                    <Badge variant={statusVariant[workflow.status as keyof typeof statusVariant]}>
                      {workflow.status.toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-500 mb-3">Trigger: {workflow.trigger}</p>
                  <div className="flex gap-2">
                    {workflow.agents.map((agent) => (
                      <span
                        key={agent}
                        className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {agent}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right text-sm">
                  <div className="text-slate-500">Last: {workflow.lastRun}</div>
                  <div className="text-slate-400">Next: {workflow.nextRun}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
