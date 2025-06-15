import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        introduction: 'Introduction',
        services: 'Services',
        album: 'Album',
        blog: 'Blog',
        contact: 'Contact'
      },
      home: {
        title: 'Welcome to Beauty Care',
        subtitle: 'Your journey to beauty and wellness starts here',
        featured1: {
          title: 'Facial Treatments',
          description: 'Experience our premium facial treatments for radiant skin'
        },
        featured2: {
          title: 'Massage Therapy',
          description: 'Relax and rejuvenate with our therapeutic massage services'
        },
        featured3: {
          title: 'Hair Care',
          description: 'Transform your look with our expert hair styling services'
        },
        aboutUs: {
          title: 'About Us',
          description: 'At Beauty Care, we are dedicated to providing a serene and luxurious escape where you can rejuvenate your mind, body, and spirit. Our expert team offers a wide range of personalized treatments, using only the finest products and techniques to ensure exceptional results and a truly unforgettable experience. We believe in holistic beauty, combining inner wellness with outer radiance to help you feel confident and beautiful every day.'
        },
        testimonials: {
          title: 'What Our Clients Say',
          quote1: 'Beauty Care transformed my skin! The facial treatments are incredibly relaxing and effective.',
          author1: 'Sarah J.',
          quote2: 'I always leave feeling rejuvenated after a massage. Truly the best spa experience!',
          author2: 'Emily R.',
          quote3: 'My hair has never looked better. The stylists here are true artists.',
          author3: 'Jessica L.'
        },
        cta: {
          title: 'Ready to Experience True Beauty?',
          description: 'Book your appointment today and let our experts pamper you with exceptional care and personalized treatments.',
          button: 'Book Now'
        },
        latestBlog: {
          title: 'Latest from Our Blog',
          post1: {
            title: 'Skincare Routine for Glowing Skin',
            excerpt: 'Discover the essential steps for a radiant complexion.'
          },
          post2: {
            title: 'Hair Care Tips for Healthy Locks',
            excerpt: 'Learn how to keep your hair strong and shiny.'
          },
          post3: {
            title: 'The Benefits of Regular Massages',
            excerpt: 'Explore how therapeutic massages can improve your well-being.'
          }
        }
      },
      introduction: {
        title: 'About Beauty Care',
        description: 'At Beauty Care, we are passionate about helping you look and feel your best. Our team of experienced professionals is dedicated to providing top-quality beauty and wellness services in a relaxing and luxurious environment.',
        hero: {
          headline: 'Awaken Your Natural Glow',
          subheadline: 'Plant-based skincare crafted for deep nourishment—reveal softer, smoother skin every day.',
          ctaButton: 'Discover the Range'
        },
        missionTitle: 'Our Mission',
        mission: 'To deliver exceptional beauty and wellness services that enhance confidence and well-being.',
        visionTitle: 'Our Vision',
        vision: 'To be the leading beauty care destination, known for innovation, quality, and customer satisfaction.',
        valuesTitle: 'Our Values',
        values: 'Professionalism, care, and a commitment to your beauty and wellness journey.'
      },
      services: {
        title: 'Our Services',
        description: 'Discover our wide range of beauty and wellness services designed to help you look and feel your best.',
        'Facial Treatments': {
          title: 'Facial Treatments',
          desc: 'Premium facials for glowing, healthy skin using the latest techniques and products.',
          details: {
            title: 'Services Include:',
            items: [
              'Deep cleansing facial',
              'Anti-aging treatment',
              'Hydrating facial',
              'Acne treatment',
              'Brightening facial'
            ]
          },
          price: 'From $80'
        },
        'Massage Therapy': {
          title: 'Massage Therapy',
          desc: 'Relax and rejuvenate with our range of therapeutic massage services.',
          details: {
            title: 'Services Include:',
            items: [
              'Swedish massage',
              'Deep tissue massage',
              'Hot stone massage',
              'Aromatherapy massage',
              'Sports massage'
            ]
          },
          price: 'From $90'
        },
        'Hair Styling': {
          title: 'Hair Styling',
          desc: 'Transform your look with expert haircuts, coloring, and styling.',
          details: {
            title: 'Services Include:',
            items: [
              'Haircut & styling',
              'Hair coloring',
              'Highlights & balayage',
              'Keratin treatment',
              'Hair extensions'
            ]
          },
          price: 'From $60'
        },
        'Nail Care': {
          title: 'Nail Care',
          desc: 'Manicures, pedicures, and nail art for beautiful hands and feet.',
          details: {
            title: 'Services Include:',
            items: [
              'Classic manicure',
              'Gel manicure',
              'Spa pedicure',
              'Nail art design',
              'Nail extensions'
            ]
          },
          price: 'From $40'
        },
        'Makeup Services': {
          title: 'Makeup Services',
          desc: 'Professional makeup for all occasions, from natural to glamorous.',
          details: {
            title: 'Services Include:',
            items: [
              'Bridal makeup',
              'Special occasion makeup',
              'Natural makeup',
              'Glamorous makeup',
              'Makeup lessons'
            ]
          },
          price: 'From $70'
        },
        'Spa Packages': {
          title: 'Spa Packages',
          desc: 'Indulge in our luxurious spa packages for total relaxation and renewal.',
          details: {
            title: 'Services Include:',
            items: [
              'Full day spa package',
              'Couples spa package',
              'Detox spa package',
              'Anti-stress package',
              'Beauty & wellness package'
            ]
          },
          price: 'From $150'
        },
        specialOffers: {
          title: 'Special Offers',
          newClient: {
            title: 'New Client Package',
            description: 'Get 20% off your first visit with our comprehensive beauty package.',
            price: '$120 (Regular $150)'
          },
          membership: {
            title: 'Monthly Membership',
            description: 'Enjoy exclusive benefits and discounts with our monthly membership program.',
            price: '$199/month'
          }
        },
        cta: {
          title: 'Ready to Experience Our Services?',
          description: 'Book your appointment today and let our experts pamper you with exceptional care.',
          button: 'Book Now'
        }
      },
      album: {
        title: 'Our Beauty Album',
        description: 'Explore our collection of beautiful moments and transformations.',
        viewDetail: 'View'
      },
      blog: {
        title: 'Our Blog',
        description: 'Stay informed with our latest beauty insights, tips, and trends.',
        post1: {
          title: 'Skincare Routine for Glowing Skin',
          excerpt: 'Discover the essential steps for a radiant complexion.'
        },
        post2: {
          title: 'Hair Care Tips for Healthy Locks',
          excerpt: 'Learn how to keep your hair strong and shiny.'
        },
        post3: {
          title: 'The Benefits of Regular Massages',
          excerpt: 'Explore how therapeutic massages can improve your well-being.'
        },
        post4: {
          title: 'Makeup Trends for Every Season',
          excerpt: 'Stay up-to-date with the latest beauty looks.'
        },
        post5: {
          title: 'Nail Art Inspirations',
          excerpt: 'Get creative with these stunning nail designs.'
        },
        post6: {
          title: 'Diving Deep into Spa Treatments',
          excerpt: 'Understand the healing power of spa therapies.'
        }
      },
      contact: {
        title: 'Contact Us',
        description: 'We would love to hear from you! Please fill out the form below or reach out to us using the contact details provided.',
        formTitle: 'Send Us a Message',
        nameLabel: 'Name',
        namePlaceholder: 'Your Name',
        emailLabel: 'Email',
        emailPlaceholder: 'your@example.com',
        messageLabel: 'Message',
        messagePlaceholder: 'Your message here...',
        sendButton: 'Send Message',
        infoTitle: 'Our Contact Details',
        address: 'Address',
        phone: 'Phone',
        email: 'Email',
        hours: 'Hours',
        hoursDetail: 'Mon-Sat: 9 AM - 6 PM, Sunday: Closed',
        locationTitle: 'Find Us on Map',
        mapPlaceholder: 'Map placeholder'
      },
      footer: {
        copyright: 'Beauty Care. All rights reserved.',
        privacyPolicy: 'Privacy Policy',
        termsOfService: 'Terms of Service'
      }
    }
  },
  vi: {
    translation: {
      nav: {
        home: 'Trang Chủ',
        introduction: 'Giới Thiệu',
        services: 'Dịch Vụ',
        album: 'Thư Viện',
        blog: 'Blog',
        contact: 'Liên Hệ'
      },
      home: {
        title: 'Chào Mừng Đến Với Beauty Care',
        subtitle: 'Hành trình làm đẹp của bạn bắt đầu từ đây',
        featured1: {
          title: 'Chăm Sóc Da Mặt',
          description: 'Trải nghiệm các liệu trình chăm sóc da mặt cao cấp'
        },
        featured2: {
          title: 'Massage Trị Liệu',
          description: 'Thư giãn và tái tạo với các dịch vụ massage trị liệu'
        },
        featured3: {
          title: 'Chăm Sóc Tóc',
          description: 'Thay đổi diện mạo với dịch vụ tạo kiểu tóc chuyên nghiệp'
        },
        aboutUs: {
          title: 'Về Chúng Tôi',
          description: 'Tại Beauty Care, chúng tôi tận tâm mang đến một không gian thư thái và sang trọng, nơi bạn có thể làm mới tâm trí, cơ thể và tinh thần. Đội ngũ chuyên gia của chúng tôi cung cấp đa dạng các liệu pháp cá nhân hóa, chỉ sử dụng những sản phẩm và kỹ thuật tốt nhất để đảm bảo kết quả vượt trội và trải nghiệm thực sự khó quên. Chúng tôi tin vào vẻ đẹp toàn diện, kết hợp sức khỏe bên trong với vẻ rạng rỡ bên ngoài để giúp bạn cảm thấy tự tin và xinh đẹp mỗi ngày.'
        },
        testimonials: {
          title: 'Khách Hàng Nói Gì',
          quote1: 'Beauty Care đã thay đổi làn da của tôi! Các liệu trình chăm sóc da mặt vô cùng thư giãn và hiệu quả.',
          author1: 'Sarah J.',
          quote2: 'Tôi luôn cảm thấy trẻ hóa sau mỗi buổi massage. Thực sự là trải nghiệm spa tuyệt vời nhất!',
          author2: 'Emily R.',
          quote3: 'Tóc của tôi chưa bao giờ đẹp hơn thế. Các nhà tạo mẫu ở đây là những nghệ sĩ thực thụ.',
          author3: 'Jessica L.'
        },
        cta: {
          title: 'Sẵn Sàng Trải Nghiệm Vẻ Đẹp Thật Sự?',
          description: 'Đặt lịch hẹn ngay hôm nay và để các chuyên gia của chúng tôi chăm sóc bạn bằng sự tận tâm đặc biệt và các liệu pháp cá nhân hóa.',
          button: 'Đặt Lịch Ngay'
        },
        latestBlog: {
          title: 'Mới Nhất Từ Blog Của Chúng Tôi',
          post1: {
            title: 'Quy Trình Chăm Sóc Da Để Có Làn Da Rạng Rỡ',
            excerpt: 'Khám phá các bước thiết yếu để có làn da sáng khỏe.'
          },
          post2: {
            title: 'Mẹo Chăm Sóc Tóc Khỏe Mạnh',
            excerpt: 'Tìm hiểu cách giữ cho mái tóc của bạn chắc khỏe và bóng mượt.'
          },
          post3: {
            title: 'Lợi Ích Của Việc Massage Thường Xuyên',
            excerpt: 'Khám phá cách massage trị liệu có thể cải thiện sức khỏe của bạn.'
          }
        }
      },
      introduction: {
        title: 'Về Beauty Care',
        description: 'Tại Beauty Care, chúng tôi đam mê giúp bạn trở nên xinh đẹp và tự tin hơn. Đội ngũ chuyên gia giàu kinh nghiệm của chúng tôi cam kết mang đến các dịch vụ làm đẹp và chăm sóc sức khỏe chất lượng cao trong không gian thư giãn, sang trọng.',
        hero: {
          headline: 'Đánh Thức Vẻ Đẹp Tự Nhiên Của Bạn',
          subheadline: 'Chăm sóc da từ thực vật được chế tác để nuôi dưỡng sâu—làm lộ làn da mềm mại, mịn màng hơn mỗi ngày.',
          ctaButton: 'Khám Phá Sản Phẩm'
        },
        missionTitle: 'Sứ Mệnh',
        mission: 'Cung cấp các dịch vụ làm đẹp và chăm sóc sức khỏe xuất sắc, nâng cao sự tự tin và hạnh phúc cho khách hàng.',
        visionTitle: 'Tầm Nhìn',
        vision: 'Trở thành điểm đến hàng đầu về làm đẹp, nổi bật với sự đổi mới, chất lượng và sự hài lòng của khách hàng.',
        valuesTitle: 'Giá Trị Cốt Lõi',
        values: 'Chuyên nghiệp, tận tâm và cam kết đồng hành cùng hành trình làm đẹp của bạn.'
      },
      services: {
        title: 'Dịch Vụ Của Chúng Tôi',
        description: 'Khám phá các dịch vụ làm đẹp và chăm sóc sức khỏe đa dạng giúp bạn tỏa sáng và tự tin hơn.',
        'Facial Treatments': {
          title: 'Chăm Sóc Da Mặt',
          desc: 'Liệu trình chăm sóc da mặt cao cấp giúp làn da rạng rỡ, khỏe mạnh với công nghệ và sản phẩm hiện đại.',
          details: {
            title: 'Bao Gồm Các Dịch Vụ:',
            items: [
              'Chăm sóc da sâu',
              'Điều trị chống lão hóa',
              'Chăm sóc da cấp ẩm',
              'Điều trị mụn',
              'Làm sáng da'
            ]
          },
          price: 'Từ 1.800.000đ'
        },
        'Massage Therapy': {
          title: 'Massage Trị Liệu',
          desc: 'Thư giãn và phục hồi năng lượng với các dịch vụ massage trị liệu chuyên nghiệp.',
          details: {
            title: 'Bao Gồm Các Dịch Vụ:',
            items: [
              'Massage Thụy Điển',
              'Massage mô sâu',
              'Massage đá nóng',
              'Massage tinh dầu',
              'Massage thể thao'
            ]
          },
          price: 'Từ 2.000.000đ'
        },
        'Hair Styling': {
          title: 'Tạo Kiểu Tóc',
          desc: 'Thay đổi diện mạo với các kiểu tóc, nhuộm và tạo kiểu chuyên nghiệp.',
          details: {
            title: 'Bao Gồm Các Dịch Vụ:',
            items: [
              'Cắt & tạo kiểu tóc',
              'Nhuộm tóc',
              'Highlight & balayage',
              'Điều trị keratin',
              'Nối tóc'
            ]
          },
          price: 'Từ 1.300.000đ'
        },
        'Nail Care': {
          title: 'Chăm Sóc Móng',
          desc: 'Dịch vụ làm móng, vẽ móng nghệ thuật giúp đôi tay và đôi chân thêm xinh đẹp.',
          details: {
            title: 'Bao Gồm Các Dịch Vụ:',
            items: [
              'Manicure cổ điển',
              'Manicure gel',
              'Pedicure spa',
              'Vẽ móng nghệ thuật',
              'Nối móng'
            ]
          },
          price: 'Từ 900.000đ'
        },
        'Makeup Services': {
          title: 'Trang Điểm',
          desc: 'Trang điểm chuyên nghiệp cho mọi dịp, từ tự nhiên đến sang trọng.',
          details: {
            title: 'Bao Gồm Các Dịch Vụ:',
            items: [
              'Trang điểm cô dâu',
              'Trang điểm sự kiện',
              'Trang điểm tự nhiên',
              'Trang điểm glamour',
              'Học trang điểm'
            ]
          },
          price: 'Từ 1.600.000đ'
        },
        'Spa Packages': {
          title: 'Gói Spa',
          desc: 'Thư giãn tuyệt đối với các gói spa cao cấp, giúp bạn tái tạo năng lượng.',
          details: {
            title: 'Bao Gồm Các Dịch Vụ:',
            items: [
              'Gói spa cả ngày',
              'Gói spa cặp đôi',
              'Gói spa thải độc',
              'Gói chống stress',
              'Gói làm đẹp & sức khỏe'
            ]
          },
          price: 'Từ 3.400.000đ'
        },
        specialOffers: {
          title: 'Ưu Đãi Đặc Biệt',
          newClient: {
            title: 'Gói Khách Hàng Mới',
            description: 'Giảm 20% cho lần đầu sử dụng dịch vụ với gói làm đẹp toàn diện.',
            price: '2.700.000đ (Giá gốc 3.400.000đ)'
          },
          membership: {
            title: 'Thành Viên Hàng Tháng',
            description: 'Tận hưởng các đặc quyền và ưu đãi độc quyền với chương trình thành viên hàng tháng.',
            price: '4.500.000đ/tháng'
          }
        },
        cta: {
          title: 'Sẵn Sàng Trải Nghiệm Dịch Vụ Của Chúng Tôi?',
          description: 'Đặt lịch hẹn ngay hôm nay và để các chuyên gia của chúng tôi chăm sóc bạn.',
          button: 'Đặt Lịch Ngay'
        }
      },
      album: {
        title: 'Album Ảnh Của Chúng Tôi',
        description: 'Khám phá bộ sưu tập những khoảnh khắc và sự thay đổi tuyệt đẹp của chúng tôi.',
        viewDetail: 'Xem'
      },
      blog: {
        title: 'Blog Của Chúng Tôi',
        description: 'Cập nhật những thông tin, mẹo và xu hướng làm đẹp mới nhất của chúng tôi.',
        post1: {
          title: 'Quy Trình Chăm Sóc Da Để Có Làn Da Rạng Rỡ',
          excerpt: 'Khám phá các bước thiết yếu để có làn da sáng khỏe.'
        },
        post2: {
          title: 'Mẹo Chăm Sóc Tóc Khỏe Mạnh',
          excerpt: 'Tìm hiểu cách giữ cho mái tóc của bạn chắc khỏe và bóng mượt.'
        },
        post3: {
          title: 'Lợi Ích Của Việc Massage Thường Xuyên',
          excerpt: 'Khám phá cách massage trị liệu có thể cải thiện sức khỏe của bạn.'
        },
        post4: {
          title: 'Xu Hướng Trang Điểm Cho Mọi Mùa',
          excerpt: 'Cập nhật những phong cách làm đẹp mới nhất.'
        },
        post5: {
          title: 'Cảm Hứng Thiết Kế Móng Tay Nghệ Thuật',
          excerpt: 'Thỏa sức sáng tạo với những thiết kế móng tay tuyệt đẹp.'
        },
        post6: {
          title: 'Đi Sâu Vào Các Liệu Pháp Spa',
          excerpt: 'Tìm hiểu sức mạnh chữa lành của các liệu pháp spa.'
        }
      },
      contact: {
        title: 'Liên Hệ Với Chúng Tôi',
        description: 'Chúng tôi rất muốn nghe từ bạn! Vui lòng điền vào biểu mẫu dưới đây hoặc liên hệ với chúng tôi bằng các thông tin liên lạc được cung cấp.',
        formTitle: 'Gửi Cho Chúng Tôi Một Tin Nhắn',
        nameLabel: 'Tên',
        namePlaceholder: 'Tên của bạn',
        emailLabel: 'Email',
        emailPlaceholder: 'email@cuaban.com',
        messageLabel: 'Tin Nhắn',
        messagePlaceholder: 'Tin nhắn của bạn ở đây...',
        sendButton: 'Gửi Tin Nhắn',
        infoTitle: 'Thông Tin Liên Hệ Của Chúng Tôi',
        address: 'Địa Chỉ',
        phone: 'Điện Thoại',
        email: 'Email',
        hours: 'Giờ Làm Việc',
        hoursDetail: 'Thứ Hai - Thứ Bảy: 9 SA - 6 CH, Chủ Nhật: Đóng cửa',
        locationTitle: 'Tìm Chúng Tôi Trên Bản Đồ',
        mapPlaceholder: 'Vị trí bản đồ'
      },
      footer: {
        copyright: 'Beauty Care. Mọi quyền được bảo lưu.',
        privacyPolicy: 'Chính Sách Bảo Mật',
        termsOfService: 'Điều Khoản Dịch Vụ'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 