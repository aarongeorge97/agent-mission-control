import { businessData } from "@/lib/data"
import { cn } from "@/lib/utils"

const statusColors: Record<string, { bg: string; text: string }> = {
  ANCHOR: { bg: "bg-green-500", text: "text-black" },
  REACTIVATE: { bg: "bg-amber-400", text: "text-black" },
  OPTIMIZE: { bg: "bg-slate-500", text: "text-white" },
  PILOT: { bg: "bg-slate-500", text: "text-white" },
  GROWING: { bg: "bg-slate-500", text: "text-white" },
  STABLE: { bg: "bg-slate-500", text: "text-white" },
  WATCH: { bg: "bg-red-500", text: "text-white" },
  URGENT: { bg: "bg-red-500", text: "text-white" },
  DEPRIORITIZE: { bg: "bg-red-500", text: "text-white" },
}

export function StoreTable() {
  return (
    <div className="bg-[#1a1a1a] border border-[#333] rounded-xl p-8 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-amber-500 mb-2">
            Anchor Retail Performance - All 9 Store Locations
          </h3>
          <p className="text-sm text-slate-400">
            Real-time market health • Performance-based engagement • Synthetic demo data payouts
          </p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-amber-500">$19.2K</div>
          <div className="text-xs text-slate-400">Weekly Run-Rate</div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-[#333]">
              {["Store Code", "Location", "Market Type", "Weekly Revenue", "3-Month Avg", "Active Users", "Market Velocity", "Priority/Status"].map((header) => (
                <th key={header} className="text-left p-3 text-amber-500 text-xs uppercase tracking-wider">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {businessData.stores.map((store) => {
              const isGreen = store.status === "ANCHOR"
              const isYellow = store.status === "REACTIVATE"
              const isRed = ["WATCH", "URGENT", "DEPRIORITIZE"].includes(store.status)
              
              return (
                <tr 
                  key={store.code}
                  className={cn(
                    "border-b border-[#2a2a2a]",
                    isGreen && "bg-green-500/5",
                    isYellow && "bg-amber-400/5",
                    isRed && "bg-red-500/5"
                  )}
                >
                  <td className="p-4 text-white font-semibold">{store.code}</td>
                  <td className="p-4 text-white">{store.location}</td>
                  <td className="p-4 text-slate-400">{store.type}</td>
                  <td className={cn(
                    "p-4 font-semibold text-right",
                    isGreen ? "text-green-500" : isRed ? "text-red-500" : isYellow ? "text-amber-400" : "text-white"
                  )}>
                    ${store.weeklyRevenue.toLocaleString()}
                  </td>
                  <td className="p-4 text-slate-400 text-right">${store.avg3Month.toLocaleString()}</td>
                  <td className="p-4 text-white font-semibold text-center">{store.users}</td>
                  <td className={cn(
                    "p-4",
                    isGreen ? "text-green-500" : isRed ? "text-red-500" : isYellow ? "text-amber-400" : "text-slate-400"
                  )}>
                    {isGreen ? "▲" : isRed ? "▼" : "→"} {store.velocity}
                  </td>
                  <td className="p-4">
                    <span className={cn(
                      "px-2.5 py-1 rounded text-xs font-semibold",
                      statusColors[store.status]?.bg,
                      statusColors[store.status]?.text
                    )}>
                      {store.status}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
