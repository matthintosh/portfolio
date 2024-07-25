import { useTranslation } from 'react-i18next'
import { GrayText } from '../../design/atoms/GrayText'
import { RotateText } from '../../design/animations/RotateText'

export const Introduction = () => {
    const { t } = useTranslation('introduction')
    return (
        <div className="flex justify-center mt-20 mb-20 md:ml-auto md:mr-auto  md:w-2/3 ">
            <div className="flex flex-col">
                <span className="text-4xl">
                    <RotateText>👋</RotateText>
                    <p>{t('introduction')}</p>
                </span>
                <GrayText className="text-3xl">{t('welcome')}</GrayText>
            </div>
        </div>
    )
}
