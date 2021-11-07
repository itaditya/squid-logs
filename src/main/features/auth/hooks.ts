import { useAppSelector } from '../app/hooks';

// @ts-ignore
function getCompletionStatus(currentOrganiser) {
  if (!currentOrganiser) {
    return 'login';
  }

  if (!currentOrganiser.emailVerified) {
    return 'verify_email';
  }

  return 'complete';
}

export function useAuthCompletionStatus() {
  const currentOrganiser = useAppSelector((store) => store.auth.currentOrganiser);

  return getCompletionStatus(currentOrganiser);
}
