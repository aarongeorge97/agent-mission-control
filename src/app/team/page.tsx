import { Card, CardContent } from "@/components/ui/card"

const teamSections = [
  {
    title: "Leadership",
    members: [
      { name: "Alex Morgan", role: "CEO", initials: "AM" },
      { name: "Jordan Lee", role: "Finance Director", initials: "JL" },
    ],
  },
  {
    title: "Operations",
    members: [
      { name: "Sam Rivera", role: "Operations Lead", initials: "SR" },
      { name: "Taylor Brooks", role: "Ops Manager", initials: "TB" },
      { name: "Casey Nguyen", role: "Compliance", initials: "CN" },
    ],
  },
  {
    title: "Sales & Growth",
    members: [
      { name: "Morgan Ellis", role: "Account Manager", initials: "ME" },
      { name: "Riley Shaw", role: "Sales Rep", initials: "RS" },
    ],
  },
  {
    title: "AI Agents",
    members: [
      { name: "Orchestrator", role: "Main Orchestrator", initials: "CL" },
      { name: "Revenue Intel", role: "Financial Analysis", initials: "RI" },
      { name: "Email Monitor", role: "Communications", initials: "EM" },
      { name: "Fleet Ops", role: "Logistics", initials: "FO" },
      { name: "Growth Pipeline", role: "Sales Intel", initials: "GP" },
    ],
  },
]

export default function TeamPage() {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Team</h2>
        <p className="text-slate-500">Organization structure and team members</p>
      </div>

      <Card>
        <CardContent className="p-8">
          {teamSections.map((section) => (
            <div key={section.title} className="mb-8 last:mb-0">
              <h3 className="text-lg font-semibold text-slate-900 mb-5 pb-3 border-b-2 border-slate-100">
                {section.title}
              </h3>
              <div className="grid grid-cols-4 gap-4">
                {section.members.map((member) => (
                  <div
                    key={member.name}
                    className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex items-center gap-3 hover:border-blue-500 hover:bg-blue-50 transition-all cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                      {member.initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">{member.name}</h4>
                      <p className="text-xs text-slate-500">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
