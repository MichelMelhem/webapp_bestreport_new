import { cn } from "@/lib/utils"

type SettingsTab = "Account" | "Subscription"

interface SettingsSidebarProps {
  activeTab: SettingsTab
  setActiveTab: (tab: SettingsTab) => void
}

export default function SettingsSidebar({ activeTab, setActiveTab }: SettingsSidebarProps) {
  const tabs: SettingsTab[] = ["Account", "Subscription"]

  return (
    <div className="md:w-64 shrink-0">
      <nav className="w-full">
        {tabs.map((tab) => (
          <div key={tab} className="mb-1">
            <button
              onClick={() => setActiveTab(tab)}
              className={cn(
                activeTab === tab ? "bg-gray-100" : "hover:bg-gray-50",
                "w-full text-left px-4 py-2 font-medium text-sm rounded-md"
              )}>
              {tab}
            </button>
          </div>
        ))}
      </nav>
    </div>
  )
}
