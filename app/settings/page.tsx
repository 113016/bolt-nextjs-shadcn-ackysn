import TradingTargets from '@/components/settings/trading-targets'
import NotificationSettings from '@/components/settings/notification-settings'
import AccountSettings from '@/components/settings/account-settings'

export default function SettingsPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Settings</h1>
      </div>
      <div className="grid gap-6">
        <TradingTargets />
        <NotificationSettings />
        <AccountSettings />
      </div>
    </div>
  )
}