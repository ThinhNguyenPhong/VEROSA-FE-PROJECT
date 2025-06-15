import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Facial Treatments',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Massage Therapy',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Hair Styling',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Nail Care',
    img: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Makeup Services',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Spa Packages',
    img: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=400&q=80',
  },
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <div
      className="h-screen overflow-y-auto w-screen fixed top-0 left-0 pt-16 bg-gradient-to-b from-[#FFCC66]/20 to-white relative overflow-hidden"
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
          {t('services.title')}
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-center text-gray-700 mb-12 animate-fade-in-up">
          {t('services.description')}
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="bg-white/95 p-6 rounded-2xl shadow-2xl flex flex-col items-center animate-fade-in-up transform hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <img src={service.img} alt={service.title} className="w-28 h-28 object-cover rounded-full shadow mb-4 border-4 border-[#FFCC66]" />
              <h2 className="text-xl font-semibold text-[#FFCC66] mb-2 text-center">{t(`services.${service.title}.title`)}</h2>
              <p className="text-gray-600 text-center mb-4">{t(`services.${service.title}.desc`)}</p>
              <div className="w-full mt-4">
                <h3 className="text-lg font-semibold text-[#FFCC66] mb-2">{t(`services.${service.title}.details.title`)}</h3>
                <ul className="space-y-2 mb-4">
                  {t(`services.${service.title}.details.items`, { returnObjects: true }).map((detail, index) => (
                    <li key={index} className="text-gray-600 flex items-center">
                      <span className="text-[#FFCC66] mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
                <p className="text-[#FFCC66] font-semibold text-center mt-4">{t(`services.${service.title}.price`)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers Section */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="bg-[#FFCC66]/10 p-8 rounded-2xl shadow-xl animate-fade-in-up">
            <h2 className="text-3xl font-bold text-[#FFCC66] mb-6 text-center">{t('services.specialOffers.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/95 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-[#FFCC66] mb-3">{t('services.specialOffers.newClient.title')}</h3>
                <p className="text-gray-600 mb-4">{t('services.specialOffers.newClient.description')}</p>
                <p className="text-[#FFCC66] font-semibold">{t('services.specialOffers.newClient.price')}</p>
              </div>
              <div className="bg-white/95 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-[#FFCC66] mb-3">{t('services.specialOffers.membership.title')}</h3>
                <p className="text-gray-600 mb-4">{t('services.specialOffers.membership.description')}</p>
                <p className="text-[#FFCC66] font-semibold">{t('services.specialOffers.membership.price')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold text-[#FFCC66] mb-4">{t('services.cta.title')}</h2>
          <p className="text-gray-700 mb-8">{t('services.cta.description')}</p>
          <Link
            to="/contact"
            className="inline-block bg-[#FFCC66] hover:bg-[#FFCC66]/90 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
          >
            {t('services.cta.button')}
          </Link>
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

export default Services; 