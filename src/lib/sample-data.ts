export type Course = {
  id: string;
  title: string;
  description?: string;
  level?: string;
  duration?: string;
  students?: number;
  rating?: number;
  modules?: number;
  projects?: number;
  image?: string;
};

export const sampleCourses: Course[] = [
  {
    id: 'bsccsit',
    title: 'BSc CSIT',
    description: 'Basics of programming, algorithms and data structures.',
    level: 'Beginner',
    duration: '12 weeks',
    students: 1200,
    rating: 4.6,
    modules: 12,
    projects: 2,
    image: 'assets/bsc-csit.png',
  },
  {
    id: 'bba',
    title: 'BBA',
    description: 'In-depth coverage of business administration.',
    level: 'Intermediate',
    duration: '14 weeks',
    students: 800,
    rating: 4.7,
    modules: 14,
    projects: 4,
    image: 'assets/bba.png',
  },
  {
    id: 'bbs',
    title: 'BBS',
    description: 'Business studies and economics.',
    level: 'Intermediate',
    duration: '13 weeks',
    students: 600,
    rating: 4.5,
    modules: 10,
    projects: 3,
    image: 'assets/bbs.png',
  },
];

export const coursesByUniversity: Record<string, Course[]> = {
  tu: sampleCourses,
  pu: [
    { ...sampleCourses[0], id: 'pu-cs101', title: 'PU: Intro to Computing' },
    { ...sampleCourses[1], id: 'pu-ds201', title: 'PU: Data Structures' },
  ],
  pou: [
    { ...sampleCourses[0], id: 'pou-cs101', title: 'PoU: Fundamentals of CS' },
  ],
  nsu: [
    { ...sampleCourses[2], id: 'nsu-os301', title: 'NSU: Operating Systems' },
  ],
  ku: sampleCourses,
  lbu: [sampleCourses[1]],
  afu: [sampleCourses[0]],
  mbu: [sampleCourses[2]],
  nou: sampleCourses,
  fwu: [sampleCourses[0], sampleCourses[2]],
};
