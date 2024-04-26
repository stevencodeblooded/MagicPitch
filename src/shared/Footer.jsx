import { Link } from "react-router-dom"
import magicPitchLogo from '../assets/MagicPitchLogo.png'
import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { CiFacebook } from "react-icons/ci"
import { SiFiverr } from "react-icons/si"

const Footer = () => {
  return (
    <div>
        <section  className="max-w-6xl mx-auto px-3">
            <div className="flex flex-col gap-10 py-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
                    <div>
                        <Link to={'/'} className="flex items-center gap-1 cursor-pointer mb-6">
                            <img src={magicPitchLogo} alt="" className="w-8"/>
                            <h2 className="text-sm font-semibold">Otieno_develops</h2>
                        </Link>

                        <div className="flex flex-col gap-">
                            <p className="text-sm">You Dream, I Design and Deliver your Website with Brilliance</p>
                            <div className="flex items-center gap-2 text-sm">Otieno_develops at <a href="https://www.fiverr.com/otieno_develops/convert-figma-xd-psd-to-a-responsive-website-with-tailwind" target="_blank" rel="noopener noreferrer"><SiFiverr className="text-5xl text-green-500" /></a> </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-3">Platform</h2>
                        <ul className=" font-light text-sm flex flex-col gap-2">
                            <li><Link to={''} className="hover:underline">Contacts</Link></li>
                            <li><Link to={''} className="hover:underline">Terms of Service</Link></li>
                            <li><Link to={''} className="hover:underline">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-3">Solution</h2>
                        <ul className=" font-light text-sm flex flex-col gap-2">
                            <li><Link to={''} className="hover:underline">About Us</Link></li>
                            <li><Link to={''} className="hover:underline">Blog</Link></li>
                            <li><Link to={''} className="hover:underline">Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-3">Company</h2>
                        <ul className=" font-light text-sm flex flex-col gap-2">
                            <li><Link to={''} className="hover:underline">About Us</Link></li>
                            <li><Link to={''} className="hover:underline">Blog</Link></li>
                            <li><Link to={''} className="hover:underline">Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-3">Resources</h2>
                        <ul className=" font-light text-sm flex flex-col gap-2">
                            <li><Link to={''} className="hover:underline">Contacts</Link></li>
                            <li><Link to={''} className="hover:underline">Terms of Service</Link></li>
                            <li><Link to={''} className="hover:underline">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-xl"/>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter className="text-xl"/>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <CiFacebook className="text-xl"/>
                        </a>
                    </div>
                    <p className="text-sm">&copy; {new Date().getFullYear()} <span className="text-blue-700 font-semibold">Magicpitch</span> All Right Reversed</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer