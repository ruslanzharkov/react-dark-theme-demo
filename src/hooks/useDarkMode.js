import { useState, useEffect } from 'react';

export const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (!window.matchMedia || window.matchMedia('(prefers-color-scheme)').media === 'not all') {
            // not supported 
            return;
        }

        const colorSchemeQuery = window.matchMedia(
            '(prefers-color-scheme: dark)',
        );

        if (colorSchemeQuery.matches) {
            setIsDarkMode(true);
        }

        colorSchemeQuery.addEventListener('change', (event) => {
            const isDarkModeOn = event.matches;

            setIsDarkMode(isDarkModeOn);
        });
    }, []);

    return isDarkMode;
}