import About from "./About"
import Footer from "./Footer"
import Interests from "./Interests"
import Personalinfo from "./Personalinfo"

export default function Card() {
    return (
        <div className="card">
            <Personalinfo />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}