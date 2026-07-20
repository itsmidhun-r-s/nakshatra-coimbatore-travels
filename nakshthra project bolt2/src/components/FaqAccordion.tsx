import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '../lib/data';
import './FaqAccordion.css';

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq-accordion">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
            <button
              type="button"
              className="faq-question"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="faq-question-text">{item.question}</span>
              <span className="faq-question-icon">
                <ChevronDown className="w-5 h-5" />
              </span>
            </button>
            <div className="faq-answer-wrap">
              <p className="faq-answer">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
