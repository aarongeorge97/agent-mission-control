# agent-mission-control

A Next.js 14 dashboard for watching a fleet of AI agents run a small business: agent status and token cost, a live activity feed, revenue by account, a store-performance table, a lead pipeline, a task board, a calendar, contacts and searchable memory.

**All data is synthetic.** The company ("Northwind Provisions") and every person, account and number are fictional. Real operations data was removed before this was published, and the data layer was rewritten to the same shape so every page still works.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # 14 routes, all prerendered
```

## Layout

| Path | What it is |
|------|-----------|
| `src/lib/data.ts` | The only data source. Replace it with real feeds. |
| `src/app/api/{metrics,revenue,feed,agents/status}` | JSON routes that read from `data.ts` |
| `src/app/{agent-flow,office,pipeline,tasks,calendar,memory,contacts,team}` | One page per view |
| `src/components` | `agent-card`, `metric-card`, `feed-item`, `store-table`, shadcn-style `ui/` |

## Stack

Next.js 14 (app router), React 18, TypeScript, Tailwind, Radix primitives, lucide icons.

## Why it exists

Agents that run unattended need a place a human can glance at to see what each is doing, what it costs and what needs a decision. Pairs with [agent-ops-contract](https://github.com/aarongeorge97/agent-ops-contract), which enforces the rules those agents run under.

## License

MIT
