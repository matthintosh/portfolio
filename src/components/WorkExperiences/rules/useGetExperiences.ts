import { useTranslation } from 'react-i18next'
import {
    WorkExperience,
    WorkExperienceRepository,
} from '../../../repositories/local/WorkExperienceRepository.ts'

export const useGetExperiences = () => {
    const { t } = useTranslation('workExperiences')

    const workExperiences: WorkExperience[] =
        WorkExperienceRepository.getExperienceCompanies().map(
            (workExperienceKey) => ({
                name: workExperienceKey,
                ...WorkExperienceRepository.getExperienceTranslatedContent(
                    workExperienceKey,
                    t
                ),
                logo: WorkExperienceRepository.getExperienceLogo(
                    workExperienceKey
                ),
                stack: WorkExperienceRepository.getExperienceStack(
                    workExperienceKey
                ),
                companyDescription: t(
                    `${workExperienceKey}.companyDescription`
                ),
                imagesUrls:
                    WorkExperienceRepository.getExperienceImages(
                        workExperienceKey
                    ),
                links: WorkExperienceRepository.getExperienceLinks(
                    workExperienceKey
                ),
            })
        )

    return workExperiences
}
