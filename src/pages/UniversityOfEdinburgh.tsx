import React from 'react';
import ParkingCompanyTemplate from '@/components/templates/ParkingCompanyTemplate';
import { generateParkingCompanyFaqs } from '@/data/parkingCompanyFaqs';

const UniversityOfEdinburgh = () => {
  const companyName = "University of Edinburgh"; // Updated Name
  const companySlug = "university-of-edinburgh"; // Updated Slug
  const faqs = generateParkingCompanyFaqs(companyName);

  return <ParkingCompanyTemplate 
    companyName={companyName}
    companySlug={companySlug}
    faqs={faqs}
  />;
};

export default UniversityOfEdinburgh; 