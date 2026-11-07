"use client"

import { useState, useEffect } from "react"

export function LiveClock() {
  const [time, setTime] = useState<string>("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "America/New_York"
      }))
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return (
      <div className="text-right">
        <div className="text-2xl font-semibold text-blue-700">--:--:--</div>
        <div className="text-sm text-slate-500">Springfield, OH • EST</div>
      </div>
    )
  }

  return (
    <div className="text-right">
      <div className="text-2xl font-semibold text-blue-700">{time}</div>
      <div className="text-sm text-slate-500">Springfield, OH • EST</div>
    </div>
  )
}
