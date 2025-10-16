import React from 'react';
import { Section, Container, Button, Card, Badge } from '../components/ui';

const HomePage = () => {
  return (
    <>
      {/* Section 1: Hero */}
      <Section
        padding="none"
        background="fire"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-fire-500/20 via-primary-500/30 to-secondary-500/20 animate-pulse-subtle" />

        {/* Animated background elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent-400/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl animate-float animation-delay-300" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="warning"
              size="lg"
              className="mb-6 animate-slide-down"
            >
              🔥 Đối tác công nghệ đáng tin cậy
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
              Tăng tốc đổi mới cùng{' '}
              <span className="gradient-fire inline-block bg-clip-text text-transparent bg-gradient-to-r from-accent-300 via-white to-accent-300">
                đội ngũ công nghệ chuyên sâu
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto animate-fade-in animation-delay-300">
              Chúng tôi xây dựng giải pháp công nghệ tùy chỉnh, giúp doanh
              nghiệp của bạn vượt trội trong kỷ nguyên số.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-450">
              <Button
                to="/services"
                size="lg"
                className="bg-white text-primary-600 hover:bg-neutral-100 shadow-glow-orange-lg"
              >
                Khám phá dịch vụ
              </Button>
              <Button
                to="/portfolio"
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10"
              >
                Xem dự án tiêu biểu
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 2: Thống kê năng lực */}
      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Con số ấn tượng
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Được tin tưởng bởi các doanh nghiệp hàng đầu trên toàn cầu
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
            {[
              { number: '150+', label: 'Dự án hoàn thành', icon: '🚀' },
              { number: '20+', label: 'Quốc gia', icon: '🌍' },
              { number: '50+', label: 'Chuyên gia', icon: '👥' },
              { number: '30+', label: 'Công nghệ', icon: '⚡' },
              { number: '98%', label: 'Khách hài lòng', icon: '⭐' },
              { number: '24/7', label: 'Hỗ trợ', icon: '💬' },
            ].map((stat, index) => (
              <Card
                key={index}
                variant="hover"
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold gradient-fire mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 3: Dịch vụ nổi bật */}
      <Section background="gradient" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <Badge variant="primary" size="lg" className="mb-4">
              Dịch vụ
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Giải pháp toàn diện cho doanh nghiệp
            </h2>
            <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
              Từ ý tưởng đến triển khai, chúng tôi đồng hành cùng bạn trong mọi
              giai đoạn chuyển đổi số
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: '💻',
                title: 'Web Development',
                description:
                  'Xây dựng web app hiện đại, nhanh chóng và bảo mật với React, Node.js',
                link: '/services#web',
                color: 'from-primary-500 to-primary-600',
              },
              {
                icon: '📱',
                title: 'Mobile Development',
                description:
                  'Ứng dụng di động native và cross-platform cho iOS & Android',
                link: '/services#mobile',
                color: 'from-secondary-500 to-secondary-600',
              },
              {
                icon: '☁️',
                title: 'Cloud & DevOps',
                description:
                  'Triển khai và quản lý hạ tầng đám mây, CI/CD automation',
                link: '/services#cloud',
                color: 'from-accent-500 to-accent-600',
              },
              {
                icon: '🤖',
                title: 'AI & Machine Learning',
                description:
                  'Tích hợp AI, chatbot, phân tích dữ liệu và dự đoán thông minh',
                link: '/services#ai',
                color: 'from-fire-500 to-fire-600',
              },
            ].map((service, index) => (
              <Card
                key={index}
                variant="hover"
                to={service.link}
                className="group relative overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}
                />

                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br bg-fire flex items-center justify-center text-3xl mb-4 fire-glow group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="flex items-center text-primary-600 font-medium text-sm group-hover:translate-x-2 transition-transform">
                    Tìm hiểu thêm
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/services" variant="outline" size="lg">
              Xem tất cả dịch vụ
            </Button>
          </div>
        </Container>
      </Section>

      {/* Section 4: Dự án tiêu biểu */}
      <Section background="white" padding="lg">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <Badge variant="secondary" size="lg" className="mb-4">
                Portfolio
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4">
                Dự án tiêu biểu
              </h2>
              <p className="text-neutral-600 text-lg max-w-2xl">
                Những sản phẩm đã giúp khách hàng tăng trưởng vượt bậc
              </p>
            </div>
            <Button to="/portfolio" variant="primary" className="mt-6 md:mt-0">
              Xem tất cả dự án
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: '🏦',
                title: 'FinTech Banking App',
                description: 'Ứng dụng ngân hàng số với AI fraud detection',
                tags: ['React Native', 'Node.js', 'AI'],
                metrics: '+200% users',
              },
              {
                image: '🛒',
                title: 'E-Commerce Platform',
                description: 'Nền tảng thương mại điện tử đa kênh',
                tags: ['Next.js', 'AWS', 'Microservices'],
                metrics: '+150% revenue',
              },
              {
                image: '📚',
                title: 'EdTech Learning Platform',
                description: 'Nền tảng học tập trực tuyến với AI tutor',
                tags: ['React', 'Python', 'TensorFlow'],
                metrics: '500K+ students',
              },
            ].map((project, index) => (
              <Card
                key={index}
                variant="hover"
                to="/portfolio"
                className="group overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg mb-4 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform overflow-hidden">
                  {project.image}
                </div>

                {/* Metrics Badge */}
                <Badge variant="success" className="mb-3">
                  {project.metrics}
                </Badge>

                {/* Project Info */}
                <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-neutral-600 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="neutral" size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 5: Tech Stack / Clients */}
      <Section background="gray" padding="md">
        <Container>
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
              Công nghệ chúng tôi sử dụng
            </h3>
            <p className="text-neutral-600">
              Luôn cập nhật và sử dụng những công nghệ tiên tiến nhất
            </p>
          </div>

          {/* Tech logos */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {[
              { name: 'React', icon: '⚛️' },
              { name: 'Node.js', icon: '🟢' },
              { name: 'TypeScript', icon: '🔷' },
              { name: 'Python', icon: '🐍' },
              { name: 'AWS', icon: '☁️' },
              { name: 'Docker', icon: '🐳' },
              { name: 'Kubernetes', icon: '☸️' },
              { name: 'MongoDB', icon: '🍃' },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-200 group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <div className="text-xs font-medium text-neutral-600 text-center">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>

          {/* Clients section */}
          <div className="mt-20 text-center">
            <h3 className="text-xl font-semibold text-neutral-700 mb-8">
              Được tin tưởng bởi các doanh nghiệp hàng đầu
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-50">
              {['🏢', '🏦', '🏪', '🏨', '🏭', '🏛️'].map((icon, index) => (
                <div
                  key={index}
                  className="text-5xl grayscale hover:grayscale-0 transition-all duration-200"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 6: CTA lớn */}
      <Section
        background="fire"
        padding="lg"
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/50 via-secondary-600/50 to-accent-600/50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400/30 rounded-full blur-3xl animate-float animation-delay-300" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Sẵn sàng biến ý tưởng thành{' '}
              <span className="gradient-fire inline-block bg-clip-text text-transparent bg-gradient-to-r from-accent-200 via-white to-accent-200">
                hiện thực?
              </span>
            </h2>

            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Hãy để chúng tôi tư vấn miễn phí về giải pháp công nghệ phù hợp
              nhất cho doanh nghiệp của bạn.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                to="/contact"
                size="lg"
                className="bg-white text-primary-600 hover:bg-neutral-100 shadow-glow-orange-lg hover:scale-105 transition-transform"
              >
                Liên hệ tư vấn ngay
              </Button>
              <Button
                to="/services"
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10"
              >
                Tìm hiểu thêm
              </Button>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Tư vấn miễn phí
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Không ràng buộc
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Phản hồi trong 24h
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
