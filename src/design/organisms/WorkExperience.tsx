import { motion } from 'framer-motion'
import { WorkExperience as WorkExperienceType } from '../../repositories/local/WorkExperienceRepository'
import { ExternalLink } from '../atoms/ExternalLink'
import { GrayText } from '../atoms/GrayText'

export const WorkExperience = ({
    job,
    logo,
    date,
    companyDescription,
    tasks,
    stack,
    imagesUrls,
    links,
    contractType,
}: WorkExperienceType) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
                transition: { type: 'spring', duration: 2 },
            }}
            viewport={{ once: true }}
            className={`flex flex-1 gap-9 flex-wrap `}
        >
            <div className="flex flex-col gap-2 flex-1">
                <img
                    src={logo}
                    alt="brandLogo"
                    className="self-start max-h-16 object-contain md:max-w-96"
                />
                <span className="font-semibold">
                    {job}
                    <GrayText className="text-xs">{date}</GrayText>
                    <GrayText className="text-xs">{contractType}</GrayText>
                </span>
                <p>{companyDescription}</p>
                <p>Missions</p>
                <ul className="mt-2">
                    {tasks.map((task, index) => (
                        <li key={index} className="text-sm">
                            • {task}
                        </li>
                    ))}
                </ul>
                <GrayText className="text-sm">{stack}</GrayText>
                <div className="flex gap-2">
                    {links?.map((link) => (
                        <ExternalLink
                            key={link.url}
                            url={link.url}
                            title={link.title}
                        />
                    ))}
                </div>
            </div>
            {imagesUrls.length !== 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{
                        opacity: 1,
                        transition: { type: 'spring', duration: 2, delay: 0.5 },
                    }}
                    viewport={{ once: true }}
                    className={
                        'flex-1 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4'
                    }
                >
                    {imagesUrls.map((imageUrl) => (
                        <img
                            key={imageUrl}
                            className="rounded-md min-w-16"
                            src={imageUrl}
                            alt="image"
                        />
                    ))}
                </motion.div>
            )}
        </motion.div>
    )
}
