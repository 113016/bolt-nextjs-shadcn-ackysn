"use client"

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function TemplatePreview() {
  return (
    <Card className="p-4">
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold">Template Preview</h2>
          <p className="text-sm text-muted-foreground">
            Visual representation of your trading strategy
          </p>
        </div>

        <div className="space-y-4">
          <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
            <p className="text-sm text-muted-foreground">Strategy visualization</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Statistics</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <Badge variant="outline">Risk/Reward</Badge>
                <span>1:2.5</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline">Max Loss</Badge>
                <span>2%</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline">Take Profits</Badge>
                <span>3</span>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline">Stop Losses</Badge>
                <span>2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}