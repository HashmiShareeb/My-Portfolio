import React from 'react'

type GradientHeaderTextProps = {
  title: string
  description?: string
  IsCentered?: boolean
}

const GradientHeaderText = (props: GradientHeaderTextProps) => {
  return (
    <div
      className={`text-center ${props.IsCentered ? 'lg:text-center' : 'lg:text-left'}`}
    >
      <h1
        className={`capitalize text-4xl lg:text-5xl font-bold text-transparent ${props.IsCentered ? 'text-center' : 'lg:text-left'}`}
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 dark:from-teal-300 dark:via-cyan-400 dark:to-blue-400">
          {props.title}
        </span>
      </h1>
      <p className={`mt-4 dark:text-slate-400 leading-relaxed font-medium`}>
        {props.description}
      </p>
    </div>
  )
}

export default GradientHeaderText
