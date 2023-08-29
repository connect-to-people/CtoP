'use client'
import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from '../themes/styles';
import { useLocalStorage } from 'usehooks-ts';

export default function GlobalThemeWrapper({children}) {
  const [theme] = useLocalStorage('theme', defaultTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
