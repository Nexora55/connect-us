'use client';

import { useTranslation } from 'react-i18next';
import { Section, Container, Card, Badge, Button } from '../components/ui';
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaUsers,
  FaChartLine,
  FaCog,
  FaCheckCircle,
} from 'react-icons/fa';

const TeamPage = () => {
  const { t } = useTranslation();

  // Leadership team data
  const leadership = [
    {
      key: 'ceo',
      avatar: '👨‍💼',
      color: 'from-blue-500 to-purple-500',
    },
    {
      key: 'cto',
      avatar: '👩‍💻',
      color: 'from-purple-500 to-pink-500',
    },
    {
      key: 'coo',
      avatar: '👨‍💼',
      color: 'from-pink-500 to-red-500',
    },
    {
      key: 'cdo',
      avatar: '👩‍🎨',
      color: 'from-red-500 to-orange-500',
    },
  ];

  // Management team data
  const management = [
    { key: 'pm1', avatar: '👨‍💼', color: 'from-blue-500 to-cyan-500' },
    { key: 'pm2', avatar: '👩‍💼', color: 'from-cyan-500 to-teal-500' },
    { key: 'pm3', avatar: '👨‍💼', color: 'from-teal-500 to-green-500' },
  ];

  // Technical team data
  const technical = [
    { key: 'lead1', avatar: '👨‍💻', color: 'from-indigo-500 to-blue-500' },
    { key: 'lead2', avatar: '👩‍💻', color: 'from-blue-500 to-cyan-500' },
    { key: 'lead3', avatar: '👨‍💻', color: 'from-cyan-500 to-teal-500' },
    { key: 'lead4', avatar: '👩‍💻', color: 'from-teal-500 to-green-500' },
  ];

  // QA team data
  const qa = [
    { key: 'qa1', avatar: '👨‍💻', color: 'from-purple-500 to-indigo-500' },
    { key: 'qa2', avatar: '👩‍💻', color: 'from-indigo-500 to-blue-500' },
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="lg" className="pt-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="primary" size="lg" className="mb-6">
              {t('team.hero.badge')}
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-6">
              {t('team.hero.title')}{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('team.hero.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              {t('team.hero.subtitle')}
            </p>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { icon: <FaUsers />, number: '50+', label: 'Team Members' },
              { icon: <FaChartLine />, number: '10+', label: 'Years Experience' },
              { icon: <FaCog />, number: '150+', label: 'Projects Delivered' },
              { icon: <FaCheckCircle />, number: '98%', label: 'Client Satisfaction' },
            ].map((stat, index) => (
              <Card
                key={index}
                variant="hover"
                className="text-center animate-scale-in"
              >
                <div className="text-3xl text-secondary-500 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-neutral-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
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
              {t('team.leadership.title')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4">
              {t('team.leadership.subtitle')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <Card
                key={index}
                variant="hover"
                className="text-center group animate-slide-up"
              >
                <div
                  className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform`}
                >
                  {member.avatar}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-1">
                  {t(`team.leadership.${member.key}.name`)}
                </h3>
                <Badge variant="secondary" size="sm" className="mb-3">
                  {t(`team.leadership.${member.key}.role`)}
                </Badge>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {t(`team.leadership.${member.key}.bio`)}
                </p>
                <div className="flex justify-center gap-3 text-neutral-400">
                  <FaLinkedin className="hover:text-secondary-500 cursor-pointer transition-colors" />
                  <FaTwitter className="hover:text-secondary-500 cursor-pointer transition-colors" />
                  <FaGithub className="hover:text-secondary-500 cursor-pointer transition-colors" />
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Management Team */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <Badge variant="secondary" size="lg" className="mb-4">
              {t('team.management.title')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4">
              {t('team.management.subtitle')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {management.map((member, index) => (
              <Card
                key={index}
                variant="hover"
                className="text-center group animate-slide-up"
              >
                <div
                  className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}
                >
                  {member.avatar}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                  {t(`team.management.${member.key}.name`)}
                </h3>
                <Badge variant="primary" size="sm" className="mb-3">
                  {t(`team.management.${member.key}.role`)}
                </Badge>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {t(`team.management.${member.key}.bio`)}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Technical Team */}
      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <Badge variant="success" size="lg" className="mb-4">
              {t('team.technical.title')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4">
              {t('team.technical.subtitle')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technical.map((member, index) => (
              <Card
                key={index}
                variant="hover"
                className="text-center group animate-slide-up"
              >
                <div
                  className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}
                >
                  {member.avatar}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                  {t(`team.technical.${member.key}.name`)}
                </h3>
                <Badge variant="success" size="sm" className="mb-3">
                  {t(`team.technical.${member.key}.role`)}
                </Badge>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {t(`team.technical.${member.key}.bio`)}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* QA Team */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <Badge variant="warning" size="lg" className="mb-4">
              {t('team.qa.title')}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-4">
              {t('team.qa.subtitle')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {qa.map((member, index) => (
              <Card
                key={index}
                variant="hover"
                className="text-center group animate-slide-up"
              >
                <div
                  className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}
                >
                  {member.avatar}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                  {t(`team.qa.${member.key}.name`)}
                </h3>
                <Badge variant="warning" size="sm" className="mb-3">
                  {t(`team.qa.${member.key}.role`)}
                </Badge>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {t(`team.qa.${member.key}.bio`)}
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
              {t('team.cta.title')}{' '}
              <span className="text-accent-400">
                {t('team.cta.titleHighlight')}
              </span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {t('team.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" to="/careers">
                {t('team.cta.ctaPrimary')}
              </Button>
              <Button variant="outline" size="lg" to="/about">
                {t('team.cta.ctaSecondary')}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default TeamPage;
