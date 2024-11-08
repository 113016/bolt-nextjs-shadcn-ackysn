"use client"

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AlertCircle } from 'lucide-react'
import { toast } from "sonner"

export default function QuickTrade() {
  const [position, setPosition] = useState({
    tp1: '', tp2: '', tp3: '',
    sl1: '', sl2: '', sl3: '',
    quantity: ''
  })

  const handleEmergencyClose = () => {
    toast.error("Emergency Stop Loss Triggered", {
      description: "All positions have been closed to prevent further losses.",
    })
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="p-6 space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="tp1">TP 1</Label>
              <Input
                id="tp1"
                placeholder="0.00"
                value={position.tp1}
                onChange={(e) => setPosition({ ...position, tp1: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tp2">TP 2</Label>
              <Input
                id="tp2"
                placeholder="0.00"
                value={position.tp2}
                onChange={(e) => setPosition({ ...position, tp2: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tp3">TP 3</Label>
              <Input
                id="tp3"
                placeholder="0.00"
                value={position.tp3}
                onChange={(e) => setPosition({ ...position, tp3: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="sl1">SL 1</Label>
              <Input
                id="sl1"
                placeholder="0.00"
                value={position.sl1}
                onChange={(e) => setPosition({ ...position, sl1: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sl2">SL 2</Label>
              <Input
                id="sl2"
                placeholder="0.00"
                value={position.sl2}
                onChange={(e) => setPosition({ ...position, sl2: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sl3">SL 3</Label>
              <Input
                id="sl3"
                placeholder="0.00"
                value={position.sl3}
                onChange={(e) => setPosition({ ...position, sl3: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              placeholder="Enter quantity"
              value={position.quantity}
              onChange={(e) => setPosition({ ...position, quantity: e.target.value })}
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <Button className="flex-1">Open Position</Button>
          <Button variant="secondary" className="flex-1">Close Position</Button>
        </div>
      </Card>

      <Card className="p-6 space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Emergency Controls</h2>
          <Button 
            variant="destructive" 
            className="w-full h-24 text-lg font-bold"
            onClick={handleEmergencyClose}
          >
            <AlertCircle className="mr-2 h-6 w-6" />
            Emergency Stop Loss
          </Button>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium">Current Position Summary</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Entry Price:</span>
              <span className="float-right font-medium">$0.00</span>
            </div>
            <div>
              <span className="text-muted-foreground">Current P/L:</span>
              <span className="float-right font-medium text-green-500">+$0.00</span>
            </div>
            <div>
              <span className="text-muted-foreground">Position Size:</span>
              <span className="float-right font-medium">0</span>
            </div>
            <div>
              <span className="text-muted-foreground">Margin Used:</span>
              <span className="float-right font-medium">$0.00</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}