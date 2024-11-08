"use client"

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Search } from 'lucide-react'

const mockContracts = [
  { id: 1, symbol: 'BTC-USD', strike: 50000, expiry: '2024-06-30', type: 'CALL' },
  { id: 2, symbol: 'ETH-USD', strike: 3000, expiry: '2024-06-30', type: 'PUT' },
  { id: 3, symbol: 'BTC-USD', strike: 55000, expiry: '2024-06-30', type: 'CALL' },
  { id: 4, symbol: 'ETH-USD', strike: 3500, expiry: '2024-06-30', type: 'PUT' },
]

export default function ContractSelector() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredContracts = mockContracts.filter(contract => 
    contract.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contract.type.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Card className="p-4">
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search contracts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        
        <ScrollArea className="h-[calc(100vh-250px)]">
          <div className="space-y-4">
            {filteredContracts.map((contract) => (
              <Card
                key={contract.id}
                className="p-4 cursor-pointer hover:bg-accent transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{contract.symbol}</h3>
                    <p className="text-sm text-muted-foreground">
                      Strike: ${contract.strike}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className={`text-sm font-medium ${
                      contract.type === 'CALL' ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {contract.type}
                    </span>
                    <p className="text-sm text-muted-foreground">
                      {contract.expiry}
                    </p>
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