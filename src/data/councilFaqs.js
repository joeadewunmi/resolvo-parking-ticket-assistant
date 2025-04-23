// Function to generate council-specific FAQs for PCN appeals
export const generateCouncilFaqs = (councilName) => {
  return [
    {
      question: `What are the grounds for appealing a ${councilName} parking ticket?`,
      answer: `You can appeal a ${councilName} parking ticket (PCN) on several grounds including: incorrect signage, valid permit/ticket was displayed, vehicle broken down, loading/unloading goods, emergency situations, ticket details are incorrect, or the contravention didn't occur. Each appeal is judged on its specific circumstances and evidence provided.`
    },
    {
      question: `How long do I have to appeal a ${councilName} PCN?`,
      answer: `For a ${councilName} PCN, you typically have 28 days from the date of issue to make a formal challenge. However, if you appeal within 14 days and your appeal is rejected, you may still be eligible for the 50% discount on the fine. It's recommended to appeal as soon as possible.`
    },
    {
      question: `What evidence should I include when appealing a ${councilName} parking ticket?`,
      answer: `When appealing a ${councilName} PCN, include relevant evidence such as: photos of unclear signage or road markings, valid pay & display tickets, permit documentation, proof of vehicle breakdown, evidence of loading/unloading, medical emergency documentation, or any evidence that disproves the alleged contravention. The more specific evidence you provide, the stronger your appeal will be.`
    },
    {
      question: `How do I submit my appeal to ${councilName}?`,
      answer: `To submit your appeal to ${councilName}, you can: 1) Use their online portal (check ${councilName}'s official website), 2) Email the appeal letter to their parking department, or 3) Send your appeal by post to the address on the PCN. Include your PCN number, vehicle registration, and all supporting evidence. Resolvo can help you write a compelling appeal letter that you can submit through any of these methods.`
    },
    {
      question: `What happens if ${councilName} rejects my initial appeal?`,
      answer: `If ${councilName} rejects your initial appeal (formal representation), you'll receive a Notice of Rejection. At this stage, you can either pay the penalty or make an appeal to the independent Traffic Penalty Tribunal (TPT) in England and Wales, the Parking and Bus Lane Tribunal for Scotland, or the Northern Ireland Traffic Penalty Tribunal, depending on your location. This independent adjudication is free and impartial.`
    },
    {
      question: `Can I still get the 50% discount if I appeal my ${councilName} PCN?`,
      answer: `While appealing to ${councilName}, the 50% discount period (typically 14 days) might expire. However, many councils, including ${councilName}, often extend the discount period if your appeal is rejected. This is discretionary, so it's worth checking ${councilName}'s specific policy. If your appeal is successful, you won't have to pay anything.`
    },
    {
      question: `How successful are appeals against ${councilName} parking tickets?`,
      answer: `Success rates for appeals against ${councilName} parking tickets vary depending on the circumstances and evidence provided. Generally, if you have valid grounds and provide strong evidence, you have a reasonable chance of success. According to national statistics, around 50-60% of appeals that reach the independent tribunal stage are successful, though this varies by council and case specifics.`
    },
    {
      question: `What if I've received a ${councilName} PCN while parked on private land?`,
      answer: `${councilName} only issues PCNs for parking violations on public roads or council-managed car parks. If you've received a ticket on private land (like a supermarket or private car park), this would be a Parking Charge Notice issued by a private company, not ${councilName}. These are handled differently and have different appeal processes. Resolvo can help with both types of parking tickets.`
    },
    {
      question: `Can I appeal a ${councilName} PCN if I wasn't the driver at the time?`,
      answer: `Yes, but as the registered keeper of the vehicle, you're initially responsible for the PCN issued by ${councilName}. You can either: 1) Appeal the PCN based on the same grounds available to the driver, or 2) Nominate the actual driver by providing their details to ${councilName}, who will then transfer responsibility for the PCN to them. Either way, don't ignore the PCN as this can lead to increased charges.`
    },
    {
      question: `What if I've already paid the ${councilName} PCN but think it was unfair?`,
      answer: `Unfortunately, once you've paid a ${councilName} PCN, it's generally considered an admission of liability, and getting a refund is difficult. However, if you have exceptional circumstances or strong evidence that the ticket was issued incorrectly, you can still write to ${councilName}'s parking department requesting a refund and explaining your case. Future tickets should be appealed before payment if you believe they're unfair.`
    }
  ];
}; 