import { useState } from "react"
import { IconX, IconMenu2 } from "@tabler/icons-react"
import Navbar from "./Navbar"

function BurgerMenu() {

    const [menu, setMenu] = useState(false)

    const toggleMenu = () => setMenu(!menu)

    return (
        <div className="h-10 w-10 flex items-center justify-center z-20">
            {menu ?
                <IconMenu2 width={'100%'} height={'100%'} onClick={toggleMenu} />
                :
                <IconX width={'100%'} height={'100%'} onClick={toggleMenu} />
            }
            {!menu &&
                <Navbar mobile={true}/>
            }
        </div>
    )
}

export default BurgerMenu