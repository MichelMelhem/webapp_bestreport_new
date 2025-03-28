import { useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import SettingsHeader from "./components/SettingsHeader"
import SettingsSidebar from "./components/SettingsSidebar"
import AccountSettings from "./components/AccountSettings"
import SubscriptionSettings from "./components/SubscriptionSettings"

type SettingsTab = "Account" | "Subscription"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("Account")

  return (
    <div className="max-w-5xl mx-auto p-10 h-screen">
      <SettingsHeader />
      <hr className="border-gray-200 my-6" />

      <div className="flex flex-col md:flex-row md:gap-8">
        <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <ScrollArea className="w-full h-[calc(100vh-187px)]">
          <div className="flex-1 mt-6 md:mt-0">
            {activeTab === "Account" && <AccountSettings />}
            {activeTab === "Subscription" && <SubscriptionSettings />}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
