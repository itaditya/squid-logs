import { Link } from 'react-router-dom';

export function NotFoundView() {
  return (
    <div>
      <h2>You found the Not Found page</h2>
      <Link to="/">Go to Home</Link>
    </div>
  );
}
