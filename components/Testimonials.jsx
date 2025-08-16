import React from 'react'
import { AnimatedTestimonials } from './ui/AnimatedTestimonials'
import { testimonials } from '@/data'

const Testimonials = () => {
  return (
    <section className='mb-28 flex flex-col bg-black-default rounded-md p-6 md:p-10 scroll-mt-32' id="testimonials">
        <div>
          <h2 className="font-helvetica bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-white dark:to-white text-sm md:text-lg py-2 md:py-10 relative z-20 font-normal tracking-tight">
          What my,{" "}
          <div className="text-gray-100 text-4xl md:text-5xl font-medium">
          Coworkers say
          </div>
        </h2>
        </div>

        <div className='flex flex-col md:flex-row justify-between gap-16 mb-10'>
          {/* Fixed Left Side */}
          <div className='md:border-r border-neutral-700 dark:border-neutral-700 md:max-w-[40%] md:min-w-[40%] md:pr-8 pt-10'>
            <p className='text-xs md:text-sm text-gray-200 leading-relaxed'>
              I'm really proud of what I've achieved in the early stages of my career.
              I'm so grateful for the support from my coworkers. I've learned so much
              from them, both professionally and in how they show up every day.
            </p>
          </div>

          {/* Animated Right Side */}
          <div className="flex-1">
            <AnimatedTestimonials testimonials={testimonials} />
          </div>
        </div>
    </section>
  )
}

export default Testimonials
