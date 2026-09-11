# davidshaevel.com

Full-stack web application for [davidshaevel.com](https://davidshaevel.com) — a personal website and portfolio platform.

## Tech Stack

- **Frontend:** Next.js 16, TypeScript, React 19, Tailwind CSS 4
- **Backend:** NestJS, TypeScript, TypeORM
- **Database:** Neon PostgreSQL (production)
- **Hosting:** Vercel (production), Azure Container Registry (Docker images)

## Project Structure

```
davidshaevel-website/
├── frontend/          # Next.js application (port 3000)
│   ├── app/           # Next.js App Router pages
│   ├── components/    # React components
│   └── Dockerfile     # Multi-stage production build
├── backend/           # NestJS API (port 3001)
│   ├── src/           # Application source code
│   └── Dockerfile     # Multi-stage production build
├── docker-compose.yml # Local development (PostgreSQL + backend + frontend)
└── .github/workflows/ # CI/CD pipelines
```

## Local Development

```bash
docker compose up
```

This starts PostgreSQL, backend (port 3001), and frontend (port 3000) with hot reload.

## Production

**Vercel:** Frontend and backend deploy automatically on push to main.

**Docker Images:** Built via GitHub Actions and pushed to Azure Container Registry (`k8sdevplatformacr.azurecr.io`).

## Versioning

Releases use semantic versioning. MINOR releases cover user-visible enhancements, PATCH releases cover fixes, and MAJOR releases are reserved for a redesign or a breaking change to the public shape of the site.

Each release is tagged on `main` at the commit Vercel production serves. v1.0.0 is the baseline release for the Vercel production site on 2026-09-03.

## Related Repositories

- [davidshaevel-k8s-platform](https://github.com/davidshaevel-dot-com/davidshaevel-k8s-platform) — Kubernetes platform infrastructure
- [davidshaevel-ecs-platform](https://github.com/davidshaevel-dot-com/davidshaevel-ecs-platform) — AWS ECS/Fargate infrastructure (archived)
