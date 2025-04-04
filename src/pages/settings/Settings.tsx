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
    <div className="max-w-5xl mx-auto px-4 py-10 md:p-10 h-screen overflow-hidden">
      <SettingsHeader />
      <hr className="border-gray-200 md:my-6 my-3" />

      <div className="flex flex-col md:flex-row md:gap-8">
        <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <hr className="border-gray-200 mt-3" />

        <ScrollArea className="w-full h-[calc(100vh-187px)] pb-6">
          <div className="flex-1 md:mt-0">
            {activeTab === "Account" && <AccountSettings />}
            {activeTab === "Subscription" && <SubscriptionSettings />}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
