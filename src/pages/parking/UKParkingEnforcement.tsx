
import React from 'react';
import ParkingCompanyTemplate from '@/components/templates/ParkingCompanyTemplate';
import { generateParkingCompanyFaqs } from '@/data/parkingCompanyFaqs';

const UKParkingEnforcement = () => {
  const companyName = "UK Parking Enforcement";
  const companySlug = "uk-parking-enforcement";
  const faqs = generateParkingCompanyFaqs(companyName);

  return <ParkingCompanyTemplate 
    companyName={companyName}
    companySlug={companySlug}
    faqs={faqs}
  />;
};

export default UKParkingEnforcement;
