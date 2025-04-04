import { cn } from "@/lib/utils"

type SettingsTab = "Account" | "Subscription"

interface SettingsSidebarProps {
  activeTab: SettingsTab
  setActiveTab: (tab: SettingsTab) => void
}

export default function SettingsSidebar({ activeTab, setActiveTab }: SettingsSidebarProps) {
  const tabs: SettingsTab[] = ["Account", "Subscription"]

  return (
    <div className="w-full md:w-64 shrink-0">
      {/* Utilisation de Flexbox pour la navigation */}
      <nav className="flex flex-row md:flex-col w-full gap-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={cn(
              activeTab === tab ? "bg-gray-100" : "hover:bg-gray-50",
              "flex-1 md:flex-none text-left px-4 py-2 font-medium text-sm rounded-md"
            )}>
            {tab}
          </button>
        ))}
      </nav>
    </div>
  )
}
