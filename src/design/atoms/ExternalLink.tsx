import { PropsWithChildren } from 'react'
import { LinkIcon } from '@heroicons/react/16/solid'
import { motion } from 'framer-motion'

export const ExternalLink = ({
    title,
    url,
}: PropsWithChildren<{
    title: string
    url: string
}>) => {
    return (
        <motion.a
            whileFocus={{ scale: 1.1 }}
            whileHover={{
                scale: 1.1,
            }}
            className="inline-flex items-center gap-1 text-sm border border-solid border-white rounded-full px-2 py-1"
            href={url}
            target="_blank"
        >
            <LinkIcon width={12} height={12} />
            {title}
        </motion.a>
    )
}
