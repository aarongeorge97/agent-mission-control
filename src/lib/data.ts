// All data in this file is SYNTHETIC. "Northwind Provisions" and everyone and
// everything named below are fictional. Replace this module with real sources
// (the API routes under src/app/api read from here).
export const businessData = {
  growthAccount: {
    monthlyRunRate: 24000,
    standardRate: 80,
    premiumRate: 95,
    paymentReliability: 100,
    loiTarget: 100,
    freightSavings: 50.0,
  },

  anchorAccount: {
    weeklyRunRate: 16000,
    stores: 9,
    activeUsers: 300,
    monthlyRevenue: 60000,
  },

  january: {
    revenue: 90000,
    netOperatingIncome: 12000,
    grossProfit: 30000,
    grossProfitMargin: 33.3,
    profitGrowth: 20,
  },

  stores: [
    { code: '101', location: 'Springfield, OH', type: 'Performing', weeklyRevenue: 7200, avg3Month: 7100, users: 140, velocity: 'Stabilization & upselling', status: 'ANCHOR' },
    { code: '102', location: 'Riverton, PA', type: 'Growth Opp', weeklyRevenue: 3600, avg3Month: 3500, users: 58, velocity: 'High-signal reactivation', status: 'REACTIVATE' },
    { code: '103', location: 'Lakeside, MI', type: 'Growth Opp', weeklyRevenue: 1500, avg3Month: 1480, users: 18, velocity: 'Local marketing test', status: 'OPTIMIZE' },
    { code: '104', location: 'Fairview, MI', type: 'Growth Opp', weeklyRevenue: 1400, avg3Month: 1420, users: 16, velocity: 'Cashier incentive pilot', status: 'PILOT' },
    { code: '105', location: 'Oakdale, OH', type: 'Growth Opp', weeklyRevenue: 950, avg3Month: 930, users: 21, velocity: 'Cross-promo with 101', status: 'GROWING' },
    { code: '106', location: 'Maple Heights, MI', type: 'Regional satellite', weeklyRevenue: 700, avg3Month: 720, users: 12, velocity: 'Watch seasonal dip', status: 'WATCH' },
    { code: '107', location: 'Hillcrest, OH', type: 'Growth Opp', weeklyRevenue: 450, avg3Month: 480, users: 10, velocity: 'Declining, needs review', status: 'URGENT' },
    { code: '108', location: 'Stonebridge, PA', type: 'Regional satellite', weeklyRevenue: 400, avg3Month: 410, users: 5, velocity: 'Low volume', status: 'DEPRIORITIZE' },
    { code: '109', location: 'Eastport, OH', type: 'Growth Opp', weeklyRevenue: 800, avg3Month: 790, users: 45, velocity: 'Steady growth', status: 'STABLE' },
  ],

  revenueBreakdown: {
    anchorAccount: { amount: 60000, percentage: 67 },
    growthAccount: { amount: 24000, percentage: 27 },
    servicesAccount: { amount: 4000, percentage: 4 },
    others: { amount: 2000, percentage: 2 },
  }
}

export const agents = [
  { id: 'orchestrator', name: 'Orchestrator', status: 'active', task: 'Mission control orchestration', tokens: 120000, cost: 0.48, successRate: 96 },
  { id: 'revenue-intel', name: 'Revenue Intel', status: 'working', task: 'Reconciling weekly invoices', tokens: 14000, cost: 0.07, successRate: 100 },
  { id: 'email-monitor', name: 'Email Monitor', status: 'working', task: 'Parsing order confirmations', tokens: 8000, cost: 0.05, successRate: 94 },
  { id: 'fleet-ops', name: 'Fleet Ops', status: 'idle', task: 'Standby mode', lastActive: '45m ago' },
  { id: 'growth-pipeline', name: 'Growth Pipeline', status: 'working', task: 'Scoring warm leads', tokens: 6000, cost: 0.03, successRate: 100 },
]

export const feedItems = [
  { agent: 'Revenue Intel', message: 'Matched invoice INV-1042 to bank deposit', time: '2 min ago', type: 'success' },
  { agent: 'Email Monitor', message: 'Parsed 3 order confirmations from Anchor Retail', time: '5 min ago', type: 'info' },
  { agent: 'Growth Pipeline', message: 'Scored 2 new warm leads (Example Pickles, Sample Produce)', time: '12 min ago', type: 'warning' },
  { agent: 'Email Monitor', message: 'Detected new order: Springfield store, $400.00', time: '18 min ago', type: 'info' },
  { agent: 'Orchestrator', message: 'Refreshed dashboard with latest reconciled data', time: '25 min ago', type: 'success' },
  { agent: 'Compliance', message: 'All temperature logs verified ✅', time: '32 min ago', type: 'neutral' },
]

export const tasks = {
  backlog: [
    { id: 1, title: 'Rate Analysis', description: 'Review Q1 pricing strategy', priority: 'medium', date: 'Jan 28' },
    { id: 2, title: 'Driver Onboarding', description: 'Process 3 new driver applications', priority: 'low', date: 'Jan 29' },
  ],
  todo: [
    { id: 3, title: 'Invoice Reconciliation', description: 'Match weekly invoices to deposits', priority: 'high', date: 'Today' },
    { id: 4, title: 'Hillcrest Store Review', description: 'Address declining performance', priority: 'urgent', date: 'Today' },
  ],
  inProgress: [
    { id: 5, title: 'Driver Pay Run', description: 'Processing this week\'s payments', priority: 'high', date: 'Today', timeBlock: '3:30-8:30pm' },
    { id: 6, title: 'Lead Scoring', description: 'Ranking warm leads from pipeline', priority: 'medium', date: 'Today' },
  ],
  done: [
    { id: 7, title: 'January Report', description: 'Finalized monthly performance report', priority: 'high', date: 'Yesterday' },
    { id: 8, title: 'Weekly Invoice', description: 'Sent Week 12 invoice', priority: 'medium', date: 'Yesterday' },
  ],
}

export const memories = [
  { id: 1, title: '📊 January Performance', date: 'Reconciled', content: 'Revenue: $90,000 | Gross Profit: $30,000 (33.3%) | Breakdown: Anchor Retail 67%, Harbor Foods 27%, services 4%, other 2%.' },
  { id: 2, title: '⏰ Driver Pay Run: Today 3:30-8:30pm', date: 'Time Block: 5 hours', content: 'Scheduled time block for processing the weekly driver pay run. Follow-up with Sam also scheduled in this window.' },
  { id: 3, title: '💼 Weekly Priorities', date: 'General • 3 items', content: 'Finance sync, vendor terms review, new-lead follow-ups requiring attention.' },
  { id: 4, title: '🎯 Program Allocations', date: 'Finance • Multiple items', content: 'Two program allocations and follow-up tasks pending.' },
  { id: 5, title: '👥 Client Meetings', date: 'Scheduled', content: 'Three client check-ins on the calendar this week.' },
]

export const contacts = [
  { id: 1, name: 'Pat Example', role: 'Anchor Retail Contact', company: 'Anchor Retail', email: 'pat@anchor.example', phone: '(555) 010-0001', status: 'active' },
  { id: 2, name: 'Morgan Ellis', role: 'Account Manager', company: 'Harbor Foods', email: 'morgan@harbor.example', phone: '(555) 010-0002', status: 'active' },
  { id: 3, name: 'Jordan Lee', role: 'Finance Director', company: 'Northwind', email: 'jordan@northwind.example', phone: '(555) 010-0003', status: 'active' },
  { id: 4, name: 'Dana Fox', role: 'Regional Rep', company: 'Anchor Retail', email: 'dana@anchor.example', phone: '(555) 010-0004', status: 'warning' },
  { id: 5, name: 'Taylor Brooks', role: 'Operations', company: 'Northwind Services', email: 'taylor@services.example', phone: '(555) 010-0005', status: 'active' },
]

export const pipeline = [
  { id: 1, company: 'Example Pickles', stage: 'warm', value: 5000, probability: 60, contact: 'Dave Example', lastTouch: '2 days ago' },
  { id: 2, company: 'Sample Produce', stage: 'warm', value: 8000, probability: 45, contact: 'Maria Sample', lastTouch: '3 days ago' },
  { id: 3, company: 'Metro Demo Foods', stage: 'qualified', value: 15000, probability: 75, contact: 'Tom Demo', lastTouch: '1 week ago' },
  { id: 4, company: 'Lakeshore Catering', stage: 'proposal', value: 12000, probability: 80, contact: 'Riley Shaw', lastTouch: 'Yesterday' },
  { id: 5, company: 'Fresh Market Demo', stage: 'negotiation', value: 20000, probability: 90, contact: 'James Demo', lastTouch: 'Today' },
]
