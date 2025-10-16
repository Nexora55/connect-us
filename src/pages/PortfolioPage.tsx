import { useState } from 'react';
import { Section, Container, Card, Badge, Button } from '../components/ui';

const PortfolioPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Tất cả' },
    { id: 'web', label: 'Web App' },
    { id: 'mobile', label: 'Mobile App' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'cloud', label: 'Cloud' },
  ];

  const projects = [
    {
      id: 1,
      image: '🏦',
      title: 'FinTech Banking App',
      client: 'VietBank',
      description:
        'Ứng dụng ngân hàng số với tích hợp AI fraud detection, xử lý 1M+ giao dịch/ngày',
      category: 'mobile',
      tags: ['React Native', 'Node.js', 'TensorFlow', 'AWS'],
      year: '2024',
      metrics: {
        users: '+200% users',
        performance: '99.9% uptime',
        revenue: '+150% transactions',
      },
      link: '/portfolio/fintech-banking-app',
    },
    {
      id: 2,
      image: '🛒',
      title: 'E-Commerce Platform',
      client: 'ShopNow',
      description:
        'Nền tảng thương mại điện tử đa kênh với recommendation engine thông minh',
      category: 'web',
      tags: ['Next.js', 'Microservices', 'MongoDB', 'Redis'],
      year: '2024',
      metrics: {
        users: '500K+ active users',
        performance: '<2s load time',
        revenue: '+180% revenue',
      },
      link: '/portfolio/ecommerce-platform',
    },
    {
      id: 3,
      image: '📚',
      title: 'EdTech Learning Platform',
      client: 'EduSmart',
      description:
        'Nền tảng học tập trực tuyến với AI tutor và adaptive learning paths',
      category: 'web',
      tags: ['React', 'Python', 'TensorFlow', 'PostgreSQL'],
      year: '2023',
      metrics: {
        users: '1M+ students',
        performance: '95% completion',
        revenue: '+300% engagement',
      },
      link: '/portfolio/edtech-platform',
    },
    {
      id: 4,
      image: '🏥',
      title: 'Healthcare Management System',
      client: 'MediCare',
      description:
        'Hệ thống quản lý bệnh viện với telemedicine và EMR tích hợp',
      category: 'web',
      tags: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC'],
      year: '2023',
      metrics: {
        users: '50+ hospitals',
        performance: 'HIPAA compliant',
        revenue: '+120% efficiency',
      },
      link: '/portfolio/healthcare-system',
    },
    {
      id: 5,
      image: '🚗',
      title: 'Ride-Sharing Mobile App',
      client: 'GoRide',
      description:
        'Ứng dụng đặt xe với real-time tracking và AI route optimization',
      category: 'mobile',
      tags: ['Flutter', 'Node.js', 'Google Maps', 'Socket.io'],
      year: '2024',
      metrics: {
        users: '100K+ drivers',
        performance: '<5s matching',
        revenue: '+250% bookings',
      },
      link: '/portfolio/ride-sharing-app',
    },
    {
      id: 6,
      image: '🏠',
      title: 'Real Estate Marketplace',
      client: 'HomeFinder',
      description:
        'Marketplace bất động sản với AR viewing và AI price prediction',
      category: 'web',
      tags: ['React', 'Django', 'ARKit', 'Elasticsearch'],
      year: '2023',
      metrics: {
        users: '200K+ properties',
        performance: '85% conversion',
        revenue: '+160% leads',
      },
      link: '/portfolio/real-estate-marketplace',
    },
    {
      id: 7,
      image: '🤖',
      title: 'AI Chatbot Platform',
      client: 'TalkBot',
      description:
        'Nền tảng chatbot thông minh với NLP và multi-channel support',
      category: 'ai',
      tags: ['Python', 'Rasa', 'FastAPI', 'Docker'],
      year: '2024',
      metrics: {
        users: '1000+ businesses',
        performance: '90% accuracy',
        revenue: '-70% support cost',
      },
      link: '/portfolio/ai-chatbot-platform',
    },
    {
      id: 8,
      image: '☁️',
      title: 'Cloud Infrastructure Migration',
      client: 'TechCorp',
      description: 'Migration từ on-premise sang AWS với zero downtime',
      category: 'cloud',
      tags: ['AWS', 'Terraform', 'Kubernetes', 'CI/CD'],
      year: '2023',
      metrics: {
        users: 'Zero downtime',
        performance: '-60% costs',
        revenue: '3x scalability',
      },
      link: '/portfolio/cloud-migration',
    },
    {
      id: 9,
      image: '📊',
      title: 'Analytics Dashboard',
      client: 'DataPro',
      description:
        'Real-time analytics platform với ML predictions và custom reports',
      category: 'ai',
      tags: ['React', 'Python', 'Spark', 'Tableau'],
      year: '2024',
      metrics: {
        users: '10M+ data points',
        performance: 'Real-time updates',
        revenue: '+200% insights',
      },
      link: '/portfolio/analytics-dashboard',
    },
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? projects
      : projects.filter(p => p.category === selectedFilter);

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="lg" className="pt-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" size="lg" className="mb-6">
              Portfolio
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Dự án tiêu biểu của{' '}
              <span className="gradient-fire">chúng tôi</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Những sản phẩm đã giúp khách hàng tăng trưởng vượt bậc và chuyển
              đổi số thành công. Mỗi dự án là một câu chuyện thành công.
            </p>
          </div>
        </Container>
      </Section>

      {/* Filter & Projects Grid */}
      <Section background="white" padding="lg">
        <Container>
          {/* Filter Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedFilter === filter.id
                    ? 'bg-primary-600 text-white shadow-glow-orange'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <Card
                key={project.id}
                variant="hover"
                to={project.link}
                className="group animate-slide-up"
                // style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-primary-100 via-secondary-100 to-accent-100 rounded-xl mb-4 flex items-center justify-center text-7xl group-hover:scale-105 transition-transform overflow-hidden relative">
                  {project.image}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      Xem chi tiết →
                    </span>
                  </div>
                </div>

                {/* Year & Client */}
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="neutral" size="sm">
                    {project.year}
                  </Badge>
                  <span className="text-xs text-neutral-500">
                    {project.client}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-neutral-50 rounded-lg">
                  {Object.values(project.metrics).map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xs font-semibold text-primary-600">
                        {metric}
                      </div>
                    </div>
                  ))}
                </div>

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

      {/* Stats Section */}
      <Section background="gray" padding="md">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '150+', label: 'Dự án hoàn thành', icon: '🚀' },
              { number: '98%', label: 'Khách hài lòng', icon: '⭐' },
              { number: '20+', label: 'Quốc gia', icon: '🌍' },
              { number: '10+', label: 'Năm kinh nghiệm', icon: '💼' },
            ].map((stat, index) => (
              <div
                key={index}
                className="animate-scale-in"
                // style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold gradient-fire mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section
        background="dark"
        padding="lg"
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/50 to-secondary-600/50" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Sẵn sàng tạo ra dự án tiếp theo?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Hãy để chúng tôi giúp bạn biến ý tưởng thành hiện thực
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                to="/contact"
                size="lg"
                className="bg-white text-primary-600 hover:bg-neutral-100 shadow-glow-orange-lg"
              >
                Bắt đầu dự án
              </Button>
              <Button
                to="/services"
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10"
              >
                Xem dịch vụ
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default PortfolioPage;
