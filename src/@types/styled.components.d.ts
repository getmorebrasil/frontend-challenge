import { darkTheme } from '../styles/themes';

type CustomTheme = typeof darkTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}