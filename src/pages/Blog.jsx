import React from 'react';
import { useTranslation } from 'react-i18next';

const blogPosts = [
  {
    title: 'Skincare Routine for Glowing Skin',
    excerpt: 'Discover the essential steps for a radiant complexion.',
    img: 'https://images.unsplash.com/photo-1556910609-a78b5c90b62d?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Hair Care Tips for Healthy Locks',
    excerpt: 'Learn how to keep your hair strong and shiny.',
    img: 'https://images.unsplash.com/photo-1603572849553-61a7b4582f3a?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'The Benefits of Regular Massages',
    excerpt: 'Explore how therapeutic massages can improve your well-being.',
    img: 'https://images.unsplash.com/photo-1544111306-be592925b42d?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Makeup Trends for Every Season',
    excerpt: 'Stay up-to-date with the latest beauty looks.',
    img: 'https://images.unsplash.com/photo-1620202720182-385038c92a9b?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Nail Art Inspirations',
    excerpt: 'Get creative with these stunning nail designs.',
    img: 'https://images.unsplash.com/photo-1506197603-d0285097f48b?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Diving Deep into Spa Treatments',
    excerpt: 'Understand the healing power of spa therapies.',
    img: 'https://images.unsplash.com/photo-1574867140809-54316a73562a?auto=format&fit=crop&w=600&q=80',
  },
];

const Blog = () => {
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
          {t('blog.title', 'Our Blog')}
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-center text-gray-700 mb-12 animate-fade-in-up">
          {t('blog.description', 'Stay informed with our latest beauty insights, tips, and trends.')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl shadow-2xl flex flex-col items-start animate-fade-in-up transform hover:scale-105 transition-all duration-300 cursor-pointer" style={{ backgroundColor: '#FFCC66', animationDelay: `${idx * 0.05}s` }}
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg shadow mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 text-left" style={{ color: '#FFFFFF' }}>{t(`blog.post${idx + 1}.title`, post.title)}</h2>
              <p className="text-left" style={{ color: '#FFFFFF' }}>{t(`blog.post${idx + 1}.excerpt`, post.excerpt)}</p>
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

export default Blog; 