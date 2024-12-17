import React from 'react'

const ContactHero = () => {
  const contactInfo = [
    {
      logo: "📧",
      title: "Email Us",
      description: "Send us your queries anytime"
    },
    {
      logo: "📱", 
      title: "Call Us",
      description: "We're available Mon-Fri, 9am-5pm"
    },
    {
      logo: "📍",
      title: "Visit Us",
      description: "Come meet us in person"
    }
  ]

  return (
    <div className="min-h-[300px] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto dark:text-gray-100">
            Contact us to publish your content, showcase ads on our website, and gain greater reach.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className=" flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full md:w-1/3"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-white">{info.logo}</span>
              </div>
              <p className="text-xl font-semibold text-gray-800 mb-2">
                {info.title}
              </p>
              <p className="text-gray-600 text-center">
                {info.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactHero