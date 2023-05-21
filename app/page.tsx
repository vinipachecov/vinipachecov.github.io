import Link from "next/link"

const Intro = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">                  
      <div className="text-center text-gray-600 lg:text-5xl sm:text-4xl md:text-3xl ">Hi, I`m <strong>Vinicius Pacheco Vieira</strong></div>      
      <div className="text-center text-gray-600 lg:text-5xl sm:text-4xl md:text-3xl mt-2"> a Software Developer</div>                                      
      <div className="w-full flex flex-row gap-x-8 justify-center mt-8">
        <a href="/files/vinicius-vieira-cv" className="rounded bg-teal-400 p-2" download>Download CV</a>
        <Link href="/cv" className="rounded bg-blue-400 p-2">View CV</Link>  
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="bg-gray-100">
       <Intro />
    </main>
  )
}
