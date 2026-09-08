import Link from 'next/link';
import type { Project } from '@/lib/projects';

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="mt-1 h-5 w-5 flex-shrink-0 text-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      {project.caseStudyPath && (
        <Link
          href={project.caseStudyPath}
          className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          View {project.name}
          <span aria-hidden="true">→</span>
        </Link>
      )}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-white dark:text-white dark:hover:bg-zinc-900"
        >
          <GitHubIcon className="h-5 w-5" />
          View on GitHub
        </a>
      )}
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const flagship = project.flagship === true;
  const shell = flagship
    ? 'border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 dark:border-blue-900 dark:from-zinc-900 dark:to-zinc-800'
    : 'border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900';

  return (
    <article
      id={project.slug}
      className={`overflow-hidden rounded-3xl border ${shell} ${flagship ? 'p-8 sm:p-12' : 'p-8'}`}
    >
      {flagship && (
        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
          Flagship Project
        </span>
      )}
      <h3 className={`${flagship ? 'mt-6 text-3xl' : 'text-2xl'} font-bold text-zinc-900 dark:text-zinc-50`}>
        {project.name}
      </h3>
      <p className="mt-2 text-lg font-medium text-blue-700 dark:text-blue-300">{project.tagline}</p>
      <p className="mt-4 text-zinc-700 dark:text-zinc-300">{project.description}</p>

      <ul className={`mt-6 grid gap-3 ${flagship ? 'sm:grid-cols-2' : ''}`}>
        {project.highlights.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <CheckIcon />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white dark:bg-white dark:text-zinc-900"
          >
            {tech}
          </span>
        ))}
      </div>

      <ProjectLinks project={project} />
    </article>
  );
}
