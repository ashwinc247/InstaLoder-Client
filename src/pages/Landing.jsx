import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, Zap, Shield, Sparkles, Smartphone, CheckCircle, ArrowRight, Star, HelpCircle } from 'lucide-react';
import { AdSlot } from '../components/AdSlot.jsx';

export const Landing = () => {
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (url.trim()) {
      navigate(`/download?url=${encodeURIComponent(url.trim())}`);
    }
  };

  const statistics = [
    { label: 'Downloads Processed', value: '1.2M+' },
    { label: 'Active Users Daily', value: '45K+' },
    { label: 'Avg Download Speed', value: 'Sub 2s' },
    { label: 'Crawl Uptime', value: '99.9%' }
  ];

  const features = [
    { 
      title: 'Fast Crawler Engine', 
      desc: 'Instagram metadata is resolved and streamed in seconds using proxy pipelines.',
      icon: Zap 
    },
    { 
      title: 'Secure File Streaming', 
      desc: 'Secure Helmet headers, CORS filters, and zero data leakage policies.',
      icon: Shield 
    },
    { 
      title: 'Responsive Design', 
      desc: 'Designed using custom glassmorphism to look premium on mobile viewports.',
      icon: Smartphone 
    },
    { 
      title: 'Full Quality Assets', 
      desc: 'Retrieve original resolution MP4 videos, reels, and high quality JPEG slides.',
      icon: Sparkles 
    }
  ];

  const faqItems = [
    { 
      q: 'Do I need to sign in or pay to process Instagram posts?', 
      a: 'No. Insta Loader is completely free. You can analyze and download reels, videos, and images as a guest without creating an account.' 
    },
    { 
      q: 'Does this platform host the downloaded files?', 
      a: 'No. Files are streamed dynamically from the source server CDNs through our proxy layers directly to your client storage. We do not store files.' 
    },
    { 
      q: 'Is there a limit on download counts?', 
      a: 'Standard guests are limited to 100 requests per 15 minutes to prevent crawler throttling.' 
    }
  ];

  return (
    <div className="relative overflow-hidden bg-grid dark:bg-slate-950/40">
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-600/10 dark:bg-violet-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-pink-600/10 dark:bg-pink-900/10 blur-[100px] pointer-events-none" />

      {/* ADSLOT 1: Above Hero Title */}
      <AdSlot id="landing-top-ad" type="banner" className="my-4 max-w-7xl mx-auto px-4" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 text-xs font-semibold mb-6 animate-pulse">
          <Sparkles className="h-4 w-4" />
          <span>Premium Instagram Downloader</span>
        </div>
        
        <h1 className="font-['Outfit'] font-extrabold text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-tight max-w-4xl mx-auto">
          Save & Optimize Your <span className="text-gradient">Instagram Media</span>
        </h1>
        
        <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The fast, secure, and premium way to archive Instagram reels, posts, and carousels you own or have permission to access.
        </p>

        {/* Search Input */}
        <form onSubmit={handleSearchSubmit} className="mt-10 max-w-2xl mx-auto">
          <div className="relative flex items-center p-1.5 rounded-[20px] bg-white dark:bg-darkcard border border-slate-200/50 dark:border-slate-800 shadow-floating">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste Instagram URL (e.g. https://www.instagram.com/p/...)"
              className="flex-grow bg-transparent px-6 py-4 text-sm focus:outline-none dark:text-white"
              required
            />
            <button
              type="submit"
              className="px-6 py-4 rounded-button text-sm font-bold text-white btn-gradient flex items-center space-x-2"
            >
              <span>Download</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </section>

      {/* ADSLOT 2: Below Search Hero */}
      <AdSlot id="landing-below-search-ad" type="banner" className="max-w-7xl mx-auto px-4" />

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white dark:bg-darkcard/50 border border-slate-200/20 dark:border-slate-800/50 p-8 rounded-card glass">
          {statistics.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-['Outfit'] font-black text-3xl sm:text-4xl text-gradient">{stat.value}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ADSLOT 3: Below Stats Grid */}
      <AdSlot id="landing-middle-ad" type="banner" className="max-w-7xl mx-auto px-4" />

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl">Crawler Benefits</h2>
          <p className="text-slate-500 mt-4 leading-relaxed">
            Insta Loader processes media streaming requests directly using clean headers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="glass dark:bg-darkcard/40 p-6 rounded-card border border-slate-200/10 dark:border-slate-800/40 hover:scale-[1.02] transition-transform duration-300">
                <div className="p-3 bg-violet-500/10 text-violet-500 rounded-xl w-fit mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-['Outfit'] font-bold text-lg text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-slate-100/30 dark:bg-slate-900/10 border-y border-slate-200/10 dark:border-slate-800/40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl">Simple Archive Workflow</h2>
            <p className="text-slate-500 mt-4 leading-relaxed">
              We translate Instagram link formats into CORS-compliant download streams in seconds.
            </p>
            <div className="space-y-4 mt-8">
              {[
                'Paste the Instagram video/reel or carousel link.',
                'The system fetches resolving CDN endpoints.',
                'Confirm details and click download.',
                'Media downloads directly to your device.'
              ].map((step, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-violet-500 flex-shrink-0" />
                  <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">Step {i+1}: {step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="glass p-8 rounded-card border border-slate-200/20 dark:border-slate-800/60 shadow-floating">
              <h3 className="font-bold text-lg text-gradient mb-4">Supported Instagram Media</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Instagram Reels', 'Instagram Photos', 'Carousel Slides', 'IGTV Videos'].map((p, i) => (
                  <div key={i} className="flex items-center space-x-2 bg-slate-900/40 p-3 rounded-xl border border-slate-800/50">
                    <CheckCircle className="h-4 w-4 text-pink-500" />
                    <span className="text-xs font-semibold text-white">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl">What Users Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Sarah Jenkins', role: 'Social Lead', text: 'Archiving client assets is incredibly fast. The interface feels premium and clean.' },
            { name: 'Alex Martinez', role: 'Archivist', text: 'Piping downloads through proxy streams solves browser CORS errors instantly. Excellent tool!' },
            { name: 'David Cho', role: 'Creator', text: 'No complex setups or login forms. It just works immediately. High quality.' }
          ].map((t, i) => (
            <div key={i} className="glass p-6 rounded-card border border-slate-200/10 dark:border-slate-800/40 font-['Inter']">
              <div className="flex space-x-1 text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 italic mb-6">"{t.text}"</p>
              <div className="font-semibold text-slate-900 dark:text-white text-sm">{t.name}</div>
              <div className="text-[10px] text-slate-400 mt-1">{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-['Outfit'] font-extrabold text-3xl sm:text-4xl">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4 font-['Inter']">
          {faqItems.map((item, i) => (
            <div key={i} className="p-5 rounded-card bg-white dark:bg-darkcard/30 border border-slate-200/30 dark:border-slate-800/40">
              <h4 className="font-bold text-slate-900 dark:text-white flex items-center space-x-2 text-sm md:text-base">
                <HelpCircle className="h-5 w-5 text-violet-500 flex-shrink-0" />
                <span>{item.q}</span>
              </h4>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-2 pl-7 leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ADSLOT 4: Bottom Banner above footer */}
      <AdSlot id="landing-bottom-ad" type="banner" className="max-w-7xl mx-auto px-4 my-8" />
    </div>
  );
};
