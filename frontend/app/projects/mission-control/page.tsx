import type { Metadata } from 'next';
import CaseStudyPlaceholder from '@/components/CaseStudyPlaceholder';
import { missionControl } from '@/lib/projects';

export const metadata: Metadata = {
  title: `${missionControl.name} – ${missionControl.tagline}`,
  description: missionControl.description,
};

export default function MissionControlCaseStudy() {
  return <CaseStudyPlaceholder project={missionControl} />;
}
