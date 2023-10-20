import Header from "./components/Header"
import TechSpecs from "./pages/TechSpecs"
import Home from "./pages/Home"
import Images from "./pages/Images"
import Features from "./pages/Features"
import Reviews from "./pages/Reviews"

function App() {

  return (
    <div>
      <div>
        <Header />
        <Home/>
        <Images/>
        <Features/>
        <TechSpecs/>
        <Reviews/>
      </div>
    </div>
  )
}

export default App
