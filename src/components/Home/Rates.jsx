import { CiMail } from "react-icons/ci"
import { GoGraph } from "react-icons/go"
import { IoMailOpenOutline } from "react-icons/io5"
import { TbArrowBounce } from "react-icons/tb"

const Rates = () => {
  return (
    <div className="my-24">
        <section className="max-w-6xl mx-auto px-3">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <div className="bg-gray-100 hover:bg-gray-200 transition-all p-8 rounded-3xl flex flex-col gap-3 items-center">
                    <div className="bg-blue-500 p-2 w-fit rounded-md">
                        <CiMail className="text-3xl text-white" />
                    </div>
                    <h2 className="text-3xl font-semibold">98%</h2> 
                    <p className="text-sm">Delivery Rate</p>
                </div>
                <div className="bg-gray-100 hover:bg-gray-200 transition-all  p-8 rounded-3xl flex flex-col gap-3 items-center">
                    <div className="bg-green-500 p-2 w-fit rounded-md">
                        <IoMailOpenOutline className="text-3xl text-white" />
                    </div>
                    <h2 className="text-3xl font-semibold">70%</h2>
                    <p className="text-sm">Avg. Open Rate</p>  
                </div>
                <div className="bg-gray-100 hover:bg-gray-200 transition-all  p-8 rounded-3xl flex flex-col gap-3 items-center">
                    <div className="bg-blue-500 p-2 w-fit rounded-md">
                        <GoGraph className="text-3xl text-white" />
                    </div>
                    <h2 className="text-3xl font-semibold">3%</h2>
                    <p className="text-sm">Avg. Lead Rate</p>
                </div>
                <div className="bg-gray-100 hover:bg-gray-200 transition-all  p-8 rounded-3xl flex flex-col gap-3 items-center md:col-span-3 lg:col-span-1">
                    <div className="bg-green-500 p-2 w-fit rounded-md">
                        <TbArrowBounce className="text-3xl text-white"  />
                    </div>
                    <h2 className="text-3xl font-semibold">0.001%</h2>
                    <p className="text-sm">Bounce Rate</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Rates