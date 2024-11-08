import QuickTrade from '@/components/quick-trade'

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Position Sizer</h1>
          <p className="text-muted-foreground">Calculate optimal position sizes based on your risk parameters</p>
        </div>
      </div>
      <QuickTrade />
    </div>
  )
}