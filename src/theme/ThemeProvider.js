import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { useDarkMode } from '../hooks/useDarkMode';

import { lightTheme } from './lightTheme';
import { darkTheme } from './darkTheme';

export const ThemeProvider = ({ children }) => {
    const isDarkMode = useDarkMode();

    return (
        <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            {children}
        </StyledThemeProvider>
    )
}