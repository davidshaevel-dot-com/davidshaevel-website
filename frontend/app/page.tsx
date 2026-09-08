import Link from 'next/link';
import { LINEAGE_LINE, featuredProjects } from '@/lib/projects';

type Competency = {
  name: string;
  description: string;
  color: string;
  iconPath: string;
};

const competencies: Competency[] = [
  {
    name: 'Cloud Infrastructure',
    description:
      'Multi-cloud architecture across AWS, Azure, and GCP: VPC and hub-and-spoke network design, ECS Fargate, AKS and GKE, RDS, CloudFront, private endpoints, and multi-AZ high availability.',
    color: 'bg-blue-600 dark:bg-blue-500',
    iconPath: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
  },
  {
    name: 'Infrastructure as Code',
    description:
      'Terraform and Terraform Cloud modules, Ansible roles, and Helm charts for reusable, production-ready infrastructure with remote state, environment separation, and self-service golden paths.',
    color: 'bg-purple-600 dark:bg-purple-500',
    iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
  {
    name: 'CI/CD & Automation',
    description:
      'GitHub Actions, Jenkins, and Azure Pipelines with reusable workflows, automated security gates, Atlantis Terraform GitOps, and Argo CD–driven deployments.',
    color: 'bg-green-600 dark:bg-green-500',
    iconPath:
      'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  },
  {
    name: 'Observability',
    description:
      'Prometheus, Grafana, Telegraf, Elasticsearch (ELK), Azure Monitor, and CloudWatch, with automated alerting, on-call incident response, and SRE practice.',
    color: 'bg-orange-600 dark:bg-orange-500',
    iconPath:
      'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  },
  {
    name: 'Security',
    description:
      'Zero-trust access with Teleport, least-privilege IAM and RBAC, encrypted secrets, automated SSL/TLS certificate lifecycle, firewall and network policy, and CIS-aligned access audits.',
    color: 'bg-red-600 dark:bg-red-500',
    iconPath:
      'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  },
  {
    name: 'Containerization',
    description:
      'Docker multi-stage builds, container registries (ECR, ACR, GCR), Kubernetes on AKS and GKE, ECS Fargate, and Cilium eBPF networking with Hubble observability.',
    color: 'bg-cyan-600 dark:bg-cyan-500',
    iconPath:
      'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
            Platform &amp;
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">
              Developer Infrastructure
            </span>
            <br />
            Engineer
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Building reliable cloud platforms and the tooling that makes AI-assisted software
            development safer, faster, and observable.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base italic leading-7 text-zinc-500 dark:text-zinc-500">
            I build infrastructure that lets engineers ship reliably — whether the workers are humans,
            containers, or AI coding agents.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/projects"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-300"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-50"
            >
              Get in touch <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Core Competencies
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Production-grade platform engineering, extended into developer infrastructure for
            AI-assisted engineering
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* AI Developer Infrastructure — featured, full width */}
          <div className="relative overflow-hidden rounded-2xl border-2 border-blue-600 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 sm:col-span-2 lg:col-span-3 dark:border-blue-400 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    Featured
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                  AI Developer Infrastructure
                </h3>
                <p className="mt-2 text-base text-zinc-700 dark:text-zinc-300">
                  Developer tooling for persistent and multi-agent AI-assisted engineering workflows,
                  including cross-session context preservation, task orchestration, agent routing,
                  isolated execution, permission controls, and workflow measurement.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:min-w-[14rem]">
                {featuredProjects.map((project) => (
                  <Link
                    key={project.slug}
                    href={project.caseStudyPath ?? '/projects'}
                    className="rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:border-blue-600 hover:text-blue-700 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:border-blue-400 dark:hover:text-blue-300"
                  >
                    {project.name} <span aria-hidden="true">→</span>
                    <span className="mt-1 block text-xs font-normal text-zinc-600 dark:text-zinc-400">
                      {project.tagline}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {competencies.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${c.color}`}>
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={c.iconPath} />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">{c.name}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Featured Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            From persistent context to multi-agent orchestration. {LINEAGE_LINE}
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={project.caseStudyPath ?? '/projects'}
              className={`group rounded-2xl border p-8 transition-colors ${
                project.flagship
                  ? 'border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 hover:border-blue-600 dark:border-blue-900 dark:from-zinc-900 dark:to-zinc-800 dark:hover:border-blue-400'
                  : 'border-zinc-200 bg-white hover:border-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-50'
              }`}
            >
              {project.flagship && (
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  Flagship Project
                </span>
              )}
              <h3 className={`${project.flagship ? 'mt-4' : ''} text-2xl font-bold text-zinc-900 dark:text-zinc-50`}>
                {project.name}
              </h3>
              <p className="mt-2 font-medium text-blue-700 dark:text-blue-300">{project.tagline}</p>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
              <p className="mt-6 text-sm font-semibold text-zinc-900 group-hover:underline dark:text-zinc-50">
                View {project.name} <span aria-hidden="true">→</span>
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/projects" className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            All projects, including the cloud platforms <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-zinc-900 px-6 py-16 text-center shadow-xl dark:bg-zinc-800 sm:px-16">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Ready to Build Something Great?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-300">
            Let&apos;s talk about platform engineering, developer experience, and the infrastructure
            that makes AI-assisted development reliable.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition-colors hover:bg-zinc-100"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}
