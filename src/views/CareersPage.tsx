'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Section, Container, Card, Badge, Button } from '../components/ui';
import {
  FaDollarSign,
  FaClock,
  FaChartLine,
  FaBook,
  FaHeart,
  FaGlobe,
  FaMapMarkerAlt,
  FaBriefcase,
  FaCheckCircle,
} from 'react-icons/fa';

const CareersPage = () => {
  const { t } = useTranslation();
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');

  const benefits = [
    {
      key: 'competitive',
      icon: <FaDollarSign />,
      color: 'text-green-500',
    },
    {
      key: 'flexible',
      icon: <FaClock />,
      color: 'text-blue-500',
    },
    {
      key: 'growth',
      icon: <FaChartLine />,
      color: 'text-purple-500',
    },
    {
      key: 'learning',
      icon: <FaBook />,
      color: 'text-orange-500',
    },
    {
      key: 'health',
      icon: <FaHeart />,
      color: 'text-red-500',
    },
    {
      key: 'international',
      icon: <FaGlobe />,
      color: 'text-cyan-500',
    },
  ];

  const positions = [
    'senior_fullstack',
    'mobile_engineer',
    'devops',
    'ai_engineer',
    'product_designer',
    'project_manager',
  ];

  const departments = [
    'all',
    'Engineering',
    'Design',
    'Management',
    'Infrastructure',
  ];

  const getDepartmentForPosition = (positionKey: string) => {
    const dept = t(`careers.positions.${positionKey}.department`);
    return dept;
  };

  const filteredPositions = positions.filter((pos) => {
    if (selectedDepartment === 'all') return true;
    return getDepartmentForPosition(pos) === selectedDepartment;
  });

  const processSteps = ['step1', 'step2', 'step3', 'step4', 'step5'];

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="lg" className="pt-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" size="lg" className="mb-6">
              {t('careers.hero.badge')}
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">
              {t('careers.hero.title')}{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('careers.hero.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              {t('careers.hero.subtitle')}
            </p>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <Badge variant="secondary" size="lg" className="mb-4">
              {t('careers.benefits.title')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4">
              {t('careers.benefits.subtitle')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                variant="hover"
                className="group animate-slide-up"
              >
                <div
                  className={`text-5xl mb-4 ${benefit.color} group-hover:scale-110 transition-transform`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {t(`careers.benefits.${benefit.key}.title`)}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {t(`careers.benefits.${benefit.key}.description`)}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Open Positions Section */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <Badge variant="success" size="lg" className="mb-4">
              {t('careers.positions.title')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4">
              {t('careers.positions.subtitle')}
            </h2>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedDepartment === dept
                    ? 'bg-secondary-600 text-white shadow-lg'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {dept === 'all' ? 'All Positions' : dept}
              </button>
            ))}
          </div>

          {/* Positions Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredPositions.map((position, index) => (
              <Card
                key={index}
                variant="hover"
                className="group animate-slide-up"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2 group-hover:text-secondary-600 transition-colors">
                      {t(`careers.positions.${position}.title`)}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="primary" size="sm">
                        {t(`careers.positions.${position}.department`)}
                      </Badge>
                      <Badge variant="secondary" size="sm">
                        {t(`careers.positions.${position}.type`)}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-neutral-600 mb-4">
                  <FaMapMarkerAlt className="text-secondary-500" />
                  <span className="text-sm">
                    {t(`careers.positions.${position}.location`)}
                  </span>
                </div>

                <p className="text-neutral-700 mb-4 leading-relaxed">
                  {t(`careers.positions.${position}.description`)}
                </p>

                {/* Requirements */}
                <div className="mb-4">
                  <h4 className="font-semibold text-neutral-900 mb-2 text-sm">
                    Requirements:
                  </h4>
                  <div className="space-y-1">
                    {(
                      t(`careers.positions.${position}.requirements`, {
                        returnObjects: true,
                      }) as string[]
                    ).map((req, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-neutral-700"
                      >
                        <FaCheckCircle className="text-success-500 mt-1 flex-shrink-0 text-xs" />
                        <span className="text-sm">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="primary" size="sm" className="w-full">
                  Apply Now
                </Button>
              </Card>
            ))}
          </div>

          {filteredPositions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600 text-lg">
                No positions available in this department at the moment.
              </p>
            </div>
          )}
        </Container>
      </Section>

      {/* Hiring Process Section */}
      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <Badge variant="warning" size="lg" className="mb-4">
              {t('careers.process.title')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4">
              {t('careers.process.subtitle')}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary-200 hidden md:block" />

              {/* Timeline items */}
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative flex items-start gap-6 animate-slide-up"
                  >
                    {/* Step Number */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary-500 to-accent-500 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <Card variant="hover" className="flex-grow">
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        {t(`careers.process.${step}.title`)}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {t(`careers.process.${step}.description`)}
                      </p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Culture Highlights */}
      <Section background="gradient" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Life at EXO
            </h2>
            <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
              Join a culture that values innovation, collaboration, and continuous
              growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚀',
                title: 'Innovation First',
                description:
                  'Work with cutting-edge technologies and latest frameworks',
              },
              {
                icon: '🤝',
                title: 'Collaborative',
                description:
                  'Cross-functional teams working together towards common goals',
              },
              {
                icon: '🌟',
                title: 'Impactful Work',
                description:
                  'Build products used by millions of people worldwide',
              },
              {
                icon: '📚',
                title: 'Learning Culture',
                description:
                  'Weekly tech talks, workshops, and knowledge sharing sessions',
              },
              {
                icon: '🎯',
                title: 'Ownership',
                description:
                  'Take full ownership of features from design to deployment',
              },
              {
                icon: '🎉',
                title: 'Work-Life Balance',
                description:
                  'Flexible hours, remote work, and generous time off',
              },
            ].map((item, index) => (
              <Card
                key={index}
                variant="hover"
                className="text-center group animate-scale-in bg-white"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {item.description}
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
              {t('careers.cta.title')}{' '}
              <span className="text-accent-400">
                {t('careers.cta.titleHighlight')}
              </span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t('careers.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" to="/contact">
                {t('careers.cta.ctaPrimary')}
              </Button>
              <Button variant="outline" size="lg" to="/about">
                {t('careers.cta.ctaSecondary')}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default CareersPage;
