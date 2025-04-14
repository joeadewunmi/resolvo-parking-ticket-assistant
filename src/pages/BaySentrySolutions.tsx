import React from 'react';
import ParkingCompanyTemplate from '@/components/templates/ParkingCompanyTemplate';
import { generateParkingCompanyFaqs } from '@/data/parkingCompanyFaqs';

const BaySentrySolutions = () => {
  const companyName = "Bay Sentry Solutions"; // Updated Name
  const companySlug = "bay-sentry-solutions"; // Updated Slug
  const faqs = generateParkingCompanyFaqs(companyName);

  return <ParkingCompanyTemplate 
    companyName={companyName}
    companySlug={companySlug}
    faqs={faqs}
  />;
};

export default BaySentrySolutions; 