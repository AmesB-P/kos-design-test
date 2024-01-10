import { motion } from 'framer-motion'
import { FC, useState } from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/Image';
import ArrowRight from '../../../icon/arrow-right.svg';
interface props {
  title: string,
  className: string,
  icon: string | StaticImport
}

const AnimatedButton: FC<props> = ({ title, className, icon }) => {
  const [isHovered, setHovered] = useState<boolean>(false);
  return (
    <>
      <motion.button
        className={className}
        initial={{ width: '100%' }}
        whileHover={{
          scaleY: 1.2,
          backgroundImage: isHovered ? 'linear-gradient(140deg,#FF0000,#7B5BE6 ,skyblue)' : 'none',
          transition: { ease: 'linear', duration: 0.3 },
          originY: 0
        }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <motion.div
          initial={{ opacity: 0, x: isHovered ? 10 : 0  , scaleY : 1}}
          whileHover={{scaleY : 1}}
          animate={{ opacity: 1, x: isHovered ? 50 : -10 }}
          transition={{ duration: 0.3 }}
        >
          {icon && <Image src={!isHovered ? icon : ArrowRight} alt='login' className='mr-3 flex-grow-0 w-6 h-6' />}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: isHovered ? 10 : 0 }}
          animate={{ opacity: 1, x: isHovered ? -50 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {title}

        </motion.div>
      </motion.button>
    </>

  )
}

export default AnimatedButton