import {useLayoutEffect, useRef, useState} from 'react';
import {
  Badge,
  Button,
  Card,
  Grid,
  Heading,
  HStack,
  Icon,
  Lightbox,
  Text,
  VStack,
} from '@astryxdesign/core';
import {ExternalLink, Maximize2} from 'lucide-react';

function ProjectImage({src, alt, className, position}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    if (imageRef.current?.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <img
      ref={imageRef}
      src={src}
      alt={alt}
      className={`${className}${isLoaded ? ' is-loaded' : ''}`}
      data-position={position}
      loading="lazy"
      decoding="async"
      onLoad={() => setIsLoaded(true)}
    />
  );
}

export function ProjectCard({project}) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const media = [
    {
      src: project.image,
      alt: `Aperçu du projet ${project.title}`,
    },
    ...project.gallery.map((src, index) => ({
      src,
      alt: `Capture ${index + 1} du projet ${project.title}`,
    })),
  ];

  return (
    <Card padding={4} className="project-card">
      <VStack gap={4}>
        <button
          type="button"
          className="project-card__media"
          onClick={() => setLightboxIndex(0)}
          aria-label={`Agrandir l’image du projet ${project.title}`}
        >
          <ProjectImage
            className="project-card__image"
            src={project.image}
            alt={`Aperçu du projet ${project.title}`}
            position={project.imagePosition}
          />
          <span className="project-card__zoom" aria-hidden>
            <Maximize2 size={18} />
          </span>
        </button>

        <VStack gap={3} className="project-card__body">
          <HStack gap={3} align="center">
            {project.logo ? (
              <img
                className="project-card__logo"
                src={project.logo}
                alt=""
                aria-hidden
              />
            ) : null}
            <VStack gap={0.5}>
              <Heading level={3}>{project.title}</Heading>
              <Text type="supporting">{project.subtitle}</Text>
            </VStack>
          </HStack>

          <Text type="body" color="secondary">
            {project.objective}
          </Text>
          <Text type="body" color="secondary">
            {project.description}
          </Text>

          <HStack gap={1.5} wrap="wrap">
            {project.tech.map(tech => (
              <Badge key={tech} label={tech} variant="blue" />
            ))}
          </HStack>

          {project.gallery.length > 0 ? (
            <Grid columns={project.gallery.length === 1 ? 1 : 2} gap={1}>
              {project.gallery.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  className={
                    project.gallery.length === 1
                      ? 'project-card__thumb-button project-card__thumb-button--wide'
                      : 'project-card__thumb-button'
                  }
                  onClick={() => setLightboxIndex(index + 1)}
                  aria-label={`Agrandir la capture ${index + 1} du projet ${project.title}`}
                >
                  <ProjectImage
                    className={
                      project.gallery.length === 1
                        ? 'project-card__thumb project-card__thumb--wide'
                        : 'project-card__thumb'
                    }
                    src={image}
                    alt={`Capture ${index + 1} du projet ${project.title}`}
                  />
                </button>
              ))}
            </Grid>
          ) : null}

          <HStack gap={2} wrap="wrap" className="project-card__links">
            {project.links.map(link => (
              <Button
                key={link.href}
                label={link.label}
                variant="secondary"
                size="sm"
                href={link.href}
                target="_blank"
                rel="noopener"
                icon={<Icon icon={ExternalLink} size="sm" />}
              />
            ))}
            {project.confidential ? (
              <Badge label="Projet confidentiel" variant="neutral" />
            ) : null}
          </HStack>
        </VStack>
      </VStack>

      <Lightbox
        isOpen={lightboxIndex !== null}
        onOpenChange={isOpen => setLightboxIndex(isOpen ? lightboxIndex : null)}
        media={media}
        index={lightboxIndex ?? 0}
        onIndexChange={setLightboxIndex}
        hasZoom
      />
    </Card>
  );
}
