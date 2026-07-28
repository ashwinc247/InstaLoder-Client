import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import { AppRoutes } from './router/index.jsx';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider>
          <AppRoutes />
          <Toaster 
            position="top-right" 
            toastOptions={{
              className: 'glass dark:text-white text-slate-800 text-xs border border-slate-200/20 dark:border-slate-850 rounded-xl',
              duration: 4000
            }} 
          />
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
