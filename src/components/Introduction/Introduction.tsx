import { useTranslation } from 'react-i18next'
import { GrayText } from '../../design/atoms/GrayText'
import { ScaleText } from '../../design/animations/ScaleText'

export const Introduction = () => {
    const { t } = useTranslation('introduction')
    return (
        <div className="flex justify-center mt-20 mb-20 md:ml-auto md:mr-auto  md:w-2/3 ">
            <div className="flex flex-col">
                <span className="text-4xl">
                    <ScaleText>👋</ScaleText>
                    {t('introduction')}
                </span>
                <GrayText className="text-3xl">{t('welcome')}</GrayText>
            </div>
        </div>
    )
}
