import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { getAllBlogPosts } from '../apis/blogApi/blogApi';

const BlogDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(location.state || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (blog) return;
    const fetchBlog = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getAllBlogPosts();
        const found = Array.isArray(data)
          ? data.find((b) => b.id?.toString() === id?.toString())
          : null;
        setBlog(found);
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError(err.message || 'Không thể tải bài viết');
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id, blog]);

  // Tính thời gian đọc (200 từ/phút)
  const countWords = (text = '') => text.split(/\s+/).filter(Boolean).length;
  const readingTime = blog
    ? Math.max(1, Math.ceil(countWords(blog.content || blog.excerpt) / 200))
    : 0;

  // Render nội dung dạng bullet points
  const renderPoints = (content) => {
    if (!content) return null;
    const points = content.split(/\n+/).map((txt) => txt.trim()).filter(Boolean);
    return (
      <ul className="list-disc list-inside space-y-4">
        {points.map((point, idx) => (
          <li
            key={idx}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {point}
          </li>
        ))}
      </ul>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-[#FFCC66]/20 to-white">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-[#FFCC66] border-gray-300"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-red-50">
        <p className="text-lg text-red-600 mb-4">{error}</p>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-[#FFCC66] text-white rounded-full hover:bg-[#FFCC66]/90 transition"
        >
          ← Quay lại
        </button>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-100">
        <p className="text-lg text-gray-700 mb-4">Không tìm thấy bài viết.</p>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-[#FFCC66] text-white rounded-full hover:bg-[#FFCC66]/90 transition"
        >
          ← Quay lại
        </button>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-br from-[#FFCC66]/30 to-white overflow-hidden">
      {/* Hero */}
      <section className="relative w-full h-1/3 flex-shrink-0 overflow-hidden">
        <img
          src={blog.imageUrl || blog.img || 'https://via.placeholder.com/1200x500'}
          alt={blog.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFCC66]/80 to-transparent" />
        <div className="absolute bottom-8 left-8 text-white max-w-3xl">
          <h1 className="text-5xl font-extrabold drop-shadow-lg leading-tight">
            {blog.title}
          </h1>
          {blog.excerpt && (
            <p className="mt-4 text-xl opacity-90 tracking-wide">
              {blog.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Back Button */}
      <div className="w-full bg-transparent flex justify-start px-8 py-4">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-white/90 text-[#FFCC66] rounded-full shadow-lg hover:shadow-xl transition"
        >
          ← Quay lại
        </button>
      </div>

      {/* Content & Sidebar */}
      <section className="flex flex-1 overflow-hidden">
        {/* Article Section */}
        <article className="flex-1 overflow-y-auto p-10 lg:px-20 bg-white/90 backdrop-blur-sm">
          {renderPoints(blog.content || blog.excerpt)}
        </article>

        {/* Sidebar Section */}
        <aside className="w-80 flex-shrink-0 overflow-y-auto p-8 bg-white/95 backdrop-blur-sm border-l border-gray-200">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm text-gray-500 uppercase tracking-wider">Tác giả</h4>
              <p className="mt-1 text-lg font-semibold text-gray-800">{blog.authorName || blog.authorId}</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500 uppercase tracking-wider">Xuất bản</h4>
              <p className="mt-1 text-lg text-gray-800">
                {blog.publishedAt
                  ? new Date(blog.publishedAt).toLocaleDateString('vi-VN', {
                      day: 'numeric', month: 'long', year: 'numeric'
                    })
                  : '-'}
              </p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500 uppercase tracking-wider">Đọc</h4>
              <p className="mt-1 text-lg text-gray-800">{readingTime} phút</p>
            </div>
            <div>
              <h4 className="text-sm text-gray-500 uppercase tracking-wider">Thể loại</h4>
              <p className="mt-1 text-lg text-gray-800">{blog.type || '-'}</p>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default BlogDetail;
