import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { tasks } from "@/lib/data"

const columns = [
  { id: "backlog", title: "Backlog", count: tasks.backlog.length },
  { id: "todo", title: "To Do", count: tasks.todo.length },
  { id: "inProgress", title: "In Progress", count: tasks.inProgress.length },
  { id: "done", title: "Done", count: tasks.done.length },
]

function TaskCard({ task }: { task: typeof tasks.backlog[0] & { timeBlock?: string } }) {
  const priorityVariant = task.priority as "urgent" | "high" | "medium" | "low"
  
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 cursor-grab hover:border-blue-500 hover:shadow-md hover:translate-x-1 transition-all">
      {task.timeBlock && (
        <div className="inline-block bg-blue-100 text-blue-800 px-2.5 py-1 rounded text-[11px] font-semibold mb-2">
          {task.timeBlock}
        </div>
      )}
      <h4 className="text-sm font-semibold text-slate-900 mb-2">{task.title}</h4>
      <p className="text-xs text-slate-500 mb-3 leading-relaxed">{task.description}</p>
      <div className="flex justify-between items-center">
        <Badge variant={priorityVariant} className="uppercase text-[10px]">
          {task.priority}
        </Badge>
        <span className="text-xs text-slate-400">{task.date}</span>
      </div>
    </div>
  )
}

export default function TasksPage() {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Tasks Board</h2>
        <p className="text-slate-500">Manage and track all tasks across the organization</p>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {columns.map((column) => (
          <Card key={column.id} className="min-h-[600px]">
            <CardHeader className="border-b-2 border-slate-100 pb-4">
              <div className="flex justify-between items-center">
                <CardTitle className="text-base">{column.title}</CardTitle>
                <span className="bg-slate-100 text-slate-500 px-2.5 py-1 rounded-full text-xs font-semibold">
                  {column.count}
                </span>
              </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              {tasks[column.id as keyof typeof tasks].map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
