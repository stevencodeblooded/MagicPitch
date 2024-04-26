import { TbHexagonNumber4 } from 'react-icons/tb'
import fullstack from '../../assets/fullStackWebDevelopment.png'

const FullStackDevelopment = () => {
  return (
    <div className=" bg-green-400">
        <section className="max-w-6xl mx-auto px-3 py-36 text-white">
            <div className="flex flex-col gap-8 items-center md:flex-row md:justify-between">
                <div className="md:w-1/2 flex flex-col gap-8 md:order-2 ">
                    <TbHexagonNumber4 className="text-7xl"/>
                    <h2 className="text-4xl font-bold">Comprehensive Full Stack Web Development Solutions</h2>
                    <p className="text-sm">
                        Empower your online presence with our end-to-end full stack web development services. 
                        From front-end design to back-end functionality, we cover every aspect of web development to deliver
                        seamless, scalable, and innovative solutions that meet your business objectives.
                    </p>
                </div>
                <div className="md:w-1/2 md:order-1 ">
                    <img src={fullstack} alt="ConvertToPSD" className="bg-green-300 rounded-3xl"/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default FullStackDevelopment