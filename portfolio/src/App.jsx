import {forwardRef, useEffect, useState} from 'react';
import {
  Link as RouterLink,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import {
  AppShell,
  Icon,
  IconButton,
  TopNav,
  TopNavHeading,
  TopNavItem,
} from '@astryxdesign/core';
import {LinkProvider} from '@astryxdesign/core/Link';
import {Theme} from '@astryxdesign/core/theme';
import {Moon, Sun} from 'lucide-react';
import {AppFooter} from '@/components/AppFooter';
import {AboutView} from '@/views/AboutView';
import {CvView} from '@/views/CvView';
import {HomeView} from '@/views/HomeView';
import {NotFoundView} from '@/views/NotFoundView';
import {ProjectsView} from '@/views/ProjectsView';
import {portfolioTheme} from '@/portfolio.js';

/**
 * Astryx passes `href` to the provider component; React Router wants `to`.
 * Absolute URLs and mailto links bypass the router so the browser handles them.
 */
const RouterLinkAdapter = forwardRef(function RouterLinkAdapter(
  {href, children, ...props},
  ref,
) {
  const isExternal = !href || /^(https?:|mailto:|tel:)/.test(href);

  if (isExternal) {
    return (
      <a ref={ref} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <RouterLink ref={ref} to={href} {...props}>
      {children}
    </RouterLink>
  );
});

const NAV_ITEMS = [
  {label: 'Accueil', href: '/'},
  {label: 'À propos', href: '/about'},
  {label: 'CV', href: '/cv'},
  {label: 'Projets', href: '/projects'},
];

function ScrollToTop() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'instant'});
  }, [pathname]);

  return null;
}

function Navigation({mode, onToggleMode}) {
  const {pathname} = useLocation();

  return (
    <TopNav
      label="Navigation principale"
      heading={
        <TopNavHeading
          heading="Alix JEUDI"
          subheading="Portfolio"
          headingHref="/"
        />
      }
      endContent={
        <IconButton
          label={
            mode === 'dark'
              ? 'Passer au thème clair'
              : 'Passer au thème sombre'
          }
          variant="ghost"
          icon={<Icon icon={mode === 'dark' ? Sun : Moon} />}
          onClick={onToggleMode}
        />
      }
    >
      {NAV_ITEMS.map(item => (
        <TopNavItem
          key={item.href}
          label={item.label}
          href={item.href}
          isSelected={pathname === item.href}
        />
      ))}
    </TopNav>
  );
}

function readInitialMode() {
  const stored = window.localStorage.getItem('portfolio-theme');
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export default function App() {
  const [mode, setMode] = useState(readInitialMode);

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', mode);
  }, [mode]);

  return (
    <Theme theme={portfolioTheme} mode={mode}>
      <LinkProvider component={RouterLinkAdapter}>
        <AppShell
          height="auto"
          variant="surface"
          contentPadding={0}
          topNav={
            <Navigation
              mode={mode}
              onToggleMode={() =>
                setMode(current => (current === 'dark' ? 'light' : 'dark'))
              }
            />
          }
        >
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/cv" element={<CvView />} />
            <Route path="/projects" element={<ProjectsView />} />
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </AppShell>
        <AppFooter />
      </LinkProvider>
    </Theme>
  );
}
