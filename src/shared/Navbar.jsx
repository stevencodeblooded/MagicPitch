import { Link, NavLink } from "react-router-dom"
import magicPitchLogo from '../assets/MagicPitchLogo.png' 
import { RiMenu2Fill } from "react-icons/ri"
import { useState } from "react"

const Navbar = () => {
    const [mobileLinks, setMobileLinks] = useState(false)
  return (
    <div>
        <section className="max-w-6xl mx-auto px-3 py-6">
            <div className="flex items-center justify-between font-semibold text-sm">
                <Link to={'/'} onClick={() => setMobileLinks(false)} className="flex items-center gap-1 cursor-pointer">
                    <img src={magicPitchLogo} alt="" className="w-8"/>
                    <h2>Otieno_develops</h2>
                </Link>

                <div className="md:hidden cursor-pointer">
                    <RiMenu2Fill onClick={() => setMobileLinks(!mobileLinks)}  className="text-2xl"/>
                </div>
                {mobileLinks && (
                    <ul className=" z-10 absolute left-0 top-20 flex flex-col gap-6 bg-blue-50 w-full px-3 py-6 md:hidden">
                        <li><a href={'#services'} onClick={() => setMobileLinks(false)} className={'px-5 py-2 hover:bg-blue-700 hover:text-white transition-all rounded-full'}>Services</a></li>
                        <li><a href={'#portfolio'} onClick={() => setMobileLinks(false)} className={'px-5 py-2 hover:bg-blue-700 hover:text-white transition-all rounded-full'}>Portfolio</a></li>
                        <li><a href={'#about'} onClick={() => setMobileLinks(false)} className={'px-5 py-2 hover:bg-blue-700 hover:text-white transition-all rounded-full'}>About</a></li>
                        <li><a href={'#testimonials'} onClick={() => setMobileLinks(false)} className={'px-5 py-2 hover:bg-blue-700 hover:text-white transition-all rounded-full'}>Testimonial</a></li>
                        <li><button onClick={() => setMobileLinks(false)} className=" md:hidden bg-blue-700 hover:bg-blue-800 transition-all px-5 py-2 rounded-full text-white">Get Started</button></li>
                    </ul>
                )}

                <ul className="hidden md:flex items-center gap-4"> 
                    <li><a href={'#services'} className={'px-5 py-3 rounded-full transition-all hover:bg-blue-200'}>Services</a></li>
                    <li><a href={'#portfolio'} className={'px-5 py-3 rounded-full transition-all hover:bg-blue-200'}>Portfolio</a></li>
                    <li><a href='#about' className={'px-5 py-3 rounded-full transition-all hover:bg-blue-200'}>About</a></li>
                    <li><a href={'#testimonials'} className={'px-5 py-3 rounded-full transition-all hover:bg-blue-200'}>Testimonials</a></li>
                </ul>
                <button className="hidden md:block bg-blue-700 hover:bg-blue-800 transition-all px-8 py-3 rounded-full text-white">Get Started</button>
            </div>
        </section>
    </div>
  )
}

export default Navbar