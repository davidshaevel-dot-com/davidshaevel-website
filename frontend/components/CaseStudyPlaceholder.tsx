import Link from 'next/link';
import { ProjectLinks } from '@/components/ProjectCard';
import { LINEAGE_LINE, type Project } from '@/lib/projects';

/**
 * Placeholder body for the TT-525 case-study routes. Keeps the routes live
 * (HTTP 200) with the project's positioning until the full case study lands.
 */
export default function CaseStudyPlaceholder({ project }: { project: Project }) {
  const links = { ...project, caseStudyPath: undefined };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
          AI Developer Infrastructure
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-4 text-2xl text-zinc-700 dark:text-zinc-300">{project.tagline}</p>
        <p className="mt-8 text-lg text-zinc-600 dark:text-zinc-400">{project.description}</p>
        <p className="mt-6 border-l-4 border-blue-600 pl-4 text-lg italic text-zinc-700 dark:border-blue-400 dark:text-zinc-300">
          {LINEAGE_LINE}
        </p>

        <div className="mt-12 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-8 dark:border-zinc-700 dark:bg-zinc-900">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Case study coming soon</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            The full engineering case study for {project.name} — the problem, the design decisions, the
            architecture, and what it demonstrates — is being written. In the meantime, the{' '}
            <Link href="/projects" className="font-semibold text-zinc-900 underline dark:text-zinc-50">
              Projects
            </Link>{' '}
            page has the summary.
          </p>
        </div>

        <ProjectLinks project={links} />

        <p className="mt-12">
          <Link href="/projects" className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            ← Back to all projects
          </Link>
        </p>
      </div>
    </div>
  );
}
