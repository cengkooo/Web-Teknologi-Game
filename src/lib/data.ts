import rawGames from '../data/games.json';
import rawStudents from '../data/students.json';
import rawInstructors from '../data/instructors.json';
import rawCourse from '../data/course.json';
import rawSiteConfig from '../data/site-config.json';
import {
  GameSchema,
  StudentSchema,
  InstructorSchema,
  CourseSchema,
  SiteConfigSchema,
  type Game,
  type Student,
  type Instructor,
  type Course,
  type SiteConfig,
} from '../types';

// Validate at build/compile time using Zod
export function getAllGames(): Game[] {
  return rawGames.map((item) => GameSchema.parse(item));
}

export function getFeaturedGames(): Game[] {
  return getAllGames().filter((game) => game.featured);
}

export function getGameBySlug(slug: string): Game | undefined {
  return getAllGames().find((game) => game.slug === slug);
}

export function getAllStudents(): Student[] {
  return rawStudents.map((item) => StudentSchema.parse(item));
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
    activeCreators: students.length,
    enginesCount: engines.length,
    webglPlayable,
    engines,
    courseLifespanYears,
    graduatesCount: course.estimatedGraduates,
    foundedYear: course.foundedYear,
  };
}
