function sleep(delay: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('done');
    }, delay);
  });
}

type Query = Record<string, string>;

function getUrl(url: RequestInfo, query?: Query) {
  if (!query) {
    return url;
  }

  const params = new URLSearchParams(query);
  const search = params.toString();

  return `${url}?${search}`;
}

type Options = RequestInit & {
  delay?: number;
  shouldFail?: boolean;
  format?: 'json';
  query?: Query;
  payload?: Object;
  headers?: Record<string, string>;
};

export async function fetcher(url: RequestInfo, options: Options = {}) {
  const { delay, shouldFail, format = 'json', query, payload, headers, ...fetchOptions } = options;

  const headersInstance = new Headers(headers);

  if (format === 'json') {
    headersInstance.set('Content-Type', 'application/json; charset=utf-8');
  }

  if (delay) {
    await sleep(delay);
  }

  if (shouldFail) {
    return Promise.reject();
  }

  const apiUrl = getUrl(url, query);

  const response = await fetch(apiUrl, {
    ...fetchOptions,
    body: JSON.stringify(payload),
    headers: headersInstance,
  });

  const { ok, status, statusText } = response;

  if (format === 'json') {
    const result = response.json();
    // @ts-ignore
    const errorMessage = result?.error?.message;

    if (!ok || errorMessage) {
      const message = errorMessage || statusText;

      return Promise.reject({
        status,
        message,
      });
    }

    return result;
  }

  if (!ok) {
    return Promise.reject({
      status,
      message: statusText,
    });
  }
}
