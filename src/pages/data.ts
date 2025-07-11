import LanguagesIcon from '../assets/icons-svg/languages.astro'
import PostgreIcon from '../assets/icons-svg/postgre.astro'
import ReactIcon from '../assets/icons-svg/react.astro'
import AutomationIcon from '../assets/icons-svg/automation.astro'
import CssIcon from '../assets/icons-svg/css.astro'
import PostmanIcon from '../assets/icons-svg/postman.astro'
import GitIcon from '../assets/icons-svg/git.astro'
import BriefCaseIcon from '../assets/icons-svg/briefcase.astro'
import LinkTicLogo from '../assets/linktic.svg'
import WimbuLogo from '../assets/wimbu.svg'

import JavascriptLogo from '../assets/icons-svg/javascript.astro'
import TypescriptLogo from '../assets/icons-svg/typescript.astro'
import SveltekitLogo from '../assets/icons-svg/sveltekit.astro'
import VueLogo from '../assets/icons-svg/vue.astro'
import AstroLogo from '../assets/icons-svg/astro.astro'
import ReactLogo from '../assets/icons-svg/reactbig.astro'
import TailwindLogo from '../assets/icons-svg/tailwindcss.astro'
import SupabaseLogo from '../assets/icons-svg/supabase.astro'
import NodeJsLogo from '../assets/icons-svg/nodejs.astro'
import ExpoLogo from '../assets/icons-svg/expo.astro'

import BpmnSmartVid from '../assets/projects/bpmnsmart.mp4'
import DictionaryVid from '../assets/projects/dictionaryapp.mp4'
import PlanetsVid from '../assets/projects/planets.mp4'
import FrontendQuizVid from '../assets/projects/frontendquiz.mp4'

export const skills = [
  {
    icon: LanguagesIcon,
    text: 'Lenguajes de programación: TypeScript, JavaScript, Java.'
  },
  {
    icon: PostgreIcon,
    text: 'Backend / Bases de datos: Node.js (Express), Java (Spring Boot), PostgreSQL, Firebase, Supabase, Railway, Render.'
  },
  {
    icon: ReactIcon,
    text: 'Frontend: Svelte, SvelteKit, React, React Native + Expo, Astro, Vue, Next.js, Vite.'
  },
  {
    icon: GitIcon,
    text: 'DevOps / Despliegue: Git, GitHub, Azure Pipelines (CI/CD), Vercel, Railway.'
  },
  {
    icon: CssIcon,
    text: 'Diseño y estilos: TailwindCSS, SCSS, Bootstrap, MUI, Shadcn, Flowbite, Figma.'
  },
  {
    icon: PostmanIcon,
    text: 'Testing / Automatización: Vitest, Postman, Swagger, Puppeteer, K6, SonarQube, Unlighthouse.'
  },
  {
    icon: AutomationIcon,
    text: 'Metodologías y prácticas: Revisión de PRs, mentoría técnica, estándares de calidad, planificación de entregas.'
  },
  {
    icon: BriefCaseIcon,
    text: 'Liderazgo técnico: Definición de tecnologías y metodologías, coordinación de equipos frontend, promoción de buenas prácticas de desarrollo.'
  }
]

export const experience = [
  {
    image: LinkTicLogo,
    name: 'Linktic S.A.S. - Bogotá D.C.',
    jobposition: 'Desarrollador / Líder Front-End',
    date: 'Marzo 2024 - Febrero 2025, Bogotá D.C.',
    description1: 'Me desempeñé como líder frontend en dos importantes proyectos, en el último pude definir las tecnologías desde el inicio, metodologías para el área, realizar las entrevistas técnicas y gestionar según las necesidades técnicas. Dirigiendo un equipo de 14 desarrolladores frontend para el desarrollo del Core.',
    description2: 'Además de las tareas diarias de desarrollo y soporte que realizaba a diario, siempre intenté estar contextualizado sobre las funcionalidades y nuevos requerimientos de los diferentes módulos del aplicativo para poder realizar un apoyo transversal óptimo a mi equipo.'
  },
  {
    image: WimbuLogo,
    name: 'Wimbu S.A.S. - Bogotá D.C.',
    jobposition: 'Desarrollador Front-End',
    date: 'Abril 2023 - Febrero 2024, Bogotá D.C.',
    description1: 'Inicié apoyando diversos equipos en distintos proyectos, adaptándome rápidamente a diferentes metodologías, procesos y tecnologías en sistemas ecommerce, Core, SGDEA, CRM y distintos MVPs.',
    description2: 'Con el tiempo, asumí el liderazgo de pequeños equipos en proyectos de corto plazo. Gracias a los resultados obtenidos, obtuve el liderazgo en proyectos más complejos con una mayor cantidad de desarrolladores.'
  }
]

export const habilitiesCarousel = [
  {
    icon: JavascriptLogo,
    text: 'JAVASCRIPT'
  },
  {
    icon: TypescriptLogo,
    text: 'TYPESCRIPT'
  },
  {
    icon: SveltekitLogo,
    text: 'SVELTEKIT'
  },
  {
    icon: VueLogo,
    text: 'VUE'
  },
  {
    icon: AstroLogo,
    text: 'ASTRO'
  },
  {
    icon: ReactLogo,
    text: 'REACT'
  },
  {
    icon: ExpoLogo,
    text: 'EXPO'
  },
  {
    icon: TailwindLogo,
    text: 'TAILWINDCSS'
  },
  {
    icon: SupabaseLogo,
    text: 'SUPABASE'
  },
  {
    icon: NodeJsLogo,
    text: 'NODEJS'
  }
]

export const dataProjects = [
  {
    image: BpmnSmartVid,
    name: 'BPMNSmart',
    description:
      'Plataforma fullstack para diseñar, versionar y gestionar diagramas BPMN de forma intuitiva y segura. Soporta autenticación con Google, autoguardado, historial de versiones y exportación en XML.',
    stack: 'SvelteKit, bpmn.io, Render, Express, TailwindCSS',
    role: 'Proyecto Fullstack',
    github: 'https://github.com/JhonRiv21/BPMNSmart',
    page: 'https://bpmn-smart.vercel.app/'
  },
  {
    image: FrontendQuizVid,
    name: 'FrontendQuiz',
    description:
      'App móvil educativa para evaluar conocimientos de frontend (HTML, CSS, JS, accesibilidad) mediante quizzes interactivos. Soporta progreso persistente, animaciones y navegación fluida.',
    stack: 'React Native + Expo',
    role: 'Proyecto Mobile Frontend',
    github: 'https://github.com/JhonRiv21/FrontendQuiz',
    page: 'https://expo.dev/accounts/jhonrivero/projects/FrontendQuiz/builds/7e4e665b-41ad-455b-9c33-ccee66adaa91'
  },
  {
    image: DictionaryVid,
    name: 'Dictionary App',
    description:
      'Diccionario en inglés con búsqueda en tiempo real, pronunciación, sinónimos, ejemplos, dark mode y cambio de fuente. Integra la Free Dictionary API en una interfaz responsive y minimalista.',
    stack: 'React + Vite, TypeScript, TailwindCSS',
    role: 'Proyecto Frontend',
    github: 'https://github.com/JhonRiv21/dictionary-app',
    page: 'https://dictionary-omega-sepia.vercel.app'
  },
  {
    image: PlanetsVid,
    name: 'The Planets',
    description:
      'Sitio informativo sobre planetas del sistema solar, basado en un reto de Frontend Mentor. Cuenta con fondo animado, transiciones suaves y diseño responsive optimizado con Astro y Svelte.',
    stack: 'Astro + Svelte, TailwindCSS',
    role: 'Proyecto Frontend',
    github: 'https://github.com/JhonRiv21/the-planets',
    page: 'https://the-planets-beta.vercel.app/'
  }
]
