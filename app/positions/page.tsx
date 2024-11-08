import PositionsList from '@/components/positions/positions-list'
import PositionDetails from '@/components/positions/position-details'

export default function PositionsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Positions</h1>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr,400px]">
        <PositionsList />
        <PositionDetails />
      </div>
    </div>
  )
}