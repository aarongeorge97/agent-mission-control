import { NextResponse } from "next/server"
import { feedItems } from "@/lib/data"

export async function GET() {
  return NextResponse.json({
    success: true,
    timestamp: new Date().toISOString(),
    data: {
      count: feedItems.length,
      items: feedItems.map((item, index) => ({
        id: index + 1,
        agent: item.agent,
        message: item.message,
        time: item.time,
        type: item.type,
        timestamp: new Date(Date.now() - (index * 5 * 60 * 1000)).toISOString(), // Simulated timestamps
      }))
    }
  })
}
