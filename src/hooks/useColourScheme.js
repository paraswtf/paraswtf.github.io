import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const ColourSchemeContext = createContext();

export const ColourSchemeProvider = ({ children }) => {
  const [colourScheme, setColourScheme] = useState('light');
  return (
    <ColourSchemeContext.Provider value={[colourScheme, setColourScheme]}>
      {children}
    </ColourSchemeContext.Provider>
  );
};

ColourSchemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useColourScheme = () => useContext(ColourSchemeContext);
