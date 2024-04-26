import { TbHexagonNumber1 } from "react-icons/tb"
import ConvertToPSDImage from '../../assets/ConvertToPSD.png'

const ConvertToPSD = () => {
  return (
    <div id="services">
        <div className=" bg-blue-400">
            <section className="max-w-6xl mx-auto px-3 py-36 text-white">
                <div className="flex flex-col gap-8 items-center md:flex-row md:justify-between">
                    <div className="md:w-1/2 flex flex-col gap-8">
                        <TbHexagonNumber1 className="text-7xl"/>
                        <h2 className="text-4xl font-bold">PSD to HTML & React Conversion Services</h2>
                        <p className="text-sm">
                            Turn your PSD designs into dynamic websites with our specialized PSD to HTML and React 
                            conversion services. Our team ensures flawless translation of your design files into 
                            fully-functional, interactive web experiences, tailored to your specifications.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img src={ConvertToPSDImage} alt="ConvertToPSD" className="bg-blue-300 rounded-3xl"/>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default ConvertToPSD