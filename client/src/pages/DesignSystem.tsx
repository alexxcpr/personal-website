import React from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input, Textarea } from '../components/ui/Input';
import { Badge } from '../components/ui/Badge';

const DesignSystem: React.FC = () => {
  return (
    <div className="min-h-screen bg-main p-8 space-y-12">
      <header className="mb-12 border-b-3 border-secondary pb-4">
        <h1 className="text-4xl font-bold mb-2">Design System & UI Kit</h1>
        <p className="text-xl text-muted font-mono">Neobrutalism x Matrix Theme</p>
      </header>

      {/* Colors Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold border-l-4 border-primary pl-4">Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <ColorSwatch name="Main Bg" hex="#F3F4F6" className="bg-main border-secondary text-secondary" />
          <ColorSwatch name="Surface" hex="#FFFFFF" className="bg-surface border-secondary text-secondary" />
          <ColorSwatch name="Primary" hex="#00FF41" className="bg-primary text-secondary" />
          <ColorSwatch name="Secondary" hex="#121212" className="bg-secondary text-white" />
          <ColorSwatch name="Accent" hex="#8A2BE2" className="bg-accent text-white" />
          <ColorSwatch name="Muted" hex="#A3A3A3" className="bg-muted text-white" />
        </div>
      </section>

      {/* Typography Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold border-l-4 border-primary pl-4">Typography</h2>
        <Card>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted font-mono mb-1">Heading 1 (Space Grotesk Bold)</p>
              <h1 className="text-4xl font-bold">The Quick Brown Fox</h1>
            </div>
            <div>
              <p className="text-sm text-muted font-mono mb-1">Heading 2 (Space Grotesk Bold)</p>
              <h2 className="text-3xl font-bold">The Quick Brown Fox</h2>
            </div>
            <div>
              <p className="text-sm text-muted font-mono mb-1">Body (Space Grotesk Regular)</p>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div>
              <p className="text-sm text-muted font-mono mb-1">Monospace (JetBrains Mono)</p>
              <p className="font-mono text-sm bg-secondary text-primary p-2 inline-block">
                console.log("Hello Matrix");
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Buttons Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold border-l-4 border-primary pl-4">Buttons</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
      </section>

      {/* Inputs Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold border-l-4 border-primary pl-4">Form Elements</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          <Card title="Input Fields">
            <div className="space-y-4">
              <Input label="Username" placeholder="Enter your username" />
              <Input label="Email" type="email" placeholder="john@example.com" />
            </div>
          </Card>
          <Card title="Text Areas">
            <Textarea label="Message" placeholder="Type your message here..." />
          </Card>
        </div>
      </section>

      {/* Badges Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold border-l-4 border-primary pl-4">Badges & Tags</h2>
        <div className="flex flex-wrap gap-2">
          <Badge>React</Badge>
          <Badge>TypeScript</Badge>
          <Badge>Tailwind</Badge>
          <Badge>Node.js</Badge>
          <Badge className="bg-primary">Highlight</Badge>
        </div>
      </section>

      {/* Cards Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold border-l-4 border-primary pl-4">Cards</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="Project Alpha">
            <p className="mb-4">A sample project card showing how content is structured within our neobrutalist design system.</p>
            <Button variant="outline" className="text-sm py-2">View Details</Button>
          </Card>
          <Card>
            <h3 className="text-xl font-bold mb-2">No Header Card</h3>
            <p>This card has no title prop passed to it. It just wraps content.</p>
          </Card>
        </div>
      </section>
    </div>
  );
};

const ColorSwatch: React.FC<{ name: string; hex: string; className?: string }> = ({ name, hex, className }) => (
  <div className="flex flex-col gap-2">
    <div className={`h-24 w-full border-3 border-secondary shadow-neo ${className}`}></div>
    <div>
      <p className="font-bold">{name}</p>
      <p className="font-mono text-sm text-muted">{hex}</p>
    </div>
  </div>
);

export default DesignSystem;

