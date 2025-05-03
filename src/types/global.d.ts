// Type declarations for global window object
interface Window {
  gtag: (
    command: string,
    eventName: string,
    eventParams?: {
      [key: string]: any;
    }
  ) => void;
  dataLayer: any[];
}

// Content from Contentful CMS
interface ContentfulImage {
  fields: {
    file: {
      url: string;
      details: {
        image: {
          width: number;
          height: number;
        };
      };
    };
    title?: string;
  };
} 