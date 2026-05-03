"use client"

import { PanelLeftCloseIcon, PanelLeftOpenIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EditorNavbarProps {
  isSidebarOpen: boolean
  onToggleSidebar: () => void
}

export function EditorNavbar({ isSidebarOpen, onToggleSidebar }: EditorNavbarProps) {
  return (
    <header className="flex h-12 items-center border-b border-surface-border bg-base px-4">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={onToggleSidebar} aria-label="切换侧边栏">
          {isSidebarOpen ? <PanelLeftCloseIcon className="h-4 w-4" /> : <PanelLeftOpenIcon className="h-4 w-4" />}
        </Button>
      </div>
      <div className="flex-1 text-center" />
      <div className="flex items-center gap-2" />
    </header>
  )
}
