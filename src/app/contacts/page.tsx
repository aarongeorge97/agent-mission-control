"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Phone, Mail } from "lucide-react"
import { contacts } from "@/lib/data"

export default function ContactsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredContacts = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.role.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Contacts</h2>
        <p className="text-slate-500">Key business contacts and relationships</p>
      </div>

      {/* Search Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3 mb-8 shadow-sm">
        <Search className="w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search contacts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 bg-transparent border-none outline-none text-sm text-slate-900 placeholder:text-slate-400"
        />
      </div>

      {/* Contacts Grid */}
      <div className="grid grid-cols-2 gap-5">
        {filteredContacts.map((contact) => (
          <Card key={contact.id} className="hover:-translate-y-1 transition-all cursor-pointer">
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                    {contact.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{contact.name}</h3>
                    <p className="text-xs text-slate-500">{contact.role}</p>
                  </div>
                </div>
                <Badge variant={contact.status === "active" ? "success" : "warning"}>
                  {contact.status}
                </Badge>
              </div>
              <p className="text-sm text-slate-600 mb-4">{contact.company}</p>
              <div className="flex gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4" />
                  <span className="text-xs">{contact.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4" />
                  <span className="text-xs">{contact.phone}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
