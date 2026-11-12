import {Button, EmptyState} from '@astryxdesign/core';
import {Compass} from 'lucide-react';
import notFoundArt from '@/assets/404-computer.svg';
import {Page} from '@/components/Page';

export function NotFoundView() {
  return (
    <Page narrow>
      <img
        className="notfound-art"
        src={notFoundArt}
        alt="Illustration d’un ordinateur introuvable"
      />
      <EmptyState
        headingLevel={1}
        icon={<Compass size={28} aria-hidden />}
        title="Page introuvable"
        description="Désolé, la page que vous recherchez n’existe pas ou a été déplacée."
        actions={
          <Button label="Retour à l’accueil" variant="primary" href="/" />
        }
      />
    </Page>
  );
}
