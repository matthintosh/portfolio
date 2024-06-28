import { SectionTemplate } from '../../design/templates/SectionTemplate.tsx'
import { SectionTitle } from '../../design/atoms/SectionTitle.tsx'
import { useGetExperiences } from './rules/useGetExperiences.ts'
import { WorkExperienceTemplate } from '../../design/templates/WorkExperienceTemplate.tsx'
import { WorkExperience } from '../../design/organisms/WorkExperience.tsx'
import { useTranslation } from 'react-i18next'

export const WorkExperiences = () => {
    const workExperiences = useGetExperiences()
    const { t } = useTranslation('workExperiences')
    return (
        <SectionTemplate
            Title={
                <SectionTitle className="text-3xl text-center mt-6 mb-6">
                    {t('trustedMe')}
                </SectionTitle>
            }
            Content={
                <WorkExperienceTemplate>
                    {workExperiences.map((workExperience) => (
                        <WorkExperience
                            key={workExperience.name}
                            {...workExperience}
                        />
                    ))}
                </WorkExperienceTemplate>
            }
        />
    )
}
