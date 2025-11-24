import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="font-bold text-secondary">{label}</label>}
      <input
        className={`
          bg-surface 
          border-3 border-secondary 
          p-3 
          focus:outline-none focus:shadow-neo focus:-translate-y-1 focus:-translate-x-1 transition-all
          placeholder:text-muted
          ${className}
        `}
        {...props}
      />
    </div>
  );
};

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, className = '', ...props }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="font-bold text-secondary">{label}</label>}
      <textarea
        className={`
          bg-surface 
          border-3 border-secondary 
          p-3 
          focus:outline-none focus:shadow-neo focus:-translate-y-1 focus:-translate-x-1 transition-all
          placeholder:text-muted
          resize-none
          h-32
          ${className}
        `}
        {...props}
      />
    </div>
  );
};

