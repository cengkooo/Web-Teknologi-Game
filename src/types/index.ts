import { z } from 'zod';

export const ContributorSchema = z.object({
  id: z.string(),
  role: z.string(),
  name: z.string().optional(),
  nim: z.string().optional(),
});

export const GameSchema = z.object({
  slug: z.string(),
  title: z.string(),
  developer: z.string().optional(),
  semester: z.string().optional(),
  semesterKey: z.string().optional(),
  tagline: z.string().optional().default(''),
  description: z.string(),
  engine: z.string().default('Godot'),
  engineVersion: z.string().default('Godot 4.3 Stable'),
  genre: z.array(z.string()).default(['Action']),
  platform: z.array(z.string()).default(['Windows']),
  batchYear: z.number(),
  featured: z.boolean().default(false),
  posterImage: z.string().default(''),
  screenshots: z.array(z.string()).default([]),
  webglUrl: z.string().optional(),
  itchUrl: z.string().optional(),
  githubUrl: z.string().optional().default(''),
  contributors: z.array(ContributorSchema).default([]),
  metrics: z.object({
    polygonCount: z.string().optional(),
    drawCalls: z.string().optional(),
    tickRate: z.string().optional(),
    buildSize: z.string().optional(),
  }).optional(),
});

export const StudentSchema = z.object({
  id: z.string(),
  name: z.string(),
  nim: z.string().optional(),
  batch: z.number(),
  semester: z.string().optional(),
  role: z.string(),
  avatarUrl: z.string().default(''),
  bio: z.string().default(''),
  githubUrl: z.string().optional(),
  linkedinUrl: z.string().optional(),
  portfolioUrl: z.string().optional(),
});

export const InstructorSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  nip: z.string(),
  nidn: z.string(),
  avatar: z.string(),
  profileUrl: z.string(),
  specialties: z.array(z.string()),
  bio: z.string(),
  email: z.string(),
});

export const CourseSchema = z.object({
  code: z.string(),
  name: z.string(),
  prodi: z.string(),
  faculty: z.string(),
  institution: z.string(),
  credits: z.number(),
  creditWeight: z.string(),
  foundedYear: z.number(),
  estimatedGraduates: z.number(),
  coreCompetencies: z.array(z.string()),
  finalDeliverable: z.string(),
  overview: z.object({
    headline: z.string(),
    paragraphs: z.array(z.string()),
  }),
});

export const SiteConfigSchema = z.object({
  siteTitle: z.string(),
  shortTitle: z.string(),
  institutionBadge: z.string(),
  courseBadge: z.string(),
  contactEmail: z.string(),
  repoUrl: z.string(),
  links: z.record(z.string(), z.string()),
  navItems: z.array(
    z.object({
      label: z.string(),
      href: z.string(),
    })
  ),
});

export const ExpoPhotoSchema = z.object({
  id: z.string(),
  url: z.string(),
  caption: z.string(),
  category: z.string(),
  time: z.string().optional(),
});

export const ExpoEventSchema = z.object({
  id: z.string(),
  title: z.string(),
  edition: z.string(),
  year: z.number(),
  date: z.string(),
  location: z.string(),
  photos: z.array(ExpoPhotoSchema),
});

export type Game = z.infer<typeof GameSchema>;
export type Student = z.infer<typeof StudentSchema>;
export type Contributor = z.infer<typeof ContributorSchema>;
export type Instructor = z.infer<typeof InstructorSchema>;
export type Course = z.infer<typeof CourseSchema>;
export type SiteConfig = z.infer<typeof SiteConfigSchema>;
export type ExpoPhoto = z.infer<typeof ExpoPhotoSchema>;
export type ExpoEvent = z.infer<typeof ExpoEventSchema>;
