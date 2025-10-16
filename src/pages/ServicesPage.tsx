import { useState } from 'react';
import { Section, Container, Button, Card, Badge } from '../components/ui';

const ServicesPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'Tất cả' },
    { id: 'development', label: 'Phát triển' },
    { id: 'infrastructure', label: 'Hạ tầng' },
    { id: 'consulting', label: 'Tư vấn' },
  ];

  const services = [
    {
      id: 'web',
      icon: '💻',
      title: 'Web Development',
      description:
        'Xây dựng ứng dụng web hiện đại, responsive và hiệu suất cao',
      features: [
        'Single Page Applications (SPA)',
        'Progressive Web Apps (PWA)',
        'E-commerce Platforms',
        'Content Management Systems',
        'API Development & Integration',
      ],
      category: 'development',
      gradient: 'from-primary-500 to-primary-700',
    },
    {
      id: 'mobile',
      icon: '📱',
      title: 'Mobile Development',
      description: 'Ứng dụng di động native và cross-platform cho mọi nền tảng',
      features: [
        'iOS & Android Native Apps',
        'React Native / Flutter',
        'Mobile UI/UX Design',
        'App Store Optimization',
        'Push Notifications & Analytics',
      ],
      category: 'development',
      gradient: 'from-secondary-500 to-secondary-700',
    },
    {
      id: 'cloud',
      icon: '☁️',
      title: 'Cloud & DevOps',
      description: 'Triển khai và quản lý hạ tầng đám mây tự động và bảo mật',
      features: [
        'AWS / Azure / GCP',
        'CI/CD Pipeline Setup',
        'Container Orchestration (Kubernetes)',
        'Infrastructure as Code (Terraform)',
        'Monitoring & Logging',
      ],
      category: 'infrastructure',
      gradient: 'from-accent-500 to-accent-700',
    },
    {
      id: 'ai',
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Tích hợp AI để tự động hóa và tối ưu quy trình kinh doanh',
      features: [
        'Chatbot & Virtual Assistant',
        'Predictive Analytics',
        'Computer Vision',
        'Natural Language Processing',
        'Recommendation Systems',
      ],
      category: 'development',
      gradient: 'from-fire-500 to-fire-700',
    },
    {
      id: 'consulting',
      icon: '🎯',
      title: 'Tech Consulting',
      description: 'Tư vấn chiến lược công nghệ và chuyển đổi số',
      features: [
        'Digital Transformation Strategy',
        'Technology Stack Selection',
        'Architecture Design',
        'Code Review & Audit',
        'Performance Optimization',
      ],
      category: 'consulting',
      gradient: 'from-ember-500 to-ember-700',
    },
    {
      id: 'ux',
      icon: '🎨',
      title: 'UI/UX Design',
      description:
        'Thiết kế trải nghiệm người dùng tối ưu và giao diện đẹp mắt',
      features: [
        'User Research & Testing',
        'Wireframing & Prototyping',
        'Design Systems',
        'Brand Identity',
        'Responsive Design',
      ],
      category: 'consulting',
      gradient: 'from-primary-400 to-secondary-600',
    },
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: 'Từ $5,000',
      description: 'Phù hợp cho startup và dự án nhỏ',
      features: [
        'Web hoặc Mobile App cơ bản',
        '3 tháng hỗ trợ',
        'Deployment trên 1 platform',
        'Basic analytics',
        'Email support',
      ],
      recommended: false,
    },
    {
      name: 'Professional',
      price: 'Từ $15,000',
      description: 'Cho doanh nghiệp SME',
      features: [
        'Full-stack application',
        '6 tháng hỗ trợ',
        'Multi-platform deployment',
        'Advanced analytics',
        'Priority support',
        'CI/CD setup',
        'Performance optimization',
      ],
      recommended: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Giải pháp toàn diện cho doanh nghiệp lớn',
      features: [
        'Microservices architecture',
        '12+ tháng hỗ trợ',
        'Cloud infrastructure',
        'AI/ML integration',
        '24/7 support',
        'Security audit',
        'Scalable architecture',
        'Dedicated team',
      ],
      recommended: false,
    },
  ];

  const filteredServices =
    selectedFilter === 'all'
      ? services
      : services.filter(s => s.category === selectedFilter);

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="lg" className="pt-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" size="lg" className="mb-6">
              Dịch vụ
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Giải pháp toàn diện cho{' '}
              <span className="gradient-fire">doanh nghiệp</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Từ ý tưởng đến triển khai, chúng tôi đồng hành cùng bạn trong mọi
              giai đoạn chuyển đổi số. Đội ngũ chuyên gia với kinh nghiệm 10+
              năm sẵn sàng biến ý tưởng của bạn thành hiện thực.
            </p>
          </div>
        </Container>
      </Section>

      {/* Services Grid with Filter */}
      <Section background="white" padding="lg">
        <Container>
          {/* Filter */}
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

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map(service => (
              <Card
                key={service.id}
                variant="hover"
                className="group animate-slide-up"
                // style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon with gradient */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm text-neutral-700"
                    >
                      <svg
                        className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  to={`/contact?service=${service.id}`}
                  variant="outline"
                  className="w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600"
                >
                  Tìm hiểu thêm
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Pricing Section */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <Badge variant="warning" size="lg" className="mb-4">
              Gói dịch vụ
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Lựa chọn phù hợp với bạn
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Mức giá linh hoạt, phù hợp với mọi quy mô doanh nghiệp
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                variant={tier.recommended ? 'hover' : 'bordered'}
                className={`relative ${
                  tier.recommended
                    ? 'ring-2 ring-primary-500 shadow-glow-orange'
                    : ''
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant="warning" size="lg">
                      ⭐ Phổ biến nhất
                    </Badge>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    {tier.name}
                  </h3>
                  <div className="text-4xl font-bold gradient-fire mb-2">
                    {tier.price}
                  </div>
                  <p className="text-neutral-600 text-sm">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm text-neutral-700"
                    >
                      <svg
                        className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  to="/contact"
                  variant={tier.recommended ? 'primary' : 'outline'}
                  className="w-full"
                >
                  Liên hệ ngay
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-neutral-600 mb-4">
              Không chắc gói nào phù hợp với bạn?
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Nhận tư vấn miễn phí
            </Button>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Quy trình làm việc
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Phương pháp Agile linh hoạt, đảm bảo dự án luôn đúng tiến độ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description:
                  'Phân tích yêu cầu, xác định mục tiêu và lập kế hoạch',
              },
              {
                step: '02',
                title: 'Design',
                description: 'Thiết kế UI/UX và kiến trúc hệ thống',
              },
              {
                step: '03',
                title: 'Development',
                description: 'Phát triển tính năng theo sprint 2 tuần',
              },
              {
                step: '04',
                title: 'Deployment',
                description: 'Triển khai production và bàn giao',
              },
            ].map((process, index) => (
              <div
                key={index}
                className="relative animate-slide-up"
                // style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-center">
                  <div className="text-6xl font-bold gradient-fire mb-4 opacity-20">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {process.title}
                  </h3>
                  <p className="text-neutral-600">{process.description}</p>
                </div>

                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-primary-300 text-2xl">
                    →
                  </div>
                )}
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
              Bắt đầu dự án của bạn ngay hôm nay
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Liên hệ với chúng tôi để được tư vấn miễn phí về giải pháp công
              nghệ phù hợp nhất.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                to="/contact"
                size="lg"
                className="bg-white text-primary-600 hover:bg-neutral-100 shadow-glow-orange-lg"
              >
                Liên hệ ngay
              </Button>
              <Button
                to="/portfolio"
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10"
              >
                Xem portfolio
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ServicesPage;
