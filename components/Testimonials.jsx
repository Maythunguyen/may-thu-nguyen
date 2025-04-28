import React from 'react'
import { AnimatedTestimonials } from './ui/AnimatedTestimonials'
import { testimonials } from '@/data'

const Testimonials = () => {
  return (
    <section className='mt-30 mb-30 flex flex-col items-center' id="testimonials">
        <div>
        <h2 className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-5xl text-center py-2 md:py-10 relative z-20 font-bold tracking-tight">
            What my <span className="text-dark-orange">Coworkers</span> say
        </h2>
        </div>

        <div>
            <AnimatedTestimonials testimonials={testimonials}/>
        </div>
    </section>
  )
}

export default Testimonials
