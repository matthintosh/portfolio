import { TFunction } from 'i18next'

export interface WorkExperience {
    name: string
    job: string
    date: string
    companyDescription: string
    logo?: string
    tasks: string[]
    stack: string
    imagesUrls: string[]
    links?: { title: string; url: string }[]
}

type workExperienceCompany =
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
    'Kanda Health': [],
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
    'Kanda Health': 'OVH Cloud, Nuxt, Github Actions',
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
    'Kanda Health': [],
    WorkAdventure: [
        { title: 'WorkAdventure', url: 'https://www.workadventure.re' },
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
    'Kanda Health',
    'WorkAdventure',
    'TakeTurns',
    'SupGalilée',
    'Tibco Orchestra Networks',
    'PwC',
    'Micropole',
]
