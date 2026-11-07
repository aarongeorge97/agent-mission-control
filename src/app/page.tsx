import { LiveClock } from "@/components/live-clock"
import { AgentCard } from "@/components/agent-card"
import { FeedItem } from "@/components/feed-item"
import { MetricCard } from "@/components/metric-card"
import { StoreTable } from "@/components/store-table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { agents, feedItems, memories } from "@/lib/data"

export default function Dashboard() {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome back, Alex 👋</h2>
          <p className="text-slate-500">
            January: $17K net profit, +217% gross profit growth • 27 active tasks today
          </p>
        </div>
        <LiveClock />
      </div>

      {/* Live Agent Status + Activity Feed */}
      <div className="grid grid-cols-[250px_1fr_300px] gap-5 mb-8">
        {/* Left: Active Agents */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-sm uppercase tracking-wider">🤖 Active Agents</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {agents.map((agent) => (
              <AgentCard
                key={agent.id}
                name={agent.name}
                status={agent.status as "active" | "working" | "idle"}
                task={agent.task}
                tokens={agent.tokens}
                cost={agent.cost}
                successRate={agent.successRate}
                lastActive={agent.lastActive}
              />
            ))}
          </CardContent>
        </Card>

        {/* Center: Quick Stats */}
        <Card>
          <CardHeader className="pb-4">
            <CardTitle className="text-sm uppercase tracking-wider">⚡ Today&apos;s Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div>
                <p className="text-xs text-slate-500 mb-1">Tasks Completed</p>
                <p className="text-2xl font-bold text-green-500">12</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Active Agents</p>
                <p className="text-2xl font-bold text-blue-500">4</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Queued Tasks</p>
                <p className="text-2xl font-bold text-amber-500">15</p>
              </div>
            </div>
            <div className="pt-5 border-t border-slate-200">
              <h4 className="text-xs font-semibold text-slate-500 mb-3">CURRENT FOCUS</h4>
              <div className="bg-blue-50 p-3 rounded-md border-l-[3px] border-blue-500">
                <p className="text-sm font-semibold text-blue-800 mb-1">Revenue Intelligence Agent</p>
                <p className="text-xs text-slate-600">
                  Reconciling Harbor wire confirmations against bank deposits (Week 12)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right: Live Activity Feed */}
        <Card className="max-h-[400px] overflow-y-auto">
          <CardHeader className="pb-4">
            <CardTitle className="text-sm uppercase tracking-wider">📡 Live Feed</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {feedItems.map((item, idx) => (
              <FeedItem
                key={idx}
                agent={item.agent}
                message={item.message}
                time={item.time}
                type={item.type as "success" | "info" | "warning" | "neutral"}
              />
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-4 gap-5 mb-8">
        <MetricCard
          label="Monthly Revenue (Jan)"
          value="$103,026"
          change="-13.0% vs Dec ($118,411)"
          changeType="down"
        />
        <MetricCard
          label="Net Operating Income"
          value="$17,081"
          change="Profitable (vs -$29,901 Dec)"
          changeType="up"
        />
        <MetricCard
          label="Gross Profit (Jan)"
          value="$35,973"
          change="+217% vs Dec ($11,363)"
          changeType="up"
        />
        <MetricCard
          label="Anchor Retail (Jan) 🟢"
          value="$68,530"
          subtext="66% of revenue • $700K+ GMV/mo"
          changeType="up"
        />
      </div>

      {/* Second Row Metrics */}
      <div className="grid grid-cols-3 gap-5 mb-8">
        <MetricCard
          label="Harbor Foods 🟢 Reconciled"
          value="$28,700/mo"
          subtext="✅ 100% payment reliability (every Monday)"
          accentColor="green"
        />
        <MetricCard
          label="Account Health: Harbor"
          value="💪 Strong"
          subtext="Payment 100% ✅ | Volume ↑ | Relationship Excellent"
          accentColor="amber"
        />
        <MetricCard
          label="Account Health: Anchor"
          value="📈 Stable"
          subtext="GMV → Steady | 9 Markets | Churn Low"
          accentColor="amber"
        />
      </div>

      {/* Memory Items */}
      <div className="space-y-3 mb-8">
        {memories.map((memory) => (
          <Card key={memory.id} className="cursor-pointer hover:translate-x-1 transition-transform">
            <CardContent className="p-5">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-slate-900">{memory.title}</h3>
                <span className="text-xs text-slate-500">{memory.date}</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{memory.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Store Performance Table */}
      <StoreTable />
    </div>
  )
}
