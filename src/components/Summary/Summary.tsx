import { PropsWithChildren } from 'react'
import { GrayText } from '../../design/atoms/GrayText'
import { SectionTitle } from '../../design/atoms/SectionTitle'
import { TranslucentBox } from '../../design/atoms/TranslucentBox'
import { SectionTemplate } from '../../design/templates/SectionTemplate'
import { useTranslation } from 'react-i18next'
import NodeLogo from '../../assets/logos/Node.svg'
import ReactLogo from '../../assets/logos/react.svg'
import TypescriptLogo from '../../assets/logos/Typescript.svg'
import ExperienceLogo from '../../assets/logos/Experience.svg'

export const Summary = () => {
    const { t } = useTranslation('summary')
    return (
        <SectionTemplate
            Title={<SectionTitle>{t('title')}</SectionTitle>}
            Content={<SummaryContent />}
        />
    )
}

const SummaryContent = () => {
    const { t } = useTranslation('summary')
    return (
        <div className="flex flex-1 flex-col md:flex-row flex-wrap gap-4">
            <SummaryTranslucentBox>
                <p className="text-3xl">💻</p>
                <p className="text-3xl">{t('jobTitle')}</p>
                <GrayText className="text-sm">{t('jobDescription')}</GrayText>
            </SummaryTranslucentBox>
            <SummaryTranslucentBox>
                <p className="flex gap-2 text-3xl align-middle flex-wrap">
                    <img
                        src={NodeLogo}
                        width={'36px'}
                        height={'36px'}
                        alt="NodeJS"
                    />
                    +
                    <img
                        src={ReactLogo}
                        width={'36px'}
                        height={'36px'}
                        alt="React"
                    />
                    +
                    <img
                        src={TypescriptLogo}
                        width={'36px'}
                        height={'36px'}
                        alt="typescript"
                    />
                    = ❤️
                </p>
                <p className="text-xl">{t('headline')}</p>
                <GrayText className="text-sm">
                    NodeJS, Typescript, React, TailwindCSS, MUI, Emotion, Java
                </GrayText>
            </SummaryTranslucentBox>
            <SummaryTranslucentBox>
                <p className="flex gap-2 text-3xl align-middle flex-wrap">
                    <img src={ExperienceLogo} width={'36px'} height={'36px'} />
                    <p className="text-xl">{t('experience')}</p>
                    <GrayText className="text-sm">
                        {t('customerTypes')}
                    </GrayText>
                </p>
            </SummaryTranslucentBox>
        </div>
    )
}

const SummaryTranslucentBox = ({ children }: PropsWithChildren) => {
    return (
        <TranslucentBox className="flex-1 p-3 pt-5 flex gap-2 flex-col">
            {children}
        </TranslucentBox>
    )
}
