export interface VocabItem {
  term: string;
  vietnamese: string;
  definition?: string; // Optional English definition or context
  adjective?: string; // Specific to some topics in your PDF
}

export interface Point {
  title: string;
  english: string;
  vietnamese: string;
  adjective?: string;
}

export interface Section {
  type: 'paragraph' | 'points' | 'pros-cons';
  content?: string; // For paragraphs
  vietnameseContent?: string; // For paragraphs
  points?: Point[]; // For structured lists
  pros?: string[]; // For pros/cons
  cons?: string[]; // For pros/cons
}

export interface Topic {
  id: number;
  title: string;
  question: string;
  sections: Section[];
  vocabulary: VocabItem[];
}