function login(credentials) {
  const headers = new Headers();
  headers.set('Content-Type', 'application/json');

  const payload = {
    data: credentials,
  };

  fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers,
  });
}

export { login };
