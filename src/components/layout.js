import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { Head, Loader, Nav, Social, Email, Footer } from '@components';
import { GlobalStyle, theme } from '@styles';
import { ColourSchemeProvider } from '../hooks';
// import { isMobile } from 'react-device-detect';

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

  //Handles flashlight position updates
  // function update(e) {
  //   const x = e.clientX;
  //   const y = e.clientY;
  //   document.documentElement.style.setProperty('--cursorX', `${x}px`);
  //   document.documentElement.style.setProperty('--cursorY', `${y}px`);
  // }

  useEffect(() => {
    // if (!isMobile) {
    //   //Handles flashlight effect
    //   document.addEventListener('mousemove', update);
    // }

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

  const bubble = k => (
    <div>
      <span className="dot" key={k} />
    </div>
  );

  return (
    <>
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
        <div
          className="bubwrapper"
          style={{
            width: '100%',
            height: '100%',
          }}>
          {Array(15)
            .fill(1)
            .map((v, i) => bubble(i))}
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;
