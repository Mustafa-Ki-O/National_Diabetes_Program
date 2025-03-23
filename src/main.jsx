import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';
import { Notifications } from '@mantine/notifications';
const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <MantineProvider>
    <Notifications />
      <App />
  </MantineProvider>
  </QueryClientProvider>,
)
