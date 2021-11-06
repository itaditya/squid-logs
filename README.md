## Squid Logs

The project is just an excuse so I can try the new cutting edge stuff like Redux Toolkit, React Router v6, Vanilla Extract, Vercel Serverless Functions, PlanetScale DB and see how Typescript can power it end to end. 

### What I learned so far-

1. Don't use planetscale-node package in serverless environment since it creates CA Certificate on init which leads to slow bootup time. PlanetScale service now supports connecting with MySQL client, Prisma etc with username + password so use those instead.
1. In MySQL, booleans are stored as `tinyint(1)`. I guess ORMs automatically convert it to boolean values which doesn't happen with a simple client like `mysql2`.
1. API server should have a transform layer at receive and respond points so it can do things like change camelCase data to snake_case & vice-versa, request validations, response cleaning.
1. The client should send `Content-Type: application/json` header so Vercel can automatically parse the body as JSON.
1. On Chromium, even localhost can work with Secure HttpOnly Cookies.
1. When user visits auth pages after completing auth then have the redirect logic in the layout component (the one that renders Outlet i.e. AuthView) instead of index component (deleted AuthIndexView).
1. Before redirecting to a route, we need to check if user is already on that route otherwise it causes infinite loop.
1. `createAsyncThunk` in redux-toolkit is amazing. It auto-creates 3 actions and we can wait on the promise from the dispatch call site also.
1. `createEntityAdapter` removes the boilerplate of converting a data list into id mapping. Can be paired with `createAsyncThunk` to have a normalized API cache. It even generates memoized selectors.
1. We can lazy load the main chunk in parallel to fetching boot data [like here](/src/index.ts) with promises if we import boot module with Vite only.
1. For side project, have raw tokens + component variants instead of trying to setup a proper design token theme because the latter is very very hard to do especially at the start.

### Local setup

1. Fork the repo & setup a project on Vercel. Add the PlanetScale service integration.
1. Enable all PlanetScale env variables for Development environment also. (ok for side-project).
1. Clone your forked version locally.
1. Install Vercel CLI globally with `npm i -g vercel`.
1. Install all the dependencies with `npm install`.
1. Start the app with `vercel dev`. It'll probably run on port `3000`. 
1. Access the client on `localhost:3000/` & server on `localhost:3000/api/`.
