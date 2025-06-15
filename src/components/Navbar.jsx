import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="w-full px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-pink-600">
            Beauty Care
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-pink-600">{t('nav.home')}</Link>
            <Link to="/introduction" className="text-gray-600 hover:text-pink-600">{t('nav.introduction')}</Link>
            <Link to="/services" className="text-gray-600 hover:text-pink-600">{t('nav.services')}</Link>
            <Link to="/album" className="text-gray-600 hover:text-pink-600">{t('nav.album')}</Link>
            <Link to="/blog" className="text-gray-600 hover:text-pink-600">{t('nav.blog')}</Link>
            <Link to="/contact" className="text-gray-600 hover:text-pink-600">{t('nav.contact')}</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => changeLanguage('en')}
              className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-pink-600 text-white' : 'bg-gray-200'}`}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage('vi')}
              className={`px-3 py-1 rounded ${i18n.language === 'vi' ? 'bg-pink-600 text-white' : 'bg-gray-200'}`}
            >
              VI
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 