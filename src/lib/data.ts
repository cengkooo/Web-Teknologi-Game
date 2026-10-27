import rawGames from '../data/games.json';
import rawStudents from '../data/students.json';
import rawInstructors from '../data/instructors.json';
import rawCourse from '../data/course.json';
import rawSiteConfig from '../data/site-config.json';
import rawExpo from '../data/expo.json';
import {
  GameSchema,
  StudentSchema,
  InstructorSchema,
  CourseSchema,
  SiteConfigSchema,
  ExpoEventSchema,
  type Game,
  type Student,
  type Instructor,
  type Course,
  type SiteConfig,
  type ExpoEvent,
  type ExpoPhoto,
} from '../types';

// Eagerly glob folder collections for Decap CMS compatibility
const gameModules = import.meta.glob('../data/games/*.json', { eager: true });
const studentModules = import.meta.glob('../data/mahasiswa/*.json', { eager: true });
const expoModules = import.meta.glob('../data/expo/*.json', { eager: true });

// Validate at build/compile time using Zod
export function getAllGames(): Game[] {
  const fileEntries = Object.values(gameModules).map((m: any) => m.default ?? m);
  if (fileEntries.length > 0) {
    return fileEntries.map((item: any) => GameSchema.parse(item));
  }
  const list = Array.isArray(rawGames) ? rawGames : (rawGames as any).games;
  return list.map((item: any) => GameSchema.parse(item));
}

export function getFeaturedGames(): Game[] {
  return getAllGames().filter((game) => game.featured);
}

export function getGameBySlug(slug: string): Game | undefined {
  return getAllGames().find((game) => game.slug === slug);
}

export function getAllStudents(): Student[] {
  const fileEntries = Object.values(studentModules).map((m: any) => m.default ?? m);
  if (fileEntries.length > 0) {
    return fileEntries.map((item: any) => StudentSchema.parse(item));
  }
  const list = Array.isArray(rawStudents) ? rawStudents : (rawStudents as any).students;
  return list.map((item: any) => StudentSchema.parse(item));
}

export function getStudentById(id: string): Student | undefined {
  return getAllStudents().find((student) => student.id === id);
}

export function getGamesByStudentId(studentId: string): Game[] {
  return getAllGames().filter((game) =>
    game.contributors.some((c) => c.id === studentId)
  );
}

export function getEnginesList(): string[] {
  const games = getAllGames();
  return Array.from(new Set(games.map((g) => g.engine))).sort();
}

export function getGenresList(): string[] {
  const games = getAllGames();
  const genres = games.flatMap((g) => g.genre);
  return Array.from(new Set(genres)).sort();
}

export function getBatchYearsList(): number[] {
  const games = getAllGames();
  return Array.from(new Set(games.map((g) => g.batchYear))).sort((a, b) => b - a);
}

export function getAllInstructors(): Instructor[] {
  return rawInstructors.map((item) => InstructorSchema.parse(item));
}

export function getCourseInfo(): Course {
  return CourseSchema.parse(rawCourse);
}

export function getSiteConfig(): SiteConfig {
  return SiteConfigSchema.parse(rawSiteConfig);
}

export function getAllExpoEvents(): ExpoEvent[] {
  const fileEntries = Object.values(expoModules).map((m: any) => m.default ?? m);
  if (fileEntries.length > 0) {
    return fileEntries.map((item: any) => ExpoEventSchema.parse(item));
  }
  const list = Array.isArray(rawExpo) ? rawExpo : (rawExpo as any).events;
  return list.map((item: any) => ExpoEventSchema.parse(item));
}

export function getExpoYearsList(): number[] {
  const events = getAllExpoEvents();
  return Array.from(new Set(events.map((e) => e.year))).sort((a, b) => b - a);
}

export function getAllExpoPhotos() {
  const events = getAllExpoEvents();
  return events.flatMap((event) =>
    event.photos.map((photo) => ({
      ...photo,
      eventId: event.id,
      eventTitle: event.title,
      eventYear: event.year,
      eventDate: event.date,
      location: event.location,
    }))
  );
}

export function getLibraryStats() {
  const games = getAllGames();
  const students = getAllStudents();
  const engines = getEnginesList();
  const course = getCourseInfo();
  const webglPlayable = games.filter((g) => Boolean(g.webglUrl)).length;
  const currentYear = new Date().getFullYear();
  const courseLifespanYears = Math.max(1, currentYear - course.foundedYear);

  return {
    totalGames: games.length,
    totalMahasiswa: students.length,
    enginesCount: engines.length,
    webglPlayable,
    engines,
    courseLifespanYears,
    graduatesCount: course.estimatedGraduates,
    foundedYear: course.foundedYear,
  };
}
