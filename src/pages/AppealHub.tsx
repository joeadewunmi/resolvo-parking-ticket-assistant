
import React from 'react';
import { Building, City, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import FAQSection from '@/components/home/FAQSection';

const AppealHub = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Appeal Hub</h1>
          <p className="text-xl text-gray-600">
            Find the right appeal guide based on who issued your parking ticket
          </p>
        </div>
        
        <div className="space-y-10">
          {/* Private Parking Companies Section */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Building className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Appeal a Fine from a Private Parking Company</h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Major Companies</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/blog" className="text-blue-600 hover:underline flex items-center">
                        <span>ParkingEye Appeal Guide</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="text-blue-600 hover:underline flex items-center">
                        <span>Euro Car Parks Appeal Guide</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="text-blue-600 hover:underline flex items-center">
                        <span>UK Parking Control (UKPC) Appeal Guide</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="text-blue-600 hover:underline flex items-center">
                        <span>Smart Parking Appeal Guide</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Other Companies</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/blog" className="text-blue-600 hover:underline flex items-center">
                        <span>NCP Car Parks Appeal Guide</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="text-blue-600 hover:underline flex items-center">
                        <span>Indigo Park Solutions Appeal Guide</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="text-blue-600 hover:underline flex items-center">
                        <span>Excel Parking Appeal Guide</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="text-blue-600 hover:underline flex items-center">
                        <span>Other Private Companies</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* Council Fines Section */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <City className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-primary">Appeal a Fine from a Council</h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">London Councils</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/blog" className="text-blue-600 hover:underline flex items-center">
                        <span>Westminster Council PCN Appeal Guide</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="text-blue-600 hover:underline flex items-center">
                        <span>Camden Council PCN Appeal Guide</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="text-blue-600 hover:underline flex items-center">
                        <span>Islington Council PCN Appeal Guide</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="text-blue-600 hover:underline flex items-center">
                        <span>Other London Councils</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Other UK Councils</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/blog" className="text-blue-600 hover:underline flex items-center">
                        <span>Manchester City Council Appeal Guide</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="text-blue-600 hover:underline flex items-center">
                        <span>Birmingham City Council Appeal Guide</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="text-blue-600 hover:underline flex items-center">
                        <span>Edinburgh Council Appeal Guide</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="text-blue-600 hover:underline flex items-center">
                        <span>Other UK Councils</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          
          {/* Call to Action Section */}
          <section className="text-center mt-12 bg-gray-50 p-8 rounded-lg shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Check className="h-6 w-6 text-green-500" />
              <h2 className="text-2xl font-bold text-primary">Start Your Appeal Today</h2>
            </div>
            <p className="text-lg mb-6">
              Don't see your specific parking enforcer? No problem!<br />
              Our AI can help with any type of parking ticket appeal.
            </p>
            <a
              href="https://chatgpt.com/g/g-C3KOiAkMB-resolvo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border border-transparent text-xl font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Appeal now
            </a>
          </section>
          
          {/* FAQ Section */}
          <div className="mt-12">
            <FAQSection limit={4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppealHub;
