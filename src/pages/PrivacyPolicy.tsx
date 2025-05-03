import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Resolvo</title>
        <meta 
          name="description" 
          content="Read the privacy policy for Resolvo.uk. Understand how we handle data, use analytics, and protect your privacy when using our parking ticket appeal service."
        />
        <link rel="canonical" href="https://resolvo.uk/privacy-policy" />
        {/* Add minimal OG/Twitter tags if needed, often not crucial for policy pages */}
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-10">Privacy Policy</h1>
        <div className="prose max-w-none space-y-8 text-lg leading-relaxed">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy for Resolvo.uk</h1>
          <p className="mb-6"><strong>Effective Date:</strong> 20/03/2025</p>

          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-6">Welcome to <strong>Resolvo.uk</strong> ("we," "our," or "us"). Your privacy is important to us, and we are committed to protecting it. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.</p>
          <p className="mb-6">By using <strong>Resolvo.uk</strong>, you agree to this Privacy Policy. If you do not agree, please do not use our site.</p>

          <h2 className="text-2xl font-semibold mb-4">2. What Information We Collect</h2>
          <p className="mb-6">We only collect <strong>non-personal analytics data</strong> to understand how users interact with our website. This may include:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Number of visitors to the site</li>
              <li>Pages viewed and time spent on each page</li>
              <li>Clicks on specific links or buttons</li>
              <li>General geographic location (country/city level)</li>
              <li>Device type (e.g., mobile, desktop) and browser version</li>
          </ul>
          <p className="mb-6">This data is <strong>collected anonymously</strong> and cannot be linked back to any individual user.</p>

          <h2 className="text-2xl font-semibold mb-4">3. GPT Conversations & Data Usage</h2>
          <p className="mb-6">If you interact with <strong>Resolvo's GPT-powered tool</strong>, the conversation data <strong>is not stored by us</strong> and <strong>is not used to improve OpenAI models</strong>. OpenAI does not retain conversations from custom GPTs for training purposes.</p>
          <p className="mb-6">This means:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Your inputs are <strong>not stored</strong> or linked to you.</li>
              <li>No conversation data is used to improve or train AI models.</li>
              <li>Your privacy is protected when using Resolvo's AI-powered appeals.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">4. How We Use Your Information</h2>
          <p className="mb-6">The analytics data we collect helps us:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Improve website performance and usability</li>
              <li>Understand which pages and features are most useful to users</li>
              <li>Identify and fix potential issues</li>
              <li>Track general trends in website usage</li>
          </ul>
          <p className="mb-6">We do <strong>not</strong> collect, store, or share any personal data such as names, emails, or payment details.</p>

          <h2 className="text-2xl font-semibold mb-4">5. Cookies & Tracking</h2>
          <p className="mb-6">We may use <strong>cookies</strong> or similar tracking technologies to collect analytics data. You can disable cookies in your browser settings, though this may affect certain features of the website.</p>

          <h2 className="text-2xl font-semibold mb-4">6. Third-Party Services</h2>
          <p className="mb-6">We use <strong>Google Analytics (or another analytics provider)</strong> to collect and analyze usage data. This service may process anonymous usage information under their own privacy policies.</p>

          <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
          <p className="mb-6">We take reasonable measures to ensure the security of our website and analytics data. However, no online platform is 100% secure, and we cannot guarantee absolute protection.</p>

          <h2 className="text-2xl font-semibold mb-4">8. Your Rights</h2>
          <p className="mb-6">Since we do not collect personal information, there is no data for us to modify, delete, or share. However, if you have any privacy concerns, feel free to contact us.</p>

          <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
          <p className="mb-6">We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated <strong>"Effective Date."</strong></p>

          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p className="mb-6">If you have any questions about this Privacy Policy, please reach out to us at <a href="mailto:resolvoparking@gmail.com" className="text-blue-600 hover:underline">resolvoparking@gmail.com</a>.</p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
