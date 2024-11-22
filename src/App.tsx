import { Button } from "./components/ui/button"

function App() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Shadcn UI Demo</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4">Button Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button>Default Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="destructive">Destructive Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
            <Button variant="link">Link Button</Button>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Button Sizes</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button size="sm">Small Button</Button>
            <Button size="default">Default Size</Button>
            <Button size="lg">Large Button</Button>
            <Button size="icon">🔔</Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
