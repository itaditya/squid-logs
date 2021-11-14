import { useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { loginAction } from './actions';

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

export function useLogin() {
  const loginPromiseRef = useRef(null);
  const dispatch = useAppDispatch();

  async function startLogin(credentials) {
    if (!loginPromiseRef.current) {
      const loginPromise = dispatch(loginAction(credentials));
      // @ts-ignore
      loginPromiseRef.current = loginPromise;

      await loginPromise;
      loginPromiseRef.current = null;
    }

    return loginPromiseRef.current;
  }

  return {
    startLogin,
  };
}
