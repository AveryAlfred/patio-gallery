import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      backdrop: {
        page: string;
        container: string;
        item: string;
      };
      outline: {
        light: string;
        contrast: string;
        dark: string;
        accent: string;
      };
    };
  }
}
