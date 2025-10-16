'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Section, Container, Button, Card, Badge } from '../components/ui';
import {
  FiTrendingUp, FiUsers, FiGlobe, FiZap, FiStar, FiMessageCircle,
  FiShoppingCart, FiDollarSign, FiMonitor, FiCpu, FiCheckCircle,
  FiArrowRight, FiPlay
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
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
    },
    {
      icon: <FiDollarSign />,
      title: t('home.services.fintech.title'),
      description: t('home.services.fintech.description'),
      link: '/services#fintech',
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop',
    },
    {
      icon: <FiMonitor />,
      title: t('home.services.streaming.title'),
      description: t('home.services.streaming.description'),
      link: '/services#streaming',
      color: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=300&fit=crop',
    },
    {
      icon: <FiCpu />,
      title: t('home.services.ai.title'),
      description: t('home.services.ai.description'),
      link: '/services#ai',
      color: 'from-indigo-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
    },
  ];

  return (
    <>
      {/* Modern Hero Section with Background */}
      <Section padding="none" className="relative min-h-screen overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />
        </div>

        {/* Animated Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <Container className="relative z-10 flex items-center min-h-screen py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge with Animation */}
            <Badge
              variant="primary"
              size="lg"
              className="mb-6 animate-fade-in bg-white/10 backdrop-blur-md border border-white/20 text-white"
            >
              {t('home.hero.badge')}
            </Badge>

            {/* Main Heading with Gradient */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
              <span className="text-white">{t('home.hero.title')}</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t('home.hero.titleHighlight')}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              {t('home.hero.subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button
                to="/services"
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-purple-500/50 group"
              >
                {t('home.hero.ctaPrimary')}
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                to="/portfolio"
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm group"
              >
                <FiPlay className="mr-2 group-hover:scale-110 transition-transform" />
                {t('home.hero.ctaSecondary')}
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto flex items-start justify-center p-2">
                <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats Section with Modern Cards */}
      <Section background="white" padding="lg" className="-mt-20 relative z-20">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.map((stat, index) => (
              <Card
                key={index}
                variant="hover"
                className="text-center group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="text-blue-600 mb-3 flex justify-center transform group-hover:scale-110 transition-transform">
                    {React.cloneElement(stat.icon, { className: 'w-8 h-8' })}
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services Section with Image Cards */}
      <Section background="gray" padding="lg">
        <Container>
          <div className="text-center mb-16">
            <Badge variant="primary" size="lg" className="mb-4">
              {t('home.services.badge')}
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t('home.services.title')}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                variant="hover"
                to={service.link}
                className="group overflow-hidden p-0 bg-white"
              >
                {/* Image with Gradient Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80 group-hover:opacity-70 transition-opacity`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white transform group-hover:scale-110 transition-transform">
                      {React.cloneElement(service.icon, { className: 'w-8 h-8' })}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                    Learn more
                    <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/services" size="lg" variant="primary">
              {t('home.services.viewAll')}
              <FiArrowRight className="ml-2" />
            </Button>
          </div>
        </Container>
      </Section>

      {/* Portfolio Preview - Optional section removed for cleaner design */}

      {/* Technology Stack with Real Logos - Infinite Carousel */}
      <Section background="white" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('home.techStack.title')}
            </h2>
            <p className="text-gray-600 text-lg">
              {t('home.techStack.subtitle')}
            </p>
          </div>

          {/* Infinite Scrolling Tech Stack */}
          <div className="relative overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container */}
            <div className="flex animate-scroll">
              {[
                { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
                { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
                { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                { name: 'n8n', icon: 'https://avatars.githubusercontent.com/u/45487711?s=200&v=4' },
                { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
                { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
                { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
                { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
                { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
                { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
                { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
              ].concat([
                // Duplicate for seamless loop
                { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
                { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
                { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                { name: 'n8n', icon: 'https://avatars.githubusercontent.com/u/45487711?s=200&v=4' },
                { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
                { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
                { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
                { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
                { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
                { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
                { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
              ]).map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col items-center gap-3 px-8 py-4 group"
                >
                  <div className="relative w-20 h-20 transform group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                      style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section with Modern Design */}
      <Section
        background="dark"
        padding="lg"
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&h=600&fit=crop')] bg-cover bg-center opacity-10" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {t('home.cta.title')}{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                {t('home.cta.titleHighlight')}
              </span>
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              {t('home.cta.subtitle')}
            </p>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: '✓', text: t('home.cta.benefit1') },
                { icon: '✓', text: t('home.cta.benefit2') },
                { icon: '✓', text: t('home.cta.benefit3') },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <span className="text-white font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                to="/contact"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl group"
              >
                {t('home.cta.ctaPrimary')}
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                to="/services"
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10"
              >
                {t('home.cta.ctaSecondary')}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
