'use client';

import { Section, Container, Card, Badge } from '../components/ui';

const AboutPage = () => {
  const timeline = [
    {
      year: '2014',
      title: 'Khởi đầu',
      description:
        'Thành lập với đội ngũ 5 người, tập trung vào web development',
    },
    {
      year: '2017',
      title: 'Mở rộng',
      description:
        'Phát triển lên 20+ thành viên, mở rộng sang mobile và cloud',
    },
    {
      year: '2020',
      title: 'Quốc tế',
      description: 'Phục vụ khách hàng tại 20+ quốc gia, đạt 100+ dự án',
    },
    {
      year: '2024',
      title: 'AI & Innovation',
      description: 'Tích hợp AI/ML, đạt 150+ dự án và 50+ chuyên gia',
    },
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Tập trung khách hàng',
      description:
        'Thành công của khách hàng là ưu tiên hàng đầu của chúng tôi',
    },
    {
      icon: '💡',
      title: 'Đổi mới sáng tạo',
      description: 'Luôn cập nhật công nghệ mới và phương pháp tối ưu nhất',
    },
    {
      icon: '🤝',
      title: 'Minh bạch',
      description: 'Giao tiếp rõ ràng, báo cáo định kỳ và quy trình minh bạch',
    },
    {
      icon: '⚡',
      title: 'Tốc độ & Chất lượng',
      description: 'Giao hàng đúng hạn với chất lượng cao nhất',
    },
    {
      icon: '🌱',
      title: 'Học hỏi liên tục',
      description: 'Đầu tư vào đào tạo và phát triển đội ngũ',
    },
    {
      icon: '🏆',
      title: 'Xuất sắc',
      description: 'Cam kết mang đến giải pháp vượt trên mong đợi',
    },
  ];

  const team = [
    {
      name: 'Nguyễn Văn A',
      role: 'CEO & Founder',
      avatar: '👨‍💼',
      bio: '15+ năm kinh nghiệm trong công nghệ và khởi nghiệp',
    },
    {
      name: 'Trần Thị B',
      role: 'CTO',
      avatar: '👩‍💻',
      bio: 'Chuyên gia về cloud architecture và AI/ML',
    },
    {
      name: 'Lê Văn C',
      role: 'Head of Design',
      avatar: '👨‍🎨',
      bio: 'Thiết kế UI/UX cho 100+ sản phẩm thành công',
    },
    {
      name: 'Phạm Thị D',
      role: 'Head of Engineering',
      avatar: '👩‍💼',
      bio: 'Dẫn dắt đội ngũ 30+ developers',
    },
  ];

  const capabilities = [
    {
      title: 'Agile Development',
      description: 'Sprint 2 tuần, daily standup, retrospective định kỳ',
      icon: '🔄',
    },
    {
      title: 'CI/CD Pipeline',
      description: 'Tự động hóa testing, deployment và monitoring',
      icon: '⚙️',
    },
    {
      title: 'Quality Assurance',
      description: 'Unit test, integration test, manual QA testing',
      icon: '✅',
    },
    {
      title: 'Security First',
      description: 'OWASP compliance, penetration testing, code review',
      icon: '🔒',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="lg" className="pt-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" size="lg" className="mb-6">
              Về chúng tôi
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Chúng tôi xây dựng{' '}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">tương lai số</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              ConnectUs là đối tác công nghệ đáng tin cậy, giúp doanh nghiệp
              tăng tốc đổi mới và chuyển đổi số thành công với đội ngũ chuyên
              gia 10+ năm kinh nghiệm.
            </p>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section background="white" padding="lg">
        <Container>
          <div className="grid md:grid-cols-2 gap-12">
            <Card variant="gradient" className="p-8 lg:p-12">
              <div className="text-5xl mb-6">🎯</div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Sứ mệnh
              </h2>
              <p className="text-neutral-700 leading-relaxed text-lg">
                Giúp doanh nghiệp Việt Nam và toàn cầu tận dụng sức mạnh của
                công nghệ để tăng trưởng bền vững, tạo ra giá trị thực cho khách
                hàng và xã hội.
              </p>
            </Card>

            <Card variant="gradient" className="p-8 lg:p-12">
              <div className="text-5xl mb-6">🚀</div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                Tầm nhìn
              </h2>
              <p className="text-neutral-700 leading-relaxed text-lg">
                Trở thành công ty công nghệ hàng đầu Đông Nam Á, được khách hàng
                tin tưởng và nhân viên tự hào, góp phần định hình tương lai số
                của khu vực.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Core Values */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <Badge variant="secondary" size="lg" className="mb-4">
              Giá trị cốt lõi
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Những gì chúng tôi tin tưởng
            </h2>
            <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
              Giá trị cốt lõi định hình văn hóa làm việc và cách chúng tôi phục
              vụ khách hàng
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                variant="hover"
                className="text-center group animate-slide-up"
                // style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <Badge variant="warning" size="lg" className="mb-4">
              Hành trình
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Lịch sử phát triển
            </h2>
            <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
              10 năm xây dựng và phát triển cùng khách hàng
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 hidden md:block" />

              {/* Timeline items */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex items-start gap-8 animate-slide-up"
                    // style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Year Badge */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold shadow-xl">
                        {item.year}
                      </div>
                    </div>

                    {/* Content */}
                    <Card variant="hover" className="flex-grow">
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {item.description}
                      </p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Capabilities */}
      <Section background="gradient" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Năng lực & Phương pháp
            </h2>
            <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
              Quy trình chuyên nghiệp, công cụ hiện đại
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((cap, index) => (
              <Card
                key={index}
                variant="hover"
                className="text-center animate-scale-in"
                // style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{cap.icon}</div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {cap.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {cap.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Leadership Team */}
      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <Badge variant="primary" size="lg" className="mb-4">
              Đội ngũ lãnh đạo
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Gặp gỡ ban lãnh đạo
            </h2>
            <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
              Những người dẫn dắt tầm nhìn và chiến lược của ConnectUs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                variant="hover"
                className="text-center group animate-slide-up"
                // style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-7xl mb-4 group-hover:scale-110 transition-transform">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                  {member.name}
                </h3>
                <Badge variant="primary" size="sm" className="mb-3">
                  {member.role}
                </Badge>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <Section
        background="dark"
        padding="lg"
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/50 to-secondary-600/50" />

        <Container className="relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: '150+', label: 'Dự án' },
              { number: '50+', label: 'Chuyên gia' },
              { number: '20+', label: 'Quốc gia' },
              { number: '98%', label: 'Hài lòng' },
            ].map((stat, index) => (
              <div
                key={index}
                className="animate-scale-in"
                // style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default AboutPage;
