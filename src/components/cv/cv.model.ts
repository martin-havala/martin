import { onlyUnique } from "$lib/utils/array";

export const SELECTED_TECH = "selectedTech";
export const CV_JOBS = [
  {
    employee: "SmartHead s. r. o.",
    location: "remote (Slovakia)",
    interval: [2025, 2025],
    tasks: "analysis and development of internal portal",
    tech: [
      "Angular",
      "RxJs",
      "Apache Echarts",
      "SVG",
      "ngZorro",
      "Sass",
      "Jest",
      "GitHub",
      "Storybook",
      "Spectator",
      "Atlassian BB+C+J",
    ],
  },
  {
    employee: "SuperScale s. r. o.",
    location: "remote (Slovakia)",
    interval: [2023, 2025],
    tasks:
      "analysis and development of internal portal & data visualization library",
    tech: [
      "Angular",
      "RxJs",
      "D3.js",
      "SVG",
      "primeNg",
      "Sass",
      "Jest",
      "GitHub",
      "Storybook",
      "Atlassian BB+C+J",
    ],
  },
  {
    employee: "ERNI (Slovakia) s.r.o.",
    location: "Bratislava",
    "part-time": "32h",
    interval: [2019, 2022],
    tasks: "analysis and development of Web-Apps, UI design",
    tech: [
      "Angular",
      "Angular Material",
      "RxJs",
      "NgRx",
      "Akita",
      "Elf",
      "Sass",
      "Jest",
      "Spectator",
      "Storybook",
      "Atlassian BB+C+J",
      "D3.js",
    ],
  },
  {
    employee: "Slovak National Gallery",
    location: "Bratislava",
    interval: [2019, 2020],
    "part-time": "8h+",
    tasks: "development of webumenia.sk and occasional micropages",
    tech: [
      "VueJS",
      "NuxtJS",
      "Laravel",
      "PHPUnit",
      "JIRA",
      "Confluence",
      "Git",
    ],
  },

  {
    employee: "AI Maps s.r.o.",
    location: "Bratislava",
    interval: [2016, 2018],
    tasks: "analysis and development of web-apps, UX analysis",
    tech: [
      "AngularJS",
      "Angular",
      "Angular Material",
      "TypeScript",
      "Less",
      "Leaflet",
      "Karma",
      "Jasmine",
      "Atlassian BB+C+J",
    ],
  },

  {
    employee: "Bonum s.r.o",
    location: "Bratislava",
    interval: [2012, 2015],
    tasks:
      "development of internal system for production management customer support, custom design and automation of report generation",
    tech: [
      "Java2EE",
      "IBM DB2",
      "HTML",
      "JavaScript",
      "jQuery",
      "CSS",
      "JasperReports",
    ],
  },

  {
    employee: "Accenture Technology Solutions Slovakia s.r.o.",
    location: "Bratislava",
    interval: [2010, 2012],
    tasks: "1st and 2nd line support",
    tech: ["OpenCMS", "RHEL", "Apache Tomcat"],
  },
];

export const CV_HOBBIES = [
  {
    group: "Datavis",
    link: "https://martin-havala.github.io/datavis",
    interval: [2022],
    tasks: "tiny web for datavis",
    tech: ["Svelte", "SvelteKit", "D3.js", "Sass", "Python", "Git", "SQL"],
  },
  {
    link: "/hobbies/tech",
    group: "Emerging FE Tech",
    interval: [2021],
    tasks: "CheeseCake by Mona",
    tech: ["Svelte", "SvelteKit", "D3.js", "Sass", "Git"],
  },
  {
    group: "Graphic Design",
    interval: [2018, 2019],
    tasks: "Handbook for BSK",
    tech: ["Adobe Illustrator", "Adobe InDesign", "SVG"],
  },
];
export const CV_TECH = CV_JOBS.reduce(
  (a, j) => [...a, ...j.tech],
  [] as string[],
).reduce((a, j) => (a.includes(j) ? a : [...a, j]), [] as string[]);

const techs = [
  { name: "HTML / CSS / JS", group: 0 },
  { name: "AngularJS", group: 0 },
  { name: "Angular", group: 0 },
  { name: "Angular Material", group: 0 },
  { name: "TypeScript", group: 0 },
  { name: "RxJs", group: 0 },
  { name: "State Management", group: 0 },
  { name: "Less / SASS", group: 0 },
  { name: "D3.js", group: 0 },
  { name: "Svelte + SvelteKit", group: 0 },
  { name: "Storybook", group: 0 },
  { name: "VueJS + NuxtJS", group: 0 },
  { name: "SVG", group: 0 },

  { name: "Java", group: 1 },
  { name: "SQL", group: 1 },

  { name: "Testing", group: 2 },
  { name: "BitBucket + Jira + Confluence", group: 2 },
  { name: "Git", group: 2 },
  { name: "Python", group: 2 },
];

export const TECH_GRPS: { [tech: string]: string[] } = {
  HTML: ["Angular", "AngularJS", "jQuery", "Svelte", "VueJS", "D3.js"],
  CSS: ["CSS", "VueJS", "D3.js", "HTML", "Sass", "Less"],
  "State Management": ["Akita", "NgRx", "Elf"],
  JavaScript: ["Angular", "AngularJS", "jQuery", "Svelte", "VueJS", "D3.js"],
  "HTML / CSS / JS": [
    "Angular",
    "AngularJS",
    "D3.js",
    "HTML",
    "jQuery",
    "Less",
    "Sass",
    "Svelte",
    "Storybook",
    "VueJS",
    "NuxtJS",
  ],
  TypeScript: [
    "Angular",
    "AngularJS",
    "VueJS",
    "NuxtJS",
    "Svelte",
    "SvelteKit",
  ],
  Testing: ["Karma", "Jest", "Spectator", "Jasmine", "PHPUnit", "Puppeteer"],
  Storybook: ["Storybook"],
  RxJS: ["Angular"],
  "Svelte + SvelteKit": ["Svelte", "SvelteKit"],
  "Less / SASS": ["Less", "Sass"],
  "VueJS + NuxtJS": ["VueJS", "NuxtJS", "Vue"],
  NgRx: ["Angular"],
  SVG: ["SVG", "D3.js"],
  Angular: ["Angular", "Angular Material"],
  BitBucket: ["Atlassian BB+C+J"],
  Jira: ["Atlassian BB+C+J"],
  Confluence: ["Atlassian BB+C+J"],
  "BitBucket + Jira + Confluence": ["Atlassian BB+C+J"],
  Git: ["Atlassian BB+C+J", "GitHub"],
  Java: ["Java", "Java2EE", "JasperReports"],
  SQL: ["SQL", "IBM DB2"],
};

const year = new Date().getUTCFullYear();
let hlp = [];
{
  const reducer = (
    jobs: { tech: string[]; interval: number[] }[],
    tech: string,
  ) => {
    return jobs.reduce((years, job) => {
      const allTechs = TECH_GRPS[tech] ? [...TECH_GRPS[tech], tech] : [tech];
      if (job.tech.filter((j) => allTechs.includes(j)).length > 0) {
        return [
          ...Array((job.interval[1] ?? year) - job.interval[0] + 1)
            .fill(0)
            .map((_, i) => Math.min(year, job.interval[0] + i)),
          ...years,
        ]
          .sort()
          .filter(onlyUnique);
      }
      return years;
    }, [] as number[]);
  };

  const overrides = (a: number[][], hobby = false) =>
    a.map((years, i) => {
      // AI-maps compensation
      if (techs[i].name.includes("Angular")) {
        years.pop();
      }
      if (techs[i].name.startsWith("Python")) {
        return hobby ? [2023] : [];
      }
      if (techs[i].name.startsWith("SQL")) {
        return hobby ? [2023, 2026] : years;
      }
      if (techs[i].name.startsWith("Svelte")) {
        return hobby ? years.filter((_, i) => i % 2) : [];
      }
      if (techs[i].name.startsWith("Storybook")) {
        return years.filter((_, i) => i % 2);
      }
      return years;
    });

  const TECH_YEARS = overrides(
    techs.map((tech) => reducer(CV_JOBS, tech.name)),
  );

  const HOBBY_YEARS = overrides(
    techs.map((tech) => reducer(CV_HOBBIES, tech.name)),
    true,
  );

  hlp = techs.map(({ name, group }, i) => ({
    name,
    group,
    workYears: [...TECH_YEARS[i], ...HOBBY_YEARS[i]].filter(onlyUnique).length,
    hobbyYears: HOBBY_YEARS[i]
      .filter((h) => !TECH_YEARS[i].includes(h))
      .filter(onlyUnique).length,
    lastWorkUsed: Math.max(...TECH_YEARS[i], 0),
    lastUsed: Math.max(...TECH_YEARS[i], ...HOBBY_YEARS[i], 0),
  }));
}

console.log(hlp);
export const TECHS = hlp.sort((a, b) => {
  if (a.group != b.group) return a.group > b.group ? 1 : -1;
  if (a.workYears != b.workYears) return a.workYears < b.workYears ? 1 : -1;
  return 0;
});

export const TECH_GRP_NAMES = [
  { shrt: "FE", lng: "front-end" },
  { shrt: "BE", lng: "back-end" },
  { shrt: "DEV", lng: "development" },
];
