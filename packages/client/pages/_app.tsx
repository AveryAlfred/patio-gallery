import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

import { StandardTheme } from 'common/utils/StandardTheme';
import { PlantProvider } from 'modules/plants/utils/usePlants';
import { DndProvider } from 'modules/dnd/utils/useDnd';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlantProvider>
      <DndProvider>
        <GlobalStyle />
        <StandardTheme>
          <Component {...pageProps} />
        </StandardTheme>
      </DndProvider>
    </PlantProvider>
  );
}

export default MyApp;

const GlobalStyle = createGlobalStyle`

:root {
  font-family: Courier, monospace;
}

* {
  box-sizing: border-box;
  padding: 0; 
  margin: 0;
}

div:focus {
    border: none;
    outline: none;
}
`;
