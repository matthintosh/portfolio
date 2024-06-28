const baseLogoUrl = '/img/technologies'

export interface Technology {
    name: string
    logo: string
    color?: string
    group: TechnologyGroup
}

export type TechnologyGroup =
    | 'front'
    | 'back'
    | 'deployment'
    | 'codeVersioning'
    | 'styling'
    | 'typing'
    | 'compiler'

export class TechnologyRepository {
    static getTechnologies() {
        return technologies
    }
}

const technologies: Technology[] = [
    {
        name: 'React',
        logo: `${baseLogoUrl}/react.svg`,
        color: '#00D7DA',
        group: 'front',
    },
    {
        name: 'NextJS',
        logo: `${baseLogoUrl}/nextJS.svg`,
        group: 'front',
    },
    {
        name: 'Typescript',
        logo: `${baseLogoUrl}/typescript.svg`,
        group: 'typing',
    },
    {
        name: 'MUI',
        logo: `${baseLogoUrl}/mui.svg`,
        group: 'styling',
    },
    {
        name: 'Emotion',
        logo: `${baseLogoUrl}/emotion.svg`,
        color: '#D36AC2',
        group: 'styling',
    },
    {
        name: 'Tailwind CSS',
        logo: `${baseLogoUrl}/tailwind.svg`,
        color: '#38BDF8',
        group: 'styling',
    },
    {
        name: 'Vite',
        logo: `${baseLogoUrl}/vite.svg`,
        color: '#FFD22A',
        group: 'compiler',
    },
    {
        name: 'Webpack',
        logo: `${baseLogoUrl}/webpack.svg`,
        color: '#8ED5FA',
        group: 'compiler',
    },
    {
        name: 'NestJS',
        logo: `${baseLogoUrl}/nestJS.svg`,
        color: '#E0234E',
        group: 'back',
    },
    {
        name: 'GraphQL',
        logo: `${baseLogoUrl}/graphql.svg`,
        color: '#E535AB',
        group: 'back',
    },
    {
        name: 'Github',
        logo: `${baseLogoUrl}/github.svg`,
        group: 'codeVersioning',
    },
    {
        name: 'Gitlab',
        logo: `${baseLogoUrl}/gitlab.svg`,
        color: '#E24329',
        group: 'codeVersioning',
    },
    {
        name: 'AWS',
        logo: `${baseLogoUrl}/aws.svg`,
        group: 'deployment',
    },
    {
        name: 'Docker',
        logo: `${baseLogoUrl}/docker.svg`,
        color: '#1D63ED',
        group: 'deployment',
    },
]
