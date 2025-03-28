import { Background } from "@/components/layout/Background.tsx"
import * as React from "react"
import { CreditCard, User } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider
} from "@/components/ui/sidebar.tsx"
import { Card } from "@/components/ui/card.tsx"
import { Separator } from "@/components/ui/separator.tsx"
import { Button } from "@/components/ui/button.tsx"
import { Badge } from "@/components/ui/badge.tsx"

const data = {
  nav: [
    { name: "Account", icon: User },
    { name: "Subscription", icon: CreditCard }
  ]
}

const Header = ({ activePage }) => (
  <header className="border-b flex h-14 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
    <div className="flex items-center gap-2 px-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="#">Settings</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="hidden md:block" />
          <BreadcrumbItem>
            <BreadcrumbPage>{activePage}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  </header>
)

const SidebarComponent = ({ onItemClick, activeItem }) => (
  <Sidebar collapsible="none" className="hidden md:flex w-[200px] ">
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            {data.nav.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton
                  asChild
                  isActive={item.name === activeItem}
                  onClick={() => onItemClick(item.name)}>
                  <a href="#">
                    <item.icon />
                    <span>{item.name}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
)

const AccountContent = () => (
  <main className="flex flex-1 flex-col gap-4 overflow-y-auto py-6 px-5 text-sm">
    <div className="flex flex-row justify-between items-center">
      <div>Nom</div>
      <div>Maamoun</div>
    </div>
    <Separator />
    <div className="flex flex-row justify-between items-center">
      <div>Prénom</div>
      <div>Firas</div>
    </div>
    <Separator />
    <div className="flex flex-row justify-between items-center">
      <div>Email</div>
      <div>firas.maamoun@gmail.com</div>
    </div>
    <Separator />
    <div className="flex flex-row justify-between items-center">
      <div>Change password</div>
      <Button variant="outline">Change</Button>
    </div>
    <Separator />
    <div className="flex flex-row justify-between items-center">
      <div>Logout from this device</div>
      <Button variant="destructive">Logout</Button>
    </div>
  </main>
)

const SubscriptionContent = () => (
  <main className="flex flex-1 flex-col gap-4 overflow-y-auto py-6 px-5 text-sm">
    <div className="flex flex-row justify-between items-center">
      <div>Plan</div>
      <div>
        <Badge variant="outline">Pro</Badge>
      </div>
    </div>
    <Separator />
    <div className="flex flex-row justify-between items-center">
      <div>Expiration date</div>
      <div>28/03/2024</div>
    </div>
    <Separator />
    <div className="flex flex-row justify-between items-center">
      <div>Manage subscription</div>
      <Button variant="outline">Manage</Button>
    </div>
  </main>
)
export default function Account() {
  const [activeItem, setActiveItem] = React.useState("Account")

  return (
    <Background>
      <Card className="overflow-hidden p-0 h-[480px] w-[700px]">
        <SidebarProvider className="items-start h-[480px]">
          <SidebarComponent onItemClick={setActiveItem} activeItem={activeItem} />
          <div className="flex h-full flex-1 flex-col overflow-hidden">
            <Header activePage={activeItem} />
            {activeItem === "Account" ? <AccountContent /> : <SubscriptionContent />}
          </div>
        </SidebarProvider>
      </Card>{" "}
    </Background>
  )
}
