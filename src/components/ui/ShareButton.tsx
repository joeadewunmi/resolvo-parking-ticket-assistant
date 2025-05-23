
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
      className={`group flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full border-2 transition-all duration-200 shadow-sm hover:shadow-md ${className || 'border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50'}`}
      aria-label="Share this page"
      title="Share this page"
      data-tracking="share-button"
    >
      <Share className="w-4 h-4 text-gray-600 group-hover:text-gray-800 transition-colors duration-200" />
      <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200 hidden sm:inline">
        Share
      </span>
    </button>
  );
};

export default ShareButton;
