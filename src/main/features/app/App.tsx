import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '../shared/ProtectedRoute';
import { HomeView } from '../home/HomeView';
import { AdminView } from '../admin/AdminView';
import { AuthView } from '../auth/AuthView/AuthView';
import { LoginView } from '../auth/LoginView/LoginView';
import { VerifyEmailView } from '../auth/VerifyEmailView/VerifyEmailView';
import { NotFoundView } from '../notFound/NotFoundView';
import { themeClass } from './theme.css';
import { appClass } from './App.css';

function App() {
  return (
    <div className={`${appClass} ${themeClass}`}>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomeView />
            </ProtectedRoute>
          }
        />
        <Route path="auth" element={<AuthView />}>
          <Route path="login" element={<LoginView />} />
          <Route path="verify_email" element={<VerifyEmailView />} />
        </Route>
        <Route path="admin" element={<AdminView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </div>
  );
}

export default App;
