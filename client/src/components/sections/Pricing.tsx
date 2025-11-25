import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { motion } from 'framer-motion';
import { Check, Terminal, Code, Layers, Zap } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Pricing: React.FC = () => {
  const { t } = useLanguage();

  const pricingPackages = [
    {
      key: 'static' as const,
      price: "200€",
      suffix: t.pricing.start,
      icon: <Terminal className="w-6 h-6" />,
      highlight: false
    },
    {
      key: 'dynamic' as const,
      price: "300€",
      suffix: t.pricing.start,
      icon: <Zap className="w-6 h-6" />,
      highlight: true
    },
    {
      key: 'multi' as const,
      price: "200€",
      suffix: t.pricing.packages.multi.suffix,
      icon: <Layers className="w-6 h-6" />,
      highlight: false
    },
    {
      key: 'custom' as const,
      price: "CUSTOM",
      suffix: "",
      icon: <Code className="w-6 h-6" />,
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-8 bg-surface border-y-3 border-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block border-b-4 border-primary pb-2">
              {t.pricing.title}
            </h2>
            <p className="text-xl text-muted font-mono mt-4">{t.pricing.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {pricingPackages.map((pkg, index) => {
            const pkgData = t.pricing.packages[pkg.key];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full flex flex-col relative ${pkg.highlight ? 'border-primary shadow-[8px_8px_0px_0px_var(--col-primary)]' : ''}`}>
                  {pkg.highlight && (
                      <div className="absolute -top-4 right-4 z-10">
                          <Badge className="bg-primary text-secondary font-bold px-3 py-1">{t.pricing.bestValue}</Badge>
                      </div>
                  )}
                  
                  <div className="mb-6 border-b-3 border-secondary pb-4">
                      <div className="flex items-center gap-3 mb-2 text-primary">
                          {pkg.icon}
                          <h3 className="text-xl font-bold text-secondary">{pkgData.title}</h3>
                      </div>
                      <div className="flex items-baseline gap-1 mt-4">
                          <span className="text-4xl font-black text-secondary">{pkg.price}</span>
                          <span className="text-muted font-mono text-sm">{pkg.suffix}</span>
                      </div>
                      <p className="mt-4 text-muted font-medium">{pkgData.desc}</p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                      {pkgData.features.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={3} />
                              <span className="text-secondary opacity-90">{feature}</span>
                          </li>
                      ))}
                  </ul>

                  <Button 
                      variant={pkg.highlight ? 'primary' : 'outline'} 
                      className="w-full mt-auto"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                      {t.pricing.button}
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
