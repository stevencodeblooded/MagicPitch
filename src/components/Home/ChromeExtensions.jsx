import { TbHexagonNumber3 } from 'react-icons/tb'
import chromeExtensionImage from '../../assets/chromeExtension.png'

const ChromeExtensions = () => {
  return (
    <div className="bg-blue-400">
        <section className="max-w-6xl mx-auto px-3 py-36 text-white">
            <div className="flex flex-col gap-8 items-center md:flex-row md:justify-between">
                <div className="md:w-1/2 flex flex-col gap-8">
                    <TbHexagonNumber3 className="text-7xl"/>
                    <h2 className="text-4xl font-bold">Expert Google Chrome Browser Extension Development and Maintenance</h2>
                    <p className="text-sm">
                        Unlock the full potential of Google Chrome with our comprehensive services. Whether you need a new 
                        extension built from scratch, modifications to an existing one, or fixes 
                        for issues, our experienced team is here to deliver efficient and effective solutions tailored to your needs.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <img src={chromeExtensionImage} alt="chromeExtension" className="bg-blue-300 p-2 rounded-3xl"/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ChromeExtensions