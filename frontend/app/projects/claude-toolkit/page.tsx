import type { Metadata } from 'next';
import CaseStudyPlaceholder from '@/components/CaseStudyPlaceholder';
import { claudeToolkit } from '@/lib/projects';

export const metadata: Metadata = {
  title: `${claudeToolkit.name} – ${claudeToolkit.tagline}`,
  description: claudeToolkit.description,
};

export default function ClaudeToolkitCaseStudy() {
  return <CaseStudyPlaceholder project={claudeToolkit} />;
}
