import {
  Badge,
  Card,
  Grid,
  Heading,
  Text,
  VStack,
} from '@astryxdesign/core';
import me from '@/assets/me.jpg';
import {Page} from '@/components/Page';
import {SectionHeading} from '@/components/SectionHeading';
import {profile, skillGroups, timeline} from '@/data/content';

export function AboutView() {
  return (
    <Page>
      <VStack gap={8}>
        <VStack gap={4}>
          <span className="eyebrow">À propos</span>
          <Heading level={1} type="display-2">
            Apprendre, construire, fiabiliser.
          </Heading>
          <Text type="large" color="secondary">
            Je suis {profile.name}, ingénieur Logiciels & Systèmes d’Information
            en alternance chez {profile.company} et étudiant à {profile.school}.
          </Text>
        </VStack>

        <Grid columns={{minWidth: 280, max: 2}} gap={6} align="start">
          <VStack gap={4}>
            <Text type="body" color="secondary">
              Mon parcours a commencé par un BUT Informatique à l’IUT de
              Clermont-Ferrand, où j’ai appris à travailler par projets : du
              recueil de besoins jusqu’à la mise en production, en passant par
              le développement, les tests et la documentation.
            </Text>
            <Text type="body" color="secondary">
              Deux années d’alternance à la CARSAT Auvergne m’ont ensuite permis
              de découvrir le quotidien d’un système d’information critique :
              serveurs internes, applications métier, PowerShell, React, Laravel
              et environnement Microsoft 365. J’y ai surtout appris l’importance
              de la fiabilité et de la sécurité.
            </Text>
            <Text type="body" color="secondary">
              Aujourd’hui chez 3DS OUTSCALE, je poursuis cette trajectoire autour
              du cloud souverain, des infrastructures et des méthodes DevOps,
              avec l’envie de concevoir des solutions robustes et réellement
              utiles aux équipes qui les utilisent.
            </Text>
            <Text type="body" color="secondary">
              Curieux de nature, je m’intéresse aussi bien aux détails d’une
              interface qu’à la manière dont elle est déployée, surveillée et
              maintenue dans le temps.
            </Text>
          </VStack>

          <div className="hero__media">
            <div className="hero__avatar">
              <img
                className="about-avatar"
                src={me}
                alt={profile.name}
                width={280}
                height={280}
              />
            </div>
          </div>
        </Grid>

        <section>
          <VStack gap={5}>
            <SectionHeading
              eyebrow="Parcours"
              title="Expérience & formation"
            />
            <div className="timeline">
              {timeline.map(item => (
                <div className="timeline__item" key={item.title}>
                  <div className="timeline__period">{item.period}</div>
                  <VStack gap={2}>
                    <Heading level={3}>{item.title}</Heading>
                    <Text type="label" color="accent">
                      {item.org}
                    </Text>
                    <Text type="body" color="secondary">
                      {item.description}
                    </Text>
                    <div className="skill-group__tags skill-group__tags--spaced">
                      {item.tags.map(tag => (
                        <Badge key={tag} label={tag} variant="blue" />
                      ))}
                    </div>
                  </VStack>
                </div>
              ))}
            </div>
          </VStack>
        </section>

        <section>
          <VStack gap={5}>
            <SectionHeading
              eyebrow="Compétences"
              title="Les outils du quotidien"
              description="Une boîte à outils construite sur le terrain, entre développement, cloud et administration système."
            />
            <Grid columns={{minWidth: 240, max: 2}} gap={4}>
              {skillGroups.map(group => (
                <Card
                  key={group.title}
                  padding={5}
                  className="skill-group"
                >
                  <VStack gap={3}>
                    <Heading level={4}>{group.title}</Heading>
                    <div className="skill-group__tags">
                      {group.items.map(item => (
                        <Badge key={item} label={item} variant="neutral" />
                      ))}
                    </div>
                  </VStack>
                </Card>
              ))}
            </Grid>
          </VStack>
        </section>
      </VStack>
    </Page>
  );
}
