"use client";

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs"
import { motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    href: '',
  },
  {
    num: '02',
    title: 'UI/UX Design',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    href: '',
  },
  {
    num: '03',
    title: 'Data Scientist',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    href: '',
  },
  {
    num: '04',
    title: 'RPA Developer',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    href: '',
  },
]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container max-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {delay: 1.8, duration: 0.4, ease: "easeIn"},
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[30px]"
        >
          {services.map((services, index) => {
            return <div 
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              {/* top */}
              <div className="w-full flex justify-between items-center">
                <div className="text-3xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{services.num}</div>
                <Link 
                  href={services.href}
                  className="w-[30px] h-[30px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"  
                >
                  <BsArrowDownRight className="text-primary text-1xl"/>
                </Link>
              </div>

              {/* title */}
              <h2 className="text-[18px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{services.title}</h2>

              {/* subtitle */}
              <p className="text-[12px] text-white/60">{services.description}</p>

              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
            </div>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services