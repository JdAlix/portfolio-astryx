import {useEffect, useState} from 'react';
import {
  Grid,
  Heading,
  SegmentedControl,
  SegmentedControlItem,
  Text,
  VStack,
} from '@astryxdesign/core';
import {Page} from '@/components/Page';
import {ProjectCard} from '@/components/ProjectCard';
import {projects, yearLabels} from '@/data/content';

const years = ['3', '2', '1'];

export function ProjectsView() {
  const [selectedYear, setSelectedYear] = useState('3');
  const visibleProjects = projects.filter(
    project => project.year === selectedYear,
  );

  // Charge toutes les images des trois années dès l'arrivée sur la page :
  // le changement d'onglet ne déclenche plus de flicker.
  useEffect(() => {
    const sources = new Set(
      projects.flatMap(project => [project.image, ...project.gallery]),
    );

    for (const src of sources) {
      const image = new Image();
      image.decoding = 'async';
      image.src = src;
    }
  }, []);

  return (
    <Page>
      <VStack gap={6}>
        <VStack gap={3}>
          <span className="eyebrow">Projets</span>
          <Heading level={1} type="display-2">
            Ce que j’ai construit
          </Heading>
          <Text type="large" color="secondary">
            Une sélection de projets menés pendant mon BUT Informatique, entre
            développement web, API, cloud et missions en entreprise.
          </Text>
        </VStack>

        <div className="project-toolbar">
          <SegmentedControl
            label="Filtrer les projets par année"
            value={selectedYear}
            onChange={setSelectedYear}
          >
            {years.map(year => (
              <SegmentedControlItem
                key={year}
                value={year}
                label={yearLabels[year]}
              />
            ))}
          </SegmentedControl>
          <Text type="supporting">
            {visibleProjects.length} projet
            {visibleProjects.length > 1 ? 's' : ''}
          </Text>
        </div>

        <div key={selectedYear} className="project-grid-enter">
          <Grid columns={{minWidth: 300, max: 2}} gap={4}>
            {visibleProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Grid>
        </div>
      </VStack>
    </Page>
  );
}
