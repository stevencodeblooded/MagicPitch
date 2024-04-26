import { Accordion } from "@ark-ui/react"
import { CiStethoscope } from "react-icons/ci"
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from "react-icons/io"
import { MdDeveloperMode, MdFeedback } from "react-icons/md"
import { RiKakaoTalkFill } from "react-icons/ri"
import { TbTruckDelivery } from "react-icons/tb"
import procedure from '../../assets/procedure.jpg'

const Procedure = () => {
  return (
    <div id="about">
        <section className="max-w-6xl mx-auto px-3 py-36">
            <div>
                <h2 className="mb-12 text-5xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text">How it works</h2>
                <div className="lg:mx-10">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                        <Accordion.Root defaultValue={['Consultation']} collapsible className="flex flex-col gap-7 md:gap-3 lg:gap-7">
                            <Accordion.Item value="Consultation">
                                <Accordion.ItemTrigger className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-2">
                                        <RiKakaoTalkFill className="text-2xl text-blue-500" />
                                        <h3 className="text-xl font-bold text-center text-transparent bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text">Consultation</h3>
                                    </div>
                                    <Accordion.ItemIndicator>
                                        <IoIosArrowDropupCircle className="text-2xl text-green-500" />
                                    </Accordion.ItemIndicator>
                                </Accordion.ItemTrigger>
                                <Accordion.ItemContent>
                                    <div className="text-sm ml-8">Discuss your project requirements and goals with us to tailor a customized solution that meets your needs.</div>
                                </Accordion.ItemContent>
                            </Accordion.Item>

                            <Accordion.Item value="Propasal">
                                <Accordion.ItemTrigger className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-2">
                                        <CiStethoscope className="text-2xl text-blue-500" />
                                        <h3 className=" text-xl font-bold text-center text-transparent bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text">Propasal</h3>
                                    </div>
                                    <Accordion.ItemIndicator>
                                        <IoIosArrowDropdownCircle  className="text-2xl text-green-500"/>
                                    </Accordion.ItemIndicator>
                                </Accordion.ItemTrigger>
                                <Accordion.ItemContent>
                                <div className="text-sm ml-8">Receive a detailed proposal outlining the scope of work, timeline, and pricing for your project.</div>
                                </Accordion.ItemContent>
                            </Accordion.Item>

                            <Accordion.Item value="Development">
                                <Accordion.ItemTrigger className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-2">
                                        <MdDeveloperMode className="text-2xl text-blue-500" />
                                        <h3 className=" text-xl font-bold text-center text-transparent bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text">Development</h3>
                                    </div>
                                    <Accordion.ItemIndicator>
                                        <IoIosArrowDropdownCircle  className="text-2xl text-green-500"/>
                                    </Accordion.ItemIndicator>
                                </Accordion.ItemTrigger>
                                <Accordion.ItemContent>
                                <div className="text-sm ml-8">I begin crafting your website, ensuring every detail is implemented to perfection.</div>
                                </Accordion.ItemContent>
                            </Accordion.Item>

                            <Accordion.Item value="Feedback">
                                <Accordion.ItemTrigger className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-2">
                                        <MdFeedback className="text-2xl text-blue-500" />
                                        <h3 className=" text-xl font-bold text-center text-transparent bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text">Feedback</h3>
                                    </div>
                                    <Accordion.ItemIndicator>
                                        <IoIosArrowDropdownCircle  className="text-2xl text-green-500"/>
                                    </Accordion.ItemIndicator>
                                </Accordion.ItemTrigger>
                                <Accordion.ItemContent>
                                <div className="text-sm ml-8">Review the initial version of your website and provide feedback for any necessary revisions or adjustments.</div>
                                </Accordion.ItemContent>
                            </Accordion.Item>

                            <Accordion.Item value="Delivery">
                                <Accordion.ItemTrigger className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-2">
                                        <TbTruckDelivery className="text-2xl text-blue-500" />
                                        <h3 className=" text-xl font-bold text-center text-transparent bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text">Delivery</h3>
                                    </div>
                                    <Accordion.ItemIndicator>
                                        <IoIosArrowDropdownCircle  className="text-2xl text-green-500"/>
                                    </Accordion.ItemIndicator>
                                </Accordion.ItemTrigger>
                                <Accordion.ItemContent>
                                <div className="text-sm ml-8">Once satisfied with the final product, we deliver your completed website ready to launch and impress your audience.</div>
                                </Accordion.ItemContent>
                            </Accordion.Item>
                        </Accordion.Root>

                        <div>
                            <img src={procedure} alt="procedure" className="rounded-3xl" />
                        </div>
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Procedure