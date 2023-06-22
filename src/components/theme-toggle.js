import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.label`
  & {
    cursor: pointer;
    padding: 6px;
  }

  .container {
    position: relative;
    display: block;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 35px;
    padding: 4px 8px;
    border-radius: 35px;
    height: 40px;
    width: 80px;
  }

  & input {
    display: none;
  }

  & input + div {
    border-radius: 50%;
    width: 26px;
    height: 26px;
    position: relative;
    box-shadow: inset 8px -8px 0 0 var(--navy-shadow, #000);
    transform: scale(1) rotate(-2deg);
    transition: box-shadow 0.5s ease 0s, transform 0.4s ease 0.1s;
  }

  & input + div::before {
    content: '';
    width: inherit;
    height: inherit;
    border-radius: inherit;
    position: absolute;
    left: 0;
    top: 0;
    transition: background 0.3s ease;
  }

  & input + div::after {
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    margin: -2px 0 0 -2px;
    position: absolute;
    top: 50%;
    left: 50%;
    box-shadow: 0 -16px 0 var(--light-slate, #eee), 0 16px 0 var(--light-slate, #eee),
      16px 0 0 var(--light-slate, #eee), -16px 0 0 var(--light-slate, #eee),
      12px 12px 0 var(--light-slate, #eee), -12px 12px 0 var(--light-slate, #eee),
      12px -12px 0 var(--light-slate, #eee), -12px -12px 0 var(--light-slate, #eee);
    transform: scale(0);
    transition: all 0.3s ease;
  }

  & input:checked + div {
    box-shadow: inset 32px -32px 0 0 #fff;
    transform: scale(0.5) rotate(0deg);
    transition: transform 0.3s ease 0.1s, box-shadow 0.2s ease 0s;
  }

  & input:checked + div::before {
    background: var(--light-slate, #eee);
    transition: background 0.3s ease 0.1s;
  }

  & input:checked + div::after {
    transform: scale(1.5);
    transition: transform 0.5s ease 0.15s;
  }
`;

export const ThemeToggleButton = ({ isDark, setDark }) => {
  useEffect(() => {
    setDark(document.documentElement.dataset.theme === 'dark');
  }, []);

  return (
    <Container
      className={`${isDark ? 'IsDark' : 'IsLight'}`}
      title={isDark ? 'Activate light mode' : 'Activate dark mode'}
      aria-label={isDark ? 'Activate light mode' : 'Activate dark mode'}
      onClick={e => {
        e.preventDefault();
        const { theme } = document.documentElement.dataset;
        const themeTo = theme && theme === 'light' ? 'dark' : 'light';
        setDark(themeTo === 'dark');
        document.documentElement.setAttribute('data-theme', themeTo);
        localStorage.setItem('theme', themeTo);
      }}>
      <input type="checkbox" defaultChecked={isDark} />
      <div />
    </Container>
  );
};

ThemeToggleButton.propTypes = {
  isDark: PropTypes.bool,
  setDark: PropTypes.func.isRequired,
};

export default ThemeToggleButton;
