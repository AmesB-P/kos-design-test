import { motion } from 'framer-motion'
import { FC } from 'react'

interface props {
  title: string,
  className: string
}

const AnimatedButton: FC<props> = ({ title, className }) => {
  return (
    <>
      <motion.button
        className={className}
        initial={{ width: '100%' }}
      >
        {title}
      </motion.button>

    </>

  )
}

export default AnimatedButton