"use client"

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { Plus, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

const mockTemplates = [
  { id: 1, name: 'Conservative', description: 'Low risk with multiple small take profits' },
  { id: 2, name: 'Aggressive', description: 'High risk with single large take profit' },
  { id: 3, name: 'Balanced', description: 'Medium risk with scaled take profits' },
]

export default function TemplateList() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredTemplates = mockTemplates.filter(template =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Card className="p-4">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Templates</h2>
          <Button size="sm" variant="outline">
            <Plus className="h-4 w-4 mr-2" />
            New
          </Button>
        </div>

        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>

        <ScrollArea className="h-[calc(100vh-250px)]">
          <div className="space-y-2">
            {filteredTemplates.map((template) => (
              <Card
                key={template.id}
                className="p-3 cursor-pointer hover:bg-accent transition-colors"
              >
                <h3 className="font-medium">{template.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {template.description}
                </p>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </Card>
  )
}