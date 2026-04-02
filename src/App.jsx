import React, { Suspense } from 'react';
import { ReactLenis } from 'lenis/react';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import { JavaPointsProvider } from "./Java/JavaPointsContext.jsx";
import { ProgressProvider, RouteTracker } from './context/ProgressContext.jsx';
import { appRoutes } from './routes';

import Layout from './components/Layout.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

// Fallback shown while lazy-loaded pages are loading
const PageLoader = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '80vh',
      background: '#0f172a',
      color: '#94a3b8',
      fontSize: '1.1rem',
      gap: '12px',
    }}
  >
    <span style={{ fontSize: '1.5rem' }}>⏳</span> Loading…
  </div>
);

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={<><RouteTracker /><Layout /></>}
        errorElement={<ErrorBoundary />}
      >
        {appRoutes.map((route, index) => {
          const Component = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Suspense fallback={<PageLoader />}>
                  <Component />
                </Suspense>
              }
              errorElement={<ErrorBoundary />}
            />
          );
        })}
      </Route>
    ),
    {
      future: {
        v7_startTransition: true,
      },
    }
  );

  return (
    <ReactLenis root>
      <AuthProvider>
        <ProgressProvider>
          <JavaPointsProvider>
            <RouterProvider router={router} />
          </JavaPointsProvider>
        </ProgressProvider>
      </AuthProvider>
    </ReactLenis>
  );
}

export default App;