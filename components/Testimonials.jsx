import React from 'react'
import { AnimatedTestimonials } from './ui/AnimatedTestimonials'
import { testimonials } from '@/data'

const Testimonials = () => {
  return (
    <section className='py-20 mb-30 flex flex-col' id="testimonials">
        <div>
          <h2 className="font-helvetica bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-sm md:text-lg py-2 md:py-10 relative z-20 font-normal tracking-tight">
          What my,{" "}
          <div className="text-dark-gray text-4xl md:text-5xl font-medium">
          Coworkers say
          </div>
        </h2>
        </div>

        <div>
            <AnimatedTestimonials testimonials={testimonials}/>
        </div>
    </section>
  )
}

export default Testimonials
