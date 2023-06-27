import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Head, Loader, Nav, Social, Email, Footer } from '@components';
import { GlobalStyle, theme } from '@styles';
import { ColourSchemeProvider } from '../hooks';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, location }) => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  useEffect(() => {
    const torch = document.querySelector('.torch');
    document.onmousemove = e => {
      if (torch) {
        torch.setAttribute(
          'style',
          `top: ${e.pageY + 500}px; left: ${
            e.pageX + 500
          }px; transition: 0.05s linear; overflow: visible`,
        );
      }
    };

    if (isLoading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    handleExternalLinks();
  }, [isLoading]);

  return (
    <>
      <div className="torch"></div>
      <Head />

      <div id="root">
        <ThemeProvider theme={{ ...theme }}>
          <ColourSchemeProvider>
            <GlobalStyle />

            <a className="skip-to-content" href="#content">
              Skip to Content
            </a>

            {isLoading && isHome ? (
              <Loader finishLoading={() => setIsLoading(false)} />
            ) : (
              <StyledContent>
                <Nav isHome={isHome} />
                <Social isHome={isHome} />
                <Email isHome={isHome} />

                <div id="content">
                  {children}
                  <Footer />
                </div>
              </StyledContent>
            )}
          </ColourSchemeProvider>
        </ThemeProvider>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
