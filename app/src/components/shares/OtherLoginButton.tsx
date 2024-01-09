import { motion } from 'framer-motion'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/Image'
import { FC } from 'react'


interface otherLoginProps {
    icon: string | StaticImport,
    alt: string,
    className: string
}

const OtherLoginButton: FC<otherLoginProps> = ({ icon, alt, className }) => {
    return (
        <motion.button className={className}
        >
            <motion.div
            className='w-full h-full flex justify-center items-center'
            whileHover={{transform: 'rotate(0.1turn)' }}
            >
                <Image src={icon ?? ''} alt={alt} className='w-6 h-w-6 flex-shrink-0' />
            </motion.div>
        </motion.button>
    )
}

export default OtherLoginButton