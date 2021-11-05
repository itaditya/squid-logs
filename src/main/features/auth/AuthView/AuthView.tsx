import { Link, Outlet } from 'react-router-dom';
import { authViewClass, navClass, mainClass, asideClass, authBoxClass } from './AuthView.css';

function AuthBox() {
  return (
    <section className={authBoxClass}>
      <Outlet />
    </section>
  );
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
        <AuthBox />
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
