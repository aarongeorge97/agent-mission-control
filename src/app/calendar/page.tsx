"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const events = [
  { day: 15, title: "Driver Pay Run" },
  { day: 15, title: "Sam Follow-up" },
  { day: 17, title: "Harbor Invoice" },
  { day: 20, title: "Team Sync" },
  { day: 22, title: "Q1 Review" },
]

export default function CalendarPage() {
  const [currentDate] = useState(new Date())
  const monthName = currentDate.toLocaleString("default", { month: "long", year: "numeric" })

  // Generate calendar days
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate()

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay()

  const days = []
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null)
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i)
  }

  const today = currentDate.getDate()

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Calendar</h2>
        <p className="text-slate-500">Schedule and manage events</p>
      </div>

      <Card>
        <CardContent className="p-8">
          {/* Calendar Header */}
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-semibold text-slate-900">{monthName}</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Day Headers */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="text-center text-xs font-semibold text-slate-500 py-2"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {days.map((day, idx) => {
              const dayEvents = events.filter((e) => e.day === day)
              const isToday = day === today

              return (
                <div
                  key={idx}
                  className={`
                    aspect-square rounded-lg p-2 cursor-pointer transition-all
                    ${day ? "bg-slate-50 border border-slate-200 hover:border-blue-500 hover:bg-blue-50" : ""}
                    ${isToday ? "border-blue-500 bg-blue-100" : ""}
                  `}
                >
                  {day && (
                    <>
                      <div className={`text-sm font-semibold mb-1 ${isToday ? "text-blue-700" : "text-slate-900"}`}>
                        {day}
                      </div>
                      {dayEvents.slice(0, 2).map((event, eventIdx) => (
                        <div
                          key={eventIdx}
                          className="bg-blue-500 text-white text-[10px] px-1.5 py-0.5 rounded mb-0.5 truncate"
                        >
                          {event.title}
                        </div>
                      ))}
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
