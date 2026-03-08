import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../apis/accountApi/registerApi';

const socialLinks = [
  {
    href: 'https://facebook.com/',
    label: 'Facebook',
    icon: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
    ),
    color: '#1877F3',
  },
  {
    href: 'https://instagram.com/',
    label: 'Instagram',
    icon: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.334 3.678 1.315c-.98.98-1.187 2.092-1.245 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.612.058 1.281.265 2.393 1.245 3.373.98.98 2.092 1.187 3.373 1.245C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.265 3.373-1.245.98-.98 1.187-2.092 1.245-3.373.058-1.28.07-1.689.07-7.612 0-5.923-.012-6.332-.07-7.612-.058-1.281-.265-2.393-1.245-3.373-.98-.98-2.092-1.187-3.373-1.245C15.668.012 15.259 0 12 0z"/><circle cx="12" cy="12" r="3.5"/><circle cx="18.406" cy="5.594" r="1.44"/></svg>
    ),
    color: '#E4405F',
  },
  {
    href: 'https://zalo.me/',
    label: 'Zalo',
    icon: (
      <svg width="28" height="28" fill="currentColor" viewBox="0 0 48 48"><g><ellipse cx="24" cy="24" rx="20" ry="20" fill="#0084FF"/><path d="M24 8C15.163 8 8 15.163 8 24c0 8.837 7.163 16 16 16s16-7.163 16-16c0-8.837-7.163-16-16-16zm0 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z" fill="#fff"/></g></svg>
    ),
    color: '#0084FF',
  },
];

const RegisterForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    dateOfBirth: '',
    username: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
      await register(form);
      setSuccess('Đăng ký thành công! Vui lòng kiểm tra email để xác nhận.');
      // setTimeout(() => navigate('/set-password'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Đăng ký thất bại.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-[#FFCC66]/30 via-white to-[#6C63FF]/10 overflow-hidden relative">
      <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80" alt="bg" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none select-none" />
      <form
        className="bg-white/95 p-8 rounded-2xl shadow-2xl w-full max-w-md border-t-4 border-[#FFCC66] animate-fade-in relative z-10"
        onSubmit={handleSubmit}
        style={{ animationDelay: '0.1s', animationDuration: '0.8s' }}
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-[#FFCC66]">Đăng ký tài khoản</h2>
        {success && <div className="text-green-600 text-center mb-4">{success}</div>}
        {error && <div className="text-red-600 text-center mb-4">{error}</div>}
        <div className="grid grid-cols-1 gap-4">
          <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="Họ" className="border rounded px-3 py-2 focus:ring-2 focus:ring-[#FFCC66]" required />
          <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Tên" className="border rounded px-3 py-2 focus:ring-2 focus:ring-[#FFCC66]" required />
          <input name="phoneNumber" value={form.phoneNumber} onChange={handleChange} placeholder="Số điện thoại" className="border rounded px-3 py-2 focus:ring-2 focus:ring-[#FFCC66]" required />
          <input name="dateOfBirth" value={form.dateOfBirth} onChange={handleChange} type="date" className="border rounded px-3 py-2 focus:ring-2 focus:ring-[#FFCC66]" required />
          <input name="username" value={form.username} onChange={handleChange} placeholder="Tên đăng nhập" className="border rounded px-3 py-2 focus:ring-2 focus:ring-[#FFCC66]" required />
          <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" className="border rounded px-3 py-2 focus:ring-2 focus:ring-[#FFCC66]" required />
        </div>
        <button
          type="submit"
          className="w-full mt-6 py-3 bg-[#FFCC66] text-[#6C63FF] font-bold rounded-lg shadow hover:bg-[#FFCC66]/90 transition-all disabled:opacity-60"
          disabled={loading}
        >
          {loading ? 'Đang đăng ký...' : 'Đăng ký'}
        </button>
        <div className="mt-4 text-center">
          <span className="text-gray-600">Đã có tài khoản? </span>
          <span
            className="text-[#6C63FF] font-semibold cursor-pointer hover:underline"
            onClick={() => navigate('/login')}
          >
            Đăng nhập
          </span>
        </div>
        <div className="mt-8 flex justify-center gap-6">
          {socialLinks.map((s, idx) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white shadow p-2 hover:scale-110 hover:bg-[#FFCC66]/20 transition-all border border-gray-200"
              title={s.label}
              style={{ color: s.color }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </form>
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.8s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(40px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default RegisterForm; 