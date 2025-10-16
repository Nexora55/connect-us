import React from 'react';
import { useTranslation } from 'react-i18next';
import { Section, Container, Button, Card, Badge } from '../components/ui';
import {
  FiTrendingUp, FiUsers, FiGlobe, FiZap, FiStar, FiMessageCircle,
  FiShoppingCart, FiDollarSign, FiMonitor, FiCpu, FiCheckCircle
} from 'react-icons/fi';

const HomePage = () => {
  const { t } = useTranslation();

  const stats = [
    { number: '150+', label: t('home.stats.projects'), icon: <FiTrendingUp /> },
    { number: '20+', label: t('home.stats.countries'), icon: <FiGlobe /> },
    { number: '50+', label: t('home.stats.experts'), icon: <FiUsers /> },
    { number: '30+', label: t('home.stats.technologies'), icon: <FiZap /> },
    { number: '98%', label: t('home.stats.satisfaction'), icon: <FiStar /> },
    { number: '24/7', label: t('home.stats.support'), icon: <FiMessageCircle /> },
  ];

  const services = [
    {
      icon: <FiShoppingCart />,
      title: t('home.services.ecommerce.title'),
      description: t('home.services.ecommerce.description'),
      link: '/services#ecommerce',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: <FiDollarSign />,
      title: t('home.services.fintech.title'),
      description: t('home.services.fintech.description'),
      link: '/services#fintech',
      color: 'from-secondary-500 to-secondary-600',
    },
    {
      icon: <FiMonitor />,
      title: t('home.services.streaming.title'),
      description: t('home.services.streaming.description'),
      link: '/services#streaming',
      color: 'from-accent-500 to-accent-600',
    },
    {
      icon: <FiCpu />,
      title: t('home.services.ai.title'),
      description: t('home.services.ai.description'),
      link: '/services#ai',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section
        padding="none"
        background="gradient"
        className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-indigo-50"
      >
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center py-20">
            <Badge variant="primary" size="lg" className="mb-6 animate-fade-in">
              {t('home.hero.badge')}
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 animate-slide-up">
              {t('home.hero.title')}{' '}
              <span className="gradient-brand">
                {t('home.hero.titleHighlight')}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {t('home.hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/services" size="lg" variant="primary">
                {t('home.hero.ctaPrimary')}
              </Button>
              <Button to="/portfolio" size="lg" variant="outline">
                {t('home.hero.ctaSecondary')}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section background="white" padding="md">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              {t('home.stats.title')}
            </h2>
            <p className="text-neutral-600">{t('home.stats.subtitle')}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                variant="hover"
                className="text-center group"
              >
                <div className="text-primary-600 mb-3 flex justify-center">
                  {React.cloneElement(stat.icon, { className: 'w-8 h-8' })}
                </div>
                <div className="text-3xl font-bold gradient-brand mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section background="gray" padding="md">
        <Container>
          <div className="text-center mb-12">
            <Badge variant="primary" size="lg" className="mb-4">
              {t('home.services.badge')}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                variant="hover"
                to={service.link}
                className="group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                  {React.cloneElement(service.icon, { className: 'w-7 h-7' })}
                </div>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {service.title}
                </h3>

                <p className="text-neutral-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button to="/services" variant="outline" size="lg">
              {t('home.services.viewAll')}
            </Button>
          </div>
        </Container>
      </Section>

      {/* Portfolio Preview */}
      <Section background="white" padding="md">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <Badge variant="secondary" size="lg" className="mb-4">
                {t('home.portfolio.badge')}
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                {t('home.portfolio.title')}
              </h2>
              <p className="text-neutral-600">{t('home.portfolio.subtitle')}</p>
            </div>
            <Button to="/portfolio" variant="primary" className="mt-6 md:mt-0">
              {t('home.portfolio.viewAll')}
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} variant="hover" to="/portfolio" className="group">
                <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">🎯</span>
                </div>
                <Badge variant="success" className="mb-3">+200% Growth</Badge>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Project {i}</h3>
                <p className="text-neutral-600 text-sm">Description of project...</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Tech Stack */}
      <Section background="gray" padding="sm">
        <Container>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              {t('home.techStack.title')}
            </h3>
            <p className="text-neutral-600">{t('home.techStack.subtitle')}</p>
          </div>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-6">
            {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker', 'Kubernetes', 'MongoDB'].map((tech) => (
              <div key={tech} className="flex flex-col items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-2">
                  <FiZap className="w-6 h-6 text-primary-600" />
                </div>
                <span className="text-xs font-medium text-neutral-700 text-center">{tech}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="dark" padding="md" className="relative overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              {t('home.cta.title')}{' '}
              <span className="text-accent-400">{t('home.cta.titleHighlight')}</span>
            </h2>

            <p className="text-xl text-slate-300 mb-8">
              {t('home.cta.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button
                to="/contact"
                size="lg"
                className="bg-white text-slate-900 hover:bg-slate-100"
              >
                {t('home.cta.ctaPrimary')}
              </Button>
              <Button
                to="/services"
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white/10"
              >
                {t('home.cta.ctaSecondary')}
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-300 text-sm">
              {[t('home.cta.benefit1'), t('home.cta.benefit2'), t('home.cta.benefit3')].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <FiCheckCircle className="w-5 h-5" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
