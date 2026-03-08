import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const icons = [
  'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', // Mission
  'https://cdn-icons-png.flaticon.com/512/1828/1828884.png', // Vision
  'https://cdn-icons-png.flaticon.com/512/190/190411.png',   // Values
];

const Introduction = () => {
  const { t } = useTranslation();

  return (
    <div
      className="h-screen w-screen overflow-y-auto fixed top-0 left-0 pt-16 bg-gradient-to-b from-[#FFCC66]/20 to-white relative overflow-hidden"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1590489955705-79a6140f7d5c?auto=format&fit=crop&w=1500&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(0.98)',
      }}
    >
      <div className="w-full px-4 py-16 bg-white/90 backdrop-blur-sm flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in-down">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#FFCC66] mb-4 leading-tight">
            {t('introduction.hero.headline')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            {t('introduction.hero.subheadline')}
          </p>
          <Link
            to="/services"
            className="inline-block bg-[#FFCC66] hover:bg-[#FFCC66]/90 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            {t('introduction.hero.ctaButton')}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-white/95 p-6 rounded-2xl shadow-2xl flex flex-col items-center animate-fade-in-up">
            <img src={icons[0]} alt="Mission" className="w-20 h-20 object-contain mb-4" />
            <h2 className="text-xl font-semibold text-[#FFCC66] mb-2 text-center">{t('introduction.missionTitle')}</h2>
            <p className="text-gray-600 text-center">{t('introduction.mission')}</p>
          </div>
          <div className="bg-white/95 p-6 rounded-2xl shadow-2xl flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <img src={icons[1]} alt="Vision" className="w-20 h-20 object-contain mb-4" />
            <h2 className="text-xl font-semibold text-[#FFCC66] mb-2 text-center">{t('introduction.visionTitle')}</h2>
            <p className="text-gray-600 text-center">{t('introduction.vision')}</p>
          </div>
          <div className="bg-white/95 p-6 rounded-2xl shadow-2xl flex flex-col items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <img src={icons[2]} alt="Values" className="w-20 h-20 object-contain mb-4" />
            <h2 className="text-xl font-semibold text-[#FFCC66] mb-2 text-center">{t('introduction.valuesTitle')}</h2>
            <p className="text-gray-600 text-center">{t('introduction.values')}</p>
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

export default Introduction; 