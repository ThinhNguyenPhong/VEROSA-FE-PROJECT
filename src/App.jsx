import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Services from './pages/Services';
import Album from './pages/Album';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import RegisterForm from './pages/RegisterForm';
import SetPassword from './pages/SetPassword';
import LoginForm from './pages/LoginForm';
import './i18n';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-gray-50">
        <Navbar />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/services" element={<Services />} />
            <Route path="/album" element={<Album />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/set-password" element={<SetPassword />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
