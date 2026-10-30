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
export function getAllGames(includeDisabled = false): Game[] {
  const fileEntries = Object.values(gameModules).map((m: any) => m.default ?? m);
  let games: Game[];
  if (fileEntries.length > 0) {
    games = fileEntries.map((item: any) => GameSchema.parse(item));
  } else {
    const list = Array.isArray(rawGames) ? rawGames : (rawGames as any).games;
    games = list.map((item: any) => GameSchema.parse(item));
  }
  if (includeDisabled) {
    return games;
  }
  return games.filter((game) => game.enabled !== false);
}

export function getFeaturedGames(): Game[] {
  return getAllGames().filter((game) => game.featured);
}

export type GameAwardType = 'best_game' | 'most_popular';

export interface GameAwardInfo {
  type: GameAwardType;
  icon: string;
  badgeLabel: string;
  fullTitle: string;
  posterBadgeStyle: string;
  metaBadgeStyle: string;
}

export function getGameAwardInfo(game: Game): GameAwardInfo | null {
  const isBest = game.award === 'best_game' || [
    'legacy-of-andalas',
    'legenda-tiga-raja',
    'guardians-of-mystica',
    'avernus',
  ].includes(game.slug);

  const isPopular = game.award === 'most_popular' || [
    'sawit-harvester',
    'operation-rafflesia-last-hope',
    'oscar-s-adventure-the-hidden-treasure',
    'gelud',
  ].includes(game.slug);

  if (isBest) {
    return {
      type: 'best_game',
      icon: '👑',
      badgeLabel: 'BEST GAME',
      fullTitle: 'BEST GAME',
      posterBadgeStyle: 'background-color: rgba(0, 0, 0, 0.92) !important; color: #FBBF24 !important; border-color: #F59E0B !important;',
      metaBadgeStyle: 'border-color: #F59E0B; background-color: rgba(245, 158, 11, 0.15); color: #F59E0B;',
    };
  }

  if (isPopular) {
    return {
      type: 'most_popular',
      icon: '⚡',
      badgeLabel: 'MOST POPULAR',
      fullTitle: 'MOST POPULAR',
      posterBadgeStyle: 'background-color: rgba(0, 0, 0, 0.92) !important; color: #38BDF8 !important; border-color: #0EA5E9 !important;',
      metaBadgeStyle: 'border-color: #0EA5E9; background-color: rgba(14, 165, 233, 0.15); color: #0284C7;',
    };
  }

  return null;
}

export function getGameBySlug(slug: string, includeDisabled = false): Game | undefined {
  return getAllGames(includeDisabled).find((game) => game.slug === slug);
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
  const student = getStudentById(studentId);
  return getAllGames().filter((game) =>
    game.contributors.some(
      (c) => c.id === studentId || (student?.nim && c.nim && c.nim === student.nim)
    )
  );
}

export function getSemestersList(): string[] {
  const games = getAllGames();
  return Array.from(new Set(games.map((g) => g.semester).filter(Boolean) as string[])).sort().reverse();
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

export function getAllExpoEvents(includeDisabled = false): ExpoEvent[] {
  const fileEntries = Object.values(expoModules).map((m: any) => m.default ?? m);
  let events: ExpoEvent[];
  if (fileEntries.length > 0) {
    events = fileEntries
      .map((item: any) => ExpoEventSchema.parse(item))
      .sort((a, b) => b.year - a.year);
  } else {
    const list = Array.isArray(rawExpo) ? rawExpo : (rawExpo as any).events;
    events = list
      .map((item: any) => ExpoEventSchema.parse(item))
      .sort((a, b) => b.year - a.year);
  }

  if (includeDisabled) {
    return events;
  }

  return events
    .filter((event) => event.enabled !== false)
    .map((event) => ({
      ...event,
      photos: event.photos.filter((photo) => photo.enabled !== false),
    }));
}

export function getExpoYearsList(): number[] {
  const photos = getAllExpoPhotos();
  if (photos.length > 0) {
    return Array.from(new Set(photos.map((p) => p.eventYear))).sort((a, b) => b - a);
  }
  const events = getAllExpoEvents();
  return Array.from(new Set(events.map((e) => e.year))).sort((a, b) => b - a);
}

export function getAllExpoPhotos(includeDisabled = false) {
  const events = getAllExpoEvents(includeDisabled);
  return events.flatMap((event) =>
    event.photos
      .filter((photo) => includeDisabled || photo.enabled !== false)
      .map((photo) => ({
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
