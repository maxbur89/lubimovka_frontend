import { ReactNode, ReactElement, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Page, {
  PageHeader,
  PageFooter,
  PageBurgerButton,
  PageOverlayMenu,
} from 'components/page';
import { Menu } from 'components/ui/menu';
import { Icon } from 'components/ui/icon';
import { Navbar } from 'components/navbar';
import { Logotype } from 'components/logotype';
import { Footer } from 'components/footer';
import { OverlayNav } from 'components/overlay-nav';
import { BurgerButton } from 'components/ui/burger-button';
import { FooterPartnerList } from 'components/footer-partner-list';
import { FooterCopyright } from 'components/footer-copyright';
import { DonationLink } from 'components/donation-link';
import { mainNavigationItems } from 'shared/constants/main-navigation-items';
import { footerNavigationItems } from 'shared/constants/footer-navigation-items';
import { socialLinkItems } from 'shared/constants/social-link-items';
import { donationPath } from 'shared/constants/donation-path';
import { participationFormPath } from 'shared/constants/participation-form-path';
import { useAppLayoutData } from 'providers/app-layout-data-provider';
import { useMediaQuery } from 'shared/hooks/use-media-query';
import { useDisableBodyScroll } from 'shared/hooks/use-disable-body-scroll';
import * as breakpoints from 'shared/breakpoints.js';

interface IAppLayoutProps {
  expandedHeader?: boolean,
  children: ReactNode,
  hiddenPartners?: boolean,
  screenImg?: ReactElement,
}

export const AppLayout = (props: IAppLayoutProps): JSX.Element => {
  const {
    expandedHeader,
    children,
    hiddenPartners,
    screenImg,
  } = props;
  const { projects, partners } = useAppLayoutData();
  const [isOverlayMenuOpen, setIsOverlayMenuOpen] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${breakpoints['tablet-portrait']})`);
  const router = useRouter();

  const toggleOverlayMenu = useCallback(() => {
    setIsOverlayMenuOpen(!isOverlayMenuOpen);
  }, [isOverlayMenuOpen]);

  useDisableBodyScroll(isMobile && isOverlayMenuOpen);

  useEffect(() => {
    if (!isMobile) setIsOverlayMenuOpen(false);
  }, [isMobile]);

  return (
    <Page>
      <PageHeader expanded={expandedHeader}>
        {screenImg}
        <Navbar>
          <Navbar.Logotype>
            <Logotype
              href="/"
              title="?????????????????? ??????????????????"
              full={expandedHeader}
            />
          </Navbar.Logotype>
          <Navbar.Actions>
            <Navbar.Section primary>
              <Menu type="main-navigation">
                {mainNavigationItems
                  .filter(item => !item.mobileOnly)
                  .map((item) => (
                    <Menu.Item
                      key={item.href}
                      href={item.href}
                      current={router.asPath === item.href}
                    >
                      {item.text}
                    </Menu.Item>
                  ))}
              </Menu>
            </Navbar.Section>
            <Navbar.Section>
              <Menu type="social-links">
                {socialLinkItems.map((item) => (
                  <Menu.Item key={item.href} href={item.href}>
                    {item.text}
                  </Menu.Item>
                ))}
              </Menu>
            </Navbar.Section>
            <Navbar.Section>
              <DonationLink href={donationPath}/>
            </Navbar.Section>
          </Navbar.Actions>
        </Navbar>
      </PageHeader>
      {children}
      <PageFooter>
        <Footer>
          {!hiddenPartners && (
            <Footer.Partners>
              <FooterPartnerList>
                {partners && partners.length > 0 && partners.map((partner) => (
                  <FooterPartnerList.Item
                    key={partner.name}
                    logo={partner.logo}
                    name={partner.name}
                  />
                ))}
              </FooterPartnerList>
            </Footer.Partners>
          )}
          <Footer.Address>
            <span>
              ???????????????? ??8/3??
            </span>
            ????????????,{'\n'}
            ????. ????????????????, 8, ??????. 3{'\n'}
            ?????????? ??????????????????{'\n'}
          </Footer.Address>
          <Footer.Navigation>
            <Menu type="footer-navigation">
              {footerNavigationItems.map((item, index) => (
                <Menu.Item
                  key={index}
                  href={item.href}
                >
                  {item.text}
                </Menu.Item>
              ))}
            </Menu>
          </Footer.Navigation>
          <Footer.Projects>
            {projects && projects.length && (
              <Menu type="footer-project-list">
                <Menu.Item href="/projects">
                  ?????? ??????????????
                </Menu.Item>
                {projects.map((item, index) => (
                  <Menu.Item
                    key={index}
                    href={`/projects/${item.slug}`}
                  >
                    {item.title}
                  </Menu.Item>
                ))}
              </Menu>
            )}
          </Footer.Projects>
        </Footer>
      </PageFooter>
      {isMobile && (
        <>
          <PageOverlayMenu isOpen={isOverlayMenuOpen}>
            <OverlayNav>
              <OverlayNav.Logotype>
                <Logotype href="/" title="?????????????????? ??????????????????"/>
              </OverlayNav.Logotype>
              <OverlayNav.Menu>
                <Menu type="overlay-navigation">
                  {mainNavigationItems.map((item) => (
                    <Menu.Item
                      key={item.href}
                      href={item.href}
                      current={router.asPath === item.href}
                    >
                      {item.text}
                    </Menu.Item>
                  ))}
                </Menu>
              </OverlayNav.Menu>
              <OverlayNav.Actions>
                <Menu type="overlay-actions">
                  <Menu.Item href={participationFormPath}>
                    ???????????? ??????????
                    <Icon glyph="arrow-right"/>
                  </Menu.Item>
                  <Menu.Item href={donationPath}>
                    ????????????????????
                    <Icon glyph="arrow-right"/>
                  </Menu.Item>
                </Menu>
              </OverlayNav.Actions>
              <OverlayNav.Socials>
                <Menu type="overlay-social-links">
                  {socialLinkItems.sort((a, b) => a.mobileOrder - b.mobileOrder).map((item) => (
                    <Menu.Item
                      key={item.href}
                      href={item.href}
                      mods={item.mods}
                    >
                      {item.text}
                      <Icon glyph="arrow-right"/>
                    </Menu.Item>
                  ))}
                </Menu>
              </OverlayNav.Socials>
              <OverlayNav.Copyright>
                <FooterCopyright/>
              </OverlayNav.Copyright>
            </OverlayNav>
          </PageOverlayMenu>
          <PageBurgerButton>
            <BurgerButton
              isOpen={isOverlayMenuOpen}
              onClick={toggleOverlayMenu}
            />
          </PageBurgerButton>
        </>
      )}
    </Page>
  );
};
