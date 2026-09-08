/**
 * Project catalogue for the Projects page, the homepage featured strip, and
 * the case-study routes. Every fact here comes from the canonical résumé, the
 * portfolio decision record, or this repository. No metrics are stated.
 */

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  /** Internal case-study route (TT-525 owns the full pages). */
  caseStudyPath?: string;
  /** Public GitHub repository, when one exists. */
  github?: string;
  flagship?: boolean;
};

export type ProjectGroup = {
  id: string;
  title: string;
  blurb: string;
  projects: Project[];
};

export const LINEAGE_LINE =
  'Toolkit made long-running agent-assisted projects durable; Mission Control made several of them manageable at once.';

export const missionControl: Project = {
  slug: 'mission-control',
  name: 'Mission Control',
  tagline: 'Control plane for multi-project, multi-agent development',
  description:
    'A local orchestration layer that plans bounded workstreams, routes tasks between Claude Code and OpenAI Codex, dispatches workers, verifies agent lifecycle, enforces permissions, and rolls progress back into project-management state.',
  highlights: [
    'Plan → Route → Dispatch → Supervise → Review → Measure',
    'Launch verification and post-launch liveness checks for every worker',
    'Agent-specific permission policies and a bounded number of workstreams',
    'Review as a dispatched role: the implementer never grades its own work',
    'Measured autonomy, not blind autonomy: autonomy has to earn promotion',
  ],
  stack: ['Claude Code', 'OpenAI Codex', 'tmux', 'Git worktrees', 'Linear', 'Bash'],
  caseStudyPath: '/projects/mission-control',
  flagship: true,
};

export const claudeToolkit: Project = {
  slug: 'claude-toolkit',
  name: 'Claude Toolkit',
  tagline: 'Persistent context across AI coding sessions',
  description:
    'A developer workflow for preserving task state, decisions, constraints, and next steps across new Claude Code sessions so long-running engineering work can continue without rebuilding context from scratch.',
  highlights: [
    'Session handoff: durable working state across agent-session boundaries',
    'Backup and recovery of private, local project state',
    'Independent code review: bot-review resolution and a self-hosted three-cycle review protocol',
    'Shared conventions and project templates, in use across two GitHub organizations',
  ],
  stack: ['Claude Code', 'OpenAI Codex', 'Bash', 'Git'],
  caseStudyPath: '/projects/claude-toolkit',
  github: 'https://github.com/davidshaevel-dot-com/davidshaevel-marketplace',
};

export const kubernetesPlatform: Project = {
  slug: 'kubernetes-platform',
  name: 'Kubernetes Platform',
  tagline: 'Multi-cloud Kubernetes developer platform',
  description:
    'A multi-cluster Kubernetes platform spanning Azure AKS and Google Cloud GKE, managed through Portainer Business Edition with Argo CD for GitOps-based deployments.',
  highlights: [
    'Zero-trust access with self-hosted Teleport and Let’s Encrypt TLS',
    'Cilium eBPF networking with network policies and Hubble flow observability',
    'Cluster lifecycle (create, start, stop, delete) automated with GitHub Actions and Bash, with Cloudflare DNS integration',
    'Cost-optimized with on-demand cluster provisioning',
  ],
  stack: ['Kubernetes', 'AKS', 'GKE', 'Portainer', 'Argo CD', 'Teleport', 'Cilium', 'GitHub Actions', 'Cloudflare'],
  github: 'https://github.com/davidshaevel-dot-com/davidshaevel-k8s-platform',
};

export const ecsPlatform: Project = {
  slug: 'ecs-platform',
  name: 'ECS Platform',
  tagline: 'AWS ECS Fargate platform, built with Terraform',
  description:
    'The earlier AWS deployment of davidshaevel.com: a containerized full-stack application on ECS Fargate with its VPC, database, load balancing, CDN, and observability provisioned entirely as Terraform modules.',
  highlights: [
    'Multi-AZ VPC with ECS Fargate, RDS PostgreSQL, Application Load Balancer, and CloudFront',
    'Terraform modules with remote state and environment separation',
    'Least-privilege IAM, AWS Secrets Manager, and SSL/TLS with ACM',
    'CloudWatch metrics, alarms, and logs alongside Prometheus and Grafana',
  ],
  stack: ['AWS', 'Terraform', 'ECS Fargate', 'RDS', 'CloudFront', 'GitHub Actions', 'CloudWatch', 'Prometheus', 'Grafana'],
  github: 'https://github.com/davidshaevel-dot-com/davidshaevel-ecs-platform',
};

export const websitePlatform: Project = {
  slug: 'davidshaevel-com-platform',
  name: 'DavidShaevel.com Platform',
  tagline: 'This site: full-stack application and delivery pipeline',
  description:
    'The Next.js and NestJS application behind davidshaevel.com, deployed to Vercel with a Neon PostgreSQL database. Container images are built by GitHub Actions and published to Azure Container Registry for the Kubernetes platform.',
  highlights: [
    'Next.js App Router frontend with React, TypeScript, and Tailwind CSS',
    'NestJS and TypeORM API',
    'Vercel deploys from main; Docker images to Azure Container Registry via GitHub Actions',
    'Health and Prometheus metrics endpoints',
  ],
  stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'NestJS', 'PostgreSQL', 'Vercel', 'Docker', 'GitHub Actions'],
  github: 'https://github.com/davidshaevel-dot-com/davidshaevel-website',
};

export const projectGroups: ProjectGroup[] = [
  {
    id: 'ai-developer-infrastructure',
    title: 'AI Developer Infrastructure',
    blurb:
      'Building the developer infrastructure for long-running AI-assisted software engineering, from persistent context across agent sessions to orchestration across projects, models, and concurrent workers.',
    projects: [missionControl, claudeToolkit],
  },
  {
    id: 'cloud-platform-infrastructure',
    title: 'Cloud & Platform Infrastructure',
    blurb:
      'Production-grade cloud platforms built and operated as code: the platform-engineering foundation that the developer-infrastructure work extends.',
    projects: [kubernetesPlatform, ecsPlatform, websitePlatform],
  },
];

export const featuredProjects: Project[] = [missionControl, claudeToolkit];

export function findProject(slug: string): Project | undefined {
  return projectGroups.flatMap((g) => g.projects).find((p) => p.slug === slug);
}
