import React from 'react';
import { useTranslation } from 'react-i18next';
import { createContacts } from '../apis/contactApi/contactApi';

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    isResolved: false,
  });
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(null);
  const [error, setError] = React.useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      await createContacts(form);
      setSuccess(t('contact.success', 'Your message has been sent!'));
      setForm({ name: '', email: '', phone: '', subject: '', message: '', isResolved: false });
    } catch (err) {
      setError(err.message || t('contact.error', 'Failed to send message.'));
    } finally {
      setLoading(false);
    }
  };

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
            <form className="space-y-6" onSubmit={handleSubmit}>
              {success && <div className="text-green-600 text-center font-semibold mb-2">{success}</div>}
              {error && <div className="text-red-600 text-center font-semibold mb-2">{error}</div>}
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">{t('contact.nameLabel', 'Name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#FFCC66] transition-all duration-200"
                  placeholder={t('contact.namePlaceholder', 'Your Name')}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">{t('contact.emailLabel', 'Email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#FFCC66] transition-all duration-200"
                  placeholder={t('contact.emailPlaceholder', 'your@example.com')}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">{t('contact.phoneLabel', 'Phone')}</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#FFCC66] transition-all duration-200"
                  placeholder={t('contact.phonePlaceholder', 'Your phone number')}
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">{t('contact.subjectLabel', 'Subject')}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#FFCC66] transition-all duration-200"
                  placeholder={t('contact.subjectPlaceholder', 'Subject')}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">{t('contact.messageLabel', 'Message')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#FFCC66] transition-all duration-200"
                  placeholder={t('contact.messagePlaceholder', 'Your message here...')}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#FFCC66] hover:bg-[#FFCC66]/90 text-[#6C63FF] font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 w-full disabled:opacity-60"
                style={{ backgroundColor: '#FFCC66', borderColor: '#FFCC66' }}
                disabled={loading}
              >
                {loading ? t('contact.sending', 'Sending...') : t('contact.sendButton', 'Send Message')}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white/95 p-8 rounded-2xl shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <h2 className="text-3xl font-semibold text-[#FFCC66] mb-6 text-center">{t('contact.infoTitle', 'Our Contact Details')}</h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                <strong className="text-[#FFCC66]">{t('contact.address', 'Address')}:</strong> 51 Hoàng Trọng Mậu, KDT Himlam, Phường Tân Hưng, Quận 7, Thành Phố Hồ Chí Minh
              </p>
              <p>
                <strong className="text-[#FFCC66]">{t('contact.phone', 'Phone')}:</strong> 0914884112
              </p>
              <p>
                <strong className="text-[#FFCC66]">{t('contact.email', 'Email')}:</strong> VEROSABEAUTYCARE@GMAIL.COM
              </p>
              <p>
                <strong className="text-[#FFCC66]">{t('contact.hours', 'Hours')}:</strong> {t('contact.hoursDetail', 'Mon-Sat: 8:30 AM - 6 PM, Sunday: Closed')}
              </p>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#FFCC66] mb-4">{t('contact.locationTitle', 'Find Us on Map')}</h3>
              <div className="relative w-full h-64 bg-gray-100 rounded-lg overflow-hidden shadow-inner border border-[#FFCC66]/20">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.211393698614!2d106.6937312!3d10.7398524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f0000d20d89%3A0xd1cca8e83492a4f7!2zVmnhu4d0IFRow6BtIE3hu7kgVkVST1NB!5e0!3m2!1svi!2s!4v1718000000000!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
              <div className="flex justify-center mt-4">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Viện+Thẩm+Mỹ+VEROSA,51+Hoàng+Trọng+Mậu,Phường+Tân+Hưng,Quận+7,Thành+Phố+Hồ+Chí+Minh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#FFCC66] hover:bg-[#FFCC66]/90 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300"
                >
                  Xem đường đi trên Google Maps
                </a>
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