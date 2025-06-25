import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllBlogPosts } from '../apis/blogApi/blogApi';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Blog = () => {
  const { t } = useTranslation();
  const query = useQuery();
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const blog = location.state;

  // Lấy params từ URL nếu có
  const params = {
    title: query.get('title') || '',
    type: query.get('type') || '',
    authorId: query.get('authorId') || '',
    sort_by: query.get('sort_by') || '',
    sort_desc: query.get('sort_desc') || '',
    page_number: query.get('page_number') || 1,
    page_size: query.get('page_size') || 10,
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        const queryString = Object.entries(params)
          .filter(([_, v]) => v !== '' && v !== null && v !== undefined)
          .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
          .join('&');
        const data = await getAllBlogPosts(queryString);
        console.log('Blog data:', data);
        setBlogPosts(data);
      } catch (err) {
        setError(err.message || 'Failed to fetch blogs');
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
    // eslint-disable-next-line
  }, [window.location.search]); // Gọi lại khi URL thay đổi

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
        {loading && <div className="text-center text-lg text-gray-500 mb-8">Loading blogs...</div>}
        {error && <div className="text-center text-lg text-red-500 mb-8">{error}</div>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts && blogPosts.length > 0 ? blogPosts.map((post, idx) => (
            <div
              key={post.id || idx}
              className="p-6 rounded-2xl shadow-2xl flex flex-col items-start animate-fade-in-up transform hover:scale-105 transition-all duration-300 cursor-pointer" style={{ backgroundColor: '#FFCC66', animationDelay: `${idx * 0.05}s` }}
              onClick={() => navigate(`/blog/${post.id || idx}`, { state: post })}
            >
              <img
                src={post.img || post.imageUrl || 'https://via.placeholder.com/600x200'}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg shadow mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 text-left" style={{ color: '#FFFFFF' }}>{post.title}</h2>
              <p className="text-left" style={{ color: '#FFFFFF' }}>{post.excerpt || post.description}</p>
            </div>
          )) : <div className="col-span-3 text-center text-gray-500">No blogs found.</div>}
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