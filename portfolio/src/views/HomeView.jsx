import {
  Button,
  Card,
  Grid,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from '@astryxdesign/core';
import {
  ArrowRight,
  Cloud,
  Code2,
  Download,
  GraduationCap,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import me from '@/assets/me.jpg';
import {Page} from '@/components/Page';
import {ProjectCard} from '@/components/ProjectCard';
import {SectionHeading} from '@/components/SectionHeading';
import {highlights, profile, projects} from '@/data/content';

const services = [
  {
    icon: Code2,
    title: 'Développement',
    description:
      'Des interfaces soignées et des API robustes, du prototype à la mise en production. Vue, React, Spring Boot, FastAPI.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description:
      'Conteneurisation Docker, intégration continue, déploiement sur serveurs Linux et environnements cloud souverains.',
  },
  {
    icon: ShieldCheck,
    title: 'Systèmes & sécurité',
    description:
      'Administration de serveurs, automatisation PowerShell, bonnes pratiques de fiabilité et de sécurité des SI.',
  },
];

export function HomeView() {
  const featured = projects.filter(project => project.year === '3');

  return (
    <Page>
      <div className="stack-section">
        <section className="hero">
          <Grid columns={{minWidth: 320, max: 2}} gap={8} align="center">
            <VStack gap={4}>
              <span className="eyebrow">Portfolio</span>
              <Heading level={1} type="display-1">
                {profile.name}
              </Heading>
              <Text type="large" color="secondary">
                {profile.role} · {profile.company}
              </Text>
              <Text type="body" color="secondary">
                {profile.tagline}
              </Text>
              <div className="hero__actions">
                <Button
                  label="Découvrir mes projets"
                  variant="primary"
                  size="lg"
                  href="/projects"
                  icon={<Icon icon={ArrowRight} />}
                />
                <Button
                  label="Télécharger mon CV"
                  variant="secondary"
                  size="lg"
                  href={profile.cv}
                  download="CV_Alix_JEUDI.pdf"
                  icon={<Icon icon={Download} />}
                />
              </div>
              <div className="hero__meta">
                <span>
                  <Icon icon={MapPin} size="sm" />
                  {profile.location}
                </span>
                <span>
                  <Icon icon={GraduationCap} size="sm" />
                  {profile.school}
                </span>
              </div>
            </VStack>

            <VStack gap={4} className="hero__media" align="center">
              <div className="hero__avatar hero__avatar--lg">
                <img src={me} alt={profile.name} width={240} height={240} />
              </div>
            </VStack>
          </Grid>
        </section>

        <Grid columns={{minWidth: 220, max: 3}} gap={4}>
          {highlights.map(highlight => (
            <Card key={highlight.label} padding={4} className="highlight">
              <VStack gap={1}>
                <span className="highlight__value">{highlight.value}</span>
                <Text type="label">{highlight.label}</Text>
                <Text type="supporting">{highlight.detail}</Text>
              </VStack>
            </Card>
          ))}
        </Grid>

        <section>
          <VStack gap={5}>
            <SectionHeading
              eyebrow="Ce que je fais"
              title="Des idées aux systèmes en production"
              description="J’aime autant concevoir une interface lisible que fiabiliser l’infrastructure qui la fait tourner."
            />
            <Grid columns={{minWidth: 260, max: 3}} gap={4}>
              {services.map(service => {
                const ServiceIcon = service.icon;
                return (
                  <Card
                    key={service.title}
                    padding={5}
                    className="feature-card"
                  >
                    <VStack gap={3}>
                      <span className="feature-card__icon">
                        <ServiceIcon size={22} aria-hidden />
                      </span>
                      <Heading level={3}>{service.title}</Heading>
                      <Text type="body" color="secondary">
                        {service.description}
                      </Text>
                    </VStack>
                  </Card>
                );
              })}
            </Grid>
          </VStack>
        </section>

        <section>
          <VStack gap={5}>
            <HStack justify="between" align="end" wrap="wrap" gap={3}>
              <SectionHeading
                eyebrow="Sélection"
                title="Projets à la une"
                description="Deux projets de 3ᵉ année, entre développement produit et mission en entreprise."
              />
              <Button
                label="Tous les projets"
                variant="ghost"
                href="/projects"
                icon={<Icon icon={ArrowRight} />}
              />
            </HStack>
            <Grid columns={{minWidth: 300, max: 2}} gap={4}>
              {featured.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </Grid>
          </VStack>
        </section>
      </div>
    </Page>
  );
}
