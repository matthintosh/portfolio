import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'

export const RotateText = ({ children }: PropsWithChildren) => {
    return (
        <motion.p
            className="w-fit"
            animate={{ x: [-5, 5, 0], rotate: [-5, 5, 0] }}
            transition={{
                //transition: { type: 'ease', duration: 0.05 },
                type: 'ease',
                duration: 0.5,
                repeat: 1,
            }}
        >
            {children}
        </motion.p>
    )
}
