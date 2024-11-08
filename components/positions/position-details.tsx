"use client"

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { LineChart, Timer, AlertTriangle } from 'lucide-react'

export default function PositionDetails() {
  return (
    <Card className="p-6">
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold">BTC-USD CALL</h2>
            <p className="text-sm text-muted-foreground">
              Strike: $50,000 · Expires: June 30, 2024
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4">
              <div className="flex items-center space-x-2">
                <LineChart className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">P/L</span>
              </div>
              <p className="text-2xl font-bold text-green-500">+$250.00</p>
              <p className="text-sm text-muted-foreground">+10.00%</p>
            </Card>
            <Card className="p-4">
              <div className="flex items-center space-x-2">
                <Timer className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Time Decay</span>
              </div>
              <p className="text-2xl font-bold text-red-500">-$1.20</p>
              <p className="text-sm text-muted-foreground">per day</p>
            </Card>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Close Position</Label>
              <Input type="number" placeholder="Enter quantity to close" />
            </div>
            <div className="flex space-x-2">
              <Button className="flex-1">Close Position</Button>
              <Button variant="outline" className="flex-1">Modify</Button>
            </div>
          </div>

          <Card className="p-4 border-red-200 bg-red-50 dark:bg-red-950/10">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <p className="text-sm font-medium text-red-500">Risk Warning</p>
            </div>
            <p className="mt-2 text-sm text-red-500">
              This position is approaching its stop loss level. Consider adjusting your risk management settings.
            </p>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">Take Profit {i} Hit</p>
                    <p className="text-sm text-muted-foreground">
                      March {10 + i}, 2024 · 14:3{i}:00
                    </p>
                  </div>
                  <p className="text-green-500">+$120.00</p>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  )
}