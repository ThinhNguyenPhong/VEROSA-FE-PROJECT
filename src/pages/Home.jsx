import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const cardImages = [
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', // Facial
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', // Massage
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80', // Hair
];

const testimonials = [
  {
    quote: 'Beauty Care transformed my skin! The facial treatments are incredibly relaxing and effective.',
    author: 'Sarah J.',
  },
  {
    quote: 'I always leave feeling rejuvenated after a massage. Truly the best spa experience!',
    author: 'Emily R.',
  },
  {
    quote: 'My hair has never looked better. The stylists here are true artists.',
    author: 'Jessica L.',
  },
];

const latestBlogPosts = [
  {
    title: 'Skincare Routine for Glowing Skin',
    excerpt: 'Discover the essential steps for a radiant complexion.',
    img: 'https://images.unsplash.com/photo-1556910609-a78b5c90b62d?auto=format&fit=crop&w=300&q=80',
    link: '/blog',
  },
  {
    title: 'Hair Care Tips for Healthy Locks',
    excerpt: 'Learn how to keep your hair strong and shiny.',
    img: 'https://images.unsplash.com/photo-1603572849553-61a7b4582f3a?auto=format&fit=crop&w=300&q=80',
    link: '/blog',
  },
  {
    title: 'The Benefits of Regular Massages',
    excerpt: 'Explore how therapeutic massages can improve your well-being.',
    img: 'https://images.unsplash.com/photo-1544111306-be592925b42d?auto=format&fit=crop&w=300&q=80',
    link: '/blog',
  },
];

const Home = () => {
  const { t } = useTranslation();

  return (
    <div
      className="h-screen overflow-y-auto w-screen fixed top-0 left-0 pt-16 bg-gradient-to-b from-[#FFCC66]/20 to-white relative overflow-hidden"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1500&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(0.98)',
      }}
    >
      {/* Header / Hero Section */}
      <div className="w-full px-4 py-16 bg-white/90 backdrop-blur-sm">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-[#FFCC66] mb-8 animate-fade-in-down">
          {t('home.title')}
        </h1>
        <p className="max-w-4xl mx-auto text-xl text-center text-gray-700 mb-12 animate-fade-in-up">
          {t('home.subtitle')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Featured Services */}
          {cardImages.map((img, idx) => (
            <div
              key={idx}
              className="bg-white/95 p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 animate-fade-in-up flex flex-col items-center"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <img src={img} alt={`Featured Service ${idx + 1}`} className="w-28 h-28 object-cover rounded-full shadow mb-4 border-4 border-[#FFCC66]" />
              <h2 className="text-2xl font-semibold text-[#FFCC66] mb-2 text-center">{t(`home.featured${idx + 1}.title`)}</h2>
              <p className="text-gray-600 text-center">{t(`home.featured${idx + 1}.description`)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Body Section - About Us */}
      <div className="w-full px-4 py-16 bg-[#FFCC66]/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-[#FFCC66] mb-6">
            {t('home.aboutUs.title')}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {t('home.aboutUs.description')}
          </p>
          <img 
            src="https://images.unsplash.com/photo-1570172619641-657068593368?auto=format&fit=crop&w=1200&q=80"
            alt="About Us"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Body Section - Testimonials */}
      <div className="w-full px-4 py-16 bg-white/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-[#FFCC66] mb-10">
            {t('home.testimonials.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-[#FFCC66]/10 p-6 rounded-2xl shadow-xl animate-fade-in-up transform hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <p className="text-gray-700 italic mb-4">"{t(`home.testimonials.quote${idx + 1}`, testimonial.quote)}"</p>
                <p className="text-[#FFCC66] font-semibold">- {t(`home.testimonials.author${idx + 1}`, testimonial.author)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Body Section - Call to Action */}
      <div className="w-full px-4 py-20 bg-[#FFCC66] text-white text-center animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            {t('home.cta.title')}
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            {t('home.cta.description')}
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#FFCC66] font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
          >
            {t('home.cta.button')}
          </Link>
        </div>
      </div>

      {/* Body Section - Latest Blog Posts */}
      <div className="w-full px-4 py-16 bg-[#FFCC66]/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-[#FFCC66] mb-10">
            {t('home.latestBlog.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestBlogPosts.map((post, idx) => (
              <Link
                to={post.link}
                key={idx}
                className="bg-white/95 p-6 rounded-2xl shadow-xl flex flex-col items-start animate-fade-in-up transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-40 object-cover rounded-lg shadow mb-4"
                />
                <h3 className="text-xl font-semibold text-[#FFCC66] mb-2 text-left">{t(`home.latestBlog.post${idx + 1}.title`, post.title)}</h3>
                <p className="text-gray-600 text-left">{t(`home.latestBlog.post${idx + 1}.excerpt`, post.excerpt)}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full px-4 py-8 bg-[#FFCC66] text-white text-center">
        <div className="max-w-7xl mx-auto">
          <p className="mb-4 animate-fade-in-up">&copy; {new Date().getFullYear()} {t('footer.copyright', 'Beauty Care. All rights reserved.')}</p>
          <div className="flex justify-center space-x-6 animate-fade-in-up">
            <a href="#" className="text-white hover:text-gray-100 transition-colors duration-200">{t('footer.privacyPolicy', 'Privacy Policy')}</a>
            <span className="text-white/50">|</span>
            <a href="#" className="text-white hover:text-gray-100 transition-colors duration-200">{t('footer.termsOfService', 'Terms of Service')}</a>
          </div>
        </div>
      </footer>

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

export default Home; 