'use client';

import { useTranslation } from 'react-i18next';
import { Section, Container, Card, Badge, Button } from '../components/ui';
import {
  FaShoppingCart,
  FaUniversity,
  FaHospital,
  FaFilm,
  FaGraduationCap,
  FaTruck,
  FaCheckCircle,
} from 'react-icons/fa';

const IndustriesPage = () => {
  const { t } = useTranslation();

  const industries = [
    {
      key: 'ecommerce',
      icon: <FaShoppingCart />,
      color: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-blue-500',
    },
    {
      key: 'fintech',
      icon: <FaUniversity />,
      color: 'from-purple-500 to-pink-500',
      iconBg: 'bg-purple-500',
    },
    {
      key: 'healthcare',
      icon: <FaHospital />,
      color: 'from-green-500 to-teal-500',
      iconBg: 'bg-green-500',
    },
    {
      key: 'media',
      icon: <FaFilm />,
      color: 'from-red-500 to-orange-500',
      iconBg: 'bg-red-500',
    },
    {
      key: 'education',
      icon: <FaGraduationCap />,
      color: 'from-indigo-500 to-blue-500',
      iconBg: 'bg-indigo-500',
    },
    {
      key: 'logistics',
      icon: <FaTruck />,
      color: 'from-amber-500 to-yellow-500',
      iconBg: 'bg-amber-500',
    },
  ];

  const expertiseItems = [
    { key: 'domain', icon: '🎯' },
    { key: 'compliance', icon: '🔒' },
    { key: 'track', icon: '📈' },
    { key: 'speed', icon: '⚡' },
    { key: 'partnership', icon: '🤝' },
    { key: 'standards', icon: '🌍' },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="lg" className="pt-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" size="lg" className="mb-6">
              {t('industries.hero.badge')}
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">
              {t('industries.hero.title')}{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('industries.hero.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              {t('industries.hero.subtitle')}
            </p>
          </div>
        </Container>
      </Section>

      {/* Industries Grid */}
      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <Badge variant="secondary" size="lg" className="mb-4">
              {t('industries.sectors.title')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4">
              {t('industries.sectors.subtitle')}
            </h2>
          </div>

          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div
                key={industry.key}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center animate-slide-up`}
              >
                {/* Icon & Stats */}
                <div className="lg:w-1/3">
                  <Card variant="gradient" className="text-center">
                    <div
                      className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${industry.color} flex items-center justify-center text-4xl text-white shadow-lg`}
                    >
                      {industry.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                      {t(`industries.${industry.key}.title`)}
                    </h3>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      {['projects', 'growth'].map((statKey, i) => (
                        <div key={i} className="text-center">
                          <div className="text-3xl font-bold text-secondary-600">
                            {t(`industries.${industry.key}.stats.${statKey}`)}
                          </div>
                          <div className="text-xs text-neutral-600 mt-1">
                            {t(`industries.${industry.key}.stats.label${i + 1}`)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Content */}
                <div className="lg:w-2/3">
                  <Card variant="hover" className="h-full">
                    <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                      {t(`industries.${industry.key}.description`)}
                    </p>

                    {/* Features */}
                    <div className="grid md:grid-cols-2 gap-3">
                      {Array.from({ length: 6 }).map((_, i) => {
                        const features = t(
                          `industries.${industry.key}.features`,
                          { returnObjects: true }
                        ) as string[];
                        return (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-neutral-700"
                          >
                            <FaCheckCircle className="text-success-500 mt-1 flex-shrink-0" />
                            <span className="text-sm">{features[i]}</span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-6">
                      <Button variant="outline" size="sm">
                        {t('industries.learnMore')}
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { key: 'projects', labelKey: 'projectsLabel' },
              { key: 'sectors', labelKey: 'sectorsLabel' },
              { key: 'countries', labelKey: 'countriesLabel' },
              { key: 'success', labelKey: 'successLabel' },
            ].map((stat, index) => (
              <Card
                key={index}
                variant="hover"
                className="text-center animate-scale-in"
              >
                <div className="text-4xl font-bold text-secondary-600 mb-2">
                  {t(`industries.stats.${stat.key}`)}
                </div>
                <div className="text-neutral-600">
                  {t(`industries.stats.${stat.labelKey}`)}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why Choose Us Section */}
      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              {t('industries.expertise.title')}
            </h2>
            <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
              {t('industries.expertise.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertiseItems.map((item, index) => (
              <Card
                key={index}
                variant="hover"
                className="text-center group animate-slide-up"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {t(`industries.expertise.${item.key}.title`)}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {t(`industries.expertise.${item.key}.description`)}
                </p>
              </Card>
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
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              {t('industries.cta.title')}{' '}
              <span className="text-accent-400">
                {t('industries.cta.titleHighlight')}
              </span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t('industries.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" to="/contact">
                {t('industries.cta.ctaPrimary')}
              </Button>
              <Button variant="outline" size="lg" to="/portfolio">
                {t('industries.cta.ctaSecondary')}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default IndustriesPage;
