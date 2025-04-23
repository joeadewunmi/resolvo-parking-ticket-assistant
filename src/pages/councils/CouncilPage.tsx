import React from 'react';
import { useParams } from 'react-router-dom';
import CouncilTemplate from '@/components/templates/CouncilTemplate';
import { generateCouncilFaqs } from '@/data/councilFaqs';

// Helper function to format council slug to a display name
const formatCouncilName = (slug: string): string => {
  // Convert slug to title case with proper spacing
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const CouncilPage = () => {
  // Get the council slug from the URL parameters
  const { councilSlug } = useParams<{ councilSlug: string }>();
  
  if (!councilSlug) {
    return <div>Council not found</div>;
  }
  
  // Format the council name from the slug
  const councilName = formatCouncilName(councilSlug);
  
  // Generate the FAQs for this council
  const faqs = generateCouncilFaqs(councilName);
  
  return (
    <CouncilTemplate 
      councilName={councilName}
      councilSlug={councilSlug}
      faqs={faqs}
    />
  );
};

export default CouncilPage; 