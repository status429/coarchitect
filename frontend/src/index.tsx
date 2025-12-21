import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router';
import { MantineProvider, createTheme } from '@mantine/core';
import { App } from './App';

let container = document.getElementById("app")!;
let root = createRoot(container)

root.render(
  <StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);
