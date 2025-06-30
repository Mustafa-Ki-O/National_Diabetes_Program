// Part of National_Diabetes_Program
// Copyright (c) 2025 Mustafa-Ki-O - All rights reserved.

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './redux/store.jsx';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import '@mantine/charts/styles.css';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/charts/styles.layer.css';
// import { theme } from './theme.js';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Notifications } from '@mantine/notifications';

const queryClient = new QueryClient();

// Function to determine initial color scheme
const initialColorScheme = () => {
  // Implement your logic to determine color scheme (light/dark)
  return 'light'; // Default to light if no preference
};

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <MantineProvider 
        theme={{
          colorScheme: initialColorScheme(), 
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Notifications />
        <App />
      </MantineProvider>
    </QueryClientProvider>
  </Provider>
)