
import { useState, useEffect } from 'react'
import { Button } from "../components"
import { about } from "../assets/aboutImage"


const About = () => {

    return (
    <>
     <section className="text-gray-600 dark:text-gray-200 p-4">
  
     <div className="block rounded-lg  ">
      <div className="flex flex-wrap items-center">
        <div className="hidden lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
          <img src={about} alt="about image"
            className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
          <div className="px-6 py-12 md:px-12">
            <h2 className="text-2xl font-bold mb-4">About us</h2>
           
            <p className="">
            At Global Wild Swimming and Camping we have been providing wild swimming and camping enthusiasts with the best experiences for over 70 years. Our passion for the great outdoors has only grown as our company has expanded over the years, and we have our loyal fans to thank for that.

            We specialize in organizing wild swimming and camping activities, from guided tours to equipment rentals, and everything in between. Our team is composed of experienced outdoor enthusiasts who are dedicated to sharing their love for nature with others.

            We take great pride in offering a wide range of wild swimming and camping experiences that cater to all skill levels and interests. From secluded and serene swimming holes to rugged and remote camping spots, we have something for everyone.

            Our experienced guides will lead you to the most beautiful and pristine locations, ensuring that you have a safe and enjoyable experience. We also offer top-of-the-line equipment rental, so you can be well-equipped for your adventure.

            We are proud of the reputation we have built over the years and are grateful for the loyalty of our fans. They have been with us through every step of the way and their support has allowed us to continue to grow and provide even more exciting wild swimming and camping experiences.

            Join us on our next adventure and discover the beauty of wild swimming and camping with Global Wild Swimming and Camping."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

    </>
  )
}

export default About
