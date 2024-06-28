import { SectionTemplate } from '../../design/templates/SectionTemplate'
import { Standard } from '@typebot.io/react'
import { TranslucentBox } from '../../design/atoms/TranslucentBox'

export const ContactMe = () => {
    return (
        <SectionTemplate
            Content={
                <div
                    className="flex flex-col items-center mt-9 mb-9"
                    id="contact-me"
                >
                    <TranslucentBox noTilt>
                        <Standard
                            typebot="lead-generation-xg57gdm"
                            className="rounded-md"
                            style={{ width: '100%', height: '600px' }}
                        />
                    </TranslucentBox>
                </div>
            }
        />
    )
}
