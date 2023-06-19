import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
// import { email } from '@config';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const [isDark, setDark] = useState(true);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    setDark(document.documentElement.dataset.theme === 'dark');

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, I'm</h1>;
  const two = <h2 className="big-heading">Paras Deshpande.</h2>;
  const three = <h3 className="big-heading">I design and build web apps.</h3>;
  const four = (
    <>
      <p>
        I’m a full-stack developer specializing in building fast and reliable web apps. Currently,
        I’m working on creating my own design agency with a few of my friends at{' '}
        <a href="https://instagram.com/styxo.codes" target="_blank" rel="noreferrer">
          styxo.codes
        </a>
        .
      </p>
    </>
  );
  const five = (
    <>
      <a className="email-link" href="mailto:paras@styxo.codes" target="_blank" rel="noreferrer">
        Get in touch!
      </a>{' '}
      <a className="email-link" href="/blog">
        Read my blog!
      </a>{' '}
      <button
        className="email-link js-theme-toggle"
        aria-label="Theme toggle"
        onClickCapture={e => {
          e.preventDefault();
          const { theme } = document.documentElement.dataset;
          const themeTo = theme && theme === 'light' ? 'dark' : 'light';
          setDark(themeTo === 'dark');
          document.documentElement.setAttribute('data-theme', themeTo);
          localStorage.setItem('theme', themeTo);
        }}>
        Activate {isDark ? 'light' : 'dark'} mode
      </button>
    </>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
