import { useLocation, Navigate } from 'react-router-dom';
import { useAuthCompletionStatus } from '../auth/hooks';

export type Props = { children: JSX.Element };

export function ProtectedRoute(props: Props) {
  const { children } = props;
  const completionStatus = useAuthCompletionStatus();
  const location = useLocation();

  if (completionStatus !== 'complete') {
    return <Navigate to="/auth" state={{ from: location }} />;
  }

  return children;
}
