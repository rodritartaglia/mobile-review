import BurgerMenu from "./BurgerMenu"


function Header() {
  return (
    <header className="bg-[#191919] flex w-full justify-between text-white h-20 items-center border-b-2 border-[rgb(107,114,128)] sticky top-0 z-10">
      <h2 className="z-30">Moto <span className="font-medium text-primary">Edge</span></h2>
      <div className="flex items-center gap-5">
        <button className="bg-[#8e19fc] py-2 px-4 text-black rounded-full font-medium">Comprar</button>
        <BurgerMenu />
      </div>
    </header>
  )
}

export default Header