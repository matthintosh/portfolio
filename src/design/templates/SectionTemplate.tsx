import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionTemplateProps {
    Title?: ReactNode
    Content: ReactNode
}

export const SectionTemplate = ({ Title, Content }: SectionTemplateProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{
                opacity: 1,
                transition: { type: 'spring', duration: 2 },
            }}
            className="flex flex-col gap-4"
        >
            {Title}
            {Content}
        </motion.div>
    )
}
