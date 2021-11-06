import { fetcher } from '../../../shared/utils/fetcher';

export function login(credentials: Object) {
  const payload = {
    data: credentials,
  };

  return fetcher('/api/auth/login', {
    method: 'POST',
    payload,
  });
}

export function fetchBootData() {
  return fetcher('/api/boot');
}
