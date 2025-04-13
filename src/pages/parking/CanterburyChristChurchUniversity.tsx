
import React from 'react';
import ParkingCompanyTemplate from '@/components/templates/ParkingCompanyTemplate';
import { generateParkingCompanyFaqs } from '@/data/parkingCompanyFaqs';

const CanterburyChristChurchUniversity = () => {
  const companyName = "Canterbury Christ Church University";
  const companySlug = "canterbury-christ-church-university";
  const faqs = generateParkingCompanyFaqs(companyName);

  return <ParkingCompanyTemplate 
    companyName={companyName}
    companySlug={companySlug}
    faqs={faqs}
  />;
};

export default CanterburyChristChurchUniversity;
