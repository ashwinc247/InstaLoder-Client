import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search } from 'lucide-react';

export const FAQ = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(null);

  const categories = ['All', 'General', 'Security', 'Features'];

  const faqs = [
    {
      category: 'General',
      q: 'Do I need to pay to use Insta Loader?',
      a: 'Insta Loader offers a free guest tier with basic capabilities and rate limits. Premium tiers unlock unlimited bulk crawler capabilities, history archives, and dedicated support.'
    },
    {
      category: 'General',
      q: 'Does it support private accounts?',
      a: 'We only support downloading media that you possess explicit authorization to access. Media from private accounts is protected unless active authorized session keys are connected in settings.'
    },
    {
      category: 'Security',
      q: 'Are my access keys secure?',
      a: 'Yes. All configured access tokens are stored in MongoDB Atlas and encrypted at rest. Client requests are checked using secure tokens and Helmet configurations.'
    },
    {
      category: 'Features',
      q: 'Can I download multiple images from a slide carousel?',
      a: 'Yes. The downloader detects carousel posts and maps individual links for each slide, or processes a zipped archive file containing all slides in background queues.'
    },
    {
      category: 'Features',
      q: 'What formats are supported?',
      a: 'We support standard MP4 formats for video reels and high-resolution JPEG formats for photos, conforming to Instagram media outputs.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.q.toLowerCase().includes(search.toLowerCase()) || 
                          faq.a.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleAccordion = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      
      <div className="text-center mb-12">
        <h1 className="font-['Outfit'] font-extrabold text-4xl sm:text-5xl tracking-tight">
          FAQ <span className="text-gradient">Accordion</span>
        </h1>
        <p className="mt-4 text-slate-500 leading-relaxed text-sm">
          Got questions? Explore categories, search queries, or contact support directly.
        </p>
      </div>

      <div className="relative mb-8 max-w-xl mx-auto">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search questions..."
          className="w-full px-6 py-4 pl-12 bg-slate-900/10 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-800 rounded-input focus:outline-none dark:text-white text-sm"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
      </div>

      <div className="flex justify-center space-x-2 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
              activeCategory === cat
                ? 'bg-violet-600 text-white shadow-soft'
                : 'bg-slate-100 dark:bg-slate-900/40 text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white dark:bg-darkcard/30 border border-slate-200/30 dark:border-slate-800/40 rounded-card overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex justify-between items-center transition-colors dark:hover:bg-slate-800/20"
                >
                  <div className="flex items-center space-x-3 text-slate-900 dark:text-white font-bold text-sm md:text-base">
                    <HelpCircle className="h-5 w-5 text-violet-500 flex-shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                  {isOpen ? <ChevronUp className="h-5 w-5 text-slate-400" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pl-13 text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-200/10 dark:border-slate-800/20 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 text-slate-500 text-sm">
            No questions matched your filter parameters.
          </div>
        )}
      </div>

    </div>
  );
};
