import { PropsWithChildren } from 'react'
import { SectionTitle } from '../../design/atoms/SectionTitle'
import { TranslucentBox } from '../../design/atoms/TranslucentBox'
import { SectionTemplate } from '../../design/templates/SectionTemplate'
import {
    Technology,
    TechnologyGroup,
} from '../../repositories/local/TechnologyRepository'
import './Technologies.css'
import { fetchTechnologies } from './rules/fetchTechnologies'

export const Technologies = () => {
    return (
        <SectionTemplate
            Title={<SectionTitle>Technologies</SectionTitle>}
            Content={<TechnologiesContent />}
        />
    )
}

const TechnologiesContent = () => {
    const technologies = fetchTechnologies()

    return (
        <div className="technology-grid">
            <TechnologyGridElement rowVariant gridArea="front">
                {technologies
                    .filter((technology) => technology.group === 'front')
                    .map((technology) => (
                        <div className="flex flex-col items-center">
                            <Technology technology={technology} />
                        </div>
                    ))}
            </TechnologyGridElement>
            <TechnologyGridElement gridArea="back">
                {technologies
                    .filter((technology) => technology.group === 'back')
                    .map((technology) => (
                        <Technology technology={technology} />
                    ))}
            </TechnologyGridElement>
            <TechnologyGridElement gridArea="styling">
                {technologies
                    .filter((technology) => technology.group === 'styling')
                    .map((technology) => (
                        <Technology technology={technology} />
                    ))}
            </TechnologyGridElement>
            <TechnologyGridElement gridArea="compiler">
                {technologies
                    .filter((technology) => technology.group === 'compiler')
                    .map((technology) => (
                        <Technology technology={technology} />
                    ))}
            </TechnologyGridElement>
            <TechnologyGridElement gridArea="typing">
                {technologies
                    .filter((technology) => technology.group === 'typing')
                    .map((technology) => (
                        <Technology technology={technology} />
                    ))}
            </TechnologyGridElement>
            <TechnologyGridElement gridArea="deployment">
                {technologies
                    .filter((technology) => technology.group === 'deployment')
                    .map((technology) => (
                        <Technology technology={technology} />
                    ))}
            </TechnologyGridElement>
            <TechnologyGridElement gridArea="codeVersioning">
                {technologies
                    .filter(
                        (technology) => technology.group === 'codeVersioning'
                    )
                    .map((technology) => (
                        <Technology technology={technology} />
                    ))}
            </TechnologyGridElement>
        </div>
    )
}

const TechnologyGridElement = ({
    children,
    gridArea,
    rowVariant,
}: PropsWithChildren<{ gridArea: TechnologyGroup; rowVariant?: boolean }>) => {
    return (
        <TranslucentBox
            className={`${gridArea} flex ${rowVariant ? 'flex-row' : 'flex-col'} items-center justify-evenly`}
        >
            {children}
        </TranslucentBox>
    )
}

const Technology = ({ technology }: { technology: Technology }) => {
    return (
        <>
            <img src={technology.logo} alt={'technology logo'} />
            <p style={technology.color ? { color: technology.color } : {}}>
                {technology.name}
            </p>
        </>
    )
}
