import { Link, Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthCompletionStatus } from '../hooks';
import { authViewClass, navClass, mainClass, asideClass, authBoxClass } from './AuthView.css';

function AuthBox() {
  return (
    <section className={authBoxClass}>
      <Outlet />
    </section>
  );
}

function Content() {
  const location = useLocation();
  const completionStatus = useAuthCompletionStatus();

  if (completionStatus === 'login') {
    if (location.pathname !== '/auth/login') {
      return <Navigate to="login" />;
    }
  }

  if (completionStatus === 'verify_email') {
    if (location.pathname !== '/auth/verify_email') {
      return <Navigate to="verify_email" />;
    }
  }

  if (completionStatus === 'complete') {
    if (location.pathname !== '/') {
      return <Navigate to="/" />;
    }
  }

  return <AuthBox />;
}

function OrganiserPicker() {
  return (
    <section>
      <h3>Pre-fill login details from one of these accounts</h3>
      <div>
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
      </div>
    </section>
  );
}

export function AuthView() {
  return (
    <div className={authViewClass}>
      <main className={mainClass}>
        <Content />
      </main>
      <nav className={navClass}>
        <Link to="/">Home</Link>
      </nav>
      <aside className={asideClass}>
        <OrganiserPicker />
      </aside>
    </div>
  );
}
