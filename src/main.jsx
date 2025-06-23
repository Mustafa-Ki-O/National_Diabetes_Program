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
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';
import { Notifications } from '@mantine/notifications';
// import { BrowserRouter } from 'react-router';

const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <QueryClientProvider client={queryClient}>
  <MantineProvider 
 >
    <Notifications />
    {/* <BrowserRouter> */}
      <App />
      {/* </BrowserRouter> */}
  </MantineProvider>
  </QueryClientProvider>
  </Provider>,
)
