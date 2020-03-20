import { addDecorator, configure } from '@storybook/react';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { base } from '../src/theme/base';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    font-family: sans-serif;
  }
`;

// automatically import all files ending in *.stories.tsx in src/components
const req = require.context('../src/components', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req)
}

const withGlobalStyles = (cb: Function) => (
  <>
    <GlobalStyle />
    {cb()}
  </>
);

addDecorator(withGlobalStyles);
addDecorator((story) => (
  <ThemeProvider theme={base}>
    {story()}
  </ThemeProvider>
))


configure(loadStories, module)
