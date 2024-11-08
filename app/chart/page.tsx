import TradingChart from '@/components/trading-chart'
import ContractSelector from '@/components/contract-selector'

export default function ChartPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Trading Chart</h1>
      </div>
      <div className="grid gap-6 lg:grid-cols-[300px,1fr]">
        <ContractSelector />
        <TradingChart />
      </div>
    </div>
  )
}