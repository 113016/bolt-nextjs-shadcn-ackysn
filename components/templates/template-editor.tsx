"use client"

import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function TemplateEditor() {
  return (
    <Card className="p-6">
      <Tabs defaultValue="basic" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="basic">Basic Settings</TabsTrigger>
          <TabsTrigger value="advanced">Advanced Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="template-name">Template Name</Label>
            <Input id="template-name" placeholder="Enter template name" />
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Take Profit Levels</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="tp1">Take Profit 1 (%)</Label>
                <Input id="tp1" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tp2">Take Profit 2 (%)</Label>
                <Input id="tp2" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tp3">Take Profit 3 (%)</Label>
                <Input id="tp3" placeholder="0.00" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Stop Loss Levels</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="sl1">Stop Loss 1 (%)</Label>
                <Input id="sl1" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sl2">Stop Loss 2 (%)</Label>
                <Input id="sl2" placeholder="0.00" />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="position-size">Default Position Size (%)</Label>
              <Input id="position-size" placeholder="0.00" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="max-trades">Maximum Concurrent Trades</Label>
              <Input id="max-trades" type="number" placeholder="1" />
            </div>
          </div>
        </TabsContent>

        <div className="flex space-x-2 pt-4">
          <Button className="flex-1">Save Template</Button>
          <Button variant="outline" className="flex-1">Reset</Button>
        </div>
      </Tabs>
    </Card>
  )
}