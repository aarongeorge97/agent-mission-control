"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  LayoutDashboard, 
  ClipboardList, 
  Brain, 
  Calendar, 
  Building2, 
  Users, 
  GitBranch, 
  Phone, 
  Target 
} from "lucide-react"

const navItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard, emoji: "📊" },
  { href: "/tasks", label: "Tasks Board", icon: ClipboardList, emoji: "📋" },
  { href: "/memory", label: "Memory", icon: Brain, emoji: "🧠" },
  { href: "/calendar", label: "Calendar", icon: Calendar, emoji: "📅" },
  { href: "/office", label: "Office", icon: Building2, emoji: "🏢" },
  { href: "/team", label: "Team", icon: Users, emoji: "👥" },
  { href: "/agent-flow", label: "Agent Flow", icon: GitBranch, emoji: "🔄" },
  { href: "/contacts", label: "Contacts", icon: Phone, emoji: "📞" },
  { href: "/pipeline", label: "Pipeline", icon: Target, emoji: "🎯" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-60 bg-black border-r-2 border-amber-500 shadow-lg shadow-amber-500/20 flex flex-col h-screen">
      {/* Logo */}
      <div className="px-5 py-6 border-b border-slate-800">
        <h1 className="text-amber-500 text-xl font-bold">🚚 Northwind</h1>
        <p className="text-white text-xs mt-1">Mission Control</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg mb-1 text-sm transition-all",
                isActive 
                  ? "bg-amber-500 text-black font-semibold" 
                  : "text-white hover:bg-amber-500/20 hover:text-amber-500"
              )}
            >
              <span className="text-lg">{item.emoji}</span>
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* User Profile */}
      <div className="p-5 border-t border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
            AG
          </div>
          <div>
            <h3 className="text-white text-sm font-medium">Alex Morgan</h3>
            <p className="text-slate-400 text-xs">CEO, Northwind</p>
          </div>
        </div>
      </div>
    </div>
  )
}
