import CallToAction from "../components/Home/CallToAction"
import ChromeExtensions from "../components/Home/ChromeExtensions"
import ClientsEnthusiasm from "../components/Home/ClientsEnthusiasm"
import ConvertToPSD from "../components/Home/ConvertToPSD"
import EmailTemplate from "../components/Home/EmailTemplate"
import FullStackDevelopment from "../components/Home/FullStackDevelopment"
import Hero from "../components/Home/Hero"
import Procedure from "../components/Home/Procedure"
import Rates from "../components/Home/Rates"

const HomeScreen = () => {
  return (
    <div>
        <Hero />
        <Rates />
        <ConvertToPSD />
        <EmailTemplate />
        <ChromeExtensions />
        <FullStackDevelopment />
        <Procedure />
        <ClientsEnthusiasm />
        <CallToAction />
    </div>
  )
}

export default HomeScreen