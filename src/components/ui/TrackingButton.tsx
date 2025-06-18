import React from 'react';

interface TrackingButtonProps {
  children: React.ReactNode;
  eventName: string;
  eventCategory: string;
  eventLabel?: string;
  className?: string;
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

/**
 * Button component with Google Analytics event tracking
 * This will send an event to GA when the button is clicked
 */
const TrackingButton: React.FC<TrackingButtonProps> = ({
  children,
  eventName,
  eventCategory,
  eventLabel,
  className,
  href,
  target = "_blank",
  rel = "noopener noreferrer",
  onClick
}) => {
  const handleClick = () => {
    // Check if gtag is available
    if (typeof window !== 'undefined' && window.gtag) {
      // Send event to Google Analytics
      window.gtag('event', eventName, {
        'event_category': eventCategory,
        'event_label': eventLabel || href
      });
      console.log(`Analytics event sent: ${eventName} - ${eventCategory} - ${eventLabel || href}`);
    }
    
    // Call additional onClick handler if provided
    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

export default TrackingButton; 