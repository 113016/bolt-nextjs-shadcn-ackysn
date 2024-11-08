"use client"

import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function AccountSettings() {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Account Settings</h2>
          <p className="text-sm text-muted-foreground">Manage your trading preferences</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Default Position Size</Label>
            <Input type="number" placeholder="1.00" />
          </div>
          <div className="space-y-2">
            <Label>Risk Per Trade (%)</Label>
            <Input type="number" placeholder="1.00" />
          </div>
          <div className="space-y-2">
            <Label>Trading Currency</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="eur">EUR</SelectItem>
                <SelectItem value="gbp">GBP</SelectItem>
                <SelectItem value="jpy">JPY</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Trading Session</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select session" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asian">Asian Session</SelectItem>
                <SelectItem value="london">London Session</SelectItem>
                <SelectItem value="new-york">New York Session</SelectItem>
                <SelectItem value="all">All Sessions</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button className="w-full">Save Account Settings</Button>
      </div>
    </Card>
  )
}