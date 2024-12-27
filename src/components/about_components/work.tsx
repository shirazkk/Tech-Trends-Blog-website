import React from 'react'
import { Button } from '../ui/button'

const Work = () => {
  const workBoxes = [
    {
      heading: "01",
      subheading: "Brainstorming",
      description: "We conduct thorough research to understand your needs and goals."
    },
    {
      heading: "02", 
      subheading: "Analysing",
      description: "We develop comprehensive strategies tailored to your objectives."
    },
    {
      heading: "03",
      subheading: "News Publishing", 
      description: "We implement solutions with precision and deliver results."
    }
  ]

  return (
    <div className="w-full py-16">
      <div className="w-[80%] mx-auto max-w-[1500px]">
        {/* Top Small Heading */}
        <p className="text-purple-600 font-medium mb-8">How We Work</p>
        
        {/* Flexbox Layout */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <h2 className="text-3xl md:text-4xl font-bold md:w-1/2 mb-4 md:mb-0">
            I will show you how our team works
          </h2>
          <p className="text-gray-600 dark:text-gray-100 md:w-1/3">
            Bring to the table win-win market strategies to ensure perfect articles.
          </p>
        </div>

        {/* Three Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workBoxes.map((box, index) => (
            <div 
              key={index}
              className="p-6 border rounded-lg transition-all duration-300 hover:bg-purple-600 hover:text-white group"
            >
              <h1 className="text-5xl font-bold mb-2">{box.heading}</h1>
              <p className="text-base text-purple-600 font-bold group-hover:text-white mb-3">{box.subheading}</p>
              <p className="text-gray-600 dark:text-gray-100 group-hover:text-gray-200 mb-6">{box.description}</p>
              <Button variant="link" className=" px-4 py-2  text-purple-600 group-hover:border-white group-hover:text-white">
                Read More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work