import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description:
    'David Shaevel is a Platform & Developer Infrastructure Engineer in Austin, Texas: 20+ years in software engineering, 7+ years of enterprise multi-cloud platform architecture, now extended into developer infrastructure for AI-assisted engineering.',
};

type ExpertiseGroup = { title: string; items: string[] };

const expertise: ExpertiseGroup[] = [
  {
    title: 'Cloud & Infrastructure',
    items: [
      'AWS (VPC, ECS Fargate, ECR, ALB, RDS, CloudFront, Lambda, S3, IAM, KMS)',
      'Azure (AKS, ACR, App Service Environment, Azure DevOps, VNet peering, Private Endpoints)',
      'GCP (GKE, Compute Engine, Load Balancers) and IBM Cloud',
      'Terraform & Terraform Cloud, Ansible, Helm',
      'Hub-and-spoke network architecture, zero-trust access, multi-AZ high availability',
    ],
  },
  {
    title: 'DevOps & Automation',
    items: [
      'GitHub Actions, Jenkins, Azure Pipelines',
      'Argo CD GitOps and Atlantis Terraform automation',
      'Docker & Kubernetes (AKS, GKE), ECS Fargate',
      'Self-service infrastructure and reusable workflow patterns',
    ],
  },
  {
    title: 'Observability & Reliability',
    items: [
      'Prometheus, Grafana, Telegraf, Elasticsearch (ELK)',
      'Azure Monitor and CloudWatch metrics, alarms, and logs',
      'Hubble (eBPF) network flow observability',
      'On-call incident response and SRE practice',
    ],
  },
  {
    title: 'AI Developer Infrastructure',
    items: [
      'Agentic AI tooling: Claude Code and OpenAI Codex',
      'Model Context Protocol (MCP)',
      'Coding-agent orchestration and lifecycle supervision',
      'Permissions engineering for unattended agents',
      'Session continuity and context engineering',
      'Independent, execution-based review of agent-written code',
    ],
  },
  {
    title: 'Development',
    items: [
      'TypeScript & Node.js, Next.js & React, NestJS',
      'Python, Go, Java, Bash',
      'PostgreSQL, MySQL, MongoDB, Elasticsearch',
    ],
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            About Me
          </h1>
          <p className="mt-6 text-xl text-zinc-600 dark:text-zinc-400">
            Platform &amp; Developer Infrastructure Engineer based in Austin, Texas
          </p>
        </div>

        {/* Bio Section */}
        <div className="mt-16 space-y-8 text-lg text-zinc-600 dark:text-zinc-400">
          <p>
            I&apos;m David Shaevel, a Platform &amp; Developer Infrastructure Engineer based in Austin, Texas.
            I have 20+ years of software engineering experience and 7+ years focused on enterprise
            multi-cloud platform architecture across AWS, Azure, GCP, and IBM Cloud: infrastructure as
            code, Kubernetes platform design, CI/CD, observability, and security. I focus on creating
            reliable, scalable, and secure infrastructure that enables teams to ship faster.
          </p>
          <p>
            My approach to platform engineering emphasizes automation, observability, and security from
            the ground up. I believe in infrastructure as code, comprehensive monitoring, and building
            systems that are both maintainable and resilient.
          </p>
          <p>
            More recently that work has extended into developer infrastructure for AI-assisted
            engineering. AI coding agents are powerful, but their natural unit of work is a session,
            while real engineering projects last days, weeks, or months. I first built the{' '}
            <Link href="/projects/claude-toolkit" className="font-semibold text-zinc-900 underline dark:text-zinc-50">
              Claude Toolkit
            </Link>{' '}
            to solve that mismatch: its session-handoff workflow preserves the state of an engineering
            task across agent sessions so a new session can resume the work without reconstructing
            decisions, discoveries, constraints, and next steps from scratch. That solved continuity, and
            created the next problem. Once several projects could each maintain durable agent context,
            managing multiple active projects and multiple coding agents became the bottleneck, and{' '}
            <Link href="/projects/mission-control" className="font-semibold text-zinc-900 underline dark:text-zinc-50">
              Mission Control
            </Link>{' '}
            grew out of that: a control plane that reads the work queue, routes tasks between Claude Code
            and OpenAI Codex, dispatches isolated worker sessions, verifies that agents actually launched
            and remain alive, manages permission boundaries, and rolls progress back into the
            project-management system. Together they trace an evolution from session continuity to
            multi-agent coordination to measured autonomy. The goal is not simply to make AI agents more
            autonomous; it is to build the developer infrastructure required to make increasingly
            autonomous software agents reliable, observable, recoverable, and useful over the lifetime of
            real engineering work.
          </p>
        </div>

        {/* Technical Expertise */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Technical Expertise
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {expertise.map((group) => (
              <div
                key={group.title}
                className={
                  group.title === 'AI Developer Infrastructure'
                    ? 'rounded-2xl border-2 border-blue-600 bg-blue-50 p-6 sm:col-span-2 dark:border-blue-400 dark:bg-zinc-900'
                    : ''
                }
              >
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{group.title}</h3>
                <ul
                  className={`mt-4 space-y-2 text-zinc-600 dark:text-zinc-400 ${
                    group.title === 'AI Developer Infrastructure' ? 'sm:columns-2' : ''
                  }`}
                >
                  {group.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Approach */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            My Approach
          </h2>
          <div className="mt-8 space-y-6 text-zinc-600 dark:text-zinc-400">
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                Infrastructure as Code First
              </h3>
              <p className="mt-2">
                Every piece of infrastructure should be codified, version-controlled, and reproducible.
                This ensures consistency across environments and enables confident deployments.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                Security by Default
              </h3>
              <p className="mt-2">
                Security isn&apos;t an afterthought—it&apos;s built into every layer. From least-privilege IAM
                to encrypted secrets and secure network architecture, security is fundamental.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                Comprehensive Observability
              </h3>
              <p className="mt-2">
                You can&apos;t improve what you can&apos;t measure. I implement detailed monitoring, alerting,
                and logging from day one, providing visibility into system health and performance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                Automation &amp; Efficiency
              </h3>
              <p className="mt-2">
                Manual processes are error-prone and don&apos;t scale. I automate repetitive tasks,
                enabling teams to focus on building features rather than managing infrastructure.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">
                Measured Autonomy, Not Blind Autonomy
              </h3>
              <p className="mt-2">
                The same discipline applies to AI coding agents. Autonomy has to earn promotion: increase
                it only after the current workflow has demonstrated reliability with no degradation in
                measured engineering outcomes, and never let the implementer grade its own work.
              </p>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="mt-16 rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-3">
            <svg
              className="h-6 w-6 text-zinc-600 dark:text-zinc-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div>
              <p className="font-semibold text-zinc-900 dark:text-zinc-50">Based in Austin, Texas</p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Available for remote work and on-site consultations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
