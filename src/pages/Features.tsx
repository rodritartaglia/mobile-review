import Battery from "./Battery"
import Camera from "./Camera"
import Design from "./Design"
import Screen from "./Screen"
import TechSpecs from "./TechSpecs"

function Features() {
  return (
    <div>
        <Design/>
        <Screen/>
        <TechSpecs/>
        <Camera/>
        <Battery/>
    </div>
  )
}

export default Features