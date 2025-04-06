
export const generateParkingCompanyFaqs = (companyName: string) => {
  return [
    {
      question: `How long do I have to appeal a ${companyName} fine?`,
      answer: `You typically have 28 days to appeal a ${companyName} Parking Charge Notice (PCN). It's important to act quickly as the fine can increase after this period.`
    },
    {
      question: `Can ${companyName} legally enforce their fines?`,
      answer: `As a private company, ${companyName} can't issue "fines" like authorities can, but they can issue Parking Charge Notices based on breach of contract. They would need to take you to court to enforce payment.`
    },
    {
      question: `What are common grounds for appealing a ${companyName} ticket?`,
      answer: `Common grounds include: unclear signage, payment machine issues, valid ticket but displayed incorrectly, mitigating circumstances, or errors in the PCN details.`
    },
    {
      question: `How successful are appeals against ${companyName}?`,
      answer: `Many appeals are successful, especially when the parking operator hasn't followed proper procedures. A well-written appeal with clear evidence has a good chance of success.`
    },
    {
      question: `What happens if my first appeal to ${companyName} is rejected?`,
      answer: `If your initial appeal is rejected, you can escalate your case to POPLA (Parking on Private Land Appeals), an independent appeals service. You'll have 28 days from receiving the rejection to submit your POPLA appeal.`
    },
    {
      question: `Does ${companyName} have to follow a code of practice?`,
      answer: `Yes, ${companyName} is a member of the British Parking Association (BPA) and must follow their Approved Operator Scheme Code of Practice. Violations of this code can be grounds for appeal.`
    },
    {
      question: `Can I get a discount on my ${companyName} fine?`,
      answer: `${companyName} typically offers a 40-50% discount if you pay within 14 days of receiving the ticket. However, once you appeal, this discount period is usually put on hold until they respond.`
    },
    {
      question: `Should I include photos or evidence with my ${companyName} appeal?`,
      answer: `Yes, evidence strengthens your case. Photos of unclear signage, faulty machines, your valid ticket, or other relevant evidence should be included with your appeal when possible.`
    },
    {
      question: `Will a ${companyName} fine affect my credit score?`,
      answer: `A parking charge itself won't directly affect your credit score. However, if ${companyName} takes you to court, obtains a judgment against you, and you don't pay, this could impact your credit rating.`
    }
  ];
};
