import { IoIosSend } from "react-icons/io"

const CallToAction = () => {
  return (
    <div className="mx-3 my-20">
        <section className="max-w-6xl mx-auto py-20 bg-blue-100 rounded-3xl">
            <div className="p-3">
                <h2 className="mb-12 text-4xl font-bold text-center text-transparent bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text">Ready to elevate your online presence? <br className="hidden md:block" />Contact us today!</h2>
                <button className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 transition-all w-fit mx-auto px-10 font-semibold py-3 rounded-full text-white">Get Started <IoIosSend className="text-2xl" /></button>
            </div>
        </section>
    </div>
  )
}

export default CallToAction