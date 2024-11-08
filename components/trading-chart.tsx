"use client"

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts'
import { format } from 'date-fns'

// Mock data generator for the chart
const generateChartData = () => {
  const data = []
  const basePrice = 50000
  const periods = 100
  
  for (let i = 0; i < periods; i++) {
    const date = new Date()
    date.setMinutes(date.getMinutes() - (periods - i))
    
    const random = Math.random() * 2 - 1
    const price = basePrice + (basePrice * (Math.sin(i / 10) * 0.02 + random * 0.01))
    
    data.push({
      timestamp: date.getTime(),
      price: parseFloat(price.toFixed(2)),
      volume: Math.floor(Math.random() * 100) + 50
    })
  }
  
  return data
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border rounded-lg shadow-lg p-3">
        <p className="text-sm font-medium">
          {format(new Date(label), 'HH:mm:ss')}
        </p>
        <p className="text-sm text-muted-foreground">
          Price: ${payload[0].value.toFixed(2)}
        </p>
        <p className="text-sm text-muted-foreground">
          Volume: {payload[0].payload.volume}
        </p>
      </div>
    )
  }
  return null
}

export default function TradingChart() {
  const [data] = useState(generateChartData())
  const [interval, setInterval] = useState('5m')

  // Calculate support and resistance levels
  const prices = data.map(d => d.price)
  const maxPrice = Math.max(...prices)
  const minPrice = Math.min(...prices)
  const resistance = maxPrice - (maxPrice - minPrice) * 0.1
  const support = minPrice + (maxPrice - minPrice) * 0.1

  return (
    <Card className="p-6">
      <Tabs defaultValue="chart" className="space-y-4">
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="chart">Chart</TabsTrigger>
            <TabsTrigger value="trade">Trade</TabsTrigger>
          </TabsList>
          
          <div className="flex space-x-2">
            {['1m', '5m', '15m', '1h', '4h', '1d'].map((int) => (
              <Button
                key={int}
                variant={interval === int ? "default" : "outline"}
                size="sm"
                onClick={() => setInterval(int)}
              >
                {int}
              </Button>
            ))}
          </div>
        </div>

        <TabsContent value="chart" className="space-y-4">
          <div className="h-[600px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop 
                      offset="5%" 
                      stopColor="hsl(var(--chart-1))" 
                      stopOpacity={0.8}
                    />
                    <stop 
                      offset="95%" 
                      stopColor="hsl(var(--chart-1))" 
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  className="stroke-muted"
                />
                <XAxis 
                  dataKey="timestamp"
                  tickFormatter={(tick) => format(new Date(tick), 'HH:mm')}
                  className="text-xs text-muted-foreground"
                />
                <YAxis 
                  domain={['auto', 'auto']}
                  tickFormatter={(tick) => `$${tick.toLocaleString()}`}
                  className="text-xs text-muted-foreground"
                />
                <Tooltip content={<CustomTooltip />} />
                <ReferenceLine 
                  y={resistance} 
                  label="Resistance" 
                  stroke="hsl(var(--destructive))"
                  strokeDasharray="3 3"
                />
                <ReferenceLine 
                  y={support} 
                  label="Support" 
                  stroke="hsl(var(--chart-2))"
                  strokeDasharray="3 3"
                />
                <Area
                  type="monotone"
                  dataKey="price"
                  stroke="hsl(var(--chart-1))"
                  fillOpacity={1}
                  fill="url(#colorPrice)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </TabsContent>

        <TabsContent value="trade" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="entry-price">Entry Price</Label>
              <Input id="entry-price" placeholder="0.00" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input id="quantity" placeholder="0" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="take-profit">Take Profit</Label>
              <Input id="take-profit" placeholder="0.00" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stop-loss">Stop Loss</Label>
              <Input id="stop-loss" placeholder="0.00" />
            </div>
          </div>

          <div className="flex space-x-4">
            <Button className="flex-1" variant="default">
              Place Buy Order
            </Button>
            <Button className="flex-1" variant="destructive">
              Place Sell Order
            </Button>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Order Summary</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="text-muted-foreground">Margin Required:</span>
              <span className="text-right">$0.00</span>
              <span className="text-muted-foreground">Potential Profit:</span>
              <span className="text-right text-green-500">$0.00</span>
              <span className="text-muted-foreground">Maximum Loss:</span>
              <span className="text-right text-red-500">$0.00</span>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  )
}