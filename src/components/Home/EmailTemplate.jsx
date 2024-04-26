import { TbHexagonNumber2 } from "react-icons/tb"
import ConvertToPSDImage2 from '../../assets/EmailTemplatesDevelopment.png'

const EmailTemplate = () => {
  return (
    <div className=" bg-green-400" id="portfolio">
        <section className="max-w-6xl mx-auto px-3 py-36 text-white">
            <div className="flex flex-col gap-8 items-center md:flex-row md:justify-between">
                <div className="md:w-1/2 flex flex-col gap-8 md:order-2 ">
                    <TbHexagonNumber2 className="text-7xl"/>
                    <h2 className="text-4xl font-bold">Custom Responsive Email Template Development for ActiveCampaign</h2>
                    <p className="text-sm">
                        Craft engaging and responsive email campaigns with our tailored HTML email template 
                        development service for ActiveCampaign. Our expert team creates visually stunning and mobile-friendly email 
                        templates that ensure optimal deliverability and engagement for your marketing campaigns.
                    </p>
                </div>
                <div className="md:w-1/2 md:order-1 ">
                    <img src={ConvertToPSDImage2} alt="ConvertToPSD" className="bg-green-300 rounded-3xl"/>
                </div>
            </div>
        </section>
    </div>
  )
}

export default EmailTemplate