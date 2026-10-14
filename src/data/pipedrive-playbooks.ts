export type PlaybookItem =
  | { kind: 'html'; html: string; sourceElement: string }
  | { kind: 'image'; src: string; alt: string; width: number; height: number }
  | { kind: 'cta'; label: string; href: string };

export interface Playbook {
  slug: string;
  title: string;
  description: string;
  sourceUrl: string;
  sourceDate: string;
  readingMinutes: string;
  sections: { id: string; heading: string; items: PlaybookItem[] }[];
}
