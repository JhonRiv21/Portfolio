import LanguagesIcon from "../assets/icons-svg/languages.astro"
import PostgreIcon from "../assets/icons-svg/postgre.astro"
import ReactIcon from "../assets/icons-svg/react.astro"
import AutomationIcon from "../assets/icons-svg/automation.astro"
import CssIcon from "../assets/icons-svg/css.astro"
import PostmanIcon from "../assets/icons-svg/postman.astro"
import GitIcon from "../assets/icons-svg/git.astro"
import BriefCaseIcon from "../assets/icons-svg/briefcase.astro"
import LinkTicLogo from "../assets/linktic.svg"
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

export const skills = [
	{
		icon: LanguagesIcon,
		text: 'Lenguajes de programación: JavaScript, TypeScript.'
	},
	{
		icon: PostgreIcon,
		text: 'Bases de datos y backend: Supabase, Firebase, PostgreSQL, Node.js.'
	},
	{
		icon: ReactIcon,
		text: 'Frameworks: Svelte, SvelteKit, Vue/Quasar, Nuxt, React, Astro, Vite. SSR y CSR.'
	},
	{
		icon: AutomationIcon,
		text: 'Automatización: Puppeteer, K6, Node.js.'
	},
	{
		icon: CssIcon,
		text: 'Diseño y estilos: Tailwind CSS, Bootstrap, SCSS, CSS3, SaaS, Styled Components, jQuery, MUI, ShadCN, Flowbite, Quasar Components, Figma.'
	},
	{
		icon: PostmanIcon,
		text: 'Testing: Postman, Swagger, Vitest.'
	},
	{
		icon: GitIcon,
		text: 'Control de versiones: Git, GitHub, Azure. Revisión de código y pull requests, promoción de buenas prácticas de desarrollo.'
	},
	{
		icon: BriefCaseIcon,
		text: 'Liderazgo en equipos frontend, mentoría técnica, planificación de entregas y definición de tecnologías y metodologías para optimizar el desarrollo de proyectos.'
	},
];

export const experience = [
	{
		image: LinkTicLogo,
		name: 'Linktic S.A.S. - Bogotá D.C.',
		jobposition: 'Desarrollador / Líder Front-End',
		date: 'Marzo 2024 - Febrero 2025, Bogotá D.C.',
		description1: 'Me desempeñé como líder frontend en dos importantes proyectos, en el último pude definir las tecnologías desde el inicio, metodologías para el área, realizar las entrevistas técnicas y gestionar según las necesidades técnicas. Dirigiendo un equipo de 14 desarrolladores frontend para el desarrollo del Core.',
		description2: 'Además de las tareas diarias de desarrollo y soporte que realizaba a diario, siempre intenté estar contextualizado sobre las funcionalidades y nuevos requerimientos de los diferentes módulos del aplicativo para poder realizar un apoyo transversal óptimo a mi equipo'
	},
	{
		image: WimbuLogo,
		name: 'Wimbu S.A.S. - Bogotá D.C.',
		jobposition: 'Desarrollador Front-End',
		date: 'Abril 2023 - Febrero 2024, Bogotá D.C.',
		description1: 'Inicié apoyando diversos equipos en distintos proyectos, adaptándome rápidamente a diferentes metodologías, procesos y tecnologías en sistemas ecommerce, Core, SGDEA, CRM y distintos MVPs.',
		description2: 'Con el tiempo, asumí el liderazgo de pequeños equipos en proyectos de corto plazo. Gracias a los resultados obtenidos, obtuve el liderazgo en proyectos más complejos con una mayor cantidad de desarrolladores.'
	}
];

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