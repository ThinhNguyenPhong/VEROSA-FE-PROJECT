import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { getAllServices } from '../apis/servicesApi/servicesApi';

const Services = () => {
  const { t } = useTranslation();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchServices() {
      setLoading(true);
      setError(null);
      try {
        const data = await getAllServices();
        setServices(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch services');
      } finally {
        setLoading(false);
      }
    }
    fetchServices();
  }, []);

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

        {/* Loading and Error States */}
        {loading && (
          <div className="text-center text-lg text-gray-500 mb-8">Loading services...</div>
        )}
        {error && (
          <div className="text-center text-lg text-red-500 mb-8">{error}</div>
        )}

        {/* Services Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {services.map((service, idx) => {
              const name = service.name || service.title || '';
              const description = service.description || '';
              const price = service.price !== undefined ? service.price : '';
              const imageUrl = service.imageUrl || service.img || service.image || 'https://via.placeholder.com/112';
              const createdAt = service.createdAt;
              return (
                <div
                  key={service.id || name || idx}
                  className="bg-white/95 p-8 rounded-3xl shadow-3xl flex flex-col items-center animate-fade-in-up transform hover:scale-105 transition-transform duration-300 group"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="relative mb-6">
                    <img
                      src={imageUrl}
                      alt={name}
                      className="w-44 h-44 object-cover rounded-2xl shadow-2xl border-4 border-[#FFCC66] transition-transform duration-300 group-hover:scale-110"
                      style={{ background: '#f8f8f8' }}
                    />
                  </div>
                  <h2 className="text-2xl font-bold text-[#FFCC66] mb-3 text-center drop-shadow-lg">{name}</h2>
                  <p className="text-gray-700 text-base text-center mb-4 px-2">{description}</p>
                  {createdAt && (
                    <p className="text-gray-400 text-xs mb-2 italic">{`Created at: ${new Date(createdAt).toLocaleString()}`}</p>
                  )}
                  <div className="w-full mt-4">
                    <p className="text-[#FFCC66] font-bold text-xl text-center mt-4 drop-shadow">{typeof price === 'number' ? price.toLocaleString() + ' VND' : price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

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