import TemplateList from '@/components/templates/template-list'
import TemplateEditor from '@/components/templates/template-editor'
import TemplatePreview from '@/components/templates/template-preview'

export default function TemplatesPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Trading Templates</h1>
      </div>
      <div className="grid gap-6 lg:grid-cols-[300px,1fr,300px]">
        <TemplateList />
        <TemplateEditor />
        <TemplatePreview />
      </div>
    </div>
  )
}