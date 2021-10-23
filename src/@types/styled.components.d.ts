import { light } from '../styles/themes';

type CustomTheme = typeof light;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
