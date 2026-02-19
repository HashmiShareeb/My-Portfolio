import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'
import GradientTitle from './Text/GradientHeaderText'
import CTA from './CTA'
import { motion } from 'framer-motion'

type conctactVar = {
  variant?: 'full' | 'compact'
}
const Contact = ({ variant = 'full' }: conctactVar) => {
  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap items-center gap-3 p-4">
        {/* Email — primary */}
        <CTA href="mailto:shareeb.hashmi@howest.student.be">
          <Mail size={20} />
        </CTA>
        {/* LinkedIn */}
        <CTA
          href="https://www.linkedin.com/in/shareeb-hashmi-569b38161/"
          target="_blank"
        >
          <Linkedin size={20} />
        </CTA>

        {/* GitHub */}
        <CTA href="https://github.com/HashmiShareeb" target="_blank">
          <Github size={20} />
        </CTA>
      </div>
    )
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="px-4 mx-auto lg:py-40 py-20"
      id="contact"
    >
      <div className="grid place-items-center m-8">
        <GradientTitle title="Contact" IsCentered={true} />
        <div className="mt-4">
          <p className="text-md text-center leading-relaxed  font-medium dark:text-slate-400/80 lg:w-3/4 mx-auto">
            I am always open to new opportunities. Feel free to reach out to me
            if you have any questions or just want to say hi.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <CTA
              mailto="shareeb.hashmi@howest.student.be"
              id="mail-cta"
              ariaLabel="Email me"
            >
              <span className="inline-flex items-center mx-auto">
                <Mail size={32} />
                <span className="ml-2 hidden lg:block">Email me</span>
              </span>
            </CTA>
            <CTA
              href="https://www.linkedin.com/in/shareeb-hashmi-569b38161/"
              target="_blank"
              id="linkedin-cta"
              ariaLabel="LinkedIn"
            >
              <Linkedin size={32} />
            </CTA>
            <CTA
              href="https://github.com/HashmiShareeb"
              target="_blank"
              id="github-cta"
              ariaLabel="GitHub"
            >
              <Github size={32} />
            </CTA>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
