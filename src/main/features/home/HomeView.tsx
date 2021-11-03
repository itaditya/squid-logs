import { Link } from 'react-router-dom';

export function HomeView() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/auth/login">Login</Link>
      </nav>
    </>
  );
}
