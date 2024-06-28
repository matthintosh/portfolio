import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionTemplateProps {
    Title?: ReactNode
    Content: ReactNode
}

export const SectionTemplate = ({ Title, Content }: SectionTemplateProps) => {
    return (
        <motion.div className="flex flex-col gap-4">
            {Title}
            {Content}
        </motion.div>
    )
}
