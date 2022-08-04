import { createContext } from "react";
import { Global, ThemeProvider } from "@emotion/react";
import ToggleSwitch from "./components/toggleSwitch";
import { useDarkMode } from "./hooks/useDarkMode";
import { lightTheme, ThemeType } from "./styles/theme";
import GlobalStyle from "./styles/globalStyle";

interface ContextProps {
  theme: ThemeType;
  toggleMode: () => void;
}

export const ThemeContext = createContext<ContextProps>({
  theme: lightTheme,
  toggleMode: () => {
    return null;
  },
});

const App = () => {
  const { theme, toggleMode } = useDarkMode();

  return (
    <ThemeContext.Provider value={{ theme, toggleMode }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ToggleSwitch />
        <h1>안녕하세요</h1>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
