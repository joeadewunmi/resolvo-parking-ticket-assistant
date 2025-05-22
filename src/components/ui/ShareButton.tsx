import React from 'react';
import { Share } from 'lucide-react';

type ShareButtonProps = {
  url: string;
  title?: string;
  className?: string;
  eventCategory?: string;
  eventLabel?: string;
};

const ShareButton = ({ 
  url, 
  title = "Check out this page", 
  className,
  eventCategory = "share",
  eventLabel
}: ShareButtonProps) => {
  const handleShare = async () => {
    try {
      // Track the share attempt
      trackShareEvent('share_attempt');
      
      if (navigator.share) {
        // Use native sharing if available
        await navigator.share({
          title: title,
          url: url,
        });
        // Track successful native share
        trackShareEvent('share_success_native');
      } else {
        // Fallback to copying to clipboard
        await navigator.clipboard.writeText(url);
        alert('URL copied to clipboard!');
        // Track successful clipboard copy
        trackShareEvent('share_success_clipboard');
      }
    } catch (error) {
      console.error('Error sharing:', error);
      // Track share error
      trackShareEvent('share_error');
    }
  };

  const trackShareEvent = (eventName: string) => {
    // Check if gtag is available
    if (typeof window !== 'undefined' && window.gtag) {
      // Send event to Google Analytics
      window.gtag('event', eventName, {
        'event_category': eventCategory,
        'event_label': eventLabel || url,
        'share_url': url,
        'share_title': title
      });
      console.log(`Analytics event sent: ${eventName} - ${eventCategory} - ${eventLabel || url}`);
    }
  };

  return (
    <button
      onClick={handleShare}
      className={`flex flex-col items-center justify-center rounded-full px-6 py-2 border-2 border-gray-800 hover:bg-gray-100 transition-colors ${className || ''}`}
      aria-label="Share"
      title="Share this page"
      data-tracking="share-button"
    >
      <div className="flex flex-col items-center">
        <Share className="w-5 h-5 mb-1" />
        <span className="text-sm font-medium">Share</span>
      </div>
    </button>
  );
};

export default ShareButton; 