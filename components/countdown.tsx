"use client";
import { formatDistanceToNow } from 'date-fns'
import {motion} from 'framer-motion'

const Countdown = () => {
    const selectedDate = new Date('2024-10-16 17:00:00')
    const distance = formatDistanceToNow(selectedDate, { addSuffix: true })

  return (
    <motion.p className='p-2' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3.3 }}>Coming {distance}</motion.p>
  )
}

export default Countdown