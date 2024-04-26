import { IoIosSend } from "react-icons/io"

const Hero = () => {
  return (
    <div>
        <section className="max-w-4xl mx-auto px-3 ">
            <div className="my-36">
                <div className="flex flex-col justify-center gap-10">
                    <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-snug text-transparent bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text">Transform Your Web Presence with Cutting-Edge Development Expertise.</h1>
                    <p className="text-md text-center w-full lg:w-2/3 lg:mx-auto text-gray-500 font-semibold">Grow your business by acquiring high quality services and boost your business with expert web development.</p>
                    <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 transition-all w-fit mx-auto px-10 font-semibold py-3 rounded-full text-white">Get Started <IoIosSend className="text-2xl" /></button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero