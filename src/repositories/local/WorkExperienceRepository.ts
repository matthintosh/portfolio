import { TFunction } from 'i18next'

export interface WorkExperience {
    name: string
    job: string
    contractType: string
    date: string
    companyDescription: string
    logo?: string
    tasks: string[]
    stack: string
    imagesUrls: string[]
    links?: { title: string; url: string }[]
}

type workExperienceCompany =
    | 'Intly'
    | 'Kanda Health'
    | 'WorkAdventure'
    | 'TakeTurns'
    | 'SupGalilée'
    | 'Tibco Orchestra Networks'
    | 'PwC'
    | 'Micropole'

export class WorkExperienceRepository {
    static getExperienceTranslatedContent(
        company: workExperienceCompany,
        t: TFunction
    ) {
        return {
            job: t(`${company}.jobTitle`),
            contractType: t(`${company}.contractType`),
            date: t(`${company}.date`),
            tasks: t(`${company}.tasks`).split('|'),
        }
    }

    static getExperienceStack(company: workExperienceCompany) {
        return workExperiencesStacks[company]
    }

    static getExperienceLogo(company: workExperienceCompany) {
        return workExperiencesLogos[company]
    }

    static getExperienceImages(company: workExperienceCompany) {
        return workExperiencesImagesUrl[company]
    }

    static getExperienceCompanies() {
        return workExperienceKeys
    }

    static getExperienceLinks(company: workExperienceCompany) {
        return workExperienceLinks[company]
    }
}

const logoBaseUrl = 'img/workExperiences'

const workExperiencesLogos: {
    [key in workExperienceCompany]: string | undefined
} = {
    Intly: `${logoBaseUrl}/IntlyLogo.svg`,
    'Kanda Health': `${logoBaseUrl}/KandaHealth.svg`,
    WorkAdventure: `${logoBaseUrl}/WorkAdventure.svg`,
    TakeTurns: `${logoBaseUrl}/TakeTurns.svg`,
    SupGalilée: `${logoBaseUrl}/SupGalilee.png`,
    'Tibco Orchestra Networks': `${logoBaseUrl}/Tibco.png`,
    PwC: `${logoBaseUrl}/Pwc.png`,
    Micropole: `${logoBaseUrl}/Micropole.svg`,
}

const workExperiencesImagesUrl: {
    [key in workExperienceCompany]: string[]
} = {
    Intly: [
        `${logoBaseUrl}/Intly/1.png`,
        `${logoBaseUrl}/Intly/2.png`,
        `${logoBaseUrl}/Intly/3.png`,
        `${logoBaseUrl}/Intly/4.png`,
    ],
    'Kanda Health': [
        `${logoBaseUrl}/kanda/kandaHome.svg`,
        `${logoBaseUrl}/kanda/kandaRead.svg`,
    ],
    TakeTurns: [
        `${logoBaseUrl}/taketurns/TT1.png`,
        `${logoBaseUrl}/taketurns/TT2.png`,
        `${logoBaseUrl}/taketurns/TT3.png`,
    ],
    Micropole: [],
    'Tibco Orchestra Networks': [],
    PwC: [],
    SupGalilée: [`${logoBaseUrl}/supGalilee/sup2.svg`],
    WorkAdventure: [
        `${logoBaseUrl}/wa/map1.webp`,
        `${logoBaseUrl}/wa/wa1.png`,
        `${logoBaseUrl}/wa/wa2.png`,
    ],
}

const workExperiencesStacks: {
    [key in workExperienceCompany]: string
} = {
    Intly: 'React native, Expo, Typescript, Supabase, Push notifications, In-app Purchase',
    'Kanda Health':
        'OVH Cloud, Nuxt, Github Actions, NestJS, Prisma, Typesrcript, NextJS',
    WorkAdventure:
        'Svelte, Docker, NodeJS, Tailwind, Typescript, Vite, Playwright',
    TakeTurns:
        'React, webpack, AWS, NodeJS, GraphQL, OpenSearch, Typescript, micro-frontend, MUI',
    SupGalilée: 'React, NestJS, GraphQL, Tailwind',
    'Tibco Orchestra Networks': 'React, Typescript, Java, Docker, Jenkins',
    PwC: 'Python, QlikView',
    Micropole: 'Java, Jenkins, JavaScript, HTML5, CSS3',
}

const workExperienceLinks: {
    [key in workExperienceCompany]: { title: string; url: string }[]
} = {
    Intly: [
        {
            title: 'Intly',
            url: 'https://www.geniuscodecraft.io/intly',
        },
        {
            title: 'Android',
            url: 'https://play.google.com/store/apps/details?id=io.geniuscodecraft.intly&pcampaignid=web_share',
        },
        {
            title: 'iOS',
            url: 'https://apps.apple.com/fr/app/intly/id6736653996',
        },
    ],
    'Kanda Health': [
        { title: 'KandaHealth', url: 'https://www.kanda-health.com' },
    ],
    WorkAdventure: [
        { title: 'WorkAdventure', url: 'https://www.workadventu.re' },
        {
            title: 'GitHub',
            url: 'https://github.com/workadventure/workadventure',
        },
    ],
    TakeTurns: [{ title: 'TakeTurns', url: 'https://www.taketurns.com' }],
    SupGalilée: [
        {
            title: 'SupGalilée',
            url: 'https://www.sup-galilee.univ-paris13.fr/',
        },
        { title: 'Demo', url: 'https://matthintosh.github.io/movie-list-vite' },
    ],
    'Tibco Orchestra Networks': [
        { title: 'Tibco Orchestra Networks', url: 'https://www.tibco.com' },
        {
            title: 'Tibco Cloud Metadata',
            url: 'https://metadata.cloud.tibco.com/docs/userguide/genericFeatures/homepage.html',
        },
    ],
    PwC: [{ title: 'PwC', url: 'https://www.pwc.com' }],
    Micropole: [{ title: 'Micropole', url: 'https://www.micropole.com' }],
}

const workExperienceKeys: workExperienceCompany[] = [
    'Intly',
    'Kanda Health',
    'WorkAdventure',
    'TakeTurns',
    'SupGalilée',
    'Tibco Orchestra Networks',
    'PwC',
    'Micropole',
]
