<!-- 设计系统规范，AI会根据这个规范来实现设计系统，由规范驱动AI的实现 -->

在开始之前，先阅读 `AGENTS.md` 文件

添加设计系统以及用户界面组件

安装以及配置 `shadcn/ui`

添加以下 `shadcn/ui` 组件:

- `Button`
- `Card`
- `Dialog`
- `Input`
- `Tabs`
- `Textarea`
- `ScrollArea`

当组件添加完成后，不要轻易修改 `components/ui/*` 目录下的文件，因为这些文件是 `shadcn/ui` 组件的默认实现，可能会导致组件的正常功能被破坏。

并且需要安装图标库 `lucide-react`。

并且创建 `lib/utils.ts`文件，在该文件中创建一个 `cn` 函数，主要用于合并 `Tailwind CSS` 类名。

确保所有组件与 `globals.css` 中现有的主题保持一致。

### 任务完成时，进行以下检查：

- 确保所有组件都已正确添加到 `components/ui/*` 目录下。
- 确保 `cn` 函数能够正常运行，能够合并多个 `Tailwind CSS` 类名。
