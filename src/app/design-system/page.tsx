// src/app/design-system/page.tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Calendar } from "@/components/features/calendar/calendar"

export default function DesignSystemPage() {
  return (
    <div className="container mx-auto py-12 space-y-12">
      {/* Color System */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Color System</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="h-20 bg-background rounded-md" />
            <p className="text-sm font-medium">Background</p>
            <p className="text-xs text-support-medium">#F5F5F7</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-accent rounded-md" />
            <p className="text-sm font-medium">Accent</p>
            <p className="text-xs text-support-medium">#5E5CE6</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-semantic-success rounded-md" />
            <p className="text-sm font-medium">Success</p>
            <p className="text-xs text-support-medium">#34C759</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-semantic-error rounded-md" />
            <p className="text-sm font-medium">Error</p>
            <p className="text-xs text-support-medium">#FF3B30</p>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <div className="space-y-2">
            <Button variant="primary">Primary Button</Button>
            <p className="text-sm text-support-medium">Primary Action</p>
          </div>
          <div className="space-y-2">
            <Button variant="secondary">Secondary Button</Button>
            <p className="text-sm text-support-medium">Secondary Action</p>
          </div>
          <div className="space-y-2">
            <Button variant="tertiary">Tertiary Button</Button>
            <p className="text-sm text-support-medium">Tertiary Action</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* Inputs */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Inputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
          <Input
            label="Default Input"
            placeholder="Enter some text"
            helper="This is a helper text"
          />
          <Input
            label="Error State"
            placeholder="Enter some text"
            error="This field is required"
          />
          <Input
            label="Disabled Input"
            placeholder="This input is disabled"
            disabled
          />
          <Input
            label="With Helper"
            placeholder="Enter some text"
            helper="This is some helpful text"
          />
        </div>
      </section>

      {/* Cards */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card variant="feature">
            <h3 className="text-lg font-semibold mb-2">Feature Card</h3>
            <p className="text-support-medium">This card highlights key features.</p>
          </Card>
          <Card variant="info">
            <h3 className="text-lg font-semibold mb-2">Info Card</h3>
            <p className="text-support-medium">This card displays information.</p>
          </Card>
          <Card variant="action">
            <h3 className="text-lg font-semibold mb-2">Action Card</h3>
            <p className="text-support-medium">This card prompts for action.</p>
            <Button className="mt-4" variant="primary" size="sm">
              Take Action
            </Button>
          </Card>
        </div>
      </section>

      {/* Calendar */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Calendar</h2>
        <div className="border rounded-lg p-6 bg-white">
          <Calendar />
        </div>
      </section>
    </div>
  )
}
