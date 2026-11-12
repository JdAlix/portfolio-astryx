import {Button, Heading, Icon, Text, VStack} from '@astryxdesign/core';
import {Download} from 'lucide-react';
import cvImage from '@/assets/CV.jpg';
import {Page} from '@/components/Page';
import {profile} from '@/data/content';

export function CvView() {
  return (
    <Page narrow>
      <VStack gap={5}>
        <VStack gap={3}>
          <span className="eyebrow">CV</span>
          <Heading level={1} type="display-2">
            Mon parcours en une page
          </Heading>
          <Text type="large" color="secondary">
            Cliquez sur le CV pour le télécharger au format PDF.
          </Text>
        </VStack>

        <div>
          <Button
            label="Télécharger le CV (PDF)"
            variant="primary"
            href={profile.cv}
            download="CV_Alix_JEUDI.pdf"
            icon={<Icon icon={Download} />}
          />
        </div>

        <a
          className="cv-frame"
          href={profile.cv}
          download="CV_Alix_JEUDI.pdf"
          aria-label="Télécharger le CV d’Alix JEUDI au format PDF"
        >
          <img src={cvImage} alt="CV d’Alix JEUDI" />
        </a>
      </VStack>
    </Page>
  );
}
