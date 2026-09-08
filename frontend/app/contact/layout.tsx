import type { Metadata } from 'next';

// The contact page is a client component, so its metadata lives here.
export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with David Shaevel, Platform & Developer Infrastructure Engineer in Austin, Texas, about platform engineering, developer experience, and AI developer tooling.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
