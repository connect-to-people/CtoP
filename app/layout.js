import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import StyledComponentsRegistry from './lib/registry'
import GlobalThemeWrapper from "./lib/GlobalThemeWrapper"

export const metadata = {
  title: "CtoP",
  description: "creado por los ctopitos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
            <GlobalThemeWrapper>
              <Header/>
              {children}
              <Footer/>
            </GlobalThemeWrapper>
            </StyledComponentsRegistry>
        </body>
      </html>
  )
}
