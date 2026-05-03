"use client"

import { PlusIcon, XIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      className={`fixed left-0 top-0 z-40 h-full transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex h-full w-72 flex-col border-r border-surface-border bg-elevated">
        <div className="flex items-center justify-between px-4 pt-4">
          <h2 className="text-sm font-medium text-copy-primary">Project</h2>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="关闭侧边栏">
            <XIcon className="h-4 w-4" />
          </Button>
        </div>

        <Tabs defaultValue="my-projects" className="mt-4 flex flex-1 flex-col px-4">
          <TabsList className="w-full">
            <TabsTrigger value="my-projects" className="flex-1">
              我的项目
            </TabsTrigger>
            <TabsTrigger value="shared" className="flex-1">
              分享
            </TabsTrigger>
          </TabsList>
          <TabsContent value="my-projects" className="flex-1" />
          <TabsContent value="shared" className="flex-1" />
        </Tabs>

        <div className="p-4">
          <Button className="w-full gap-1.5">
            <PlusIcon className="h-4 w-4" />
            新增项目
          </Button>
        </div>
      </div>
    </aside>
  )
}
