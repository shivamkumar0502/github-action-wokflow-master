# GitHub Action Demo - Node.js

Spring Boot version converted to Node.js + Express.

## Run locally
```bash
npm install
npm start
```

Server runs on `http://localhost:3000`.

Endpoints:
- `GET /hello`
- `GET /bye`
- `GET /hi`

## Tests
```bash
npm test
```

## GitHub Actions
- `pre-tests.yml`: installs Node.js 22 and runs Jest tests for pull requests.
- `deploy.yml`: runs on the existing self-hosted Ubuntu runner after a PR is merged into `master`, stops the old Node process, installs production dependencies, starts the app, and verifies `/hello`.

## Feature Branch Update

CI/CD Runner Test
