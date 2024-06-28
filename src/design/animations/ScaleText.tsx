import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

export const ScaleText = ({ children }: PropsWithChildren) => {
    return (
        <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.2,
                scale: {
                    type: 'spring',
                    damping: 10,
                    stiffness: 100,
                    restDelta: 0.001,
                },
            }}
        >
            {children}
        </motion.p>
    )
}
