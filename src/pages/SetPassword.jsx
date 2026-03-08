import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { setPassword } from '../apis/accountApi/setPasswordApi';

const SetPassword = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const [form, setForm] = useState({
    email: '',
    token: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setForm(f => ({
      ...f,
      email: params.get('email') || '',
      token: params.get('token') || ''
    }));
  }, [search]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      await setPassword({
        token: form.token,
        newPassword: form.newPassword,
        confirmPassword: form.confirmPassword
      });
      setSuccess('Đặt mật khẩu thành công! Bạn có thể đăng nhập.');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setError(
        err.response?.data?.errors?.NewPassword?.[0] ||
        err.response?.data?.errors?.Token?.[0] ||
        err.response?.data?.title ||
        'Đặt mật khẩu thất bại.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    // Wrapper full-screen với background gradient
    <div className="h-screen w-screen bg-gradient-to-b from-[#FFCC66]/20 to-white flex items-center justify-center">
      {/* Form vẫn w-full + max-w-md như cũ, nằm giữa */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/95 p-8 rounded-2xl shadow-2xl border-t-4 border-[#FFCC66]"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-[#FFCC66]">
          Xác nhận Email & Đặt mật khẩu
        </h2>

        {success && <div className="text-green-600 text-center mb-4">{success}</div>}
        {error   && <div className="text-red-600 text-center mb-4">{error}</div>}

        <div className="grid gap-4">
          <input
            name="email"
            value={form.email}
            readOnly
            className="border rounded px-3 py-2 bg-gray-100 w-full"
          />
          <input
           type="hidden"
            name="token"
            value={form.token}
            readOnly
            className="border rounded px-3 py-2 bg-gray-100 w-full"
          />
          <input
            name="newPassword"
            type="password"
            placeholder="Mật khẩu mới"
            value={form.newPassword}
            onChange={handleChange}
            className="border rounded px-3 py-2 focus:ring-2 focus:ring-[#FFCC66] w-full"
            required
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Nhập lại mật khẩu mới"
            value={form.confirmPassword}
            onChange={handleChange}
            className="border rounded px-3 py-2 focus:ring-2 focus:ring-[#FFCC66] w-full"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-6 py-3 bg-[#FFCC66] text-[#6C63FF] font-bold rounded-lg shadow hover:bg-[#FFCC66]/90 disabled:opacity-60"
        >
          {loading ? 'Đang xác nhận...' : 'Xác nhận & Đặt mật khẩu'}
        </button>

        <div className="mt-4 text-center">
          <span
            onClick={() => navigate('/login')}
            className="text-[#6C63FF] font-semibold cursor-pointer hover:underline"
          >
            Đăng nhập
          </span>
        </div>
      </form>
    </div>
  );
};

export default SetPassword;
