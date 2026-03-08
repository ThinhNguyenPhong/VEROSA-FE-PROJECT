import React from 'react';
import { useTranslation } from 'react-i18next';

const albumImages = [
  'https://images.unsplash.com/photo-1549429712-4ee4587ce90b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1571292157010-c48d94c9656a?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1596462502804-9844994f2762?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1599307374668-3d127b8782a1?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1547846583-0590807b539c?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1506197603-d0285097f48b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1590487989914-1e0e4b8b6033?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1580975760670-36a5323a6358?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1571292157010-c48d94c9656a?auto=format&fit=crop&w=600&q=80', 
  'https://images.unsplash.com/photo-1596462502804-9844994f2762?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1599307374668-3d127b8782a1?auto=format&fit=crop&w=600&q=80', 
  'https://images.unsplash.com/photo-1547846583-0590807b539c?auto=format&fit=crop&w=600&q=80',
];

const Album = () => {
  const { t } = useTranslation();

  return (
    <div
      className="h-screen overflow-y-auto w-screen fixed top-0 left-0 pt-16 bg-gradient-to-b from-pink-100/80 to-white relative overflow-hidden"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1549429712-4ee4515efd9b?auto=format&fit=crop&w=1500&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(0.98)',
      }}
    >
      <div className="w-full px-4 py-16 bg-[#FFFFFF]/70 backdrop-blur-sm">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in-down" style={{ color: '#FFCC66' }}>
          {t('album.title', 'Our Beauty Album')}
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-center mb-12 animate-fade-in-up" style={{ color: '#FFFFFF' }}>
          {t('album.description', 'Explore our collection of beautiful moments and transformations.')}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {albumImages.map((image, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-lg shadow-xl animate-fade-in-up transform hover:scale-105 transition-all duration-300" style={{ backgroundColor: '#FFCC66', animationDelay: `${idx * 0.05}s` }}
            >
              <img
                src={image}
                alt={`Album Image ${idx + 1}`}
                className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-[#FFFFFF] bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-lg font-semibold" style={{ color: '#FFCC66' }}>{t('album.viewDetail', 'View')}</p>
              </div>
            </div>
          ))}
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

export default Album; 