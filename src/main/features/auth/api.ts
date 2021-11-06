import { fetcher } from '../../../shared/utils/fetcher';

function login(credentials: Object) {
  const payload = {
    data: credentials,
  };

  return fetcher('/api/auth/login', {
    method: 'POST',
    payload,
  });
}

function fetchUserData() {
  return fetcher('/api/boot');
}

export { login, fetchUserData };
