import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profile1 from '../../assets/profile1.jpg'
import profile2 from '../../assets/profile2.jpg'
import profile3 from '../../assets/profile3.jpg'

const ClientsEnthusiasm = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 600, // Adjust as needed for your design
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 760, // Adjust as needed for your design
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };
  return (
    <div className=" overflow-hidden" id="testimonials">
        <section className="max-w-6xl mx-auto px-3 py-20">
            <div>
                <h1 className="mb-12 text-4xl lg:text-5xl font-bold text-center text-transparent bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text">Discover the Reasons Behind <br className="hidden md:block"/> Our Clients Enthusiasm</h1>
                <p className="text-center mb-10 font-semibold">Delve into the Great Experience: Client Testimonials </p>
                <div>
                    <Slider {...settings}>
                        <div className=" rounded-3xl bg-blue-100 p-6">
                            <div className=" flex flex-col gap-2">
                                <img src={profile1} alt="profile" className="w-12 h-12 rounded-full " />
                                <h4 className="text-lg text-green-900 font-semibold">Cleophas Brian</h4>
                                <h6 className="text-sm font-light text-gray-800">CEO at TechForward</h6>
                                <p className="text-xs font-extralight">
                                    "I'm extremely impressed with the level of professionalism and expertise demonstrated by Otieno_develops. They not only delivered a stunning website but also provided valuable insights and recommendations along the way."
                                </p>
                            </div>
                        </div>
                        <div className=" rounded-3xl bg-blue-100 p-6">
                            <div className=" flex flex-col gap-2">
                                <img src={profile2} alt="profile" className="w-12 h-12 rounded-full" />
                                <h4 className="text-lg text-green-900 font-semibold">Mary Mayers</h4>
                                <h6 className="text-sm font-light text-gray-800">Technical Assistant Techneed</h6>
                                <p className="text-xs font-extralight">
                                    "I approached Steven with a complex project, and they delivered outstanding results within the agreed timeline. Their communication throughout the process was exceptional, and I appreciate their dedication to ensuring client satisfaction."
                                </p>
                            </div>
                        </div>
                        <div className=" rounded-3xl bg-blue-100 p-6">
                            <div className=" flex flex-col gap-2">
                                <img src={profile3} alt="profile" className="w-12 h-12 rounded-full " />
                                <h4 className="text-lg text-green-900 font-semibold">Dickson Paul</h4>
                                <h6 className="text-sm font-light text-gray-800">Marketing Manager at SkyPulse</h6>
                                <p className="text-xs font-extralight">
                                    "Absolutely blown away by the professionalism and quality of work provided by Steven's Web Development Studio. 
                                    They exceeded all expectations and delivered a website that truly represents our brand. Highly recommend!"
                                </p>
                            </div>
                        </div>
                        <div className=" rounded-3xl bg-blue-100 p-6">
                            <div className=" flex flex-col gap-2">
                                <img src={profile1} alt="profile" className="w-12 h-12 rounded-full " />
                                <h4 className="text-lg text-green-900 font-semibold">Cleophas Brian</h4>
                                <h6 className="text-sm font-light text-gray-800">CEO at TechForward</h6>
                                <p className="text-xs font-extralight">
                                    "I'm extremely impressed with the level of professionalism and expertise demonstrated by Otieno_develops. They not only delivered a stunning website but also provided valuable insights and recommendations along the way."
                                </p>
                            </div>
                        </div>
                        <div className=" rounded-3xl bg-blue-100 p-6">
                            <div className=" flex flex-col gap-2">
                                <img src={profile2} alt="profile" className="w-12 h-12 rounded-full " />
                                <h4 className="text-lg text-green-900 font-semibold">Mary Mayers</h4>
                                <h6 className="text-sm font-light text-gray-800">Technical Assistant Techneed</h6>
                                <p className="text-xs font-extralight">
                                    "I approached Steven with a complex project, and they delivered outstanding results within the agreed timeline. Their communication throughout the process was exceptional, and I appreciate their dedication to ensuring client satisfaction."
                                </p>
                            </div>
                        </div>
                        <div className=" rounded-3xl bg-blue-100 p-6">
                            <div className=" flex flex-col gap-2">
                                <img src={profile3} alt="profile" className="w-12 h-12 rounded-full " />
                                <h4 className="text-lg text-green-900 font-semibold">Dickson Paul</h4>
                                <h6 className="text-sm font-light text-gray-800">Marketing Manager at SkyPulse</h6>
                                <p className="text-xs font-extralight">
                                    "Absolutely blown away by the professionalism and quality of work provided by Steven's Web Development Studio. 
                                    They exceeded all expectations and delivered a website that truly represents our brand. Highly recommend!"
                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ClientsEnthusiasm