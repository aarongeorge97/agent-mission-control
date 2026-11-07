import { Card, CardContent } from "@/components/ui/card"

const officeAgents = [
  { name: "Orchestrator", role: "Main Orchestrator", emoji: "🤖", status: "online", tasks: 134, successRate: 96 },
  { name: "Revenue Intel", role: "Financial Analysis", emoji: "💰", status: "online", tasks: 45, successRate: 100 },
  { name: "Email Monitor", role: "Communication Hub", emoji: "📧", status: "online", tasks: 89, successRate: 94 },
  { name: "Fleet Ops", role: "Logistics Manager", emoji: "🚚", status: "offline", tasks: 23, successRate: 91 },
  { name: "Growth Pipeline", role: "Sales Intelligence", emoji: "📈", status: "busy", tasks: 67, successRate: 100 },
  { name: "Compliance", role: "Regulatory Monitor", emoji: "✅", status: "online", tasks: 12, successRate: 98 },
]

const statusColors = {
  online: "bg-green-500",
  busy: "bg-amber-500",
  offline: "bg-slate-400",
}

export default function OfficePage() {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Office</h2>
        <p className="text-slate-500">AI agent workspace and status overview</p>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {officeAgents.map((agent) => (
          <Card key={agent.name} className="hover:-translate-y-1">
            <CardContent className="p-5 text-center">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-3xl">
                  {agent.emoji}
                </div>
                <div
                  className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-[3px] border-white ${statusColors[agent.status as keyof typeof statusColors]}`}
                />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-1">{agent.name}</h3>
              <p className="text-xs text-slate-500 mb-4">{agent.role}</p>
              <div className="flex justify-around pt-4 border-t border-slate-100">
                <div className="text-center">
                  <div className="text-lg font-semibold text-slate-900">{agent.tasks}</div>
                  <div className="text-[10px] text-slate-500">Tasks</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold text-slate-900">{agent.successRate}%</div>
                  <div className="text-[10px] text-slate-500">Success</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
