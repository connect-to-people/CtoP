import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import StyledComponentsRegistry from "./lib/registry";
import GlobalThemeWrapper from "./lib/GlobalThemeWrapper";

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
            <NavBar />
            {children}
            <Footer />
          </GlobalThemeWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
