"use client"

import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function TradingTargets() {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Trading Targets</h2>
          <p className="text-sm text-muted-foreground">Set your daily and weekly profit goals</p>
        </div>

        <Tabs defaultValue="amount" className="space-y-4">
          <TabsList>
            <TabsTrigger value="amount">Amount</TabsTrigger>
            <TabsTrigger value="percentage">Percentage</TabsTrigger>
          </TabsList>

          <TabsContent value="amount" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="daily-target">Daily Target ($)</Label>
                <Input id="daily-target" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weekly-target">Weekly Target ($)</Label>
                <Input id="weekly-target" placeholder="0.00" />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="percentage" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="daily-percentage">Daily Target (%)</Label>
                <Input id="daily-percentage" placeholder="0.00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weekly-percentage">Weekly Target (%)</Label>
                <Input id="weekly-percentage" placeholder="0.00" />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <Button className="w-full">Save Trading Targets</Button>
      </div>
    </Card>
  )
}