import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Input, Textarea } from '../ui/Input';
import { Button } from '../ui/Button';
import axios from 'axios';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, viewportConfig, transition } from '../../animations/variants';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await axios.post('http://localhost:5000/api/contact', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-12 px-4 md:py-20 md:px-8 bg-surface text-secondary border-t-3 border-secondary relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportConfig}
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-primary border-b-4 border-primary inline-block pb-2"
        >
          {t.contact.title}
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <p className="text-lg md:text-xl mb-8 text-secondary">
              {t.contact.desc}
            </p>
            <div className="space-y-4">
               <a 
                 href="https://github.com/alexxcpr" 
                 className="flex items-center gap-3 md:gap-4 text-base md:text-xl hover:text-primary transition-colors text-secondary break-all"
                 target="_blank" 
                 rel="noopener noreferrer"
               >
                  <Github size={20} className="md:w-6 md:h-6 shrink-0" /> github.com/alexxcpr
               </a>
               <a 
                 href="https://www.linkedin.com/in/alexstanciulescu/" 
                 className="flex items-center gap-3 md:gap-4 text-base md:text-xl hover:text-primary transition-colors text-secondary break-all"
                 target="_blank" 
                 rel="noopener noreferrer"
               >
                  <Linkedin size={20} className="md:w-6 md:h-6 shrink-0" /> linkedin.com/in/alexstanciulescu
               </a>
               <a href="mailto:alexciprian1501@gmail.com" className="flex items-center gap-3 md:gap-4 text-base md:text-xl hover:text-primary transition-colors text-secondary break-all">
                  <Mail size={20} className="md:w-6 md:h-6 shrink-0" /> alexciprian1501@gmail.com
               </a>
            </div>
            <div className="mt-8 md:mt-12">
               <Button variant="outline" className="text-secondary border-secondary hover:bg-secondary hover:text-primary w-full md:w-auto">
                 {t.contact.downloadCv}
               </Button>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <Card>
               <form onSubmit={handleSubmit} className="space-y-4">
                  <Input 
                    label={t.contact.form.name}
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                  <Input 
                    label={t.contact.form.email}
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                  <Textarea 
                    label={t.contact.form.message}
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                  />
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full"
                    disabled={status === 'sending'}
                  >
                    <motion.span
                      key={status}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={transition}
                    >
                      {status === 'sending' ? t.contact.form.sending : t.contact.form.send}
                    </motion.span>
                  </Button>
                  {status === 'success' && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-green-600 font-bold mt-2"
                    >
                      {t.contact.form.success}
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="text-red-600 font-bold mt-2"
                    >
                      {t.contact.form.error}
                    </motion.p>
                  )}
               </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
