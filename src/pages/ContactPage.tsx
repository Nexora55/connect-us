import React, { useState } from 'react';
import { Section, Container, Card, Badge, Button } from '../components/ui';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
      });

      // Reset success message after 5s
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'hello@connectus.com',
      link: 'mailto:hello@connectus.com',
    },
    {
      icon: '📞',
      title: 'Điện thoại',
      value: '+84 (28) 1234 5678',
      link: 'tel:+842812345678',
    },
    {
      icon: '📍',
      title: 'Địa chỉ',
      value: '123 Nguyễn Huệ, Q.1, TP.HCM',
      link: 'https://maps.google.com',
    },
    {
      icon: '⏰',
      title: 'Giờ làm việc',
      value: 'T2 - T6: 9:00 - 18:00',
      link: null,
    },
  ];

  const services = [
    'Web Development',
    'Mobile Development',
    'Cloud & DevOps',
    'AI & Machine Learning',
    'UI/UX Design',
    'Tech Consulting',
    'Khác',
  ];

  const budgetRanges = [
    'Dưới $5,000',
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    'Trên $50,000',
    'Chưa xác định',
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="lg" className="pt-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" size="lg" className="mb-6">
              Liên hệ
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Hãy cùng nhau tạo ra{' '}
              <span className="gradient-fire">điều tuyệt vời</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Chúng tôi luôn sẵn sàng lắng nghe và tư vấn miễn phí cho dự án của bạn. Hãy chia sẻ ý tưởng và để chúng tôi giúp bạn hiện thực hóa nó.
            </p>
          </div>
        </Container>
      </Section>

      {/* Contact Form & Info */}
      <Section background="white" padding="lg">
        <Container size="xl">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info - Left Side */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  Thông tin liên hệ
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  Đừng ngại liên hệ với chúng tôi. Chúng tôi cam kết phản hồi trong vòng 24 giờ.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    variant="bordered"
                    className="group hover:border-primary-300 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-neutral-900 mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-600 hover:text-primary-600 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-neutral-600">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  Kết nối với chúng tôi
                </h3>
                <div className="flex items-center gap-3">
                  {[
                    { name: 'Facebook', icon: '📘', url: '#' },
                    { name: 'LinkedIn', icon: '💼', url: '#' },
                    { name: 'Twitter', icon: '🐦', url: '#' },
                    { name: 'GitHub', icon: '🐙', url: '#' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-neutral-100 flex items-center justify-center text-2xl hover:bg-primary-100 transition-all duration-200 hover:scale-110"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <Card variant="gradient" className="p-6">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  Tại sao chọn chúng tôi?
                </h3>
                <ul className="space-y-3">
                  {[
                    'Tư vấn miễn phí không ràng buộc',
                    'Phản hồi trong 24 giờ',
                    'Đội ngũ chuyên gia 10+ năm kinh nghiệm',
                    'Báo giá minh bạch, cạnh tranh',
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start text-sm text-neutral-700">
                      <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-3">
              <Card variant="hover" className="p-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  Gửi yêu cầu tư vấn
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                        Họ và tên <span className="text-secondary-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input"
                        placeholder="Nguyễn Văn A"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                        Email <span className="text-secondary-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  {/* Company & Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                        Công ty
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="input"
                        placeholder="Tên công ty của bạn"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input"
                        placeholder="+84 123 456 789"
                      />
                    </div>
                  </div>

                  {/* Service & Budget */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                        Dịch vụ quan tâm <span className="text-secondary-500">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="input"
                      >
                        <option value="">Chọn dịch vụ</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-neutral-700 mb-2">
                        Ngân sách dự kiến
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="input"
                      >
                        <option value="">Chọn mức ngân sách</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      Mô tả dự án <span className="text-secondary-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="input resize-none"
                      placeholder="Hãy chia sẻ chi tiết về dự án của bạn, mục tiêu, timeline và bất kỳ yêu cầu cụ thể nào..."
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-success-100 border border-success-300 rounded-lg text-success-700 flex items-start gap-3">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-medium">Cảm ơn bạn đã liên hệ!</p>
                        <p className="text-sm mt-1">Chúng tôi sẽ phản hồi trong vòng 24 giờ.</p>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Đang gửi...
                      </>
                    ) : (
                      'Gửi yêu cầu tư vấn'
                    )}
                  </Button>

                  <p className="text-xs text-neutral-500 text-center">
                    Bằng cách gửi form này, bạn đồng ý với{' '}
                    <a href="/privacy" className="text-primary-600 hover:underline">
                      chính sách bảo mật
                    </a>{' '}
                    của chúng tôi.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <Section background="gray" padding="none">
        <div className="w-full h-96 bg-neutral-200 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🗺️</div>
            <p className="text-neutral-600 text-lg font-medium">
              Google Maps Integration
            </p>
            <p className="text-neutral-500 text-sm mt-2">
              123 Nguyễn Huệ, Quận 1, TP.HCM
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="white" padding="lg">
        <Container size="md">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Câu hỏi thường gặp
            </h2>
            <p className="text-neutral-600">
              Những câu hỏi phổ biến nhất từ khách hàng
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Thời gian triển khai dự án thường mất bao lâu?',
                a: 'Tùy thuộc vào quy mô dự án, thường từ 2-6 tháng. Chúng tôi sẽ đưa ra timeline chi tiết sau khi phân tích yêu cầu.',
              },
              {
                q: 'Chi phí dự án được tính như thế nào?',
                a: 'Chúng tôi báo giá dựa trên phạm vi công việc, độ phức tạp và timeline. Có 2 hình thức: fixed price hoặc time & material.',
              },
              {
                q: 'Có hỗ trợ sau khi bàn giao không?',
                a: 'Có, chúng tôi cung cấp gói bảo hành và hỗ trợ từ 3-12 tháng tùy gói dịch vụ bạn chọn.',
              },
              {
                q: 'Làm việc từ xa có được không?',
                a: 'Hoàn toàn được! Chúng tôi có kinh nghiệm làm việc với khách hàng toàn cầu. Giao tiếp qua Zoom, Slack hoặc email.',
              },
            ].map((faq, index) => (
              <Card
                key={index}
                variant="bordered"
                className="hover:border-primary-300 transition-colors"
              >
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {faq.a}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ContactPage;
