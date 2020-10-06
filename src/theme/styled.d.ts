import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      accent: string;
      third: string;
      lightThird: string;
      gray: string;
      darkGray: string;
      lightGray: string;
      lightGray2: string;
      white: string;
      error: string;
      success: string;
    };
    font: {
      family: string;
      sizes: {
        small: string;
        medium: string;
        button: string;
        large: string;
        title: string;
      };
      weight: number;
    };
  }
}
