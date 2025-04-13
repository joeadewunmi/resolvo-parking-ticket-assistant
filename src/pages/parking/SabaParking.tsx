
import React from 'react';
import ParkingCompanyTemplate from '@/components/templates/ParkingCompanyTemplate';
import { generateParkingCompanyFaqs } from '@/data/parkingCompanyFaqs';

const SabaParking = () => {
  const companyName = "Saba Parking";
  const companySlug = "saba-parking";
  const faqs = generateParkingCompanyFaqs(companyName);

  return <ParkingCompanyTemplate 
    companyName={companyName}
    companySlug={companySlug}
    faqs={faqs}
  />;
};

export default SabaParking;
