import { createGlobalStyle, DefaultTheme } from 'styled-components';
import * as variables from './variables';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  div#root {
    min-height: 100vh;
    display: flex;
    flex-flow: column;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    min-height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  }`;

export const darkTheme: DefaultTheme = {
  body: variables.darkGray  ,
  text: variables.primaryLight,
  textHover: variables.primaryLight,
  toggleBorder: '#6B8096',
  background: variables.primaryDark,
  variables
};