import { Link, Outlet } from 'react-router-dom';

export function AuthView() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
        <Outlet />
      </main>
    </>
  );
}
