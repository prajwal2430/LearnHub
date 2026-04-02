import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * ProtectedRoute - Wraps a component and only renders it if the user is logged in.
 * If not authenticated, redirects to /login.
 *
 * Usage in routes.js:
 *   { path: '/profile', component: () => <ProtectedRoute><Profile /></ProtectedRoute> }
 *
 * Or use it as an element wrapper:
 *   element={<ProtectedRoute><Profile /></ProtectedRoute>}
 */
const ProtectedRoute = ({ children, redirectTo = '/login' }) => {
  const { currentUser, loading } = useAuth();

  // While auth state is loading, show a spinner / blank screen
  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          background: '#0f172a',
          color: '#fff',
          fontSize: '1.2rem',
        }}
      >
        <span style={{ marginRight: '12px' }}>⏳</span> Authenticating…
      </div>
    );
  }

  // User is not logged in → redirect
  if (!currentUser) {
    return <Navigate to={redirectTo} replace />;
  }

  // User is logged in → render the protected content
  return children;
};

export default ProtectedRoute;