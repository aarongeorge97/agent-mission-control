import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { pipeline } from "@/lib/data"

const stages = [
  { id: "warm", label: "Warm Leads", color: "bg-amber-500" },
  { id: "qualified", label: "Qualified", color: "bg-blue-500" },
  { id: "proposal", label: "Proposal", color: "bg-purple-500" },
  { id: "negotiation", label: "Negotiation", color: "bg-green-500" },
]

const stageColors: Record<string, string> = {
  warm: "border-l-amber-500",
  qualified: "border-l-blue-500",
  proposal: "border-l-purple-500",
  negotiation: "border-l-green-500",
}

export default function PipelinePage() {
  const totalValue = pipeline.reduce((sum, deal) => sum + deal.value, 0)
  const weightedValue = pipeline.reduce((sum, deal) => sum + (deal.value * deal.probability) / 100, 0)

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Pipeline</h2>
        <p className="text-slate-500">Sales pipeline and deal tracking</p>
      </div>

      {/* Pipeline Summary */}
      <div className="grid grid-cols-4 gap-5 mb-8">
        <Card>
          <CardContent className="p-5">
            <p className="text-xs text-slate-500 mb-1">Total Pipeline</p>
            <p className="text-2xl font-bold text-slate-900">${totalValue.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs text-slate-500 mb-1">Weighted Value</p>
            <p className="text-2xl font-bold text-green-500">${weightedValue.toLocaleString()}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs text-slate-500 mb-1">Active Deals</p>
            <p className="text-2xl font-bold text-blue-500">{pipeline.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-5">
            <p className="text-xs text-slate-500 mb-1">Avg Deal Size</p>
            <p className="text-2xl font-bold text-slate-900">
              ${Math.round(totalValue / pipeline.length).toLocaleString()}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Stage Progress Bar */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Pipeline Stages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            {stages.map((stage) => {
              const stageDeals = pipeline.filter((d) => d.stage === stage.id)
              const stageValue = stageDeals.reduce((sum, d) => sum + d.value, 0)
              const percentage = (stageValue / totalValue) * 100

              return (
                <div key={stage.id} className="flex-1">
                  <div className={`h-3 ${stage.color} rounded-full mb-2`} style={{ width: `${Math.max(percentage, 10)}%` }} />
                  <p className="text-xs font-medium text-slate-700">{stage.label}</p>
                  <p className="text-xs text-slate-500">${stageValue.toLocaleString()} ({stageDeals.length})</p>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Deals List */}
      <div className="space-y-4">
        {pipeline.map((deal) => (
          <Card key={deal.id} className={`border-l-4 ${stageColors[deal.stage]} hover:translate-x-1 transition-transform cursor-pointer`}>
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-base font-semibold text-slate-900">{deal.company}</h3>
                    <Badge variant="secondary">{deal.stage}</Badge>
                  </div>
                  <p className="text-sm text-slate-500">Contact: {deal.contact} • Last touch: {deal.lastTouch}</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-slate-900">${deal.value.toLocaleString()}</div>
                  <div className="text-sm text-green-500">{deal.probability}% probability</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
