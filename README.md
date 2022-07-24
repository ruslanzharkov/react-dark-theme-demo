# React dark theme demo app
https://user-images.githubusercontent.com/28437795/180662816-da67215c-615f-4233-952d-8fb368c361ca.mov

## Implementation details
This app uses `window.Matchmedia` and css media feature `prefers-color-scheme` inside a custom hook with dynamic theme detection based on user system changes:

```javascript
import { useState, useEffect } from 'react';

export const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (!window.matchMedia || window.matchMedia('(prefers-color-scheme)').media === 'not all') {
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
```

## Requirements 
- `Node.js, npm`
- `macOS/Linux/Windows`
- `git`


## Installation instructions 
1. clone the application
2. `cd react-dark-theme-demo`
3. `npm install`
4. `npm start`

