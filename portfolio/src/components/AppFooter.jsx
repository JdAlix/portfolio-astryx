import {Button, Text} from '@astryxdesign/core';
import {Mail} from 'lucide-react';
import {GithubIcon, LinkedinIcon} from './BrandIcons';
import {profile} from '@/data/content';

export function AppFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <Text type="supporting">
          © {new Date().getFullYear()} Alix JEUDI--LEMOINE. Tous droits réservés.
        </Text>
        <div className="site-footer__links">
          <Button
            label="LinkedIn"
            variant="ghost"
            size="sm"
            href={profile.linkedin}
            target="_blank"
            rel="noopener"
            icon={<LinkedinIcon />}
          />
          <Button
            label="GitHub"
            variant="ghost"
            size="sm"
            href={profile.github}
            target="_blank"
            rel="noopener"
            icon={<GithubIcon />}
          />
          <Button
            label="Email"
            variant="ghost"
            size="sm"
            href={`mailto:${profile.email}`}
            icon={<Mail size={18} aria-hidden />}
          />
        </div>
      </div>
    </footer>
  );
}
