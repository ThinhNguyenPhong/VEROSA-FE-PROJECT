import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div
      className="h-screen w-screen overflow-y-auto fixed top-0 left-0 pt-16 bg-gradient-to-b from-[#FFCC66]/20 to-white relative overflow-hidden"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1549429712-4ee4515efd9b?auto=format&fit=crop&w=1500&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(0.98)',
      }}
    >
      <div className="w-full px-4 py-16 bg-white/90 backdrop-blur-sm">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#FFCC66] mb-6 animate-fade-in-down">
          {t('contact.title', 'Contact Us')}
        </h1>
        <p className="max-w-4xl mx-auto text-lg text-center text-gray-700 mb-12 animate-fade-in-up">
          {t('contact.description', 'We would love to hear from you! Please fill out the form below or reach out to us using the contact details provided.')}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white/95 p-8 rounded-2xl shadow-2xl animate-fade-in-up">
            <h2 className="text-3xl font-semibold text-[#FFCC66] mb-6 text-center">{t('contact.formTitle', 'Send Us a Message')}</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">{t('contact.nameLabel', 'Name')}</label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#FFCC66] transition-all duration-200"
                  placeholder={t('contact.namePlaceholder', 'Your Name')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">{t('contact.emailLabel', 'Email')}</label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#FFCC66] transition-all duration-200"
                  placeholder={t('contact.emailPlaceholder', 'your@example.com')}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">{t('contact.messageLabel', 'Message')}</label>
                <textarea
                  id="message"
                  rows="6"
                  className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#FFCC66] transition-all duration-200"
                  placeholder={t('contact.messagePlaceholder', 'Your message here...')}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#FFCC66] hover:bg-[#FFCC66]/90 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 w-full"
              >
                {t('contact.sendButton', 'Send Message')}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white/95 p-8 rounded-2xl shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <h2 className="text-3xl font-semibold text-[#FFCC66] mb-6 text-center">{t('contact.infoTitle', 'Our Contact Details')}</h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                <strong className="text-[#FFCC66]">{t('contact.address', 'Address')}:</strong> 123 Beauty Lane, Glamour City, BC 45678
              </p>
              <p>
                <strong className="text-[#FFCC66]">{t('contact.phone', 'Phone')}:</strong> +1 (555) 123-4567
              </p>
              <p>
                <strong className="text-[#FFCC66]">{t('contact.email', 'Email')}:</strong> info@beautycare.com
              </p>
              <p>
                <strong className="text-[#FFCC66]">{t('contact.hours', 'Hours')}:</strong> {t('contact.hoursDetail', 'Mon-Sat: 9 AM - 6 PM, Sunday: Closed')}
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#FFCC66] mb-4">{t('contact.locationTitle', 'Find Us on Map')}</h3>
              <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden shadow-inner border border-[#FFCC66]/20">
                {/* Replace with actual map embed (e.g., Google Maps iframe) */}
                <p className="absolute inset-0 flex items-center justify-center text-gray-500">
                  {t('contact.mapPlaceholder', 'Map placeholder')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .animate-fade-in-down {
          animation: fadeInDown 1s cubic-bezier(0.4,0,0.2,1) both;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Contact; 