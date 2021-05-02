import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    textHover: string;
    toggleBorder: string;
    background: string;
    gradient?: string;
    variables: any;
  }
}