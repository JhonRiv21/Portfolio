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
		text: 'LENGUAJES DE PROGRAMACIÓN: JAVASCRIPT, TYPESCRIPT.'
	},
	{
		icon: PostgreIcon,
		text: 'BASES DE DATOS Y BACKEND: SUPABASE, FIREBASE, POSTGRESQL, NODE.JS.'
	},
	{
		icon: ReactIcon,
		text: 'FRAMEWORKS: SVELTE, SVELTEKIT, VUE/QUASAR, NUXT, REACT, ASTRO, VITE. SSR Y CSR.'
	},
	{
		icon: AutomationIcon,
		text: 'AUTOMATIZACIÓN: PUPPETEER, K6, NODE.JS.'
	},
	{
		icon: CssIcon,
		text: 'DISEÑO Y ESTILOS: TAILWIND CSS, BOOTSTRAP, SCSS, CSS3, SAAS, STYLED COMPONENTS, JQUERY, MUI, SHADCN, FLOWBITE, QUASAR COMPONENTS, FIGMA.'
	},
	{
		icon: PostmanIcon,
		text: 'TESTING: POSTMAN, SWAGGER, VITEST.'
	},
	{
		icon: GitIcon,
		text: 'CONTROL DE VERSIONES: GIT, GITHUB, AZURE. REVISIÓN DE CÓDIGO Y PULL REQUESTS, PROMOCIÓN DE BUENAS PRÁCTICAS DE DESARROLLO.'
	},
	{
		icon: BriefCaseIcon,
		text: 'LIDERAZGO EN EQUIPOS FRONTEND, MENTORÍA TÉCNICA, DEFINICIÓN DE ARQUITECTURAS FRONTEND ESCALABLES, PLANIFICACIÓN DE ENTREGAS.'
	},
]

export const experience = [
	{
		image: LinkTicLogo,
		name: 'LINKTIC S.A.S. - BOGOTÁ D.C.',
		jobposition: 'DESARROLLADOR / LÍDER FRONT-END',
		date: 'MARZO. 2024 - FEB. 2025, BOGOTÁ D.C.',
		description1: 'LIDERÉ EL DESARROLLO FRONTEND EN DOS PROYECTOS DE GRAN ESCALA, DEFINIENDO TECNOLOGÍAS, ESTABLECIENDO ESTÁNDARES DE DESARROLLO Y GESTIONANDO EQUIPOS SEGÚN LAS NECESIDADES TÉCNICAS.',
		description2: 'ADEMÁS DE MIS RESPONSABILIDADES EN DESARROLLO, SEGUIMIENTO Y SOPORTE, MANTENGO UNA VISIÓN GLOBAL DEL APLICATIVO PARA OFRECER SOLUCIONES EFECTIVAS EN DISTINTOS MÓDULOS Y OPTIMIZAR LA COLABORACIÓN DENTRO DEL EQUIPO.'
	},
	{
		image: WimbuLogo,
		name: 'WIMBU S.A.S. - BOGOTÁ D.C.',
		jobposition: 'DESARROLLADOR FRONT-END',
		date: 'ABRIL 2023 - FEB. 2024, BOGOTÁ D.C.',
		description1: 'INICIÉ APOYANDO DIVERSOS EQUIPOS EN DISTINTOS PROYECTOS, ADAPTÁNDOME RÁPIDAMENTE A DIFERENTES METODOLOGÍAS, PROCESOS Y TECNOLOGÍAS EN SISTEMAS ECOMMERCE, CORE, SGDEA, CRM Y DISTINTOS MVPS.',
		description2: 'CON EL TIEMPO, ASUMÍ EL LIDERAZGO DE PEQUEÑOS EQUIPOS EN PROYECTOS DE CORTO PLAZO. GRACIAS A LOS RESULTADOS OBTENIDOS, OBTUVE EL LIDERAZGO EN PROYECTOS MÁS COMPLEJOS CON UNA MAYOR CANTIDAD DE DESARROLLADORES.'
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