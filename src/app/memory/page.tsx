"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Search } from "lucide-react"
import { memories } from "@/lib/data"

export default function MemoryPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredMemories = memories.filter(
    (m) =>
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.content.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Memory</h2>
        <p className="text-slate-500">Search and browse organizational knowledge</p>
      </div>

      {/* Search Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3 mb-8 shadow-sm">
        <Search className="w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search memories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-sm text-slate-900 placeholder:text-slate-400"
        />
      </div>

      {/* Memory List */}
      <div className="space-y-3">
        {filteredMemories.map((memory) => (
          <Card
            key={memory.id}
            className="cursor-pointer hover:border-blue-500 hover:translate-x-1 transition-all"
          >
            <CardContent className="p-5">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-base font-semibold text-slate-900">{memory.title}</h3>
                <span className="text-xs text-slate-500">{memory.date}</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{memory.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
