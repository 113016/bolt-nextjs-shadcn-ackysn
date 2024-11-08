"use client"

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

const mockPositions = [
  {
    id: 1,
    symbol: 'BTC-USD',
    type: 'CALL',
    strike: 50000,
    expiry: '2024-06-30',
    quantity: 1,
    entryPrice: 2500,
    currentPrice: 2750,
    pnl: 250,
    pnlPercentage: 10,
  },
  {
    id: 2,
    symbol: 'ETH-USD',
    type: 'PUT',
    strike: 3000,
    expiry: '2024-06-30',
    quantity: 2,
    entryPrice: 150,
    currentPrice: 120,
    pnl: -60,
    pnlPercentage: -20,
  },
]

export default function PositionsList() {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Open Positions</h2>
            <p className="text-sm text-muted-foreground">
              {mockPositions.length} active positions
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">Total P/L</p>
            <p className="text-xl font-bold text-green-500">+$190.00</p>
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-250px)]">
          <div className="space-y-4">
            {mockPositions.map((position) => (
              <Card
                key={position.id}
                className="p-4 cursor-pointer hover:bg-accent transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium">{position.symbol}</h3>
                        <Badge variant={position.type === 'CALL' ? 'default' : 'destructive'}>
                          {position.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Strike: ${position.strike} · Exp: {position.expiry}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        {position.pnl > 0 ? (
                          <ArrowUpRight className="h-4 w-4 text-green-500" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 text-red-500" />
                        )}
                        <span className={position.pnl > 0 ? 'text-green-500' : 'text-red-500'}>
                          {position.pnl > 0 ? '+' : ''}{position.pnlPercentage}%
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Qty: {position.quantity}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Entry:</span>
                      <span className="float-right">${position.entryPrice}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Current:</span>
                      <span className="float-right">${position.currentPrice}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </Card>
  )
}