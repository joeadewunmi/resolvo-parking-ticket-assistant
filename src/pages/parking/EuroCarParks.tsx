
import React from 'react';
import ParkingCompanyTemplate from '@/components/templates/ParkingCompanyTemplate';
import { generateParkingCompanyFaqs } from '@/data/parkingCompanyFaqs';

const EuroCarParks = () => {
  const companyName = "Euro Car Parks";
  const companySlug = "euro-car-parks";
  const faqs = generateParkingCompanyFaqs(companyName);

  return <ParkingCompanyTemplate 
    companyName={companyName}
    companySlug={companySlug}
    faqs={faqs}
  />;
};

export default EuroCarParks;
