import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../services/api.js';
import { 
  Download, Loader2, Copy, Share2, Link2, AlertCircle, HelpCircle,
  Clock, Eye, Heart, MessageCircle
} from 'lucide-react';
import toast from 'react-hot-toast';
import { AdSlot } from '../components/AdSlot.jsx';

export const DownloadWorkspace = () => {
  const [searchParams] = useSearchParams();
  const [url, setUrl] = useState('');
  const [fetchingInfo, setFetchingInfo] = useState(false);
  const [metadata, setMetadata] = useState(null);
  const [processingId, setProcessingId] = useState(null);
  useEffect(() => {
    const urlParam = searchParams.get('url');
    if (urlParam) {
      setUrl(urlParam);
      handleGetInfo(urlParam);
    }
  }, [searchParams]);

  const handleGetInfo = async (targetUrl = url) => {
    if (!targetUrl.trim()) {
      return toast.error('Please enter a valid Instagram URL');
    }
    
    setFetchingInfo(true);
    setMetadata(null);

    try {
      const response = await api.post('/media/info', { url: targetUrl.trim() });
      if (response.data.success) {
        setMetadata(response.data.data);
        toast.success('Instagram metadata retrieved successfully');
      }
    } catch (err) {
      const errMsg = err.response?.data?.message || 'Failed to fetch media details';
      toast.error(errMsg);
    } finally {
      setFetchingInfo(false);
    }
  };

  const triggerProxyDownload = (formatOption) => {
    if (!metadata) return;
    
    setProcessingId(formatOption.quality);
    const targetCdnUrl = formatOption.url || metadata.mediaUrl;
    const extension = formatOption.format || (metadata.mediaType === 'video' ? 'mp4' : 'jpg');
    const filename = `${metadata.title.replace(/[^a-z0-9]/gi, '_').substring(0, 30)}.${extension}`;
    
    // Build direct API proxy url
    const baseUrl = import.meta.env.VITE_API_URL || '/api';
    const proxyUrl = `${baseUrl}/media/proxy?url=${encodeURIComponent(targetCdnUrl)}&filename=${encodeURIComponent(filename)}`;
    
    // Start download stream

    // Open proxy stream url in a new window/tab to trigger download dialog
    const link = document.createElement('a');
    link.href = proxyUrl;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setProcessingId(null);
      toast.success('Download initialized successfully!');
    }, 1500);
  };

  // Helper functions

  const copyUrl = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Link copied to clipboard!');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      
      {/* ADSLOT 1: Top Banner */}
      <AdSlot id="workspace-top-banner" type="banner" />

      {/* Input panel */}
      <div className="glass p-8 rounded-card border border-slate-200/20 dark:border-slate-800/80 shadow-floating">
        <h1 className="font-['Outfit'] font-extrabold text-2xl md:text-3xl text-gradient mb-2">Instagram Downloader Workspace</h1>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
          Paste any Instagram post or reel link. File downloads are streamed directly through our proxy servers to avoid CORS conflicts.
        </p>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste Instagram link here..."
            className="flex-grow px-4 py-3 bg-slate-900/10 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-850 rounded-input focus:outline-none dark:text-white text-sm"
          />
          <button
            onClick={() => handleGetInfo()}
            disabled={fetchingInfo}
            className="px-6 py-3 rounded-button text-sm font-bold text-white btn-gradient flex items-center justify-center space-x-2"
          >
            {fetchingInfo ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Link2 className="h-4 w-4" />
            )}
            <span>Analyze Post</span>
          </button>
        </div>
      </div>

      {/* ADSLOT 2: Below Search Hero */}
      <AdSlot id="workspace-below-search" type="banner" />

      {metadata && metadata.title.includes('(Shortcode:') && (
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs flex items-start space-x-3 animate-in fade-in duration-300 max-w-6xl mx-auto">
          <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="font-bold text-sm block">Scraper Demo Fallback Active</strong>
            <p className="leading-relaxed">
              Instagram redirected the request to a login screen. To download the actual video or image file, copy your browser's Instagram cookie string (e.g. <code>sessionid=...</code>) into the <strong>INSTAGRAM_COOKIE</strong> variable in the server's <code>.env</code> file.
            </p>
          </div>
        </div>
      )}

      {/* Media Details Workspace */}
      {metadata && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-300">
          
          {/* Card Preview */}
          <div className="glass p-6 rounded-card border border-slate-200/10 dark:border-slate-800/40 space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-850">
                {metadata.mediaType === 'video' ? (
                  <video 
                    src={metadata.mediaUrl} 
                    controls 
                    poster={metadata.thumbnail}
                    className="w-full h-full object-cover" 
                  />
                ) : (
                  <img 
                    src={metadata.thumbnail} 
                    alt="Media preview" 
                    className="w-full h-full object-cover" 
                  />
                )}
                <div className="absolute top-2 right-2 px-2.5 py-1 rounded-full bg-slate-900/80 text-white text-[10px] uppercase font-bold tracking-wider">
                  {metadata.mediaType}
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base line-clamp-2">{metadata.title}</h3>
                  <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Instagram Service</p>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4 bg-slate-950/20 p-3.5 rounded-xl border border-slate-200/5 dark:border-slate-800/40 text-xs">
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Clock className="h-4 w-4 text-violet-500" />
                    <div>
                      <span className="block text-[10px] text-slate-500 font-medium uppercase tracking-wider">Duration</span>
                      <span className="font-bold text-slate-900 dark:text-slate-200">{metadata.duration ? `${metadata.duration.toFixed(1)}s` : 'N/A'}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Eye className="h-4 w-4 text-violet-500" />
                    <div>
                      <span className="block text-[10px] text-slate-500 font-medium uppercase tracking-wider">Views</span>
                      <span className="font-bold text-slate-900 dark:text-slate-200">{metadata.views ? Number(metadata.views).toLocaleString() : '0'}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400">
                    <Heart className="h-4 w-4 text-pink-500" />
                    <div>
                      <span className="block text-[10px] text-slate-500 font-medium uppercase tracking-wider">Likes</span>
                      <span className="font-bold text-slate-900 dark:text-slate-200">{metadata.likes ? Number(metadata.likes).toLocaleString() : '0'}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400">
                    <MessageCircle className="h-4 w-4 text-blue-500" />
                    <div>
                      <span className="block text-[10px] text-slate-500 font-medium uppercase tracking-wider">Comments</span>
                      <span className="font-bold text-slate-900 dark:text-slate-200">{metadata.comments ? Number(metadata.comments).toLocaleString() : '0'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2 pt-4 border-t border-slate-800/50">
              <button
                onClick={() => copyUrl(url)}
                className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700/80 rounded-button text-xs font-semibold flex items-center justify-center space-x-2 dark:text-slate-200 text-slate-700 transition-colors"
              >
                <Copy className="h-4 w-4" />
                <span>Copy Link</span>
              </button>
              <button
                onClick={() => copyUrl(metadata.mediaUrl)}
                className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700/80 rounded-button text-xs font-semibold flex items-center justify-center space-x-2 dark:text-slate-200 text-slate-700 transition-colors"
              >
                <Share2 className="h-4 w-4" />
                <span>Media Source</span>
              </button>
            </div>
          </div>

          {/* Formats Column */}
          <div className="glass p-6 rounded-card border border-slate-200/10 dark:border-slate-800/40 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Available Formats</h3>
              <p className="text-xs text-slate-400">
                Click download to pipe the file buffer directly through our streaming proxy.
              </p>

              <div className="space-y-3">
                {metadata.formats && metadata.formats.map((fmt, i) => (
                  <div 
                    key={i} 
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-slate-900/30 border border-slate-800/60 gap-4"
                  >
                    <div className="flex items-center space-x-4">
                      {/* Visual Slide Preview */}
                      <div className="relative h-14 w-14 rounded-lg overflow-hidden bg-slate-950 border border-slate-850 flex-shrink-0 flex items-center justify-center">
                        {fmt.format === 'mp4' ? (
                          <video 
                            src={fmt.url} 
                            className="w-full h-full object-cover" 
                            muted 
                            preload="metadata"
                          />
                        ) : (
                          <img 
                            src={fmt.url} 
                            alt={fmt.quality} 
                            className="w-full h-full object-cover" 
                            onError={(e) => {
                              // If image fails to load directly, fallback to first thumbnail
                              e.target.src = metadata.thumbnail;
                            }}
                          />
                        )}
                        <span className="absolute bottom-0 right-0 px-1 rounded-tl-md bg-slate-900/80 text-[7px] font-black uppercase text-white">
                          {fmt.format === 'mp4' ? 'video' : 'photo'}
                        </span>
                      </div>
                      
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-white">{fmt.quality}</div>
                        <div className="text-[10px] text-slate-400 uppercase mt-0.5">{fmt.format} &bull; {fmt.size}</div>
                      </div>
                    </div>

                    <button
                      onClick={() => triggerProxyDownload(fmt)}
                      disabled={processingId !== null}
                      className="w-full sm:w-auto px-4 py-2 rounded-button bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs transition-colors flex items-center justify-center space-x-1.5 disabled:opacity-40"
                    >
                      {processingId === fmt.quality ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      ) : (
                        <Download className="h-3.5 w-3.5" />
                      )}
                      <span>Download</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* ADSLOT 3: Inside Options Panel Column */}
            <AdSlot id="workspace-inside-options" type="banner" />
          </div>

        </div>
      )}

      {/* ADSLOT 4: Above Local History */}
      <AdSlot id="workspace-above-history" type="banner" />

      {/* How to download on this website */}
      <div className="glass p-6 rounded-card border border-slate-200/10 dark:border-slate-800/40 space-y-6">
        <div className="flex items-center space-x-2 text-slate-900 dark:text-white mb-2">
          <HelpCircle className="h-5 w-5 text-violet-500" />
          <h3 className="font-bold text-lg">How to Download on Insta Loader</h3>
        </div>
        <p className="text-xs text-slate-400 dark:text-slate-500">
          Follow these three simple steps to extract and download your favorite reels, videos, or posts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          
          <div className="bg-slate-950/20 p-6 rounded-xl border border-slate-200/10 dark:border-slate-800/50 space-y-3">
            <div className="h-8 w-8 rounded-lg bg-violet-500/10 text-violet-500 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h4 className="font-semibold text-sm text-slate-900 dark:text-white">Copy Media Link</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Open Instagram, locate the public post or reel, and copy its URL link from the sharing menu.
            </p>
          </div>

          <div className="bg-slate-950/20 p-6 rounded-xl border border-slate-200/10 dark:border-slate-800/50 space-y-3">
            <div className="h-8 w-8 rounded-lg bg-violet-500/10 text-violet-500 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <h4 className="font-semibold text-sm text-slate-900 dark:text-white">Paste and Analyze</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Paste the link into the search input above and click **Analyze Post** to extract the source CDN endpoint details.
            </p>
          </div>

          <div className="bg-slate-950/20 p-6 rounded-xl border border-slate-200/10 dark:border-slate-800/50 space-y-3">
            <div className="h-8 w-8 rounded-lg bg-violet-500/10 text-violet-500 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <h4 className="font-semibold text-sm text-slate-900 dark:text-white">Direct Download</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Choose your format size, click **Download**, and the proxy server will stream the file directly.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};
