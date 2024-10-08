import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"

// Componentes
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full mb-8">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-8">
          {/* texto */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-[16px] leading-7">Data Scientist & Software Developer</span>
            <h1 className="h1 mb-2">
              Hello I'm <br /> <span className="text-accent">João Terêncio</span>
            </h1>
            <p className="max-w-[500px] mb-8 text-white/80">
            I specialize in Data Science, web development, and RPA automation, using tools like Python, React, and Power BI to create efficient digital solutions.
            </p>

            {/* Download CV e Redes sociais */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/cv/Resume.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl"/>
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials 
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" 
                />
              </div>
            </div>
          </div>
          {/* foto */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  )
}

export default Home;