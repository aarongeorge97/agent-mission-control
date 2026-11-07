import { NextResponse } from "next/server"
import { businessData } from "@/lib/data"

export async function GET() {
  return NextResponse.json({
    success: true,
    timestamp: new Date().toISOString(),
    data: {
      january: {
        revenue: businessData.january.revenue,
        netOperatingIncome: businessData.january.netOperatingIncome,
        grossProfit: businessData.january.grossProfit,
        grossProfitMargin: businessData.january.grossProfitMargin,
        profitGrowth: businessData.january.profitGrowth,
      },
      breakdown: {
        anchorAccount: {
          amount: businessData.revenueBreakdown.anchorAccount.amount,
          percentage: businessData.revenueBreakdown.anchorAccount.percentage,
          weeklyRunRate: businessData.anchorAccount.weeklyRunRate,
          stores: businessData.anchorAccount.stores,
          activeUsers: businessData.anchorAccount.activeUsers,
        },
        growthAccount: {
          amount: businessData.revenueBreakdown.growthAccount.amount,
          percentage: businessData.revenueBreakdown.growthAccount.percentage,
          monthlyRunRate: businessData.growthAccount.monthlyRunRate,
          standardRate: businessData.growthAccount.standardRate,
          premiumRate: businessData.growthAccount.premiumRate,
          paymentReliability: businessData.growthAccount.paymentReliability,
          freightSavings: businessData.growthAccount.freightSavings,
        },
        servicesAccount: {
          amount: businessData.revenueBreakdown.servicesAccount.amount,
          percentage: businessData.revenueBreakdown.servicesAccount.percentage,
        },
        others: {
          amount: businessData.revenueBreakdown.others.amount,
          percentage: businessData.revenueBreakdown.others.percentage,
        },
      },
      stores: businessData.stores.map(store => ({
        code: store.code,
        location: store.location,
        type: store.type,
        weeklyRevenue: store.weeklyRevenue,
        avg3Month: store.avg3Month,
        activeUsers: store.users,
        velocity: store.velocity,
        status: store.status,
      })),
    }
  })
}
