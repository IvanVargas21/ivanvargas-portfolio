import React from 'react'

const AboutSection = () => {
  return (
    <section className="flex flex-col justify-center items-start py-2 mb-20">
			  <header className="flex justify-start items-center mb-5 gap-x-4 w-full">
					<div className="flex items-center gap-x-4">
						<h5 className="text-green-500 text-4xl font-bebas">01.</h5>
						<h1 className="text-4xl font-bold">About Me</h1>
					</div>
					{/* Horizontal line */}
					<div className="flex-grow h-1 bg-green-500 ml-4"></div>
				</header>

				<div>
					<div>
						<p className="text-base sm:text-sm md:text-base lg:text-lg xl:text-xl font-light sm:font-thin text-justify mb-4">
						Hi! I am <span className="text-green-500 font-bold">Ivan Christopher Vargas</span>, a 21-year-old <span className="text-green-500 font-bold">Computer Engineering</span> student in my final year at <span className="text-green-500 font-bold"> Universidad De Manila</span>. My journey has been a blend of creativity and technical exploration. Growing up, I developed a <span className="text-violet-500 font-bold">passion</span> for <span className="text-violet-500 font-bold">arts</span> and <span className="text-violet-500 font-bold">music</span>, spending countless hours creating charcoal and graphite portraits during the pandemic and playing instruments like the guitar and keyboard with my twin brother. While he pursued music professionally, I followed a different path—driven by my interest in engineering and the opportunities offered by my alma mater.
						</p>

						<p className="text-base sm:text-sm md:text-base lg:text-lg xl:text-xl font-light sm:font-thin text-justify mb-4">
						In college, I discovered <span className="text-green-500 font-bold">programming</span> through courses like <span className="text-green-500 font-bold">Programming Logic and Design (C++)</span>, <span className="text-green-500 font-bold">Object-Oriented Programming (Java)</span>, and <span className="text-green-500 font-bold">Software Engineering (JavaScript)</span>. Initially, I thought I’d missed my chance to apply my <span className="text-violet-500 font-bold">artistic</span> side, as my dream course was <span className="text-violet-500 font-bold">Architecture</span>. However, I soon realized that designing user interfaces gave me a creative outlet while working with <span className="text-green-500 font-bold">technology</span>. The satisfaction of turning ideas into <span className="text-green-500 font-bold">functional</span>, <span className="text-green-500 font-bold">visually appealing</span> designs motivated me to explore more tools, such as <span className="text-green-500 font-bold">HTML</span>, <span className="text-green-500 font-bold">CSS</span>, <span className="text-green-500 font-bold">JavaScript</span>, <span className="text-green-500 font-bold">React</span> and <span className="text-green-500 font-bold">Tailwind</span>.
						</p>

						<p className="text-base sm:text-sm md:text-base lg:text-lg xl:text-xl font-light sm:font-thin text-justify mb-4">
						Today, I’m <span className="text-green-500 font-bold">actively combining</span> my <span className="text-green-500 font-bold">creativity</span> and <span className="text-green-500 font-bold">technical skills</span> through <span className="text-green-500 font-bold">self study</span> and <span className="text-green-500 font-bold">personal projects</span>. Each project deepens my understanding and brings me closer to my goal of becoming a <span className="text-green-500 font-bold">Full Stack Web Developer</span>. I’m excited about the endless possibilities in web development and am committed to continuous learning, innovation, and building impactful digital experiences.
						</p>
				  </div>
					<div>

					</div>
			  </div>
    </section>
  )
}

export default AboutSection