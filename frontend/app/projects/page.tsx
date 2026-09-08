import type { Metadata } from 'next';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { LINEAGE_LINE, projectGroups } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'AI developer infrastructure (Claude Toolkit, Mission Control) and cloud platform infrastructure (Kubernetes, AWS ECS, davidshaevel.com) projects by David Shaevel, Platform & Developer Infrastructure Engineer.',
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Projects
          </h1>
          <p className="mt-6 text-xl text-zinc-600 dark:text-zinc-400">
            Grouped by capability: the developer infrastructure for AI-assisted engineering, and the
            cloud platforms it builds on.
          </p>
        </div>

        {projectGroups.map((group) => (
          <section key={group.id} id={group.id} className="mt-20 scroll-mt-24">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                {group.title}
              </h2>
              <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">{group.blurb}</p>
            </div>

            {group.id === 'ai-developer-infrastructure' ? (
              <div className="mt-10 space-y-8">
                {group.projects.map((project, index) => (
                  <div key={project.slug}>
                    {index === 1 && (
                      <p className="mb-8 border-l-4 border-blue-600 pl-4 text-lg italic text-zinc-700 dark:border-blue-400 dark:text-zinc-300">
                        {LINEAGE_LINE}
                      </p>
                    )}
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-10 grid gap-8 lg:grid-cols-3">
                {group.projects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            )}
          </section>
        ))}

        {/* Closing */}
        <div className="mt-20 text-center">
          <p className="text-zinc-600 dark:text-zinc-400">
            Want the engineering story behind any of these?{' '}
            <Link href="/contact" className="font-semibold text-zinc-900 underline dark:text-zinc-50">
              Get in touch
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
